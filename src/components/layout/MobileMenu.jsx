import React, { useState, useEffect } from 'react';
import { X, ChevronDown, Globe, Search } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose, navLinks, drawerData }) => {
  const [expandedLink, setExpandedLink] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Reset expansions when menu closes
  useEffect(() => {
    if (!isOpen) {
      setExpandedLink(null);
      setExpandedCategory(null);
    }
  }, [isOpen]);

  const toggleLink = (link) => {
    setExpandedLink(prev => (prev === link ? null : link));
    setExpandedCategory(null);
  };

  const toggleCategory = (catName) => {
    setExpandedCategory(prev => (prev === catName ? null : catName));
  };

  const hasDrawer = (link) => !!drawerData[link];

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Slide-up panel */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-[75] bg-white transition-transform duration-[350ms] cubic-bezier(0.19,1,0.22,1) ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{
          height: '92dvh',
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
          boxShadow: '0 -8px 40px rgba(0,0,0,0.18)',
        }}
      >
        {/* Handle bar */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 bg-gray-300 rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="relative w-7 h-7 flex flex-col items-center justify-center">
              <div className="absolute top-0 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[24px] border-b-black" />
            </div>
            <span className="text-lg font-black tracking-tighter mt-0.5">SELECT</span>
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <X size={20} className="text-black stroke-[1.5]" />
          </button>
        </div>

        {/* Scrollable nav area */}
        <div className="overflow-y-auto h-[calc(100%-130px)] px-5 py-4">
          <ul className="flex flex-col divide-y divide-gray-100">
            {navLinks.map((link) => {
              const data = drawerData[link];
              const isExpanded = expandedLink === link;
              const cats = data?.categories || [];
              const hasSubs = hasDrawer(link);

              return (
                <li key={link}>
                  {/* Top-level link row */}
                  <button
                    className="w-full flex items-center justify-between py-4 text-left"
                    onClick={() => hasSubs ? toggleLink(link) : null}
                  >
                    <span className="text-sm font-bold tracking-[0.12em] text-black">{link}</span>
                    {hasSubs && (
                      <ChevronDown
                        size={18}
                        strokeWidth={1.8}
                        className={`text-gray-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                      />
                    )}
                  </button>

                  {/* Collapsible categories */}
                  {hasSubs && (
                    <div
                      className="overflow-hidden transition-all duration-300 ease-in-out"
                      style={{ maxHeight: isExpanded ? '2000px' : '0px' }}
                    >
                      <ul className="flex flex-col pb-3">
                        {cats.map((cat, idx) => {
                          const isObj = typeof cat === 'object';
                          const catName = isObj ? cat.name : cat;
                          const subCats = isObj && cat.subCategories ? cat.subCategories : [];
                          const isCatExpanded = expandedCategory === `${link}-${catName}`;

                          return (
                            <li key={idx} className="border-l-2 border-gray-100 ml-1">
                              {subCats.length > 0 ? (
                                <>
                                  {/* Category row */}
                                  <button
                                    className="w-full flex items-center justify-between pl-4 pr-1 py-3 text-left"
                                    onClick={() => toggleCategory(`${link}-${catName}`)}
                                  >
                                    <span className="text-[13px] font-semibold tracking-wider text-gray-700">{catName}</span>
                                    <ChevronDown
                                      size={15}
                                      strokeWidth={1.8}
                                      className={`text-gray-400 transition-transform duration-300 ${isCatExpanded ? 'rotate-180' : ''}`}
                                    />
                                  </button>

                                  {/* Sub-categories */}
                                  <div
                                    className="overflow-hidden transition-all duration-300 ease-in-out"
                                    style={{ maxHeight: isCatExpanded ? '1000px' : '0px' }}
                                  >
                                    <ul className="ml-4 mb-2 flex flex-col gap-0">
                                      {subCats.map((sub, si) => (
                                        <li
                                          key={si}
                                          className="flex items-center gap-3 py-2 pl-4 border-l border-gray-100 cursor-pointer group"
                                        >
                                          {sub.image && (
                                            <div className="w-8 h-8 flex-shrink-0 rounded overflow-hidden bg-gray-50">
                                              <img
                                                src={sub.image}
                                                alt={sub.name}
                                                className="w-full h-full object-cover"
                                              />
                                            </div>
                                          )}
                                          <span className="text-[12px] font-medium tracking-wider text-gray-600 group-hover:text-black transition-colors">
                                            {sub.name}
                                          </span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </>
                              ) : (
                                /* Simple category (no sub-cats) */
                                <div className="flex items-center pl-4 py-3 cursor-pointer hover:bg-gray-50 transition-colors rounded-r-lg">
                                  <span className="text-[13px] font-medium tracking-wider text-gray-700">{catName}</span>
                                </div>
                              )}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Bottom region */}
          <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col gap-4">
            <div className="flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity">
              <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
                <Globe size={12} className="text-white" />
              </div>
              <span className="text-xs font-medium tracking-wider text-gray-700 flex items-center gap-1">
                International <ChevronDown size={12} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
