import React, { Suspense } from "react";
import Navbaritem from "./Navbaritem";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdMovieFilter } from "react-icons/md";
import { FaRegSmileBeam } from "react-icons/fa";

export default function Welcome() {
  return (
    <div
      className="flex xl:pt-0 pt-24 flex-col border-b border-zinc-700 h-full xl:h-screen bg-opacity-0 dark:bg-opacity-100 xl:flex-row items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/background.jpg')",
      }}
    >
      {/* Main Section */}
      <div className="text-center px-6 sm:px-10 md:px-16 xl:text-left items-center justify-center max-w-screen-sm xl:max-w-none">
        <h1 className="text-3xl sm:text-4xl flex flex-col xl:flex-row items-center md:text-5xl font-bold">
          <MdMovieFilter className="text-2xl sm:text-3xl md:text-4xl mr-2 sm:mr-4" />
          <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-600 dark:text-zinc-200">
            Welcome to Filmatic
          </span>
        </h1>

        <div className="mt-4 md:mt-6 text-zinc-600 dark:text-zinc-300">
          <p className="text-sm sm:text-base md:text-lg mt-4 leading-relaxed font-medium">
            Discover a world of movies that will keep you on the edge of your
            seat. Whether you&apos;re in the mood for a thrilling action-packed
            adventure, a heartwarming drama, or a mind-bending sci-fi
            masterpiece, Filmatic has you covered.
          </p>

          <p className="text-sm sm:text-base md:text-lg mt-4 leading-relaxed font-medium">
            Our curated collections help you explore hidden gems, trending hits,
            and everything in between. Find your next favorite film with ease!
          </p>
        </div>

        {/* Information Section */}
        <div className="p-3 md:p-4 flex w-full sm:w-fit items-center cursor-pointer hover:rotate-1 bg-zinc-200 dark:bg-purple-950 transition-all duration-300 transform hover:scale-105 my-6 md:my-8 border border-purple-400 dark:border-zinc-700">
          <IoIosInformationCircleOutline className="text-lg sm:text-xl md:text-2xl mr-2" />
          <p className="text-xs sm:text-sm md:text-md">
            <span className="text-zinc-600 dark:text-purple-200">
              Press the trending or the top-rated button to filter movies.
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

      {/* Additional Content Section */}
      <div className="text-center px-6 sm:px-10 md:px-16 xl:text-left items-center justify-center mt-10 xl:mt-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-600 dark:text-zinc-200 mb-6">
          Why Choose Filmatic?
        </h2>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed font-medium text-zinc-600 dark:text-zinc-300">
          Filmatic is more than just a movie platform. It&apos;s a community of
          film enthusiasts dedicated to discovering and sharing the love of
          cinema. Enjoy personalized recommendations, curated collections, and
          detailed reviews to help you make informed choices.
        </p>

        <div className="mt-8">
          <h3 className="text-xl sm:text-2xl font-bold text-zinc-600 dark:text-zinc-200 mb-4">
            Featured Movies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 bg-zinc-200 border border-zinc-700 dark:bg-zinc-800 rounded shadow">
              <p className="font-semibold">Inception</p>
              <p className="text-sm">A mind-bending journey through dreams.</p>
            </div>
            <div className="p-4 bg-zinc-200 border border-zinc-700 dark:bg-zinc-800 rounded shadow">
              <p className="font-semibold">The Godfather</p>
              <p className="text-sm">An iconic crime drama masterpiece.</p>
            </div>
            <div className="p-4 bg-zinc-200 border border-zinc-700 dark:bg-zinc-800 rounded shadow">
              <p className="font-semibold">Interstellar</p>
              <p className="text-sm">
                A breathtaking exploration of space and time.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl sm:text-2xl font-bold text-zinc-600 dark:text-zinc-200 mb-4">
            What Our Users Say
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded shadow">
              <FaRegSmileBeam className="text-2xl mb-2 text-yellow-500" />
              <p className="text-sm">
                "Filmatic always helps me find the best movies. Love it!"
              </p>
              <p className="text-xs text-zinc-500">- Alex</p>
            </div>
            <div className="p-4 rounded shadow">
              <FaRegSmileBeam className="text-2xl mb-2 text-yellow-500" />
              <p className="text-sm">
                "Great recommendations and easy to use!"
              </p>
              <p className="text-xs text-zinc-500">- Mia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
