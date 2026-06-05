import React, { useState } from 'react';
import { GALLERY_DATA } from '../data';
import { GalleryItem } from '../types';
import { X, Play, Image as ImageIcon, ChevronLeft, ChevronRight, Compass } from 'lucide-react';
import GymImage from './GymImage';

export default function Gallery() {
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [activePhotoIdx, setActivePhotoIdx] = useState<number | null>(null);

  const categories = ['All', 'Branches', 'Equipment', 'Workouts', 'Community'];

  const filteredPhotos = filterCategory === 'All'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(p => p.category === filterCategory);

  const handleNextPhoto = () => {
    if (activePhotoIdx === null) return;
    const nextIdx = (activePhotoIdx + 1) % filteredPhotos.length;
    setActivePhotoIdx(nextIdx);
  };

  const handlePrevPhoto = () => {
    if (activePhotoIdx === null) return;
    const prevIdx = (activePhotoIdx - 1 + filteredPhotos.length) % filteredPhotos.length;
    setActivePhotoIdx(prevIdx);
  };

  return (
    <section id="h2o-gallery" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-900 pb-10 gap-6">
          <div>
            <span className="text-xs uppercase font-extrabold tracking-[4px] text-[#00AEEF] font-mono">VISUAL ATHLETIC ESSENCE</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase mt-3 tracking-tight text-white">
              H2O Media Showcase <sub className="font-semibold text-xs text-[#00AEEF]">Interactive Media</sub>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-light mt-3 max-w-xl">
              Preview our premium lifting cages, crystal olympic custom waters, active cardio zones, and functional fitness compounds around Cairo and Alexandria.
            </p>
          </div>

          {/* Gallery Category Selectors */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  filterCategory === cat
                    ? 'bg-[#00AEEF] text-white shadow-lg shadow-[#00AEEF]/20'
                    : 'bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Masonry-like grid list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setActivePhotoIdx(index)}
              className="group relative rounded-3xl overflow-hidden aspect-square ssm:aspect-video bg-slate-900 border border-slate-850 cursor-pointer shadow-lg hover:shadow-[#00AEEF]/5 hover:border-[#00AEEF]/50 transition-all duration-300 transform hover:scale-[1.02]"
            >
              <GymImage
                src={photo.imageUrl}
                fallback={photo.fallbackUrl || 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000'}
                alt={photo.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
              />

              {/* Hover card overlay detail */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <span className="text-[9px] uppercase font-mono text-[#00AEEF] font-bold tracking-widest">{photo.category}</span>
                <h4 className="text-sm font-bold uppercase tracking-tight text-white mt-1">{photo.title}</h4>
                <div className="mt-3 flex items-center gap-1 text-[10px] text-slate-400 font-mono">
                  <Play className="w-3.5 h-3.5 text-[#00AEEF] fill-[#00AEEF]" />
                  <span>PREVIEW FULL ATMOSPHERE</span>
                </div>
              </div>

              {/* Static visual asset indicator */}
              <div className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/70 border border-slate-850 backdrop-blur-xs text-slate-400 group-hover:text-white transition-colors">
                <ImageIcon className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

        {/* Full screen Lightbox overlay */}
        {activePhotoIdx !== null && (
          <div className="fixed inset-0 z-50 bg-black/95 select-none flex items-center justify-center p-4 backdrop-blur-md">
            
            {/* Top-Left Back Button */}
            <button
              onClick={() => setActivePhotoIdx(null)}
              className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800/80 hover:border-[#00AEEF]/30 transition-all cursor-pointer text-xs font-bold uppercase tracking-wider"
              title="Back to Gallery"
            >
              <ChevronLeft className="w-4 h-4 text-[#00AEEF]" />
              <span>Back to Gallery</span>
            </button>

            {/* Close */}
            <button
              onClick={() => setActivePhotoIdx(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-all cursor-pointer"
              title="Close Viewer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Nav Button */}
            <button
              onClick={handlePrevPhoto}
              className="absolute left-6 p-3 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-all cursor-pointer"
              title="Previous Media"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image display center frame */}
            <div className="max-w-4xl w-full flex flex-col items-center justify-center max-h-[80vh]">
              <div className="max-h-[60vh] w-full max-w-2xl aspect-video rounded-2xl bg-slate-950 shadow-2xl border border-slate-900 overflow-hidden animate-[fadeIn_0.2s_ease-out]">
                <GymImage
                  src={filteredPhotos[activePhotoIdx].imageUrl}
                  fallback={filteredPhotos[activePhotoIdx].fallbackUrl || 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000'}
                  alt={filteredPhotos[activePhotoIdx].title}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="text-center mt-6 space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#00AEEF] font-bold">
                  {filteredPhotos[activePhotoIdx].category} Category
                </span>
                <h3 className="text-lg font-black uppercase text-white tracking-tight">
                  {filteredPhotos[activePhotoIdx].title}
                </h3>
                <p className="text-[11px] text-slate-500 font-mono">H2O Gym Egypt - Premium Visual Archive</p>
                
                {/* Back button below image */}
                <div className="pt-4">
                  <button
                    onClick={() => setActivePhotoIdx(null)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00AEEF]/10 hover:bg-[#00AEEF] text-[#00AEEF] hover:text-[#050B14] border border-[#00AEEF]/20 hover:border-transparent text-xs font-black uppercase tracking-widest transition-all cursor-pointer"
                  >
                    ← Back to Gallery
                  </button>
                </div>
              </div>
            </div>

            {/* Right Nav Button */}
            <button
              onClick={handleNextPhoto}
              className="absolute right-6 p-3 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-all cursor-pointer"
              title="Next Media"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
