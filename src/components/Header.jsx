import React from 'react'
import MenuItem from './MenuItem'
import { GoHomeFill } from "react-icons/go";
import { RiFolderInfoFill } from "react-icons/ri";
import Link from 'next/link';

export default function Header() {
  return (
    <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto
    items-center py-6'>
        
        <div className="flex">
            <MenuItem title="HOME" address="/" Icon={GoHomeFill}/>
            <MenuItem title="ABOUT" address="/about" Icon={RiFolderInfoFill}/>
        </div>
        <div className="">
            <Link href="/">
            <h2 className='text-2xl'><span 
            className='font-bold 
            bg-purple-500 py-1 px-2 rounded-lg mr-1'>Filmatic</span><span className='text-xl hidden sm:inline'> 1.0</span></h2>
            </Link>

        </div>
    </div>
  )
}