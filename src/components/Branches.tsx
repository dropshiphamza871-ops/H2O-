import React, { useState } from 'react';
import { BRANCHES_DATA } from '../data';
import { Search, MapPin, Phone, Clock, PhoneCall, Check, Shield, User } from 'lucide-react';

const MENS_BRANCHES = [
  {
    name: "Manial (Nile) Branch",
    phone: "01090000056",
    address: "67 Abdulaziz Al-Saud St., above Galaxy Cinema",
    city: "Cairo"
  },
  {
    name: "Manial (Al-Rawda) Branch",
    phone: "01010002706",
    address: "El-Mamaleek Square – Manial Al-Rawdah",
    city: "Cairo"
  },
  {
    name: "Mohandeseen Branch",
    phone: "01059300002",
    address: "42 Syria St., Mohandessin",
    city: "Giza"
  },
  {
    name: "Heliopolis Branch",
    phone: "01156500009",
    address: "98 Mohamed Farid St., off Farid Semeika St",
    city: "Cairo"
  },
  {
    name: "Maadi Branch",
    phone: "01155555305",
    address: "Rd. 263, Building 27, New Maadi",
    city: "Cairo"
  },
  {
    name: "Obour City Branch",
    phone: "01097000049",
    address: "Neighborhood 3, in front of Abbas Al-Akkad Street, the ninth district",
    city: "Cairo"
  },
  {
    name: "Nasr City Branch",
    phone: "01011111536",
    address: "47 Abd Al Razak Al Sanhouri, Al Manteqah as Sadesah, Nasr City",
    city: "Cairo"
  },
  {
    name: "Helwan Branch",
    phone: "01119409998",
    address: "Mohamed Sayed Ahmed St., Off Youssef St., Zahraa El Qods Tower, Helwan, Cairo Above CIB",
    city: "Cairo"
  },
  {
    name: "Zamalek Branch",
    phone: "01065811113",
    address: "9 Al-Adel Abu Bakr Street, Abu Al-Fada, Zamalek",
    city: "Cairo"
  },
  {
    name: "October Branch",
    phone: "01100002263",
    address: "Somid Mall, next to the Administrative Control Authority and Taqa Gas Station",
    city: "Giza"
  },
  {
    name: "Dokki Branch",
    phone: "01019996929",
    address: "30 Al Mesaha, Above Papa Johns, Dokki, Giza",
    city: "Giza"
  }
];

const WOMENS_BRANCHES = [
  {
    name: "Manial Branch",
    phone: "01111201333",
    address: "38 Al Ekhshed st, beside Al Ekhshed mosque AR Rawdah WA Al Meqyas,",
    city: "Cairo"
  },
  {
    name: "Mohandeseen Branch",
    phone: "01068887507",
    address: "42 Syria St., Mohandessin",
    city: "Giza"
  },
  {
    name: "Heliopolis Branch",
    phone: "01154767777",
    address: "7 Hussien Shafek st، Hadaeq Al Qubbah, Qism El-Nozha",
    city: "Cairo"
  },
  {
    name: "Maadi Branch",
    phone: "01092222217",
    address: "Rd. 263, Building 27, New Maadi",
    city: "Cairo"
  },
  {
    name: "El Obour Branch",
    phone: "01033427755",
    address: "Sanallah Ibrahim St., Ninth District, El Obour",
    city: "Cairo"
  },
  {
    name: "Mokattam Branch",
    phone: "01062822226",
    address: "Karim Banona Street, Al Abageyah",
    city: "Cairo"
  },
  {
    name: "Nasr City Branch",
    phone: "01092222216",
    address: "Anwar Al Mofti, Al Manteqah Al Oula, Nasr City",
    city: "Cairo"
  },
  {
    name: "Sheraton Branch",
    phone: "01011111563",
    address: "49 Kamal Eldin Hussien st, beside Oriental Weavers Sheraton Al Matar, El Nozha, Cairo",
    city: "Cairo"
  },
  {
    name: "Shubra Branch",
    phone: "01011111857",
    address: "13 Dolenat, As Sahel, El Sahel, Shubra",
    city: "Cairo"
  },
  {
    name: "Helwan Branch",
    phone: "01118908886",
    address: "Faydi Pasha, Eastern Helwan, Helwan District",
    city: "Cairo"
  },
  {
    name: "October Branch",
    phone: "01003499996",
    address: "Somid Mall, next to the Administrative Control Authority and Taqa Gas Station",
    city: "Giza"
  }
];

export default function Branches() {
  const [activeTab, setActiveTab] = useState<'men' | 'women' | 'coed'>('men');
  const [searchTerm, setSearchTerm] = useState('');

  // Filtering Logic
  const getFilteredList = () => {
    let currentList = [];
    if (activeTab === 'men') {
      currentList = MENS_BRANCHES;
    } else if (activeTab === 'women') {
      currentList = WOMENS_BRANCHES;
    } else {
      currentList = BRANCHES_DATA.map(b => ({
        name: b.name,
        phone: b.phone,
        address: b.address,
        city: b.city,
        isElite: true,
        amenities: b.amenities
      }));
    }

    if (!searchTerm.trim()) return currentList;

    const term = searchTerm.toLowerCase();
    return currentList.filter(item => 
      item.name.toLowerCase().includes(term) ||
      item.address.toLowerCase().includes(term) ||
      item.city.toLowerCase().includes(term)
    );
  };

  const filteredList = getFilteredList();

  return (
    <section id="h2o-branches" className="py-24 bg-[#050B14] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center border-b border-white/5 pb-10">
          <span className="text-xs uppercase font-extrabold tracking-[6px] text-[#00AEEF] font-mono">EGYPT NATIONWIDE NETWORK</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase mt-3 tracking-tighter text-white">
            Our Elite Branches
          </h2>
          <p className="text-slate-400 text-sm font-light mt-3 max-w-xl mx-auto leading-relaxed">
            Unrestricted access to Egypt's supreme fitness facilities. Locate standard and gender-exclusive branches closest to you.
          </p>
        </div>

        {/* Global Hotline Hotline Section banner */}
        <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-[#00080F] via-[#050B14] to-[#00080F] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="p-2.5 rounded-xl bg-[#00AEEF]/10 text-[#00AEEF] border border-[#00AEEF]/15 shrink-0">
              <PhoneCall className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-mono tracking-wider font-extrabold text-[#00AEEF]">CONSOLIDATED HELPLINE</span>
              <p className="text-xs font-bold text-slate-300">Have questions about specific branch programs? Feel free to call us.</p>
            </div>
          </div>
          <a
            href="tel:19420"
            className="px-6 py-2.5 rounded-xl bg-[#00AEEF] hover:bg-[#0096cf] text-xs font-black uppercase text-[#050B14] tracking-widest transition-all cursor-pointer text-center shrink-0"
          >
            CALL 19420
          </a>
        </div>

        {/* Embedded Map Section */}
        <div className="mt-12">
          <div className="p-1 rounded-2xl bg-[#00080F] border border-white/5 shadow-2xl overflow-hidden relative">
            <div className="absolute top-4 left-4 z-10">
              <div className="bg-[#050B14]/90 backdrop-blur border border-white/15 rounded-xl px-4 py-2.5 shadow-lg">
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#00AEEF] font-black">
                  Interactive Live Network Map
                </span>
              </div>
            </div>
            
            <div className="w-full h-[480px] bg-[#050B14] rounded-xl overflow-hidden relative">
              <iframe 
                src="https://www.google.com/maps/d/embed?mid=1xSVcW3r43FXQJb2jMwZ0r1JnfLUFiIA&ehbc=2E312F" 
                width="100%" 
                height="100%"
                style={{ border: 0, marginTop: '-46px' }}
                allowFullScreen={true}
                title="H2O Egypt Network Google Map"
              />
            </div>
          </div>
        </div>

        {/* Directory Controls and Lists */}
        <div className="mt-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/5 pb-6">
            
            {/* Category Switch Tabs */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-[#00080F] border border-white/5 rounded-2xl">
              <button
                onClick={() => { setActiveTab('men'); setSearchTerm(''); }}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                  activeTab === 'men'
                    ? 'bg-[#00AEEF] text-[#050B14] shadow-md shadow-[#00AEEF]/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                ♂ Men Only ({MENS_BRANCHES.length})
              </button>
              <button
                onClick={() => { setActiveTab('women'); setSearchTerm(''); }}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                  activeTab === 'women'
                    ? 'bg-[#00AEEF] text-[#050B14] shadow-md shadow-[#00AEEF]/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                ♀ Women Only ({WOMENS_BRANCHES.length})
              </button>
              <button
                onClick={() => { setActiveTab('coed'); setSearchTerm(''); }}
                className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                  activeTab === 'coed'
                    ? 'bg-[#00AEEF] text-[#050B14] shadow-md shadow-[#00AEEF]/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                ✦ Luxury Co-ed ({BRANCHES_DATA.length})
              </button>
            </div>

            {/* Quick Filter Search input */}
            <div className="relative">
              <Search className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search area or address..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-64 pl-10 pr-4 py-2.5 rounded-xl bg-[#00080F] border border-white/5 text-xs text-white focus:border-[#00AEEF] outline-none transition-all placeholder:text-slate-600 font-mono"
              />
            </div>
          </div>

          {/* Clean Branch Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {filteredList.length === 0 ? (
              <div className="col-span-full py-16 text-center border border-white/5 rounded-2xl bg-[#00080F]/45">
                <MapPin className="w-8 h-8 text-slate-700 mx-auto mb-3" />
                <p className="text-slate-500 font-mono text-xs uppercase tracking-wider">No matching branches found</p>
                <p className="text-slate-650 text-[11px] mt-1">Try clear word search like "Maadi" or "Manial"</p>
              </div>
            ) : (
              filteredList.map((branch, index) => (
                <div 
                  key={index} 
                  className="p-6 rounded-2xl bg-[#00080F]/40 border border-white/5 hover:border-[#00AEEF]/20 hover:bg-[#00080F]/80 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[9px] uppercase font-mono tracking-wider font-extrabold text-[#00AEEF]">
                        {branch.city}
                      </span>
                      {activeTab === 'coed' && (
                        <span className="px-2 py-0.5 rounded bg-[#00AEEF]/10 border border-[#00AEEF]/20 text-[#00AEEF] text-[8px] font-mono font-bold uppercase">
                          VIP Elite
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-white uppercase mt-3 tracking-wide">
                      {branch.name}
                    </h3>

                    <p className="text-xs text-slate-400 mt-2 font-light leading-relaxed">
                      {branch.address}
                    </p>

                    {branch.amenities && (
                      <div className="flex flex-wrap gap-1 mt-4">
                        {branch.amenities.slice(0, 3).map((am, i) => (
                          <span key={i} className="px-1.5 py-0.5 rounded text-[8px] bg-white/5 text-slate-400 font-mono">
                            • {am}
                          </span>
                        ))}
                        {branch.amenities.length > 3 && (
                          <span className="text-[8px] text-slate-500 font-mono self-center">
                            +{branch.amenities.length - 3} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                      <Phone className="w-3.5 h-3.5 text-[#00AEEF]" />
                      <span>{branch.phone}</span>
                    </div>
                    
                    <a 
                      href={`tel:${branch.phone}`}
                      className="px-3.5 py-1.5 rounded-lg border border-white/10 hover:border-[#00AEEF] bg-[#050B14] hover:bg-[#00AEEF]/10 text-[10px] font-bold uppercase text-slate-300 hover:text-[#00AEEF] tracking-widest transition-all cursor-pointer"
                    >
                      Call Direct
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
