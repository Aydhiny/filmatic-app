import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp, FiCalendar, FiInfo } from "react-icons/fi"; 

export default function Card({ result }) {
  const imageSrc = result.backdrop_path || result.poster_path;

  return (
    <div
      className="sm:p-3 bg-zinc-800 sm:hover:shadow-slate-950 sm:shadow-md 
      rounded-lg transition-shadow duration-200 m-4 p-4 group flex flex-col min-h-[450px] relative"
    >
      <div className="relative h-[250px] w-full rounded-lg overflow-hidden border border-zinc-700 group-hover:opacity-80 transition-opacity duration-200"> {/* Container for image/placeholder */}
        {imageSrc ? (
          <Image
            src={`https://image.tmdb.org/t/p/original/${imageSrc}`}
            alt={result.title || result.name || "Movie Poster"}
            fill
            sizes="100%"
            style={{ objectFit: "cover" }}
            placeholder="blur"
            blurDataURL="/spinner.svg"
            className="rounded-lg"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-700 text-zinc-400">
            <FiInfo className="h-12 w-12" /> {/* Placeholder Icon */}
            <span className="ml-2 text-lg">No Image Available</span>
          </div>
        )}
      </div>

      <div className="p-2 flex flex-col flex-grow">
        <h2 className="truncate my-4 text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-200">
          {result.title || result.name}
        </h2>

        <p className="line-clamp-3 text-md text-zinc-400 flex-grow">{result.overview || "No overview available"}</p> {/* Handle missing overview */}

        <div className="flex justify-between items-center mt-4 text-zinc-400">
          <div className="flex items-center">
            <FiCalendar className="h-5 mr-2" />
            {result.release_date || result.first_air_date || "N/A"}
          </div>
          <div className="flex items-center">
            <FiThumbsUp className="h-5 mr-2" />
            {result.vote_count || 0} {/* Handle missing vote count */}
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <Link
            className="bg-purple-700 rounded-sm hover:bg-white hover:text-black text-zinc-200 font-bold text-center py-2 px-6 transition-all duration-300"
            href={`/movie/${result.id}`}
          >
            Watch
          </Link>
          <Link
            className="rounded-sm bg-zinc-700 hover:bg-white hover:text-black font-bold text-center py-2 px-6 transition-all duration-300"
            href={`/movie/${result.id}`}
          >
            Info
          </Link>
        </div>
      </div>
    </div>
  );
}