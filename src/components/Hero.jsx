import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

const Hero = () => {
    return (
        <>
            <div className='w-full xl:h-[70vh] lg:h-[70vh] md:h-[70vh] sm:h-[60vh] h-auto py-4 bg-[#FFEAC5] flex flex-col gap-8 justify-center items-center'>

                <h1 className='xl:text-8xl lg:text-8xl md:text-8xl sm:text-7xl text-6xl font-extrabold  text-center'>Create Perfect Captions Instantly</h1>
                <p className='xl:text-xl lg:text-xl md:text-xl sm:text-lg text-md font-bold text-center'>Tailor captions effortlessly for any category, mood, or social media platform to elevate your posts.</p>
                <button className='p-2 bg-black text-white rounded-md flex gap-2 items-center justify-center'>
                    Genrate Captions
                    <FaCheckCircle className='text-green-500' />
                </button>

            </div>
        </>
    )
}

export default Hero
