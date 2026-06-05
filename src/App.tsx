import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Programs from './components/Programs';
import Branches from './components/Branches';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import { CLASSES_DATA } from './data';
import { ArrowRight, Flame, Trophy, Compass, ArrowUpDown, Clock, Check, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Loading animation simulation for a premium brand feel
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 bg-[#050B14] flex flex-col items-center justify-center text-white">
        {/* Modern styled branded loader */}
        <div className="relative flex items-center justify-center w-32 h-32 rounded-3xl bg-slate-900/40 border border-white/5 shadow-[0_0_50px_rgba(0,174,239,0.15)] p-4">
          {/* Neon spinning outer orbit */}
          <div className="absolute inset-0 rounded-3xl border border-dashed border-t-[#00AEEF] border-r-transparent border-b-[#00AEEF]/20 border-l-transparent animate-spin duration-3000" />
          <Logo iconOnly className="relative z-10 animate-pulse duration-1000 scale-[1.1]" />
        </div>
        
        {/* Animated label */}
        <div className="mt-8 flex flex-col items-center gap-1">
          <div className="flex items-center text-2xl uppercase font-black tracking-widest text-[#00AEEF]">
            H<sub className="font-semibold text-sm text-white align-baseline">2</sub>O GYM
          </div>
          <span className="text-[10px] tracking-[8px] uppercase font-mono text-slate-400 font-bold ml-1">EGYPT</span>
        </div>

        {/* Pulsing tagline */}
        <p className="mt-14 text-xs text-slate-505 font-mono tracking-widest uppercase animate-pulse">
          Initializing Biomechanical Blueprints...
        </p>
      </div>
    );
  }

  return (
    <div className={`min-h-screen w-full overflow-x-hidden relative transition-colors duration-300 font-sans ${
      darkMode 
        ? 'dark bg-brand-bg text-[#f8fafc]' 
        : 'bg-[#fafafa] text-[#0f172a]'
    }`}>
      {/* Background Gradients and overlays for depth */}
      {darkMode && (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-[#00AEEF]/15 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#003B5C]/10 blur-[180px] pointer-events-none" />
        </div>
      )}

      {/* Navigation */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />

      <main className="relative z-10">
        {/* Routing display based on active page state */}
        {activeTab === 'home' && (
          <div className="animate-[fadeIn_0.35s_ease-out]">
            {/* Interactive Hero banner */}
            <Hero 
              onJoinClick={() => setActiveTab('contact')} 
              onBranchesClick={() => setActiveTab('branches')} 
            />
            {/* Animated numeric counts */}
            <Stats />
            {/* "Why choose us" badges */}
            <Features />

            {/* Quick Classes Peek Section */}
            <section className="py-24 bg-brand-darker/20 border-t border-white/5 relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <span className="text-xs uppercase font-extrabold tracking-[6px] text-[#00AEEF] font-mono">DENSE METABOLIC WORKSHOPS</span>
                <h3 className="text-3xl sm:text-4xl font-extrabold uppercase mt-3 tracking-tighter text-white">Signature Workouts</h3>
                <p className="text-slate-400 text-sm font-light mt-4 max-w-xl mx-auto leading-relaxed">
                  Experience elite dynamic athletic classes directed by Egypt's most scientific coaches.
                </p>

                {/* Simplified Clean Preview Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
                  {CLASSES_DATA.slice(0, 3).map((item) => (
                    <div 
                      key={item.id}
                      onClick={() => {
                        setActiveTab('classes');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="group bg-[#00080F]/40 border border-white/5 rounded-2xl overflow-hidden cursor-pointer hover:border-[#00AEEF]/40 hover:bg-[#00080F]/80 transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        <div className="relative h-48 w-full overflow-hidden bg-[#00080F]">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500 filter brightness-90 saturate-75"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="text-[9px] uppercase font-mono font-extrabold tracking-widest px-2.5 py-1 rounded bg-[#00080F]/80 text-[#00AEEF] border border-white/5">
                              {item.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <h4 className="text-lg font-black uppercase text-white group-hover:text-[#00AEEF] transition-colors">
                            {item.name}
                          </h4>
                          <p className="text-xs text-slate-400 mt-2 font-light leading-relaxed line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <div className="px-6 pb-6 pt-2 border-t border-white/5 flex items-center justify-between text-xs text-slate-500 font-mono">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#00AEEF]" />
                          {item.duration}
                        </span>
                        <span className="text-cyan font-bold tracking-wider group-hover:translate-x-1 transition-transform">
                          Schedule &rarr;
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <button
                    onClick={() => {
                      setActiveTab('classes');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="px-8 py-3.5 rounded-xl border border-[#00AEEF]/30 hover:border-[#00AEEF] text-xs font-bold text-white uppercase tracking-widest bg-transparent hover:bg-[#00AEEF]/5 transition-all cursor-pointer"
                  >
                    View Full 5-Class Interactive Schedule
                  </button>
                </div>
              </div>
            </section>

            {/* About brief connector inside homepage */}
            <section className="py-24 bg-brand-darker/40 border-t border-white/5 relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <span className="text-xs uppercase font-extrabold tracking-[4px] text-[#00AEEF] font-mono">LEGACY & SPARK</span>
                    <h3 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                      We Sculpt Kinetic BLUEPRINTS
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-light">
                      Equipped with high-performance Hammer Strength setups and supervised by IFBB athletic coaches, H2O Gym Egypt is the largest premium bodybuilding, CrossFit and medical restoration chain in the country. Our unified everywhere-access token gives physical entry to over 25+ mega branches.
                    </p>
                    <button
                      onClick={() => {
                        setActiveTab('about');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="group flex items-center gap-2 px-5 py-3 rounded-xl bg-[#00080F] border border-white/10 hover:border-[#00AEEF] text-xs font-bold text-white uppercase tracking-wider transition-all cursor-pointer"
                    >
                      Read full company chronicle
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                  
                  <div className="relative rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=800"
                      alt="Gym facilities"
                      className="w-full h-80 object-cover object-center filter brightness-90 saturate-75"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'about' && (
          <div className="animate-[fadeIn_0.3s_ease-out]">
            <About />
          </div>
        )}

        {activeTab === 'branches' && (
          <div className="animate-[fadeIn_0.3s_ease-out]">
            <Branches />
          </div>
        )}

        {activeTab === 'classes' && (
          <div className="animate-[fadeIn_0.3s_ease-out]">
            <Programs />
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="animate-[fadeIn_0.3s_ease-out]">
            <Gallery />
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="animate-[fadeIn_0.3s_ease-out]">
            <Contact />
          </div>
        )}
      </main>

      {/* Floating interactive buttons */}
      <FloatingWidgets />

      {/* Footer copyright newsletter */}
      <Footer onNavClick={(id) => setActiveTab(id)} />
    </div>
  );
}
