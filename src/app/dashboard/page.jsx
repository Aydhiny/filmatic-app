'use client';
import React, { useState, useEffect } from 'react';
import { FaUserCircle, FaUpload, FaFilm } from 'react-icons/fa';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [films, setFilms] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filmData, setFilmData] = useState({
    title: '',
    description: '',
    releaseYear: '',
    trailerUrl: '',
  });

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

const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await fetch('/api/user/films', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: formData.title,
        description: formData.description,
        releaseYear: formData.releaseYear,
        trailerUrl: formData.trailerUrl,
        userId: session.user.id, 
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to upload film');
    }

    const newFilm = await response.json();
    setFilms((prevFilms) => [...prevFilms, newFilm]);
    setErrorMessage('');
  } catch (error) {
    console.error('Error uploading film:', error);
    setErrorMessage('Error uploading film: ' + error.message);
  }
};


  useEffect(() => {
    if (session?.user) {
      fetchUserFilms();
    }
  }, [session]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-950 flex items-center justify-center py-10 px-5 sm:px-8">
      <div className="w-full max-w-3xl bg-white border border-white border-opacity-20 dark:bg-zinc-800 rounded-lg shadow-xl p-8">
        {/* Profile Info */}
        <div className="text-center mb-6">
          <FaUserCircle className="text-6xl text-gray-700 dark:text-gray-400 mx-auto mb-4" />
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
            Welcome, {session?.user.name || 'User'}
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">{session?.user.email}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Your personalized dashboard to manage your films.
          </p>
        </div>

        {/* Films Section */}
        <div className="my-8 text-center">
          <div className='flex items-center mb-4 justify-center'>
            <FaFilm className='size-8 mr-4 text-white'/>
            <h2 className="text-2xl font-semibold text-zinc-800 dark:text-gray-100">
              Your Films
            </h2>
          </div>

          {errorMessage && (
            <p className="text-red-600 text-sm mb-4">{errorMessage}</p>
          )}

          {successMessage && (
            <p className="text-green-600 text-sm mb-4">{successMessage}</p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {films.length === 0 ? (
              <div className="text-center text-sm col-span-full text-gray-500 dark:text-gray-400">
                No films found. Start uploading your films!
              </div>
            ) : (
              films.map((film) => (
                <div
                  key={film.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:shadow-lg"
                >
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {film.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {film.releaseYear ? `Released: ${film.releaseYear}` : 'No release year'}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    {film.description || 'No description available.'}
                  </p>
                  {film.trailerUrl && (
                    <a
                      href={film.trailerUrl}
                      className="text-purple-600 dark:text-purple-400 mt-2 inline-block hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                    >
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

        {/* Edit Profile Button */}
        <div className="mt-8 text-center">
          <Link
            href="/profile/edit"
            className="text-purple-600 dark:text-purple-400 font-medium hover:text-white dark:hover:text-white transition-all duration-300"
          >
            Edit Profile
          </Link>
        </div>
      </div>

      {/* Back Button */}
      <Link
        href="/"
        className="mx-12 mt-12 bg-zinc-800 border border-white border-opacity-25 text-white rounded-md py-2 px-6 text-sm font-semibold text-center hover:bg-gray-700 dark:bg-zinc-800 dark:text-gray-300 hover:text-white transition-all duration-300"
      >
        &lt; Back
      </Link>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-semibold text-zinc-800 dark:text-gray-100 mb-4">
              Upload a New Film
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-zinc-700 dark:text-gray-200">Title</label>
                <input
                  type="text"
                  name="title"
                  value={filmData.title}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-2 bg-gray-100 dark:bg-zinc-900 text-gray-700 dark:text-gray-100 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-zinc-700 dark:text-gray-200">Description</label>
                <textarea
                  name="description"
                  value={filmData.description}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-2 bg-gray-100 dark:bg-zinc-900 text-gray-700 dark:text-gray-100 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-zinc-700 dark:text-gray-200">Release Year</label>
                <input
                  type="number"
                  name="releaseYear"
                  value={filmData.releaseYear}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-2 bg-gray-100 dark:bg-zinc-900 text-gray-700 dark:text-gray-100 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-zinc-700 dark:text-gray-200">Trailer URL</label>
                <input
                  type="url"
                  name="trailerUrl"
                  value={filmData.trailerUrl}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 mt-2 bg-gray-100 dark:bg-zinc-900 text-gray-700 dark:text-gray-100 rounded-md"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-all duration-300"
                >
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
