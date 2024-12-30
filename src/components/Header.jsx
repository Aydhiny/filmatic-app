"use client";
import React, { useState } from "react";
import { GoHomeFill } from "react-icons/go";
import { RiFolderInfoFill } from "react-icons/ri";
import Link from "next/link";
import { PiFilmReel } from "react-icons/pi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-center fixed w-full z-50 items-center">
      <div
        className="flex mx-auto justify-between sticky
    items-center py-1 px-4 w-full bg-gradient-to-bl from-white to-gray-100 dark:bg-gradient-to-br dark:from-zinc-800 dark:to-zinc-900 border-b dark:border-zinc-700 dark:border-opacity-50 border-zinc-200"
      >
        <Link href="/">
          <h2 className="flex items-center text-2xl py-2">
            <PiFilmReel className="size-6 mr-2" />
            <span className="font-bold bg-gradient-to-b dark:from-zinc-100 dark:to-white from-zinc-500 to-zinc-600 bg-clip-text text-transparent rounded-full">
              Filmatic
            </span>
          </h2>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-5 absolute md:relative top-full left-0 w-full md:w-auto bg-zinc-900 md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none`}
        >
          <Link
            href="/"
            className="flex justify-center items-center space-x-2 text-base"
          >
            <GoHomeFill className="text-md md:hidden" />
            <span>Home</span>
          </Link>
          <Link
            href="/about"
            className="flex justify-center items-center space-x-2 text-base"
          >
            <RiFolderInfoFill className="text-md md:hidden" />
            <span>About</span>
          </Link>
          <Link
            href="/login"
            className="flex justify-center items-center space-x-2 text-base"
          >
            <IoLogIn className="text-md md:hidden" />
            <span>Login</span>
          </Link>
          <Link
            href="/register"
            className="flex justify-center items-center space-x-2 text-base"
          >
            <RiFolderInfoFill className="text-md md:hidden" />
            <span>Register</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
