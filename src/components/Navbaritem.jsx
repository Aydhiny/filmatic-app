"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function Navbaritem({ title, param }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  const handleClick = (e) => {
    e.preventDefault(); 

    router.push(`/?genre=${param}`, { scroll: false });

    const resultsSection = document.getElementById("results");
    if (resultsSection) {
      resultsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={`hover:text-purple-600 transition-all duration-150
            font-semibold p-2 mr-4 
            ${
              genre === param
                ? "underline underline-offset-8 decoration-4 decoration-purple-500 rounded-sm"
                : ""
            }`}
      >
        {title}
      </button>
    </div>
  );
}
