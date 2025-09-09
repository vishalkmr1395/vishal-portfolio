import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('');
  const location = useLocation();

  const navItems = [
    { id: 'work', label: 'My Work', href: location.pathname === '/blogs' ? '/' : '#work' },
    { id: 'exp', label: 'Experience', href: location.pathname === '/blogs' ? '/' : '#rewards' },
    { id: 'edu', label: 'Education & Technical Skills ', href: location.pathname === '/blogs' ? '/' : '#education' },
    { id: 'blogs', label: 'Blogs', href: '/blogs' }
  ];

 const handleNavClick = (id) => {
  setActiveItem(id);

  // Scroll to the section
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

  return (
    <div className="bg-transparent text-white">
      <nav className="relative bg-transparent px-6 md:px-10 h-16 md:h-18 flex items-center justify-between overflow-hidden">
        {/* Top border gradient */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        
        {/* Logo */}
        {/* <a 
          href="/" 
          className="text-xl md:text-2xl font-bold text-white no-underline tracking-tight transition-all duration-300 hover:-translate-y-px hover:text-yellow-400 hover:drop-shadow-lg"
          style={{ textShadow: '0 0 10px rgba(255, 215, 0, 0.3)' }}
        >
          vishal
          <span 
            className="text-yellow-400"
            style={{ textShadow: '0 0 10px rgba(255, 215, 0, 0.3)' }}
          >
            KUMAR
          </span>
          .
        </a> */}
        <div></div>
        
        {/* Navigation Links */}
        <ul className="flex items-center gap-6 md:gap-10 list-none">
          {navItems.map((item) => (
            <li key={item.id} className="relative group">
              <a
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                className={`relative no-underline text-sm md:text-base font-medium py-3 transition-all duration-300 ease-out tracking-wide ${
                  activeItem === item.id 
                    ? 'text-yellow-400' 
                    : 'text-gray-300 hover:text-white hover:-translate-y-0.5'
                }`}
              >
                {item.label}
                {/* Hover/Active underline */}
                <span 
                  className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-yellow-400 to-yellow-300 transform -translate-x-1/2 transition-all duration-300 rounded-sm ${
                    activeItem === item.id 
                      ? 'w-full' 
                      : 'w-0 group-hover:w-full'
                  }`}
                ></span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;