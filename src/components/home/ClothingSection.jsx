import { useState } from "react";

const hotspots = [
  {
    id: 1,
    left: "17.5%",
    top: "50%",
    title: "Training Jacket",
    description: "Windproof training jacket with hood. Perfect for cold weather warm-ups and outdoor sessions.",
   
    color: "Charcoal / Black",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 2,
    left: "28.5%",
    top: "47%",
    title: "Club Zip Hoodie",
    description: "Full-zip sweatshirt with Select branding. Ideal for training days and travel.",
    
    color: "Dark Grey",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 3,
    left: "39.5%",
    top: "42%",
    title: "Player Track Top",
    description: "Lightweight zip-up training top in vivid blue. Moisture-wicking fabric keeps you dry.",

    color: "Royal Blue",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: 4,
    left: "62.5%",
    top: "58%",
    title: "Junior Kit Set",
    description: "Complete junior kit for young players — shirt, shorts & socks included in bold blue.",
   
    color: "Blue / White",
    sizes: ["YS", "YM", "YL", "YXL"],
  },
  {
    id: 5,
    left: "86%",
    top: "48%",
    title: "GK Jersey",
    description: "Goalkeeper jersey in high-visibility green with padded elbows and grip wristbands.",
  
    color: "Keeper Green",
    sizes: ["S", "M", "L", "XL"],
  },
];

export default function ClothingShowcase() {
  const [activeId, setActiveId] = useState(null);

  const toggle = (id) => setActiveId((prev) => (prev === id ? null : id));

  return (
    <div className="w-full">
      <div className="w-full max-w-[1400px] mx-auto">
        {/* Image Container — everything lives inside */}
        <div
          className="relative w-full overflow-hidden"
          style={{ paddingBottom: "49.95%" /* 999/2000 */ }}
        >
          {/* Background image */}
          <img
            src="https://www.select-sport.com/cdn/shop/files/New_Check-out-our-products_clothing.jpg?v=1704362014&width=2200"
          alt="Clothing Collection"
            className="absolute inset-0 w-full h-full object-cover object-center"
            draggable={false}
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* CLOTHING heading + SEE MORE — overlaid on image top-center */}
          <div className="absolute top-[12%] left-0 right-0 flex flex-col items-center gap-1 md:gap-4 z-10">
            <h1
              className="text-white font-black tracking-[0.2em] text-sm sm:text-3xl md:text-5xl lg:text-6xl"
              style={{ fontFamily: "'Oswald', 'Arial Black', sans-serif" }}
            >
              CLOTHING
            </h1>
            <button className="border border-white/70 bg-black/30 backdrop-blur-sm text-white px-3 py-0.5 md:px-10 md:py-2.5 text-[8px] md:text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300 font-bold">
              SEE MORE
            </button>
          </div>

          {/* Hotspots */}
          {hotspots.map((spot) => {
            const isActive = activeId === spot.id;
            return (
              <div
                key={spot.id}
                className="absolute"
                style={{ left: spot.left, top: spot.top, transform: "translate(-50%, -50%)", zIndex: 10 }}
              >
                {/* Plus / X Button */}
                <button
                  onClick={() => toggle(spot.id)}
                  className={`
                    relative w-6 h-6 md:w-11 md:h-11 rounded-full flex items-center justify-center
                    font-bold text-sm md:text-xl shadow-lg
                    transition-all duration-300 focus:outline-none
                    ${isActive
                      ? "bg-white text-black scale-110"
                      : "bg-white/90 text-black hover:bg-white hover:scale-110"}
                  `}
                  aria-label={isActive ? "Close" : `See ${spot.title}`}
                >
                  <span
                    className="block transition-transform duration-300"
                    style={{ transform: isActive ? "rotate(45deg)" : "rotate(0deg)", lineHeight: 1 }}
                  >
                    +
                  </span>
                  {/* Pulse ring */}
                  {!isActive && (
                    <span className="absolute inset-0 rounded-full bg-white/40 animate-ping" />
                  )}
                </button>

                {/* Popup */}
                {isActive && (
                  <div
                    className="absolute z-20 bg-black/90 backdrop-blur-md border border-white/20 text-white shadow-2xl rounded"
                    style={{
                      ...getPopupPosition(spot),
                      width: "clamp(80px, 18vw, 240px)",
                      padding: "clamp(4px, 1vw, 16px)",
                    }}
                  >
                    {/* Arrow */}
                    <div
                      className="absolute w-2 h-2 bg-black/90 border-l border-t border-white/20"
                      style={getArrowStyle(spot)}
                    />

                    <p style={{ fontSize: "clamp(5px, 1vw, 10px)", letterSpacing: "0.1em" }} className="text-white/50 uppercase mb-0.5">Select</p>
                    <h3 style={{ fontSize: "clamp(7px, 1.4vw, 16px)", fontFamily: "'Oswald', sans-serif" }} className="font-black tracking-wide leading-tight mb-0.5">
                      {spot.title}
                    </h3>
                    <p style={{ fontSize: "clamp(3px, 1.1vw, 9px)" }} className=" text-white mb-1">
                      {spot.description}
                    </p>
                   
                    <div className="flex gap-px flex-wrap mb-1">
                      {spot.sizes.map((s) => (
                        <span key={s} style={{ fontSize: "clamp(5px, 0.9vw, 10px)", padding: "1px 3px" }} className="border border-white/30 text-white/70 cursor-pointer hover:border-white hover:text-white transition-colors">
                          {s}
                        </span>
                      ))}
                    </div>
                  
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


// Position popup above/below and left/right based on spot location
function getPopupPosition(spot) {
  const leftPct = parseFloat(spot.left);
  const topPct = parseFloat(spot.top);

  const vertical = topPct > 55 ? { bottom: "calc(100% + 14px)", top: "auto" } : { top: "calc(100% + 14px)", bottom: "auto" };
  const horizontal = leftPct > 70 ? { right: "0", left: "auto" } : leftPct < 30 ? { left: "0", right: "auto" } : { left: "50%", transform: "translateX(-50%)" };

  return { ...vertical, ...horizontal };
}

function getArrowStyle(spot) {
  const leftPct = parseFloat(spot.left);
  const topPct = parseFloat(spot.top);

  const isAbove = topPct > 55;
  const v = isAbove ? { bottom: "-6px", top: "auto", transform: "rotate(225deg)" } : { top: "-6px", bottom: "auto", transform: "rotate(45deg)" };
  const h = leftPct > 70 ? { right: "16px", left: "auto" } : leftPct < 30 ? { left: "16px", right: "auto" } : { left: "50%", marginLeft: "-5px" };

  return { ...v, ...h };
}