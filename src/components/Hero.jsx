import { ArrowBigDown, ArrowDown, ArrowRight } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react'

const Hero = ({ onContactClick, onProjectClick }) => {

  return (
    <div className="px-4 sm:px-32 lg:px-24 xl:px-36 py-20 sm:py-32 lg:py-10 xl:py-7 relative flex flex-col gap-4 justify-start sm:justify-center items-start min-h-screen transition-all duration-300">

      <div className='bg-primary px-2 py-1  rounded-full mb-3 sm:mb-1'>
        <h2 className='text-white text-sm sm:text-xs font-semibold tracking-wide'>Full Stack Developer</h2>
      </div>

      <div className=" space-y-4">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-800">
          Hi, I'm <span className="text-primary ">Rudraraj Pandey</span>
        </h1>
        <p className="text-lg sm:text-medium lg:text-lg font-medium text-gray-700 max-w-xl">
          A passionate full-stack developer specializing in React, Next.js, and Node.js. Building elegant solutions for complex problems.
        </p>
      </div>
      <div className='flex flex-col sm:flex-row w-full'>
        <div className='flex flex-col sm:flex-row w-full sm:w-1/2 gap-3'>
          <button onClick={onContactClick} className='flex justify-center items-center gap-2 rounded-xl text-sm cursor-pointer bg-primary text-white px-10 py-2.5'>Get in touch <ArrowRight className='w-4 h-4'/> </button>
          <button onClick={onProjectClick} className='flex justify-center items-center gap-2 border-2 rounded-xl text-sm cursor-pointer text-black px-10 py-2.5'>View Projects </button>
        </div>

        <ArrowDown onClick={onProjectClick} className='hidden sm:block text-primary w-10 h-10 animate-bounce cursor-pointer pl-4' />

      </div>
    </div>
  )
}

export default Hero
