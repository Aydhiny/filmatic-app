import React from "react";
import MenuItem from "./MenuItem";
import { GoHomeFill } from "react-icons/go";
import { RiFolderInfoFill } from "react-icons/ri";
import Link from "next/link";
import { PiFilmReel } from "react-icons/pi";

export default function Header() {
  return (
    <div className="flex justify-center fixed w-full z-50 items-center">
      <div
        className="flex mx-auto justify-between sticky
    items-center py-1 px-4 w-full bg-gradient-to-b from-white to-gray-100 dark:bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-900 border-b dark:border-zinc-700 dark:border-opacity-50 border-zinc-200"
      >
        <Link href="/">
          <h2 className="flex items-center text-2xl py-2">
            <PiFilmReel className="size-6 mr-2" />
            <span className="font-bold bg-gradient-to-b dark:from-zinc-100 dark:to-white from-zinc-500 to-zinc-600 bg-clip-text text-transparent rounded-full">
              Filmatic
            </span>
          </h2>
        </Link>
        <div className="flex items-center space-x-5">
          <MenuItem title="Home" address="/" Icon={GoHomeFill} />
          <MenuItem title="About" address="/about" Icon={RiFolderInfoFill} />
          <MenuItem title="Login" address="/login" Icon={RiFolderInfoFill} />
          <MenuItem
            title="Register"
            address="/register"
            Icon={RiFolderInfoFill}
          />
          {/*  <DarkModeSwitch />*/}
        </div>
      </div>
    </div>
  );
}
