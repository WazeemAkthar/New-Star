'use client';

import React, { useState } from 'react';

const Navbar = () => {
    const [activeItem, setActiveItem] = useState('HOME');
    
  const menuItems = ['HOME', 'SNACKS', 'SWEETS', 'ABOUT US', 'CONTACT US'];


  return (
    <div className="w-full flex justify-center">
      <nav className="fixed top-0 mx-auto mt-4 px-11 py-5 bg-white/10 backdrop-blur-3xl rounded-lg border-2 border-white/20">
        <ul className="flex items-center space-x-16">
          {menuItems.map((item) => (
            <li 
              key={item}
              className={`text-white text-lg font-medium hover:text-yellow-300 transition-colors cursor-pointer ${activeItem === item ? 'text-yellow-300' : ''}`}
              onClick={() => setActiveItem(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;