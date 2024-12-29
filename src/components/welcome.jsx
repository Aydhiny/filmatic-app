import React, { Suspense } from "react";
import Navbaritem from "./Navbaritem";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdMovieFilter } from "react-icons/md";

export default function Welcome() {
  return (
    <div
      className="flex flex-col h-screen bg-opacity-0 dark:bg-opacity-100 xl:flex-row items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/background.jpg')",
      }}
    >
      <div className="text-center px-6 sm:px-10 md:px-16 xl:text-left items-center justify-center max-w-screen-sm xl:max-w-none">
        <h1 className="text-3xl sm:text-4xl flex flex-col xl:flex-row items-center md:text-5xl font-bold">
          <MdMovieFilter className="text-2xl sm:text-3xl md:text-4xl mr-2 sm:mr-4" />
          <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-600 dark:text-zinc-200">
            Welcome to Filmatic
          </span>
        </h1>

        <div className="mt-4 md:mt-6 text-zinc-600 dark:text-zinc-300">
          <p className="text-sm sm:text-base md:text-lg mt-4 leading-relaxed font-light">
            Discover a world of movies that will keep you on the edge of your
            seat. Whether you&apos;re in the mood for a thrilling action-packed
            adventure, a heartwarming drama, or a mind-bending sci-fi
            masterpiece, Filmatic has you covered.
          </p>

          <p className="text-sm sm:text-base md:text-lg mt-4 leading-relaxed font-light">
            Our curated collections help you explore hidden gems, trending hits,
            and everything in between. Find your next favorite film with ease!
          </p>
        </div>

        <div className="p-3 md:p-4 flex w-full sm:w-fit items-center cursor-pointer hover:rotate-1 bg-zinc-200 dark:bg-zinc-800 transition-all duration-300 transform hover:scale-105 my-6 md:my-8 border border-zinc-400 dark:border-zinc-700">
          <IoIosInformationCircleOutline className="text-lg sm:text-xl md:text-2xl mr-2" />
          <p className="text-xs sm:text-sm md:text-md">
            <span className="text-zinc-600 dark:text-zinc-200">
              Press the trending or the top rated button to filter movies.
            </span>
          </p>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full sm:w-fit">
            <Navbaritem title="Trending" param="fetchTrending" />
            <Navbaritem title="Top Rated" param="fetchTopRated" />
          </div>
        </Suspense>
      </div>
    </div>
  );
}
