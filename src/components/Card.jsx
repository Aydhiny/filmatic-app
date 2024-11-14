import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";
export default function Card({ result }) {
  return (
    <div
      className="sm:p-3 sm:hover:shadow-slate-950 sm:shadow-md 
  rounded-lg sm:border sm:border-s-slate-700 sm:m-2 border-slate-700 transition-shadow duration-200 m-4 p-4 group"
    >
      <Image
        src={`https://image.tmdb.org/t/p/original/${
          result.backdrop_path || result.poster_path
        }`}
        width={500}
        height={300}
        placeholder="blur"
        blurDataURL="/spinner.svg"
        alt="image is not found"
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
        className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
      ></Image>
      <div className="p-2">
        <h2 className="truncate my-4 text-lg font-bold">
          {result.title || result.name}
        </h2>
        <p className="line-clamp-2 text-md">{result.overview}</p>
        <div className="flex justify-between">
          <p className="my-4 flex items-center">
            {result.release_date || result.first_air_date}
          </p>
          <div className="">
            <p>
              {" "}
              <FiThumbsUp className="h-5" />
              {result.vote_count}
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <Link
            className="rounded-xl bg-purple-500 hover:bg-white text-gray-950 font-bold text-center py-2 px-6 transition-colors duration-300"
            href={`/movie/${result.id}`}
          >
            Watch
          </Link>
          <Link
            className="rounded-xl bg-gray-700 hover:bg-slate-950 hover:text-purple-500 text-white font-bold text-center py-2 px-6 transition-colors duration-300"
            href={`/movie/${result.id}`}
          >
            Info
          </Link>
        </div>
      </div>
    </div>
  );
}
