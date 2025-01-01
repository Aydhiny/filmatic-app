import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getMovie(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US`
  );
  return await res.json();
}

export default async function MoviePage({ params }) {
  const movieId = await params.id;
  const movie = await getMovie(movieId);
  return (
    <div className="w-full h-full">
      <div className="p-4 md:pt-8 justify-center flex-col md:flex-row items-center content-center max-w-6xl mx-auto md:space-x-6">
        <div className="p-2">
          <h2 className="text-6xl mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              movie.backdrop_path || movie.poster_path
            }`}
            width={500}
            height={300}
            placeholder="blur"
            blurDataURL="/spinner.svg"
            alt="Movie poster"
            style={{
              maxWidth: "100%",
              height: "100%",
            }}
            className="rounded-lg border border-zinc-600 shadow-xl w-full mb-8 hover:opacity-50 cursor-pointer"
          ></Image>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1 text-purple-500">
              Overview:
            </span>{" "}
            <br />
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1 text-purple-500">
              Date Released:
            </span>{" "}
            <br />
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1 text-purple-500">Rating:</span>{" "}
            <br />
            {movie.vote_count}
          </p>
          <div className="mt-12">
            <Link
              className="bg-gradient-to-t rounded-full border border-violet-300 border-opacity-50 from-violet-600 to-violet-500 hover:from-zinc-800 hover:to-zinc-700 text-zinc-200 font-bold text-center py-2 px-6 transition-all duration-300"
              href="/"
            >
              ← Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
