import React from 'react';
import { Award, Zap, Compass, BatteryCharging, Heart, ShieldAlert } from 'lucide-react';

export default function Features() {
  const whyChooseUs = [
    {
      title: 'Olympic-Grade Equipment',
      desc: 'Work out on premium, heavy-duty machinery from Hammer Strength, Eleiko, and Life Fitness. Our setups meet official international athletic competition standards.',
      icon: <Zap className="w-6 h-6 text-[#00AEEF]" />
    },
    {
      title: 'Biomechanic Sports Science',
      desc: 'Our certified sports coaches implement advanced biomechanical principles, ensuring and guiding you through joint-friendly, highly targeted mass and power developments.',
      icon: <Award className="w-6 h-6 text-[#bd93f9]" />
    },
    {
      title: 'Ultra-Luxury Recovery SPA',
      desc: 'Escape fatigue inside our premium hot steam baths, Finnish dry saunas, cryotherapy chambers, and professional therapeutic tissue massage clinics.',
      icon: <Compass className="w-6 h-6 text-[#00AEEF]" />
    },
    {
      title: 'Anywhere Pass Connection',
      desc: 'Gain the freedom to jump and workout across any of our 25+ premium branches inside Egypt. Instant booking and automated verification via H2O Smart App.',
      icon: <BatteryCharging className="w-6 h-6 text-[#22c55e]" />
    },
    {
      title: 'Scientific Food Blueprints',
      desc: 'Access our official clinical nutritionists to map out customized high-density dietary schedules aligned with your metabolic rates and individual lifestyle patterns.',
      icon: <Heart className="w-6 h-6 text-rose-500" />
    },
    {
      title: 'Strict Hygiene & Bio-safety',
      desc: 'Experience rigorous hygiene policies, multi-filtration ambient ventilation systems, state-of-the-art lockers, and personalized medical safety checkups.',
      icon: <ShieldAlert className="w-6 h-6 text-[#00AEEF]" />
    }
  ];

  return (
    <section id="why-choose-h2o" className="py-24 bg-[#050B14] relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,174,239,0.01)_1px,transparent_1px),linear-gradient(to_right,rgba(0,174,239,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs uppercase font-extrabold tracking-[6px] text-[#00AEEF] font-mono">WHY H2O GYM</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 uppercase tracking-tighter">
            The Gold Standard of <span className="text-[#00AEEF]">Egyptian Fitness</span>
          </h2>
          <p className="text-slate-400 mt-4 text-sm sm:text-base font-light">
            We don’t just offer access to weight plates; we customize elite daily workout and biological rest environments for professional athletes and dedicated amateurs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {whyChooseUs.map((feature, idx) => (
            <div
              key={idx}
              id={`feature-card-${idx}`}
              className="glass rounded-2xl p-8 flex flex-col justify-between hover:bg-white/5 cursor-pointer transition-all duration-300 relative group overflow-hidden border border-white/5"
            >
              <div>
                <div className="brand-gradient w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6 font-bold font-mono">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold text-white uppercase group-hover:text-[#00AEEF] transition-colors">{feature.title}</h3>
                <p className="text-xs text-slate-400 mt-4 leading-relaxed font-light">{feature.desc}</p>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-cyan text-[10px] font-bold tracking-widest uppercase flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Explore Blueprint &rarr;
                </span>
                <span className="opacity-40">{feature.icon}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
