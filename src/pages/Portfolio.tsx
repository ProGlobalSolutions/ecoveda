import { motion } from 'motion/react';
import { PROJECTS } from '../constants/projects';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* HEADER */}
      <section className="px-6 md:px-10 mb-12 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
          Project Portfolio
        </h1>
        <div className="h-1 w-20 bg-emerald-600 mt-4"></div>
      </section>

      {/* PROJECT GRID */}
      <section className="pb-24 px-6 md:px-10 max-w-7xl mx-auto">
        {/* Changed to 5 columns on large screens to put all 5 items in a single row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              /* Adjusted aspect ratio to 3/4 (portrait) to keep them looking good as narrow columns */
              className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-500 border border-slate-100"
            >
              <Link to={`/portfolio/${project.id}`} className="block h-full w-full">
                {/* Full-bleed Image */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />

                {/* Dark Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 group-hover:from-black/95 transition-colors duration-500" />

                {/* Top-Right Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-2 py-1 text-[9px] font-bold tracking-widest uppercase rounded-sm shadow-sm backdrop-blur-md border ${
                    project.type === 'CDR' 
                      ? 'bg-blue-500/80 border-blue-400 text-white' 
                      : 'bg-emerald-600/90 border-emerald-500 text-white'
                  }`}>
                    {project.type}
                  </span>
                </div>

                {/* Bottom Overlay Project Name */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="text-white text-base sm:text-lg font-bold leading-snug group-hover:text-emerald-400 transition-colors">
                    {project.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}




