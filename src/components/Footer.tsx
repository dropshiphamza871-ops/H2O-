import React, { useState } from 'react';
import Logo from './Logo';
import { Mail, PhoneCall, Globe, ArrowRight, Instagram, Facebook, Youtube } from 'lucide-react';

function TiktokIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.01.08 1.53.63 3.02 1.59 4.23.95.12 1.93-.16 2.85-.49.03.1.05.2.06.3 1.01-.2 2.05-.28 3.06-.21v3.91c-1.12.01-2.22-.16-3.23-.62-.97-.47-1.8-1.19-2.42-2.07l-.02 8.44c-.03 2.14-.98 4.14-2.58 5.56-1.6 1.42-3.76 2.07-5.88 1.76-2.12-.3-3.95-1.55-5.01-3.41s-1.11-4.08-.12-5.91c.99-1.83 2.88-2.98 4.96-3.1v3.96c-1.04.14-1.92.79-2.36 1.76s-.29 2.08.27 2.94c.56.86 1.54 1.34 2.56 1.25 1.02-.09 1.87-.72 2.19-1.69.09-.32.12-.66.1-1l.01-16.71z" />
    </svg>
  );
}

const socialChannels = [
  { name: 'H2O Gym Egypt (Men)', platform: 'Facebook', url: 'https://www.facebook.com/H2O.GYM.Egypt.Official/' },
  { name: 'H2O Ladies Official', platform: 'Facebook', url: 'https://www.facebook.com/H2O.GYM.LADIES.EGYPT.Official/' },
  { name: 'H2O Gym Egypt (Men)', platform: 'Instagram', url: 'https://www.instagram.com/h2o.gym.egypt/' },
  { name: 'H2O Ladies Official', platform: 'Instagram', url: 'https://www.instagram.com/h2o.gym.ladies.egypt/' },
  { name: 'H2O Gym YouTube Channel', platform: 'YouTube', url: 'https://youtube.com/@H2OGYMEGYPT' },
  { name: 'H2O Gym TikTok', platform: 'TikTok', url: 'https://www.tiktok.com/@h2ogymegypt?_t=8c6E6PtyGr0&_r=1' }
];

interface FooterProps {
  onNavClick: (id: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const [emailValue, setEmailValue] = useState('');
  const [subbed, setSubbed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailValue.trim()) {
      setSubbed(true);
      setTimeout(() => {
        setSubbed(false);
        setEmailValue('');
      }, 4000);
    }
  };

  const footerLinks = [
    { id: 'about', label: 'Who We Are' },
    { id: 'contact', label: 'Request Call Back' },
    { id: 'branches', label: '25+ Branches Map' },
    { id: 'classes', label: 'Workout Schedules' },
    { id: 'gallery', label: 'Atmosphere Gallery' }
  ];

  return (
    <footer id="brand-footer" className="bg-slate-950 border-t border-slate-900 pt-20 pb-12 text-slate-400 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core row block - stack on mobile (flex-col), grid layout from lg: breakpoint */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 pb-16 border-b border-slate-900">
          
          {/* Logo & Brief */}
          <div className="lg:col-span-4 space-y-6">
            <Logo />
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
              Egypt's supreme, largest, and most sophisticated physical training compounds chain. Combining high-end biomechanics, Olympic class machinery, clinical nutrition, and customized wellness therapy suites under one unified membership card.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/H2O.GYM.Egypt.Official/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-850 hover:border-[#00AEEF] hover:text-white transition-all">
                <Facebook className="w-4 h-4 text-slate-300" />
              </a>
              <a href="https://www.instagram.com/h2o.gym.egypt/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-850 hover:border-[#00AEEF] hover:text-white transition-all">
                <Instagram className="w-4 h-4 text-[#00AEEF]" />
              </a>
              <a href="https://youtube.com/@H2OGYMEGYPT" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-900 border border-slate-850 hover:border-0 hover:bg-rose-500 hover:text-white transition-all">
                <Youtube className="w-4 h-4 text-slate-300" />
              </a>
            </div>
          </div>

          {/* Quick links navigation */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#00AEEF]">Athlete Directory</h4>
            <ul className="grid grid-cols-1 gap-3 text-xs sm:text-sm">
              {footerLinks.map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavClick(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-all cursor-pointer flex items-center gap-1 group text-left"
                  >
                    <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-[#00AEEF] transition-all" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Consolidated Newsletter and Helpline in upper grid (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/30 p-5 rounded-2xl border border-slate-900 hover:border-slate-800/60 transition-all space-y-4">
              <div className="space-y-1">
                <h4 className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#00AEEF]">H2O Athletes Gazette</h4>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Subscribe to unlock periodic high-density workouts blueprints and group fitness announcements.
                </p>
              </div>

              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 w-full">
                <input
                  type="email"
                  required
                  placeholder="athletes@h2ogym.com"
                  value={emailValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  disabled={subbed}
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:border-[#00AEEF] focus:ring-1 focus:ring-[#00AEEF]/20 outline-none placeholder:text-slate-500 disabled:opacity-50 transition-all"
                />
                <button
                  type="submit"
                  disabled={subbed}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00AEEF] to-[#007CB0] hover:from-[#00BFFF] hover:to-[#008CC7] text-xs font-black uppercase tracking-widest text-shadow text-white cursor-pointer shadow-lg shadow-[#00AEEF]/25 hover:shadow-[#00AEEF]/40 active:scale-98 transition-all whitespace-nowrap min-w-[100px] flex items-center justify-center animate-all"
                >
                  {subbed ? 'Sent!' : 'Subscribe'}
                </button>
              </form>
              {subbed && (
                <p className="p-2 rounded-xl bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-[10px] font-bold text-center animate-[slideUp_0.15s_ease-out]">
                  🎉 Subscribed to H2O Gazette!
                </p>
              )}
            </div>

            <div className="p-3.5 bg-slate-900 border border-slate-850 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-[#00AEEF] animate-pulse" />
                <div className="text-left font-mono leading-none">
                  <p className="text-[8px] text-[#00AEEF] uppercase font-bold tracking-wider">Egypt Central Hotline</p>
                  <p className="text-[#f2f2f2] text-xs font-black mt-1">19420</p>
                </div>
              </div>
              <span className="text-[8px] text-slate-500 font-mono font-bold">24-HOURS OPEN</span>
            </div>
          </div>

          {/* Social Directory moved down to full-width span with a multi-column clean layout */}
          <div className="col-span-12 mt-4 bg-slate-900/10 p-6 rounded-2xl border border-slate-900 hover:border-slate-800/60 transition-all space-y-6">
            <h4 className="text-xs font-mono font-extrabold uppercase tracking-widest text-[#00AEEF] text-center lg:text-left">Social Directory</h4>
            <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 w-full">
              {socialChannels.map((chan, idx) => (
                <a
                  key={idx}
                  href={chan.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-950 border border-slate-900 hover:border-[#00AEEF] hover:bg-slate-900/40 transition-all group cursor-pointer w-full"
                >
                  <span className="text-xs text-slate-400 group-hover:text-white transition-all font-medium leading-tight">
                    {chan.name}
                  </span>
                  
                  {/* Icon physically placed at the end of the item */}
                  <div className="p-1.5 rounded-lg bg-slate-900 text-slate-400 group-hover:text-[#00AEEF] transition-all flex items-center justify-center shrink-0 ml-3">
                    {chan.platform === 'Facebook' && <Facebook className="w-3.5 h-3.5" />}
                    {chan.platform === 'Instagram' && <Instagram className="w-3.5 h-3.5" />}
                    {chan.platform === 'YouTube' && <Youtube className="w-3.5 h-3.5" />}
                    {chan.platform === 'TikTok' && <TiktokIcon className="w-3.5 h-3.5" />}
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Lower Info & Disclaimers row */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 H2O Gym Egypt Corporation. All rights reserved. Sculpted for Ultimate Human blueprints.</p>
          <div className="flex gap-4 font-mono text-[10px]">
            <a href="#" className="hover:text-slate-350">HYPOTONIC STANDARD</a>
            <span>|</span>
            <a href="#" className="hover:text-slate-350">Hygiene Checklists Status</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
