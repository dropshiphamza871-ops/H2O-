import React, { useEffect, useState } from 'react';
import { Users, Dumbbell, MapPin, Award } from 'lucide-react';

interface StatItem {
  id: string;
  targetNum: number;
  suffix: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

export default function Stats() {
  const stats: StatItem[] = [
    {
      id: 'branches',
      targetNum: 25,
      suffix: '+',
      label: 'Mega Branches',
      description: 'Fully integrated Egypt-wide premium fitness compounds',
      icon: <MapPin className="w-6 h-6 text-[#00AEEF]" />
    },
    {
      id: 'members',
      targetNum: 100000,
      suffix: '+',
      label: 'Active Athletes',
      description: 'Egypt’s most resilient fitness and recovery community',
      icon: <Users className="w-6 h-6 text-[#4dceff]" />
    },
    {
      id: 'trainers',
      targetNum: 150,
      suffix: '+',
      label: 'Certified Coaches',
      description: 'Medical and physical specialists trained in biomechanics',
      icon: <Award className="w-6 h-6 text-[#00AEEF]" />
    },
    {
      id: 'machines',
      targetNum: 5200,
      suffix: '+',
      label: 'Premium Assets',
      description: 'High-end structural machinery, cardio & recovery plates',
      icon: <Dumbbell className="w-6 h-6 text-[#4dceff]" />
    }
  ];

  return (
    <section id="stats-section" className="relative py-12 bg-[#00080F] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              id={`stat-card-${stat.id}`}
              className="stat-card group transition-all duration-300 hover:opacity-95"
            >
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tighter leading-none mb-1">
                {stat.targetNum >= 1000 ? `${stat.targetNum / 1000}k` : stat.targetNum}
                <span className="text-[#00AEEF] ml-0.5">{stat.suffix}</span>
              </div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-mono font-bold">
                {stat.label === 'Mega Branches' ? 'Luxury Branches' : stat.label}
              </div>
              <p className="text-[11px] text-slate-400 mt-2 font-light leading-relaxed max-w-xs block">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
