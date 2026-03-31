import React from 'react';
import { Search, Globe, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const navLinks = [
    'PRODUCTS',
    'SPORT',
    'EXPLORE',
    'PARTNER WITH US',
    'ABOUT US'
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="relative w-10 h-10 flex flex-col items-center justify-center">
            <div className="absolute top-0 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-black group-hover:scale-110 transition-transform duration-300"></div>
          </div>
          <span className="text-2xl font-black tracking-tighter mt-1">SELECT</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <div key={link} className="flex items-center gap-1 cursor-pointer group">
              <span className="nav-link text-sm tracking-widest">{link}</span>
              {(link === 'PRODUCTS' || link === 'SPORT' || link === 'EXPLORE' || link === 'ABOUT US') && (
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              )}
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity">
            <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center bg-blue-600">
              <Globe size={14} className="text-white" />
            </div>
            <span className="text-[13px] font-semibold flex items-center gap-1">
              International <ChevronDown size={12} />
            </span>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Search size={22} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
