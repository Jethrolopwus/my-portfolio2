/* eslint-disable react/no-unescaped-entities */
"use client";
import React, {useState} from 'react';
import Image from "next/image";
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handlesubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        // Form the request for sending  data to server 
        const options = {
            // POST method because we are sending the data 
            method: 'POST',
            // tell the server we aare sending a JSON 
            headers: {
                'content-type': 'application/json',
            },
            // body of the request which is the JSONdata we created above 
            body: JSONdata,
        }
        const response = await fetch(endpoint, options);
        const resData = await response.json();
        // console.log(resData);
        if(response.status === 200) {
            console.log("message sent successfull");
            setEmailSubmitted(true);
        }
    } 

  return (
    
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
        <div className=" ml-8 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80  blur-lg z-0 absolute top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="z-10">
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
            <form className="flex flex-col gap-6" onSubmit={handlesubmit}>
                <div className="mb-6">
                <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Your Email</label>
                <input type="email" id="email" name="email" className="bg-slate-300 border border-black placeholder-[#9CA2A9] text-white text-sm rounded-lg block w-full p-3" required placeholder="Enter your email" />
                </div>
                <div className="mb-6">
                <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">Subject</label>
                <input type="text" id="subject" name="subject" className="bg-slate-300 border border-black placeholder-[#9CA2A9] text-white text-sm rounded-lg block w-full p-3"  placeholder="Enter your subject" />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">Message</label>
                    <textarea name="message" id="message" className="bg-slate-300 border border-black placeholder-[#9CA2A9] text-white text-sm rounded-lg block w-full p-3" placeholder=" please let us talk about..." />
            
                </div>
                <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2 px-5 rounded-lg w-full">Send Message</button>
                {/* we show success messag if email is send  */}
                {
                    emailSubmitted &&(
                        <p className="text-green-600 text-sm mt-2">Email Send Successfully</p>
                    )

                }
            </form>
        </div>
    </section>
  )
}

export default EmailSection