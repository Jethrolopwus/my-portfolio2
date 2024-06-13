"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import { MdOutlineClose } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import MenuOverlay from './MenuOverlay';

const NavLinks = [
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
];

const Navbar = () => {
    const scrollToComponent = (id) => {
        if (typeof document !== "undefined") {
            console.log(id);
            const target = document.getElementById(id);
            if (target)
                target.scrollIntoView({ behavior: "smooth" });
        }
    };

    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleNavLinkClick = (path) => {
        scrollToComponent(path);
        setNavbarOpen(false); // Close the menu after clicking on a link
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#110511] bg-opacity-80 border-b border-white">
            <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2 lg:py-4">
                <Link href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
                    LOGO
                </Link>
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button
                            onClick={() => setNavbarOpen(true)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                            <FaBars className="h-5 w-5" />
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                            <MdOutlineClose className="h-5 w-5" />
                        </button>
                    )}
                </div>
                <div className="hidden md:flex md:w-auto" id="navbar">
                    <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 md:p-0">
                        {NavLinks.map((link, index) => (
                            <li key={index} onClick={() => handleNavLinkClick(link.path)} className="cursor-pointer">
                                <NavLink href={`#${link.path}`} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen && <MenuOverlay links={NavLinks} onLinkClick={handleNavLinkClick} />}
        </nav>
    );
};

export default Navbar;
