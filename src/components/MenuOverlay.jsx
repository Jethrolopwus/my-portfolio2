import React from 'react';
import NavLink from './NavLink';

const MenuOverlay = ({ links, onLinkClick }) => {
  return (
      <div className="fixed inset-0 z-20 flex flex-col items-center justify-center bg-[#110511] bg-opacity-90">
          <ul className="space-y-8 text-center">
              {links.map((link, index) => (
                  <li key={index} onClick={() => onLinkClick(link.path)} className="text-2xl text-white cursor-pointer">
                      {link.title}
                  </li>
              ))}
          </ul>
      </div>
  );
};

export default MenuOverlay;

