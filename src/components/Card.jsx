import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";
export default function Card({ result }) {
  return (
    <div
      className="sm:p-3 bg-gradient-to-t from-zinc-900 to-zinc-800 sm:hover:shadow-slate-950 sm:shadow-md 
  rounded-lg transition-shadow duration-200 m-4 p-4 group"
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
        className="rounded-lg border border-zinc-700 group-hover:opacity-80 transition-opacity duration-200"
      ></Image>
      <div className="p-2">
        <h2 className="truncate my-4 text-2xl font-bold">
          {result.title || result.name}
        </h2>
        <p className="line-clamp-2 text-md">{result.overview}</p>
        <div className="flex justify-between">
          <p className="my-4 flex items-center">
            {result.release_date || result.first_air_date}
          </p>
          <p className="flex my-4">
            {" "}
            {result.vote_count}
            <FiThumbsUp className="h-5 ml-2" />
          </p>
        </div>
        <div className="flex justify-between">
          <Link
            className="bg-gradient-to-t rounded-full border border-violet-300 border-opacity-50 from-violet-600 to-violet-500 hover:from-zinc-800 hover:to-zinc-700 text-zinc-200 font-bold text-center py-2 px-6 transition-all duration-300"
            href={`/movie/${result.id}`}
          >
            Watch
          </Link>
          <Link
            className="rounded-full dark:bg-zinc-700 light:bg-gray-500 hover:bg-zinc-950 hover:text-violet-500 font-bold text-center py-2 px-6 transition-colors duration-300"
            href={`/movie/${result.id}`}
          >
            Info
          </Link>
        </div>
      </div>
    </div>
  );
}
