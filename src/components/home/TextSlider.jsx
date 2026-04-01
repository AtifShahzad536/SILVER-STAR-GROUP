import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function TextSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      quote: "NO ONE SHOULD BE PREVENTED FROM ENJOYING KICKING A GOOD BALL",
      author: "EIGIL NIELSEN, FOUNDER OF SILVER STAR GROUP"
    },
    {
      quote: "THE WORLD'S FIRST FOOTBALL WITH 32 PANELS WAS INVENTED BY SILVER STAR GROUP IN 1962",
      author: "EIGIL NIELSEN, FOUNDER OF SILVER STAR GROUP"
    },
    {
      quote: "A GOOD FOOTBALL IS ESSENTIAL FOR A GOOD GAME. THAT'S WHY WE FOCUS ON QUALITY",
      author: "EIGIL NIELSEN, FOUNDER OF SILVER STAR GROUP"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full bg-[var(--primary)] py-20">
      <div className="w-[92%] mx-auto">
        <div className="relative text-center">
          <div className="relative overflow-hidden h-48 flex items-center justify-center">
            <div 
              className="transition-transform duration-500 ease-in-out flex"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                width: `${slides.length * 100}%`,
              }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0 flex flex-col items-center justify-center px-4">
                  <p className="relative text-[var(--secondary)] font-black text-2xl md:text-4xl mb-4 px-6 md:px-24 text-center whitespace-normal">
                    <span className="text-[var(--accent)]/20 text-5xl md:text-8xl font-serif absolute -top-6 md:-top-8 left-2 md:left-12 opacity-75">"</span>
                    <span className="text-lg md:text-3xl">{slide.quote}</span>
                    <span className="text-[var(--accent)]/20 text-5xl md:text-8xl font-serif absolute -bottom-6 md:-bottom-8 right-2 md:right-12 opacity-75">"</span>
                  </p>
                  <p className="text-base md:text-lg text-[var(--secondary)]/60 uppercase tracking-wider font-medium">{slide.author}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows and Dots */}
          <div className="flex justify-center items-center mt-12 space-x-8">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-[var(--secondary)]/5 rounded-full flex items-center justify-center shadow-sm hover:bg-[var(--accent)] hover:text-white transition-all duration-300 hover:scale-110 group"
            >
              <FaChevronLeft className="text-[var(--secondary)] text-sm group-hover:text-white" />
            </button>
            
            {/* Navigation Dots */}
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-[var(--accent)]' : 'bg-[var(--secondary)]/20'
                  }`}
                />
              ))}
            </div>
            
            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-[var(--secondary)]/5 rounded-full flex items-center justify-center shadow-sm hover:bg-[var(--accent)] hover:text-white transition-all duration-300 hover:scale-110 group"
            >
              <FaChevronRight className="text-[var(--secondary)] text-sm group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
