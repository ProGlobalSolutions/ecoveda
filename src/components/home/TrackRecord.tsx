import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import bioImg from '../../assets/biochar.webp';
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
    <section className="py-20 bg-gradient-to-br from-[#012A24] via-emerald-950 to-yellow-600/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center sm:text-left"
        >
          <span className="text-emerald-400 font-bold uppercase text-sm tracking-[0.2em] block mb-3">
            Track Record
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight max-w-3xl">
            Consulting and Project Development Portfolio
          </h2>
          <p className="text-emerald-50/80 text-lg leading-relaxed max-w-3xl">
            With a rapidly growing portfolio of completed and ongoing engagements, Ecoveda Climate has established a proven track record across energy, nature-based solutions and frontier carbon removal, spanning multiple continents and registries.
          </p>
        </motion.div>

        {/* FILTERS */}
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-10">
          {CATEGORIES.map((cat) => {
            const count = cat === 'All' ? PROJECTS.length : PROJECTS.filter(p => p.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === cat 
                    ? 'bg-emerald-500 text-white shadow-[0_0_15px_rgba(52,211,153,0.5)] border border-emerald-400' 
                    : 'bg-white/5 text-emerald-50 hover:bg-white/10 border border-white/10'
                }`}
              >
                {cat}
                <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                  activeFilter === cat ? 'bg-white text-emerald-600 shadow-sm' : 'bg-black/30 text-white'
                }`}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* GRID */}
        <motion.div layout className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                /* CHANGED: Replaced emerald glow with bright gold glow */
                className={`group relative flex aspect-[1.2] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 p-3.5 cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:border-yellow-400/80 hover:shadow-[0_0_40px_rgba(250,204,21,0.6)] lg:aspect-[1.26]`}
              >
                {/* BACKGROUND IMAGE */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.bgImage})` }}
                />
                
                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/60 to-slate-900/30 transition-opacity duration-500 group-hover:opacity-90" />
                
                <div className="relative z-10">
                  <span className="mb-2.5 inline-block rounded-md border border-white/20 bg-white/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm backdrop-blur-md transition-colors group-hover:border-yellow-400 group-hover:text-yellow-300">
                    {project.registry}
                  </span>
                  <h3 className="text-[1.05rem] font-bold leading-snug text-white transition-colors group-hover:text-yellow-300 lg:text-[1rem]">
                    {project.name}
                  </h3>
                </div>

                <div className="relative z-10 mt-2.5 flex items-center gap-2 border-t border-white/20 pt-2">
                  <div className={`h-2 w-2 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)] ${project.statusColor === 'emerald' ? 'bg-emerald-400' : 'bg-teal-400'}`} />
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/90">
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




