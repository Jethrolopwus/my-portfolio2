import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white mt-16">
      <div className="max-w-2xl mx-auto px-6 py-6 flex justify-between items-center text-sm text-gray-600">
        <span className="font-medium text-gray-800">Jethro Lopwus</span>
        <span>&copy; {new Date().getFullYear()} All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;