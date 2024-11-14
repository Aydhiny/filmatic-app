"use client";

import Link from "next/link";
import React from "react";

import { useSearchParams } from "next/navigation";

export default function Navbaritem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div>
      <Link
        className={`
            hover:text-purple-600 
            font-semibold p-2 mr-4 
            ${
              genre &&
              genre === param &&
              "underline underline-offset-8 decoration-4 decoration-purple-500 rouded-lg"
            }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
