import React, { useState } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export default function Navbar({ activeTab, setActiveTab, darkMode, setDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'branches', label: 'Branches' },
    { id: 'classes', label: 'Classes' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header id="nav-container" className="sticky top-0 z-50 w-full transition-all duration-300 border-b bg-[#050B14]/90 backdrop-blur-md border-white/5 shadow-2xl shadow-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavClick('home')}>
            <Logo />
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  id={`nav-${item.id}`}
                  className={`relative px-4 py-2 rounded-lg text-xs font-semibold tracking-widest transition-all duration-300 uppercase cursor-pointer ${
                    isActive
                      ? 'text-[#00AEEF] bg-[#00AEEF]/10'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-[#00AEEF]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right side controls: Hotline, CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:19420"
              id="hotline-nav-badge"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00080F] border border-[#00AEEF]/30 hover:border-[#00AEEF] text-xs font-mono text-[#00AEEF] hover:text-[#00AEEF] font-bold tracking-wider transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5 animate-pulse" />
              HOTLINE: 19420
            </a>

            <button
              onClick={() => handleNavClick('contact')}
              id="nav-join-button"
              className="px-6 py-2.5 rounded-xl brand-gradient hover:opacity-90 text-[11px] font-black text-white tracking-widest uppercase transition-all duration-300 shadow-lg shadow-[#00AEEF]/20 cursor-pointer hover:scale-[1.02]"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile controllers (Toggle menu) */}
          <div className="xl:hidden flex items-center gap-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-[#00080F] border border-white/5 text-slate-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {isOpen && (
        <div id="mobile-nav-panel" className="xl:hidden border-t border-white/5 bg-[#050B14]/98 py-4 px-6 space-y-2 animate-[slideDown_0.2s_ease-out]">
          <div className="flex justify-between items-center py-2">
            <a
              href="tel:19420"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00080F] text-xs font-mono text-[#00AEEF] font-bold border border-[#00AEEF]/20"
            >
              <PhoneCall className="w-3 h-3" />
              HOTLINE: 19420
            </a>
            <span className="text-xs text-slate-400 font-mono">Egypt's Largest Gym</span>
          </div>

          <div className="space-y-1 block pb-4">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-xs font-bold tracking-widest uppercase transition-all ${
                    isActive
                      ? 'text-[#00AEEF] bg-[#00AEEF]/10'
                      : 'text-slate-450 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => handleNavClick('contact')}
            className="w-full py-3.5 rounded-xl brand-gradient hover:opacity-95 text-xs font-bold text-center text-white uppercase tracking-widest transition-all shadow-md shadow-[#00AEEF]/10"
          >
            Contact H2O Today
          </button>
        </div>
      )}
    </header>
  );
}
