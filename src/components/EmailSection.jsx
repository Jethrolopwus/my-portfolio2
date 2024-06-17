
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [data, setData] = useState({ email: "", subject: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const object = {
      email: data.email,
      subject: data.subject,
      message: data.message,
    };
    const JSONdata = JSON.stringify(object);
    const endpoint = "/api/hello";

    
    const options = {
  
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
    
      body: JSONdata,
    };

    try {
      const response = await fetch(endpoint, options);
      const resData = await response.json();
      if (response.status === 200) {
        console.log("Message sent successfully");
        setEmailSubmitted(true);
        // Clear the form after successful submission
        setData({ email: "", subject: "", message: "" });
      } else {
        console.log("Failed to send message", resData);
      }
    } catch (error) {
      console.error("An error occurred while sending the message", error);
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-12 py-24 gap-4 relative" id="contact">
      <div className="ml-8 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary-700 to-transparent rounded-full h-80 w-80 blur-lg z-0 absolute top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-10">
        <h4 className="text-4xl font-bold text-white my-2">Let&apos;s Connect</h4>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for opportunities. My inbox is always open.
          Whether you have a question or you want to say hi, I will try to get
          back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link
            href="https://github.com/Jethrolopwus"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-white w-10 h-10" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/jethro-lopwus-4b3285197/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white w-10 h-10" />
          </Link>
          <Link
            href="https://web.facebook.com/jethro.lopwus/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-white w-10 h-10" />
          </Link>
        </div>
      </div>
      <div className="z-10">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="bg-slate-300 border border-black placeholder-[#9CA2A9] text-white text-sm rounded-lg block w-full p-3"
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={data.subject}
              onChange={(e) => setData({ ...data, subject: e.target.value })}
              className="bg-slate-300 border border-black placeholder-[#9CA2A9] text-white text-sm rounded-lg block w-full p-3"
              placeholder="Enter your subject"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={data.message}
              onChange={(e) => setData({ ...data, message: e.target.value })}
              className="bg-slate-300 border border-black placeholder-[#9CA2A9] text-white text-sm rounded-lg block w-full p-3"
              placeholder="Please let us talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-2 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-green-600 text-sm mt-2">
              Email Sent Successfully
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
