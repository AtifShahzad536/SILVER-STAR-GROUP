import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const slides = [
  {
    year: "1947",
    title: "THE BEGINNING",
    subtitle: "SILVER STAR GROUP IS BORN",
    description:
      "In 1947, Eigil Nielsen founded SILVER STAR GROUP. As a former professional goalkeeper for the Danish national team, Eigil had strong opinions on ball quality and set out to create the best ball in the world.",
    image: "/football/select_fodbold_1947.avif",
    accent: "#F26522",
  },
  {
    year: "1951",
    title: "EXPANDING HORIZONS",
    subtitle: "FIRST EXPORT",
    description:
      "SILVER STAR GROUP began exporting balls internationally in 1951, marking the beginning of its global presence in the world of sport. Quality craftsmanship crossed borders for the first time.",
    image: "/football/Select_fodbold_1951_9c89cd36-273c-4fbf-83af-98a97ae4f3af.webp",
    accent: "#F26522",
  },
  {
    year: "1962",
    title: "THE 32-PANEL REVOLUTION",
    subtitle: "A WORLD FIRST",
    description:
      "In 1962, SILVER STAR GROUP introduced the world's first 32-panel football. This groundbreaking design (20 hexagons and 12 pentagons) resulted in the roundest ball ever made, providing unparalleled flight stability.",
    image: "/football/Select_fodbold_1962_cd927d76-7d9c-490d-82cd-8531602753e5.webp",
    accent: "#F26522",
  },
  {
    year: "1972",
    title: "HANDBALL EVOLUTION",
    subtitle: "SHAPING THE GAME",
    description:
      "SILVER STAR GROUP expanded its 32-panel innovation to handball in 1972. This changed the sport forever, setting a new global standard for grip, roundness, and professional performance.",
    image: "/football/Select_harndbold_1972.webp",
    accent: "#F26522",
  },
  {
    year: "2012",
    title: "TECH INNOVATION",
    subtitle: "DIGITAL ERA",
    description:
      "Combining 75 years of craftsmanship with modern technology, SILVER STAR GROUP introduced high-tech materials that redefined touch and durability for the modern professional athlete.",
    image: "/football/Select_Brillant_Super_iBall_fodbold_2022_061cbe02-ff5c-4b13-b07d-6a81a0bb2298.webp",
    accent: "#F26522",
  },
  {
    year: "2018",
    title: "SUSTAINABILITY",
    subtitle: "GREENER SILVER STAR GROUP",
    description:
      "A commitment to the planet. SILVER STAR GROUP began integrating recycled materials into the manufacturing process, proving that world-class performance and sustainability can go hand-in-hand.",
    image: "/football/Futsal_-_Talento__colour_white_blue.jpg",
    accent: "#F26522",
  },
  {
    year: "2022",
    title: "75 YEAR LEGACY",
    subtitle: "STILL CRAFTING",
    description:
      "From a small workshop to a global leader, the journey has been defined by innovation and a passion for the beautiful game. 75 years later, the mission remains the same: the best ball in the world.",
    image: "/football/Brillant_Super_UZ_Allsvenskan__colour_white_red (1).jpg",
    accent: "#F26522",
  },
];

export default function HistorySlider() {
  const [current, setCurrent] = useState(2);
  const [isExpanded, setIsExpanded] = useState(false);
  const timelineRef = useRef(null);
  const mobileTimelineRef = useRef(null);

  const goTo = (index) => {
    if (index === current) return;
    setIsExpanded(false);
    setCurrent(index);
  };

  const prev = () => goTo(current > 0 ? current - 1 : slides.length - 1);
  const next = () => goTo(current < slides.length - 1 ? current + 1 : 0);

  const slide = slides[current];

  // Scroll active year into view on mobile
  useEffect(() => {
    if (mobileTimelineRef.current) {
      const activeEl = mobileTimelineRef.current.children[current];
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  }, [current]);

  return (
    <section className="relative w-full min-h-[90svh] bg-[var(--primary)] flex items-center py-20 overflow-hidden">

      {/* Background Watermark Year */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <AnimatePresence mode="wait">
          <motion.span
            key={slide.year}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.05, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-black text-[25vw] md:text-[20rem] leading-none text-[var(--secondary)]"
          >
            {slide.year}
          </motion.span>
        </AnimatePresence>
      </div>

      <div className="w-[92%] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 h-full">

          {/* Column 1: Vertical Timeline (approx 10%) */}
          <div className="hidden lg:flex flex-col items-center relative h-[500px]">
            {/* Timeline Line */}
            <div className="absolute top-0 bottom-0 w-px bg-[var(--secondary)]/10" />
            <motion.div
              className="absolute top-0 w-px bg-[var(--accent)]"
              animate={{ height: `${(current / (slides.length - 1)) * 100}%` }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />

            {/* Year Markers */}
            <div className="flex flex-col justify-between h-full relative z-10">
              {slides.map((s, i) => (
                <button
                  key={s.year}
                  onClick={() => goTo(i)}
                  className="group relative flex items-center justify-center py-4 outline-none"
                >
                  {/* Dot */}
                  <motion.div
                    animate={{
                      scale: i === current ? 1.5 : 1,
                      backgroundColor: i === current ? "var(--accent)" : "rgba(30, 27, 110, 0.2)"
                    }}
                    className="w-3 h-3 rounded-full transition-colors"
                  />

                  {/* Year Label */}
                  <span className={`absolute left-8 text-sm font-bold tracking-widest transition-all duration-300 whitespace-nowrap ${i === current ? 'text-[var(--secondary)] scale-110' : 'text-[var(--secondary)]/30 group-hover:text-[var(--secondary)]/60'}`}>
                    {s.year}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Horizontal Timeline (visible only on md and below) */}
          <div
            ref={mobileTimelineRef}
            className="flex lg:hidden w-full overflow-x-auto scrollbar-hide gap-10 pb-6 border-b border-[var(--secondary)]/10 mb-8 px-[4%]"
          >
            {slides.map((s, i) => (
              <button
                key={`mob-${s.year}`}
                onClick={() => goTo(i)}
                className={`flex-shrink-0 text-xl font-black tracking-tighter transition-all duration-300 ${i === current ? 'text-[var(--accent)] scale-110' : 'text-[var(--secondary)]/30'}`}
              >
                {s.year}
              </button>
            ))}
          </div>

          {/* Column 2: Text Content (approx 40%) */}
          <div className="flex-1 flex flex-col justify-center max-w-xl order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <p className="uppercase tracking-[0.3em] font-black text-[var(--accent)] text-[10px] md:text-xs mb-4">
                  {slide.subtitle}
                </p>
                <h2 className="text-4xl md:text-6xl font-black text-[var(--secondary)] leading-none mb-8">
                  {slide.title}
                </h2>

                <div className="relative">
                  <p className={`text-sm md:text-base text-[var(--secondary)]/70 leading-relaxed transition-all duration-300 ${!isExpanded ? 'line-clamp-4' : ''}`}>
                    {slide.description}
                  </p>
                  {slide.description.length > 150 && (
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="mt-4 text-[10px] md:text-xs font-black tracking-widest uppercase text-[var(--secondary)] hover:text-[var(--accent)] transition-all flex items-center gap-2"
                    >
                      {isExpanded ? (
                        <>SEE LESS <FiChevronUp /></>
                      ) : (
                        <>SEE MORE <FiChevronDown /></>
                      )}
                    </button>
                  )}
                </div>

                {/* Navigation Arrows for content area */}
                <div className="flex items-center gap-4 mt-12">
                  <button onClick={prev} className="w-12 h-12 rounded-full border border-[var(--secondary)]/10 flex items-center justify-center hover:bg-[var(--secondary)] hover:text-white transition-all duration-300">
                    <FiChevronUp size={20} className="rotate-[-90deg] lg:rotate-0" />
                  </button>
                  <button onClick={next} className="w-12 h-12 rounded-full border border-[var(--secondary)]/10 flex items-center justify-center hover:bg-[var(--secondary)] hover:text-white transition-all duration-300">
                    <FiChevronDown size={20} className="rotate-[-90deg] lg:rotate-0" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Column 3: Visual Visual (approx 50%) */}
          <div className="flex-[1.2] flex items-center justify-center order-1 lg:order-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.year}
                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 1.1, x: -50 }}
                transition={{ duration: 0.6, ease: "circOut" }}
                className="relative w-full aspect-square md:max-w-2xl"
              >
                {/* Floating Shadow */}
                <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[60%] h-[5%] bg-black/10 blur-2xl rounded-full" />

                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-contain filter drop-shadow-2xl"
                />
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}