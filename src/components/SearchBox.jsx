"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoIosSearch } from "react-icons/io";
import { FaFilm, FaTimes } from "react-icons/fa"; 

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  }

  function clearSearch() {
    setSearch("");
  }

  return (
    <div id="search" className="w-fit mx-auto px-4 py-8"> 
      <div className="flex items-center justify-center my-6"> 
        <FaFilm className="text-purple-500 mr-2 text-3xl" />
        <div>
          <p className="text-3xl font-bold text-center sm:text-4xl">Movie Search</p>
          <p className="text-lg font-light text-center sm:text-xl">
            Search your favorite movies.
          </p>
        </div>
      </div>


      <form
        onSubmit={handleSubmit}
        className="relative flex items-center bg-white rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 px-8 py-2"
      >
        <IoIosSearch className="text-gray-500 mr-2 size-6" />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search..."
          className="w-full h-full rounded-sm placeholder-gray-600 outline-none bg-transparent flex-1 dark:text-white"
        />

        {search && (
          <button
            type="button"
            onClick={clearSearch}
            className="absolute right-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-400"
          >
            <FaTimes className="size-4" />
          </button>
        )}

        <button
          disabled={!search}
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-4 rounded-md disabled:bg-gray-300 disabled:text-gray-500 ml-2 sm:ml-4" 
        >
          Search
        </button>
      </form>
    </div>
  );
}