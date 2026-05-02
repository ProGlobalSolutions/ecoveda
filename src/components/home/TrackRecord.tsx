import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bioImg from '../../assets/bio.webp';
import manImg from '../../assets/man.webp';
import solImg from '../../assets/sol.webp';
import rwandaImg from '../../assets/rwanda.webp';

const PROJECTS = [
  {
    id: 1,
    name: 'Rwanda Clean Cooking Initiative',
    category: 'Energy & Industry',
    registry: 'Gold Standard',
    status: 'Ongoing',
    statusColor: 'teal',
    bgImage: rwandaImg,
  },
  {
    id: 2,
    name: 'Indonesian Mangrove Restoration',
    category: 'Natural Climate Solutions',
    registry: 'Verra',
    status: 'Ongoing',
    statusColor: 'teal',
    bgImage: manImg,
  },
  {
    id: 3,
    name: 'Rural India Solar Minigrid',
    category: 'Energy & Industry',
    registry: 'CDM',
    status: 'Completed',
    statusColor: 'emerald',
    bgImage: solImg,
  },
  {
    id: 4,
    name: 'Biochar Carbon Sequestration Framework',
    category: 'Methodology',
    registry: 'Puro.earth',
    status: 'Ongoing',
    statusColor: 'teal',
    bgImage: bioImg,
  },
  {
    id: 5,
    name: 'Central India Agroforestry',
    category: 'Natural Climate Solutions',
    registry: 'Verra',
    status: 'Completed',
    statusColor: 'emerald',
    bgImage: 'https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=800',
  },
  {
    id: 6,
    name: 'Maharashtra Industrial Waste Heat Recovery',
    category: 'Energy & Industry',
    registry: 'Gold Standard',
    status: 'Ongoing',
    statusColor: 'teal',
    bgImage: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=800',
  },
];

const CATEGORIES = ['All', 'Natural Climate Solutions', 'Energy & Industry', 'Methodology'];

export default function TrackRecord() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = PROJECTS.filter(
    (p) => activeFilter === 'All' || p.category === activeFilter
  );

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="mb-6">
          <span className="text-emerald-600 font-semibold uppercase text-sm tracking-wider block mb-3">
            Track Record
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 leading-tight max-w-3xl">
            Consulting and Project Development Portfolio
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
            With a rapidly growing portfolio of completed and ongoing engagements, Ecoveda Climate has established a proven track record across energy, nature-based solutions and frontier carbon removal, spanning multiple continents and registries.
          </p>
        </div>

        {/* FILTERS */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {CATEGORIES.map((cat) => {
            const count = cat === 'All' ? PROJECTS.length : PROJECTS.filter(p => p.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === cat 
                    ? 'bg-slate-900 text-white shadow-md' 
                    : 'bg-stone-100 text-slate-600 hover:bg-stone-200'
                }`}
              >
                {cat}
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  activeFilter === cat ? 'bg-white/20 text-white' : 'bg-white text-slate-500 shadow-sm'
                }`}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* GRID */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`aspect-square rounded-2xl p-5 shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer`}
              >
                {/* BACKGROUND IMAGE */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.bgImage})` }}
                />
                
                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/40 transition-opacity duration-500 group-hover:opacity-90" />
                
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded-md bg-white/20 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-white mb-6 shadow-sm group-hover:border-emerald-400 group-hover:text-emerald-300 transition-colors">
                    {project.registry}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white leading-snug group-hover:text-emerald-300 transition-colors">
                    {project.name}
                  </h3>
                </div>

                <div className="relative z-10 flex items-center gap-2 border-t border-white/20 pt-4 mt-6">
                  <div className={`w-2 h-2 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.5)] ${project.statusColor === 'emerald' ? 'bg-emerald-400' : 'bg-teal-300'}`} />
                  <span className="text-sm font-semibold uppercase tracking-wider text-white/90">
                    {project.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}




