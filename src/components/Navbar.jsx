import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ( { onContactClick, onProjectClick, onSkillsClick, onAboutMeClick } ) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed z-50 w-full backdrop-blur-2xl shadow-md">
      <div className="flex justify-between items-center py-3 px-4 sm:px-20 xl:px-32">
        
        {/* Logo */}
        <img
          src="logo.png"
          alt="logo"
          className="w-24 sm:w-44 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-4 sm:gap-8 text-sm sm:text-base text-black font-bold">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-red-800 transition-all duration-200 cursor-pointer">Home</button>
          <button onClick={onAboutMeClick} className="hover:text-red-800 transition-all duration-200 cursor-pointer">About Me</button>
          <button onClick={onProjectClick} className="hover:text-red-800 transition-all duration-200 cursor-pointer">Projects</button>
          <button onClick={onSkillsClick} className="hover:text-red-800 transition-all duration-200 cursor-pointer">Skills</button>
          <button onClick={onContactClick} className="hover:text-red-800 transition-all duration-200 cursor-pointer">Contact Me</button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-start gap-4 px-6 pb-4 text-gray-800 font-medium bg-white/80 backdrop-blur">
          <button className="w-full text-left hover:text-red-800 cursor-pointer">Home</button>
          <button className="w-full text-left hover:text-red-800 cursor-pointer">About Me</button>
          <button className="w-full text-left hover:text-red-800 cursor-pointer">Projects</button>
          <button className="w-full text-left hover:text-red-800 cursor-pointer">Skills</button>
          <button className="w-full text-left hover:text-red-800 cursor-pointer">Contact Me</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
