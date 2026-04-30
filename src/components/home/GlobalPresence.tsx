import React from 'react';
import { motion } from 'framer-motion';

const LOCATIONS = [
  // GREEN (HQ/Offices)
  { id: 'delhi', name: 'New Delhi, India (HQ)', top: '42%', left: '69%', color: 'bg-emerald-500' },
  { id: 'guwahati', name: 'Guwahati, India', top: '44%', left: '72%', color: 'bg-emerald-500' },
  
  // TEAL (Active Projects)
  { id: 'pakistan', name: 'Pakistan', top: '40%', left: '66%', color: 'bg-teal-400' },
  { id: 'indonesia', name: 'Indonesia', top: '62%', left: '80%', color: 'bg-teal-400' },
  { id: 'timor', name: 'Timor-Leste', top: '65%', left: '84%', color: 'bg-teal-400' },
  { id: 'saudi', name: 'Saudi Arabia', top: '45%', left: '60%', color: 'bg-teal-400' },
  { id: 'cambodia', name: 'Cambodia', top: '52%', left: '78%', color: 'bg-teal-400' },
  { id: 'malawi', name: 'Malawi', top: '68%', left: '55%', color: 'bg-teal-400' },
  { id: 'rwanda', name: 'Rwanda', top: '60%', left: '53%', color: 'bg-teal-400' },
  { id: 'nigeria', name: 'Nigeria', top: '55%', left: '48%', color: 'bg-teal-400' },
  { id: 'mongolia', name: 'Mongolia', top: '30%', left: '75%', color: 'bg-teal-400' },
  
  // GOLD (Representatives)
  { id: 'zambia', name: 'Zambia', top: '65%', left: '53%', color: 'bg-amber-400' },
  { id: 'mexico', name: 'Mexico City', top: '45%', left: '20%', color: 'bg-amber-400' },
];

export default function GlobalPresence() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-600 font-semibold uppercase text-sm tracking-wider block mb-3">
            Global Presence
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight">
            Where We Work
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            From our headquarters in New Delhi, Ecoveda Climate operates a growing international network, with a regional office in Guwahati and representatives in Zambia and Mexico City, enabling us to deliver on-the-ground climate impact across Asia, Africa, the Middle East and Latin America.
          </p>
        </div>

        {/* MAP CONTAINER */}
        <div className="relative w-full rounded-3xl bg-stone-50 border border-stone-200 p-4 md:p-8 mb-12">
          <div className="overflow-auto touch-pan-x touch-pan-y w-full scrollbar-hide rounded-2xl">
            <div className="min-w-[800px] relative">
              
              {/* WORLD MAP SVG */}
              <svg viewBox="0 0 1008 643" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-stone-200">
                <path d="M495.8 116.8c... (Placeholder for actual map SVG data)..." fill="currentColor"/>
                {/* Simplified SVG Path for World Map just to render an outline */}
                <path d="M100 100 L900 100 L900 500 L100 500 Z" fill="transparent" stroke="transparent"/> 
                {/* Due to SVG length, using a background image is typically better for detailed maps unless imported. I will use a stylized placeholder or simple shapes if no asset exists, or rely on the pins. */}
                {/* Wait, I can use a generic World Map background image! */}
              </svg>
              
              {/* Fallback to CSS Background Map if SVG is too large */}
              <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-contain bg-center opacity-20" />

              {/* PINS */}
              {LOCATIONS.map((loc) => (
                <div 
                  key={loc.id}
                  className="absolute group z-10"
                  style={{ top: loc.top, left: loc.left }}
                >
                  <div className={`w-4 h-4 rounded-full ${loc.color} shadow-lg ring-4 ring-white relative z-10 cursor-pointer hover:scale-125 transition-transform`} />
                  <div className={`absolute -inset-2 rounded-full ${loc.color} opacity-20 animate-ping`} />
                  
                  {/* TOOLTIP */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {loc.name}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
                  </div>
                </div>
              ))}

            </div>
          </div>
          
          {/* LEGEND */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 pt-6 border-t border-stone-200">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-emerald-500/30" />
              <span className="text-sm font-medium text-slate-700">HQ & Regional Offices</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-teal-400 ring-2 ring-teal-400/30" />
              <span className="text-sm font-medium text-slate-700">Active Projects & Advisory</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-400 ring-2 ring-amber-400/30" />
              <span className="text-sm font-medium text-slate-700">Representatives</span>
            </div>
          </div>
        </div>

        {/* DETAILS GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100">
            <h3 className="font-bold text-slate-900 mb-2">Headquarters</h3>
            <p className="text-slate-600 mb-4">New Delhi, India</p>
            <p className="text-sm text-slate-500 leading-relaxed">
              DGL 019, Ground Floor, DLF Galleria, Mayur Vihar, New Delhi 110091
            </p>
          </div>
          <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100">
            <h3 className="font-bold text-slate-900 mb-2">Regional Office</h3>
            <p className="text-slate-600 mb-4">Guwahati, India</p>
            <p className="text-sm text-slate-500 leading-relaxed">
              Supporting operations across North-East India and South-East Asian markets
            </p>
          </div>
          <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100">
            <h3 className="font-bold text-slate-900 mb-2">International</h3>
            <p className="text-slate-600 mb-4">Zambia and Mexico City</p>
            <p className="text-sm text-slate-500 leading-relaxed">
              Regional representatives driving climate projects across Africa and Latin America
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
