import React, { useState } from 'react';
import { Target, Eye, ShieldAlert, Award, Star, Trophy, Users, ShieldCheck } from 'lucide-react';

export default function About() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const timeline = [
    { year: '2012', title: 'The Water Droplet First spark', desc: 'H2O Gym Egypt launches its very first boutique iron-plate training hub in Heliopolis, introducing premium physical coaches.' },
    { year: '2016', title: '5 branches regional expansion', desc: 'Establishes larger complexes across Maadi, Zamalek, and 6th of October. Pioneers Olympic powerlifting platforms and heated pools.' },
    { year: '2020', title: 'Brand Consolidation & Smart Tech', desc: 'Under Captain Aly Mazhar and clinical dietitians, we introduce biomechanical diagnostics, group training cages, and unified anywhere-hop memberships.' },
    { year: '2023', title: '20 Mega branches Milestone', desc: 'Breaks into Alexandria (Semouha & Kafr Abdo Heritage) and Mansoura. Reaches 80,000 active athletes. Launches centralized WhatsApp priority advisory desks.' },
    { year: '2026', title: '25+ Physical Complexes Nationwide', desc: 'Consolidated as Egypt’s largest premium bodybuilding, CrossFit, and medical recovery chain. Recognized for elite performance architectural standards.' }
  ];

  const highlights = [
    { value: '25+', label: 'Elite Complexes', desc: 'Strategic high-end hubs across Cairo and Alexandria.' },
    { value: '150+', label: 'Certified Coaches', desc: 'Sports scientists and biomechanics physical therapists.' },
    { value: '100K+', label: 'Active Athletes', desc: 'Egypt’s largest, highly motivated workout community.' },
    { value: '24/7', label: 'Access Available', desc: 'Work out around the clock in major chosen compound branches.' }
  ];

  return (
    <section id="h2o-about" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-20 border-b border-slate-900">
          
          {/* Expanded Text Block */}
          <div className="lg:col-span-12 max-w-4xl mx-auto space-y-6">
            <div>
              <span className="text-xs uppercase font-extrabold tracking-[6px] text-[#00AEEF] font-mono">OUR SYSTEM & ETHOS</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white mt-3 tracking-tight">
                Sculpting Peak <br /> <span className="text-[#00AEEF]">Human Blueprint Since 2012</span>
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              H2O Gym Egypt began with a simple but radical sports diagnostic objective: to provide direct access to supreme Olympic-level equipment paired with precise kinetic coaching, avoiding raw commercial crowdedness. Over the decade, we have scaled into the physical home of <strong className="text-white">100,000+ athletes</strong> who demand luxury standard and extreme biomechanical adaptions.
            </p>

            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
              Whether you are looking to lift dense heavy chains on our professional Eleiko platforms, undergo clinical fat recompositions with our designated dieticians, or rest inside hot recovery steam suites, H2O provides state-of-the-art sports ecosystems crafted specifically for elite metrics.
            </p>

            {/* Quick trust stamps */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-900 border-dashed">
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <Trophy className="w-4 h-4 text-[#00AEEF]" />
                <strong>IFBB Professional Standards</strong>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-200">
                <ShieldCheck className="w-4 h-4 text-[#00AEEF]" />
                <strong>Clean Bio-safe Arenas</strong>
              </div>
            </div>
          </div>

        </div>

        {/* Mission and Vision Bento Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-20 border-b border-slate-900">
          
          {/* Mission */}
          <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-905 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#00AEEF]/5 blur-2xl rounded-full" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-850 flex items-center justify-center text-[#00AEEF] mb-6 shadow-md">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold uppercase text-white tracking-tight">Our Core Mission</h3>
              <p className="text-sm text-slate-400 mt-4 leading-relaxed font-light">
                To build, expand, and perfect highly supportive, clinical, and luxurious physical diagnostic sports compounds across Egypt, enabling every dedicated amateur and professional athlete to access top-tier sports science and premium recovery facilities safely without limits.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-905 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#112d42] blur-2xl rounded-full" />
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-850 flex items-center justify-center text-[#4dceff] mb-6 shadow-md">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold uppercase text-white tracking-tight">Our Global Vision</h3>
              <p className="text-sm text-slate-400 mt-4 leading-relaxed font-light">
                To transform Egypt’s fitness standard to lead the Middle East in scientific physical performance architecture. We aim to consolidate 40+ megastar physical training zones inside Egypt by 2028, uniting all schedules on a single smart mobile app.
              </p>
            </div>
          </div>

        </div>

        {/* Presidential Sponsorship & First Egyptian Global Brand National Pledge */}
        <div className="py-12 border-b border-white/5">
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#00080F] via-[#050B14] to-[#000d1a] border border-[#00AEEF]/20 shadow-2xl overflow-hidden">
            {/* Soft decorative golden/cyan ambient blur circles */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#00AEEF]/5 blur-3xl rounded-full pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-amber-500/5 blur-3xl rounded-full pointer-events-none" />
            
            {/* Card header with Title and the Language Toggler Pill button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-white/5">
              <div>
                <span className="text-xs uppercase font-extrabold tracking-[5px] text-amber-500 font-mono flex items-center gap-2">
                  <span>★</span> NATIONAL EXPANSION PLEDGE <span>★</span>
                </span>
                <h3 className={`text-xl sm:text-2xl font-black uppercase text-white mt-2 tracking-tight ${lang === 'ar' ? 'text-right font-sans' : ''}`}>
                  {lang === 'en' ? 'First Egyptian Global Fitness Brand' : 'أول علامة تجارية مصرية عالمية للياقة البدنية'}
                </h3>
              </div>
              
              {/* Language Switcher Pill-Box. Starts on English */}
              <div className="flex bg-[#050B14] border border-white/10 p-1 rounded-xl shrink-0 self-end sm:self-center">
                <button
                  type="button"
                  onClick={() => setLang('en')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase transition-all duration-200 cursor-pointer ${
                    lang === 'en'
                      ? 'bg-[#00AEEF] text-[#050B14] font-black'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => setLang('ar')}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                    lang === 'ar'
                      ? 'bg-[#00AEEF] text-[#050B14] font-black'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  العربية
                </button>
              </div>
            </div>

            {/* Quote content block */}
            <div className="mt-8">
              <blockquote className={`text-sm sm:text-base md:text-lg text-slate-200 font-normal leading-relaxed ${lang === 'ar' ? 'text-right leading-loose' : 'font-light italic'}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
                {lang === 'en' ? (
                  "\"And we strive to be the first Egyptian brand for a group of gyms spreading in the Arab world and the entire world in a way that befits our dear homeland, Egypt, and under the auspices of our wise political leadership that supports investment in Egypt and supports large and small investors in all fields, may God protect and cherish Egypt.\""
                ) : (
                  "«ونحن نسعى جاهدين لنكون أول علامة تجارية مصرية لمجموعة من الصالات الرياضية التي تنتشر في العالم العربي والعالم أجمع بما يليق بوطننا العزيز مصر وتحت رعاية قيادتنا السياسية الحكيمة التي تدعم الاستثمار في مصر وتدعم المستثمرين الكبار والصغار في جميع المجالات، حفظ الله مصر وأعزها.»"
                )}
              </blockquote>
              
              <div className={`mt-6 flex items-center gap-3 ${lang === 'ar' ? 'justify-end' : 'justify-start'}`}>
                <div className="w-1.5 h-1.5 rounded-full bg-[#00AEEF]" />
                <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-[#00AEEF]">
                  {lang === 'en' ? 'H2O Gym Egypt Board' : 'مجلس إدارة إتش تو أو جيم مصر'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Company History/Timeline */}
        <div className="pt-20">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">The H2O Sports Timeline</h3>
            <p className="text-xs text-slate-400 mt-2 font-light">Tracing our physical progress, branches expansion and technological milestones.</p>
          </div>

          <div className="relative border-l border-slate-900 pl-6 sm:pl-10 space-y-12 max-w-3xl mx-auto">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Year Badge */}
                <div className="absolute -left-[38px] sm:-left-[54px] top-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-950 border-2 border-[#00AEEF] group-hover:bg-[#00AEEF] transition-colors flex items-center justify-center text-[10px] sm:text-xs font-mono font-black text-white group-hover:text-slate-950 shadow shadow-[#00AEEF]/20" />
                
                <span className="text-xl font-black text-[#00AEEF] font-mono leading-none">{item.year}</span>
                <h4 className="text-base font-black uppercase text-slate-100 mt-1 tracking-tight group-hover:text-[#00AEEF] transition-all">{item.title}</h4>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 font-light leading-relaxed max-w-xl">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
