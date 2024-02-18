/* eslint-disable react/no-unescaped-entities */
"use client";
import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
        <div className=''>
            <h4 className="text-xl font-bold text-white my-2">Let's Connect</h4>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
                {" "}
                 I'm currently looking for opportunities, My inbox is always open.
                 wether you have a question or you want to say hi, I will try to get back to you!
                 </p>
                 <div className='socials flex flex-row gap-2'>
                    <Link href="github.com">
                        <FaGithub className=" text-white w-10 h-10"/>
                    </Link>
                    <Link href="linkedin.com">
                        <FaLinkedin className='text-white w-10 h-10'/> 
                    </Link>
                 </div>
        </div>
        <div>
            <form className="flex flex-col gap-4">
                <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Your Email</label>
                <input type="email" id="email" className=" border " required placeholder="Enter your email" />
            </form>
        </div>
    </section>
  )
}

export default EmailSection