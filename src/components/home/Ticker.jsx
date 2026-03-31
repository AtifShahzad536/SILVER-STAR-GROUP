import React from 'react';

const Ticker = () => {
  const items = Array(12).fill("PLAYER'S CHOICE");

  return (
    <div className="w-full bg-[#f2f2f2] border-y border-gray-200 py-6 overflow-hidden flex whitespace-nowrap">
      <div className="ticker-scroll flex items-center">
        {items.map((item, index) => (
          <span 
            key={index} 
            className="text-4xl md:text-5xl font-black tracking-tighter mx-10 text-black hover:text-outline transition-colors duration-300 pointer-events-none"
          >
            {item}
          </span>
        ))}
        {/* Duplicate for seamless infinite scroll */}
        {items.map((item, index) => (
          <span 
            key={`dup-${index}`} 
            className="text-4xl md:text-5xl font-black tracking-tighter mx-10 text-black hover:text-outline transition-colors duration-300 pointer-events-none"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
