import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-white border-b border-gray-200">
            <div className="max-w-2xl mx-auto px-6 py-3">
                <Link href="/" className="text-sm text-gray-700 hover:text-gray-900 font-normal">
                    Jethro Lopwus personal website
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
