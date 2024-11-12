"use client"

import React from 'react'
import { useEffect } from 'react'

export default function Error({ error, reset }) {
    useEffect(() => {
        console.log(error);
    }, [error]);

  return (
    <div className='text-center mt-10'>
        <h1>Something went wrong</h1>
        <button className='hover:text-black hover-transition hover:bg-white mt-10 px-5 py-2 bg-purple-600 rounded-lg' onClick={() =>reset()}>Try again</button>
    </div>
  )
}
