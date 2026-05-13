import { motion } from 'motion/react';
import { PROJECTS } from '../constants/projects';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#012A24] pt-32 pb-24 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-px h-1/2 bg-gradient-to-b from-transparent via-emerald-500/10 to-transparent pointer-events-none" />

      {/* HEADER */}
      <section className="px-6 md:px-10 mb-20 max-w-5xl mx-auto relative z-10 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-emerald-400 font-black tracking-widest uppercase text-xs mb-4 block">Proven Track Record</span>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
            Project <span className="text-emerald-400">Portfolio</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            A diverse collection of high-integrity climate solutions delivering measurable impact across global ecosystems.
          </p>
          <div className="h-1 w-24 bg-emerald-500 mt-8 hidden md:block"></div>
        </motion.div>
      </section>

      {/* PROJECT GRID */}
      <section className="px-6 md:px-10 max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-[#022C22] transition-all duration-700 hover:-translate-y-2 hover:shadow-emerald-500/10"
            >
              <Link to={`/portfolio/${project.id}`} className="block h-full w-full">
                {/* Full-bleed Image */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent group-hover:via-black/50 transition-all duration-700" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-emerald-950/20 transition-opacity duration-700" />

                {/* Top Badge */}
                <div className="absolute top-6 left-6 z-20">
                  <span className={`px-4 py-1.5 text-[10px] font-black tracking-[0.2em] uppercase rounded-full shadow-2xl backdrop-blur-xl border border-white/10 ${
                    project.type === 'CDR' 
                      ? 'bg-blue-600/60 text-white' 
                      : 'bg-emerald-600/60 text-white'
                  }`}>
                    {project.type}
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-8 z-20">
                  
                  {/* Visual Divider */}
                  <div className="w-10 h-0.5 bg-emerald-500 mb-6 transition-all duration-700 group-hover:w-full opacity-60" />

                  <div className="flex justify-between items-end gap-4">
                    <div className="flex-grow">
                      <h3 className="text-white text-2xl md:text-3xl font-black leading-tight mb-2 transition-transform duration-500 group-hover:-translate-y-1">
                        {project.name}
                      </h3>
                      <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                        View Details <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                </div>

                {/* Subtle Glow on Hover */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-emerald-500/20 blur-[60px] rounded-full transition-all duration-700 group-hover:scale-150 opacity-0 group-hover:opacity-100" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}




