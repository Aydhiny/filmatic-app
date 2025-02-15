import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCalendarDays, FaStar, FaClock, FaFilm } from "react-icons/fa6"; // Import icons

async function getMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US`
  );
  return await res.json();
}

export default async function MoviePage({ params }) {
  const movieId = await params.id;
  const movie = await getMovie(movieId);

  const imageUrl = movie.backdrop_path || movie.poster_path;
  const imageSrc = imageUrl
    ? `https://api.themoviedb.org/3/movie/${movieId}/images`
    : "/no-image.jpg";

  return (
    <div
     className="flex flex-col w-full min-h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/background.jpg')",
      }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center bg-purple-700 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
          >
            &lt; Back to Home
          </Link>
        </div>

        {/* Movie Details Section */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image Section */}
          <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3">
            <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src={imageSrc}
                alt={movie.title || movie.name}
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }} 
                placeholder="blur"
                blurDataURL="/spinner.svg"
              />
              {!imageUrl && (
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-700 text-zinc-400">
                  <span className="text-lg">No Image Available</span>
                </div>
              )}
            </div>
          </div>

          {/* Details Section */}
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              {movie.title || movie.name}
            </h1>

            {/* Overview */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-purple-400 mb-3">
                Overview
              </h2>
              <p className="text-lg text-zinc-300 leading-relaxed">
                {movie.overview || "No overview available."}
              </p>
            </div>

            {/* Additional Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Release Date */}
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-2 flex items-center gap-2">
                  <FaCalendarDays className="text-purple-500" /> Release Date
                </h3>
                <p className="text-lg text-zinc-300">
                  {movie.release_date || movie.first_air_date || "N/A"}
                </p>
              </div>

              {/* Rating */}
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-2 flex items-center gap-2">
                  <FaStar className="text-yellow-400" /> Rating
                </h3>
                <p className="text-lg text-zinc-300">
                  {movie.vote_average} / 10 ({movie.vote_count} votes)
                </p>
              </div>

              {/* Genres */}
              {movie.genres && movie.genres.length > 0 && (
                <div className="sm:col-span-2">
                  <h3 className="text-xl font-semibold text-purple-400 mb-2 flex items-center gap-2">
                    <FaFilm className="text-purple-500" /> Genres
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {movie.genres.map((genre) => (
                      <span
                        key={genre.id}
                        className="px-3 py-1 bg-purple-700 text-white rounded-full text-sm hover:bg-purple-600 transition-colors duration-300"
                      >
                        {genre.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Runtime */}
              {movie.runtime && (
                <div>
                  <h3 className="text-xl font-semibold text-purple-400 mb-2 flex items-center gap-2">
                    <FaClock className="text-purple-500" /> Runtime
                  </h3>
                  <p className="text-lg text-zinc-300">
                    {movie.runtime} minutes
                  </p>
              </div>
              )}

              {/* Production Companies */}
              {movie.production_companies &&
                movie.production_companies.length > 0 && (
                  <div className="sm:col-span-2">
                    <h3 className="text-xl font-semibold text-purple-400 mb-2">
                      Production Companies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {movie.production_companies.map((company) => (
                        <span
                          key={company.id}
                          className="px-3 py-1 bg-zinc-700 text-white rounded-full text-sm hover:bg-zinc-600 transition-colors duration-300"
                        >
                          {company.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}