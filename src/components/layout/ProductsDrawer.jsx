import React, { useState, useEffect } from 'react';
import { X, ChevronRight } from 'lucide-react';

const ProductsDrawer = ({ isOpen, onClose }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringBackdrop, setIsHoveringBackdrop] = useState(false);

  const categories = [
    'BALLS', 'CLOTHING', 'TEAMGEAR', 'PROFCARE', 
    'MY TRAINING', 'GOALKEEPER', 'REFEREE', 'KIDS'
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    if (isOpen) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isOpen]);

  // Prevent background scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm cursor-none transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
        onMouseEnter={() => setIsHoveringBackdrop(true)}
        onMouseLeave={() => setIsHoveringBackdrop(false)}
      >
        {/* Custom cursor tracking X */}
        {isOpen && isHoveringBackdrop && (
          <div 
            className="fixed pointer-events-none w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-75"
            style={{ 
              left: mousePos.x - 20, 
              top: mousePos.y - 20,
              zIndex: 9999
            }}
          >
            <X size={18} className="text-black" />
          </div>
        )}
      </div>

      {/* Sliding Panel */}
      <div className={`fixed top-0 left-0 h-[100dvh] w-[400px] max-w-[85vw] bg-white z-[65] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col`}>
        {/* Header / Inner Close */}
        <div className="p-8 flex justify-start">
          <button 
            onClick={onClose}
            className="p-3 border border-gray-200 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X size={20} className="text-black stroke-[1.5]" />
          </button>
        </div>

        {/* Categories List */}
        <div className="flex-1 overflow-y-auto px-10 pb-6 custom-scrollbar">
          <ul className="flex flex-col gap-6 mt-2">
            {categories.map((cat, idx) => (
              <li key={idx} className="flex items-center justify-between group cursor-pointer">
                <span className="text-lg font-normal tracking-wider group-hover:translate-x-2 transition-transform duration-300">{cat}</span>
                <div className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                  <ChevronRight size={14} className="stroke-[1.5]" />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Promotional Image Area */}
        <div className="p-6 mt-auto">
          <div className="relative w-full h-64 rounded-xl overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity group-hover:opacity-90"></div>
            <img 
              src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800&auto=format&fit=crop" 
              alt="My Training" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute bottom-5 left-5 z-20">
              <span className="bg-[#481e9f] text-white text-[10px] font-bold px-2 py-1 rounded tracking-widest mb-3 inline-block">NEW</span>
              <h3 className="text-white text-xl font-bold tracking-wider">SELECT MY TRAINING</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsDrawer;
