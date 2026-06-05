import React, { useState } from 'react';
import { CLASSES_DATA } from '../data';
import { FitnessClass } from '../types';
import { Calendar, User, Clock, Flame, CheckCircle, Info } from 'lucide-react';
import GymImage from './GymImage';

export default function Programs() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [bookingSuccessClass, setBookingSuccessClass] = useState<string | null>(null);

  const categories = ['All', 'Zumba', 'Belly Dance', 'Jumping', 'Kick Boxing', 'ABS', 'Yoga', 'Squatting', 'Cardio'];

  const filteredClasses = selectedCategory === 'All'
    ? CLASSES_DATA
    : CLASSES_DATA.filter(c => c.category === selectedCategory);

  const handleBookClass = (className: string) => {
    setBookingSuccessClass(className);
    setTimeout(() => {
      setBookingSuccessClass(null);
    }, 4500);
  };

  return (
    <section id="classes-schedule" className="py-24 bg-[#050B14] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/5 pb-10 gap-6">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-[4px] text-[#00AEEF] font-mono">FEATURED PATHWAYS</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase mt-3 tracking-tighter">
              Interactive Classes <sub className="font-semibold text-xs text-[#00AEEF]">H2O Elite</sub>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-light mt-3 max-w-xl">
              Filter through our scientifically designed group metabolic workshops. Book your priority slot instantly.
            </p>
          </div>

          {/* Categories Selector */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'btn-primary-elegant'
                    : 'bg-[#00080F] hover:bg-white/5 border border-white/5 text-slate-300 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Class Grid */}
        <div className="mt-12">
          {filteredClasses.length === 0 ? (
            <div className="bg-[#00080F]/40 border border-white/5 p-12 text-center rounded-2xl max-w-xl mx-auto">
              <Info className="w-8 h-8 text-[#00AEEF] mx-auto mb-4" />
              <p className="text-slate-400 font-bold uppercase tracking-wider text-xs">No specific workshops matching this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredClasses.map((item) => (
                <div
                  key={item.id}
                  className="group flex flex-col rounded-3xl bg-[#00080F]/60 border border-white/5 hover:border-[#00AEEF]/50 transition-all duration-300 shadow-xl overflow-hidden"
                >
                  {/* Class Image Section */}
                  <div className="w-full h-48 relative overflow-hidden bg-[#00080F]">
                    <GymImage
                      src={item.image}
                      fallback={item.fallbackUrl || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000'}
                      alt={item.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 z-10">
                      <span className="text-[9px] uppercase font-mono font-extrabold tracking-wider px-2 py-1 rounded bg-[#00AEEF] text-white">
                        {item.category}
                      </span>
                      <span className={`text-[9px] uppercase font-mono font-bold tracking-wider px-2 py-1 rounded bg-black/60 backdrop-blur-md ${
                        item.intensity === 'Beginner' ? 'text-green-400' :
                        item.intensity === 'Medium' ? 'text-amber-400' :
                        item.intensity === 'High' ? 'text-orange-400' : 'text-rose-400'
                      }`}>
                        {item.intensity} Intensity
                      </span>
                    </div>
                  </div>
                  
                  {/* Class Text & Info */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold uppercase text-white group-hover:text-[#00AEEF] transition-colors line-clamp-1">
                        {item.name}
                      </h3>
                      <p className="text-xs text-slate-400 mt-2.5 font-normal leading-relaxed line-clamp-2">
                        {item.description}
                      </p>

                      {/* Key Performance Benefits */}
                      <div className="mt-4 pt-4 border-t border-white/5">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#00AEEF] font-mono block">Performance Benefits</span>
                        <ul className="mt-2 space-y-1.5">
                          {item.benefits.slice(0, 2).map((b, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                              <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Timings summary */}
                      <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#00AEEF]" />
                          {item.duration}
                        </span>
                        <span>{item.schedule.length} sessions weekly</span>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
