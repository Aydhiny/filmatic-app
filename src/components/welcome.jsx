import React from "react";
import Navbaritem from "./Navbaritem";
export default function welcome() {
  return (
    <div className="m-16 flex justify-around">
      {/*VIDEO GOES HERE */}
      <video
        className="h-1/2 w-1/2 rounded-lg shadow-lg hidden sm:block"
        controls
        autoPlay
        loop
        muted
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="ml-8">
        <h1 class="text-5xl font-bold text-purple-500">
          <span className="text-6xl font-extrabold text-purple-500 animate-pulse bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient">
            Welcome to Filmatic
          </span>
        </h1>
        <div className="mt-4">
          <p className="text-lg mt-5 leading-relaxed font-medium">
            Discover a world of movies that will keep you on the edge of your
            seat. Whether you&apos;re in the mood for a thrilling action-packed
            adventure, a heartwarming drama, or a mind-bending sci-fi
            masterpiece, Filmatic has you covered.
          </p>

          <p className="text-lg mt-4 leading-relaxed font-medium">
            Our curated collections help you explore hidden gems, trending hits,
            and everything in between. Find your next favorite film with ease!
          </p>

          <p className="text-md mt-4 text-purple-600 font-semibold hover:text-purple-800 transition-all duration-300 transform hover:scale-105">
            <span className="text-lg text-pink-400">
              Join the Filmatic community now and let the cinematic journey
              begin!
            </span>
          </p>
        </div>
        <div className="flex mt-32">
          <Navbaritem title="Trending" param="fetchTrending" />
          <Navbaritem title="Top Rated" param="fetchTopRated" />
        </div>
      </div>
    </div>
  );
}
