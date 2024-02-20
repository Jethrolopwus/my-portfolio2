/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react'
import Image from 'next/image';
import hero from "@/app/images/jethro.png";
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
  return (
    <section className="lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-12 ">
            <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
              <hi className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Hello, I'm {" "}
                </span>
                <br />
              <TypeAnimation
      sequence={[
      
        'Jethro Lopwus',
        1000, 
        'Web Developer',
        1000,
        'Mentor',
        1000,
        'Entrepreneur',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
              </hi> 
              <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">A front end developer with expertise in HTML, CSS, JavaScript, tailwindcss, typescript, React and Next Js.</p>
              <div>
                <button className="p-4 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white border" >Hire Me</button>
                <button className="p-1 mt-3 rounded-full w-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 sm:w-fit bg-transparent hover:bg-slate-800 text-white">
                  <span className="block bg-slate-500 hover:bg-slate-800 rounded-full py-5 px-2 ">Download CV</span>
                  </button>
              </div>
            </div>
                <div className="col-span-4 place-self-center mt-4 lg:mt-o">
                    <Image 
                    src={hero} alt='hero image' width={300} height={300} 
                    className=' border-2 border-slate-900 rounded-full '
                    />
                 
                </div>
        </div>

    </section>
  )
}

export default HeroSection