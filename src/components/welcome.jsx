import React, { Suspense } from "react";
import Navbaritem from "./Navbaritem";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdMovieFilter } from "react-icons/md";
import { FaRegSmileBeam } from "react-icons/fa";

export default function Welcome() {
  return (
    <div
      className="flex flex-col xl:flex-row items-center justify-center min-h-screen w-full bg-cover bg-center bg-no-repeat pt-24 xl:pt-0 border-b border-zinc-700"
      style={{
        backgroundImage: "url('/images/background.jpg')",
      }}
    >
      {/* Main Content Section */}
      <div className="w-full max-w-7xl px-6 sm:px-10 md:px-16 xl:px-20 py-12 xl:py-24 flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-24">
        {/* Left Section */}
        <div className="flex-1 text-center xl:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-600 dark:text-zinc-200 flex flex-col xl:flex-row items-center gap-4">
            <MdMovieFilter className="text-4xl sm:text-5xl md:text-6xl text-purple-500" />
            <span>Welcome to Filmatic</span>
          </h1>

          <p className="mt-6 text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Discover a world of movies that will keep you on the edge of your
            seat. Whether you&apos;re in the mood for a thrilling action-packed
            adventure, a heartwarming drama, or a mind-bending sci-fi
            masterpiece, Filmatic has you covered.
          </p>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Our curated collections help you explore hidden gems, trending hits,
            and everything in between. Find your next favorite film with ease!
          </p>

          {/* Information Box */}
          <div className="mt-8 p-4 bg-zinc-200 dark:bg-purple-950 border border-purple-400 dark:border-zinc-700 rounded-lg shadow-sm hover:scale-105 transition-transform duration-300 cursor-pointer">
            <div className="flex items-center gap-2">
              <IoIosInformationCircleOutline className="text-2xl text-purple-500" />
              <p className="text-sm sm:text-base text-zinc-600 dark:text-purple-200">
                Press the trending or the top-rated button to filter movies.
              </p>
            </div>
          </div>

          {/* Buttons Section */}
          <Suspense fallback={<div>Loading...</div>}>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Navbaritem title="Trending" param="fetchTrending" />
              <Navbaritem title="Top Rated" param="fetchTopRated" />
            </div>
          </Suspense>
        </div>

        {/* Right Section */}
        <div className="flex-1 w-full max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-600 dark:text-zinc-200 mb-8">
            Why Choose Filmatic?
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed mb-8">
            Filmatic is more than just a movie platform. It&apos;s a community of
            film enthusiasts dedicated to discovering and sharing the love of
            cinema. Enjoy personalized recommendations, curated collections, and
            detailed reviews to help you make informed choices.
          </p>

          {/* Featured Movies Section */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-zinc-600 dark:text-zinc-200 mb-6">
              Featured Movies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Inception",
                  description: "A mind-bending journey through dreams.",
                },
                {
                  title: "The Godfather",
                  description: "An iconic crime drama masterpiece.",
                },
                {
                  title: "Interstellar",
                  description: "A breathtaking exploration of space and time.",
                },
              ].map((movie, index) => (
                <div
                  key={index}
                  className="p-6 bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <p className="text-lg font-semibold text-zinc-700 dark:text-zinc-200">
                    {movie.title}
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {movie.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-zinc-600 dark:text-zinc-200 mb-6">
              What Our Users Say
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  quote:
                    "Filmatic always helps me find the best movies. Love it!",
                  author: "Alex",
                },
                {
                  quote: "Great recommendations and easy to use!",
                  author: "Mia",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className="p-6 bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <FaRegSmileBeam className="text-3xl text-yellow-500 mb-4" />
                  <p className="text-sm text-zinc-600 dark:text-zinc-300">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">
                    - {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}