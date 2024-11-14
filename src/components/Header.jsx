import React from "react";
import MenuItem from "./MenuItem";
import { GoHomeFill } from "react-icons/go";
import { RiFolderInfoFill } from "react-icons/ri";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  return (
    <div className="flex justify-center items-center">
      <div
        className="flex 2 sm:mx-auto
    items-center py-4 px-4 m-6  dark:bg-zinc-800 rounded-full shadow-2xl"
      >
        <div className="flex">
          <MenuItem title="HOME" address="/" Icon={GoHomeFill} />
          <MenuItem title="ABOUT" address="/about" Icon={RiFolderInfoFill} />
        </div>
        <div className="flex items-center space-x-5">
          <DarkModeSwitch />
          <Link href="/">
            <h2 className="text-2xl dark:bg-zinc-900 light:bg-gray-100 p-2 pr-4 rounded-full">
              <span className="font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent py-1 px-6 rounded-full mr-1">
                Filmatic
              </span>
              <span className="text-xl font-extrabold hidden sm:inline">
                {" "}
                1.0
              </span>
            </h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
