import React, { Suspense } from "react";
import Navbaritem from "./Navbaritem";

export default function Navbar() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex justify-center dark:bg-zinc-800 bg-purple-100 lg:text-lg p-4">
        <Navbaritem title="Trending" param="fetchTrending" />
        <Navbaritem title="Top Rated" param="fetchTopRated" />
      </div>
    </Suspense>
  );
}
