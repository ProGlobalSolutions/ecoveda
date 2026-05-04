import { motion } from 'motion/react';
import { PROJECTS } from '../constants/projects';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* HEADER */}
      <section className="px-6 md:px-10 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
          Project Portfolio
        </h1>
        <div className="h-1 w-20 bg-emerald-600 mt-4"></div>
      </section>

      {/* PROJECT GRID */}
      <section className="pb-24 px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative aspect-[4/5] rounded-lg overflow-hidden bg-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
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

                {/* Top-Right Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-full backdrop-blur-md border ${
                    project.type === 'CDR' 
                      ? 'bg-blue-500/20 border-blue-400/30 text-blue-100' 
                      : 'bg-emerald-500/20 border-emerald-400/30 text-emerald-100'
                  }`}>
                    {project.type}
                  </span>
                </div>

                {/* Bottom Overlay Project Name */}
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <h3 className="text-white text-2xl font-bold leading-tight">
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




