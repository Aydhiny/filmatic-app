"use client"
import React, { useState } from "react";
import Card from "./Card";

export default function Results({ results }) {
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 10;

  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage;
  const currentResults = results.slice(indexOfFirstResult, indexOfLastResult);

  const totalPages = Math.ceil(results.length / resultsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="max-w-full mx-12 py-4">
      <div
        id="results"
        className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4"
      >
        {currentResults.map((result) => (
          <Card key={result.id} result={result} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center border-opacity-50 items-center p-8 space-x-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-zinc-800 text-white rounded-sm disabled:opacity-50"
        >
          Previous
        </button>

        <span className="text-lg font-semibold">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-zinc-800 text-white rounded-sm disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
