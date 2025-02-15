"use client";
import React, { useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { RiFolderInfoFill } from "react-icons/ri";
import Link from "next/link";
import { PiFilmReel } from "react-icons/pi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoLogIn, IoPersonAdd } from "react-icons/io5";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-center fixed w-full z-50 items-center">
      <div className="flex mx-auto justify-between sticky items-center py-2 px-4 w-full bg-gradient-to-tr from-white to-gray-100 dark:bg-gradient-to-br dark:from-zinc-800 dark:to-[#2912477a] backdrop-blur-md border-b dark:border-zinc-700 dark:border-opacity-50 border-zinc-200 dark:shadow-zinc-900">
        <div className="flex items-center">
          <Link href="/">
            <h2 className="flex items-center text-2xl py-2 hover:scale-105 transition-transform duration-300">
              <PiFilmReel className="size-6 mr-2 text-purple-500" />
              <span className="font-bold bg-gradient-to-b dark:from-zinc-100 dark:to-white from-zinc-500 to-zinc-600 bg-clip-text text-transparent rounded-full">
                Filmatic
              </span>
            </h2>
          </Link>
          <Link
            href="/about"
            className="hidden md:flex hover:text-purple-500 justify-center items-center mx-4 text-base transition-colors duration-300"
          >
            About
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none text-zinc-700 dark:text-zinc-300 hover:text-purple-500 transition-colors duration-300"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:hidden absolute top-full left-0 w-full bg-zinc-900 dark:bg-zinc-800 p-4 shadow-md rounded-lg transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-4">
            <Link
              href="/about"
              className="flex items-center space-x-2 text-base hover:text-purple-500 transition-colors duration-300"
            >
              <RiFolderInfoFill className="text-md" />
              <span>About</span>
            </Link>
            <Link
              href="/login"
              className="flex items-center space-x-2 text-base hover:text-purple-500 transition-colors duration-300"
            >
              <IoLogIn className="text-xl" />
              <span>Login</span>
            </Link>
            <Link
              href="/register"
              className="flex items-center space-x-2 text-base hover:text-purple-500 transition-colors duration-300"
            >
              <IoPersonAdd className="text-xl" />
              <span>Register</span>
            </Link>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/login"
            className="flex items-center space-x-2 text-base hover:text-purple-500 transition-colors duration-300"
          >
            <IoLogIn className="text-xl" />
            <span>Login</span>
          </Link>
          <Link
            href="/register"
            className="flex items-center space-x-2 text-base hover:text-purple-500 transition-colors duration-300"
          >
            <IoPersonAdd className="text-xl" />
            <span>Register</span>
          </Link>
        </div>
      </div>
    </div>
  );
}