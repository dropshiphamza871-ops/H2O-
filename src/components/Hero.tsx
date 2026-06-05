import React from 'react';
import { ArrowRight, MapPin, Award, Shield, Flame } from 'lucide-react';
import GymImage from './GymImage';
import imgComplex from '../assets/images/athletic_complex_1780593927723.png';

interface HeroProps {
  onJoinClick: () => void;
  onBranchesClick: () => void;
}

export default function Hero({ onJoinClick, onBranchesClick }: HeroProps) {
  return (
    <section id="hero-sector" className="relative min-h-screen py-20 sm:py-28 w-full flex items-center justify-center overflow-hidden bg-[#050B14] select-none">
      {/* Visual background image mockup */}
      <div className="absolute inset-0 z-0">
        <GymImage
          src={imgComplex}
          fallback="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1920"
          alt="Premium Gym Training Complex"
          className="w-full h-full object-cover object-center opacity-40 scale-105 filter brightness-[60%] contrast-[115%]"
        />
        {/* Modern styled radial mask and gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050B14] via-transparent to-[#050B14]/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgb(5,11,20)_100%)]" />
      </div>

      {/* Floating Cyan laser effects in margins for tech-athletic identity */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-gradient-to-b from-transparent to-[#00AEEF]/15 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-10 left-20 w-80 h-80 rounded-full bg-[#003B5C]/20 blur-[100px] pointer-events-none" />

      {/* Hero content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Dynamic mini banner */}
        <div className="inline-block pt-[9px] pb-[9px] pl-[12px] pr-[12px] bg-[#00AEEF]/10 border border-[#00AEEF]/20 text-[#00AEEF] text-[10px] font-bold tracking-[3px] uppercase rounded-md mb-6">
          Premium Fitness Experience
        </div>

        {/* Large energetic headline */}
        <h1 id="hero-heading" className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white uppercase leading-[0.95] mb-6">
          Transform<br />
          your <span className="text-[#00AEEF] italic">body.</span><br />
          your life.
        </h1>

        <p className="mt-4 text-base sm:text-lg text-slate-400 max-w-xl font-light leading-relaxed">
          Experience the pinnacle of luxury fitness in Egypt with world-class equipment, professional trainers, and <span className="text-[#00AEEF] font-bold">25+ elite branches</span>.
        </p>

        {/* Call to actions */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button
            onClick={onJoinClick}
            id="hero-join-now-btn"
            className="group relative flex items-center justify-center gap-2 px-8 py-4 rounded-xl brand-gradient text-xs font-black uppercase text-white tracking-widest transition-all duration-300 shadow-xl shadow-[#00AEEF]/30 hover:scale-[1.03] cursor-pointer"
          >
            Start Your Journey
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>

          <button
            onClick={onBranchesClick}
            id="hero-find-branch-btn"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-transparent hover:bg-white/5 border border-[#00AEEF] text-xs font-black uppercase text-[#00AEEF] tracking-widest transition-all duration-300 cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-[#00AEEF]" />
            Find a Branch
          </button>
        </div>

        {/* Key indicators (trust badges) */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 border-t border-white/15 pt-8 sm:pt-10 w-full max-w-4xl text-left">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#00AEEF]/10 border border-[#00AEEF]/20 text-[#00AEEF] shadow-lg shadow-[#00AEEF]/5 shrink-0">
              <Award className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="text-sm font-black text-white uppercase tracking-wider">Premium Standard</h4>
              <p className="text-xs text-slate-300 mt-1 font-light leading-relaxed">Official Olympic equipment & platforms.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#00AEEF]/10 border border-[#00AEEF]/20 text-[#00AEEF] shadow-lg shadow-[#00AEEF]/5 shrink-0">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="text-sm font-black text-white uppercase tracking-wider">Elite Science</h4>
              <p className="text-xs text-slate-300 mt-1 font-light leading-relaxed">Scientifically adapted nutrition blueprints.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-[#00AEEF]/10 border border-[#00AEEF]/20 text-[#00AEEF] shadow-lg shadow-[#00AEEF]/5 shrink-0">
              <Flame className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="text-sm font-black text-white uppercase tracking-wider">24/7 Priority</h4>
              <p className="text-xs text-slate-300 mt-1 font-light leading-relaxed">Work out at any hour at select branches.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
