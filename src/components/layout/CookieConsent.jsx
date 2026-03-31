import React, { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

const CookieConsent = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Check if user already responded in localStorage
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      // First time visitor: show popup after a short delay for smooth effect
      const timer = setTimeout(() => setShowPopup(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleResponse = (status) => {
    localStorage.setItem('cookie_consent', status);
    setShowPopup(false);
  };

  return (
    <>
      {/* Floating Action Button - Bottom Left */}
      <button 
        onClick={() => setShowPopup(true)}
        className="fixed bottom-6 left-6 z-[90] w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100 group"
        aria-label="Privacy settings"
      >
        <Cookie size={24} className="text-black group-hover:rotate-12 transition-transform" strokeWidth={1.5} />
      </button>

      {/* Popup Overlay */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white rounded-sm p-10 max-w-[600px] w-full shadow-2xl relative flex flex-col items-center">
            
            <Cookie size={32} className="mb-6 text-black" strokeWidth={2} />
            
            <h2 className="text-2xl font-bold mb-4 tracking-tight">We respect your privacy</h2>
            
            <p className="text-[15px] font-medium text-black leading-relaxed mb-6 text-center max-w-[500px]">
              We use cookies and similar technologies to personalise content and measure <br/>
              performance. By giving your consent, you allow us to use this data; you can <br/>
              change your settings by clicking Preferences.
              <br />
              <a href="#" className="underline mt-1 inline-block hover:text-gray-600 transition-colors">Read more about our cookie policy</a>
            </p>
            
            <div className="flex w-full justify-between items-center mt-4">
              <button 
                className="text-sm font-bold hover:text-gray-600 transition-colors tracking-wide"
                onClick={() => handleResponse('preferences')}
              >
                Preferences
              </button>
              
              <div className="flex gap-4">
                <button 
                  className="px-10 py-3 border-[1.5px] border-black text-black font-bold text-sm tracking-wide hover:bg-black hover:text-white transition-colors"
                  onClick={() => handleResponse('accepted')}
                >
                  Accept
                </button>
                <button 
                  className="px-10 py-3 border-[1.5px] border-black text-black font-bold text-sm tracking-wide hover:bg-black hover:text-white transition-colors"
                  onClick={() => handleResponse('declined')}
                >
                  Decline
                </button>
              </div>
            </div>
            
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
