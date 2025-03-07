'use client';
import React, { useState, useEffect } from 'react';
import { FaUserCircle, FaUpload, FaFilm, FaArrowLeft } from 'react-icons/fa';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const [films, setFilms] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [filmData, setFilmData] = useState({
    title: '',
    description: '',
    releaseYear: '',
    trailerUrl: '',
  });

  const [userData, setUserData] = useState({
    name: session?.user?.name || '',
    email: session?.user?.email || '',
  });

  const router = useRouter();

  useEffect(() => {
    if (status === 'authenticated' && session?.user) {
      fetchUserFilms();
    }
  }, [status, session]);

  const fetchUserFilms = async () => {
    try {
      const response = await fetch(`/api/user/films?userId=${session?.user.id}`);
      const data = await response.json();
      if (response.ok) {
        setFilms(data.films);
      } else {
        setErrorMessage(data.error || 'Failed to fetch films');
      }
    } catch (error) {
      console.error('Error fetching films:', error);
      setErrorMessage('Something went wrong');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilmData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUserInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmitFilm = async (event) => {
    event.preventDefault();

    if (!session?.user?.id) {
      setErrorMessage('User not authenticated.');
      return;
    }

    try {
      const response = await fetch('/api/user/films', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...filmData,
          userId: session.user.id,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to upload film');
      }

      const newFilm = await response.json();
      setFilms((prevFilms) => [...prevFilms, newFilm]);
      setFilmData({ title: '', description: '', releaseYear: '', trailerUrl: '' });
      setSuccessMessage('Film uploaded successfully');
      setErrorMessage('');
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error uploading film:', error);
      setErrorMessage('Error uploading film: ' + error.message);
    }
  };

  const handleSubmitUser = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/user/edit', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: session?.user.id,
          ...userData,
        }),
      });

      if (response.ok) {
        setSuccessMessage('User updated successfully!');
        setIsEditModalOpen(false);
      } else {
        setErrorMessage('Failed to update user');
      }
    } catch (error) {
      console.error('Error updating user:', error);
      setErrorMessage('Error updating user: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-950 flex items-center justify-center py-10 px-5 sm:px-8">
      <div className="w-full max-w-3xl bg-white border border-white border-opacity-20 dark:bg-zinc-800 rounded-lg shadow-xl p-8">
        {/* Back Button */}
        <div className="mb-6">
          <button onClick={() => router.push('/')} className="text-purple-600 dark:text-purple-400 flex items-center gap-2">
            <FaArrowLeft /> Back to Home
          </button>
        </div>

        {/* Profile Info */}
        <div className="text-center mb-6">
          <FaUserCircle className="text-6xl text-gray-700 dark:text-gray-400 mx-auto mb-4" />
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
            Welcome, {session?.user?.name || 'User'}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">{session?.user?.email}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Your personalized dashboard to manage your films.
          </p>
          <button onClick={() => setIsEditModalOpen(true)} className="mt-4 text-purple-600 dark:text-purple-400 font-semibold">Edit Profile</button>
        </div>

        {/* Films Section */}
        <div className="my-8 text-center">
          <div className="flex items-center mb-4 justify-center">
            <FaFilm className="size-8 mr-4 text-white" />
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-gray-100">Your Films</h2>
          </div>

          {errorMessage && <p className="text-red-600 text-sm mb-4">{errorMessage}</p>}
          {successMessage && <p className="text-green-600 text-sm mb-4">{successMessage}</p>}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {films.length === 0 ? (
              <div className="text-center text-sm col-span-full text-gray-500 dark:text-gray-400">
                No films found. Start uploading your films!
              </div>
            ) : (
              films.map((film) => (
                <div key={film.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{film.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {film.releaseYear ? `Released: ${film.releaseYear}` : 'No release year'}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {film.description || 'No description available.'}
                  </p>
                  {film.trailerUrl && (
                    <a href={film.trailerUrl} className="text-purple-600 dark:text-purple-400 mt-2 inline-block hover:text-purple-700 dark:hover:text-purple-300 transition-colors">
                      Watch Trailer
                    </a>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Upload Button */}
        <div className="mt-6 flex justify-center gap-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full px-4 sm:w-auto bg-purple-600 border border-white border-opacity-30 text-white font-semibold py-3 rounded-lg text-center hover:bg-purple-700 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
          >
            <FaUpload className="text-lg" /> Upload a Film
          </button>
        </div>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-gray-100 mb-4">Upload a New Film</h3>
            <form onSubmit={handleSubmitFilm}>
              {['title', 'description', 'releaseYear', 'trailerUrl'].map((field) => (
                <div key={field} className="mb-4">
                  <label className="block text-sm font-semibold text-zinc-700 dark:text-gray-200">{field.replace(/([A-Z])/g, ' $1').trim()}</label>
                  <input
                    type={field === 'releaseYear' ? 'number' : 'text'}
                    name={field}
                    value={filmData[field]}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 mt-2 bg-gray-100 dark:bg-zinc-900 text-gray-700 dark:text-gray-100 rounded-md"
                    required
                  />
                </div>
              ))}
              <div className="flex justify-between">
                <button type="button" onClick={() => setIsModalOpen(false)} className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">Cancel</button>
                <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-all duration-300">Upload</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit User Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-gray-100 mb-4">Edit Profile</h3>
            <form onSubmit={handleSubmitUser}>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-zinc-700 dark:text-gray-200">Name</label>
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleUserInputChange}
                  className="w-full px-4 py-2 mt-2 bg-gray-100 dark:bg-zinc-900 text-gray-700 dark:text-gray-100 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-zinc-700 dark:text-gray-200">Email</label>
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleUserInputChange}
                  className="w-full px-4 py-2 mt-2 bg-gray-100 dark:bg-zinc-900 text-gray-700 dark:text-gray-100 rounded-md"
                  required
                />
              </div>
              <div className="flex justify-between">
                <button type="button" onClick={() => setIsEditModalOpen(false)} className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">Cancel</button>
                <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-all duration-300">Save Changes</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
