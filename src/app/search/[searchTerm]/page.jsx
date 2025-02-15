import Footer from "@/components/footer";
import Results from "@/components/Results";
import SearchBox from "@/components/SearchBox";
import Link from "next/link";
import React from "react";

export default async function SearchPage({ params }) {
  const { searchTerm } = await params;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${
      process.env.API_KEY
    }&query=${encodeURIComponent(
      searchTerm || ""
    )}&language=en-US&include_adult=false`
  );

  if (!res.ok) {
    throw new Error("Error fetching data");
  }

  const data = await res.json();

  const results = data.results;
  return (
    <div className="mt-12">
     <Link
  className="bg-purple-700 mx-12 rounded-sm hover:bg-white hover:text-black text-zinc-200 font-bold text-center py-2 px-6 transition-all duration-300"
  href="/"
>
  &lt; Back
</Link>
      <SearchBox />
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results found.</h1>
      )}

      {results && <Results results={results} />}
      <Footer />
    </div>
  );
}
