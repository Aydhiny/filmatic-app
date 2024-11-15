"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-6xl mx-auto justify-between items-center dark:bg-zinc-800 light:bg-gray-300 px-5 rounded-full shadow-lg"
    >
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
  );
}
