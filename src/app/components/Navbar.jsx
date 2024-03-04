"use client";
import Link from 'next/link'
import React, {useState, useEffect} from 'react'
import NavLink from './NavLink';
import { MdOutlineClose } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import MenuOverlay from './MenuOverlay';


const NavLinks =[
    {
        title: "About",
        path: "about",
    },
    {
        title: "Projects",
        path: "projects",
    },
    {
        title: "Contact",
        path: "contact",
    }
]


const  Navbar = () => {
 
    const scrollToComponent = (id) => {
        if(typeof document !== "undefined"){
            
            const target = document.getElementById(id);
            if(target)

            target.scrollIntoView({ behavior: "smooth" });
        }
    
    };
    const [navbarOpen, setNavbaropen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 border border-white z-10 bg-[#110511] bg-opacity-80"> 
        <div className="flex flex-wrap lg:py-4 items-center justify-between mx-auto px-4  py-2 ">
            <Link href={"/"} className=" text-2xl md:text-5xl text-white font-semi-bold">
                LOGO
                </Link>
                <div className=' mobile-menu block md:hidden'>
                    {!navbarOpen ? ( <button
                     onClick={() => setNavbaropen(true)}
                      className=' flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'><FaBars className="h-5 w-5" /> </button> ) 
                    : (<button
                     onClick={() => setNavbaropen(false)}
                      className=' flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'><MdOutlineClose className="h-5 w-5" />  </button> )}
                </div>
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                {
                  NavLinks.map((link, index) =>(
                    <li key={index} onClick={scrollToComponent(link.path)} className="cursor-pointer">
                        <NavLink href={link.path} title={link.title} />
                    </li>
                  ))  
                }
                </ul>
            </div>
        </div>
        {navbarOpen ? <MenuOverlay links={NavLinks} /> : null}
    </nav>
  )
}

export default  Navbar;