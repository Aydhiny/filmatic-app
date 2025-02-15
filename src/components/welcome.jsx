"use client"
import React, { Suspense } from "react";
import Navbaritem from "./Navbaritem";
import { MdMovieFilter } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa"; 

export default function Welcome() {
  const scrollToSearch = () => {
    const searchElement = document.getElementById("search");
    if (searchElement) {
      searchElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen w-full bg-cover bg-center bg-no-repeat relative text-center px-6 sm:px-10"
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    >
      <div className="relative z-10 max-w-3xl text-white">
        <div className="flex flex-col items-center gap-4">
          <MdMovieFilter className="text-6xl text-purple-400" />
          <h1 className="text-4xl sm:text-5xl font-bold">Welcome to Filmatic</h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-300">
            Discover and explore the best movies curated just for you.
            Whether you love action, drama, or sci-fi, we've got something for everyone. <span className="text-purple-500">Login for more options.</span>
          </p>

          <Suspense fallback={<div>Loading...</div>}>
            <div className="mt-6 flex gap-4">
              <Navbaritem title="Trending" param="fetchTrending" />
              <Navbaritem title="Top Rated" param="fetchTopRated" />
            </div>
          </Suspense>

          <button
            onClick={scrollToSearch}
            className="mt-8 text-white hover:text-gray-300 transition duration-300"
            aria-label="Scroll to search" 
          >
            <FaChevronDown className="text-4xl animate-bounce" />
          </button>
        </div>
      </div>
    </div>
  );
}