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

        {/* Upload Section */}
        <div className="mt-6 flex justify-center gap-6">
          <Link
            href="/upload"
            className="w-full px-4 sm:w-auto bg-purple-600 border border-white border-opacity-30 text-white font-semibold py-3 rounded-lg text-center hover:bg-purple-700 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
          >
            <FaUpload className="text-lg" /> Upload a Film
          </Link>
          <Link
            href="/upload-trailer"
            className="w-full sm:w-auto bg-white border border-black border-opacity-25 text-black font-semibold py-3 px-4 rounded-lg text-center hover:bg-green-700 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
          >
            <FaFilm className="text-lg" /> Upload a Trailer
          </Link>
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
    </div>
  );
}
