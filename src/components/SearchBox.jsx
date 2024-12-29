"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoIosSearch } from "react-icons/io";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  }

  return (
    <div>
      <p className="px-5 mt-12 mx-8 text-2xl font-bold">Movie Search </p>
      <p className="px-5 mx-8 text-lg font-light">
        Search your favourite movies by using our search bar.{" "}
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex bg-white justify-between items-center light:bg-gray-300 px-5 mt-4 mx-12 border border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 shadow-sm"
      >
        <IoIosSearch className="mr-2 size-6" />

        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search..."
          className="w-full h-14 rounded-sm placeholder-gray-600 outline-none bg-transparent flex-1"
        />
        <button
          disabled={!search}
          type="submit"
          className="text-purple-600 disabled:text-gray-400"
        >
          Search
        </button>
      </form>
    </div>
  );
}
