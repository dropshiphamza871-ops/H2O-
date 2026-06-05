import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function FloatingWidgets() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Buttons bar Bottom-Right */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
        
        {/* Back to Top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            id="back-to-top-floating"
            className="p-3 rounded-full bg-[#00080F]/90 text-white hover:text-[#00AEEF] border border-white/15 hover:border-[#00AEEF] backdrop-blur-md transition-all shadow-xl shadow-black/80 cursor-pointer hover:scale-[1.05]"
            title="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

      </div>
    </>
  );
}

