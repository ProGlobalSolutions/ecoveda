import { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants/projects';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "NCS", "Tech"];

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.type === activeCategory);

  return (
    <div className="pt-16">

      {/* HERO SECTION */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80)',
          }}
        />
        <div className="absolute inset-0 bg-primary-dark/80 backdrop-blur-[2px]" />

        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter mb-4"
          >
            Our Portfolio
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-medium text-white/90 max-w-3xl mx-auto uppercase tracking-wide"
          >
            Real projects. Real places. Real impact: measured, verified and growing
          </motion.p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-10 text-center">

          <span className="text-primary font-bold tracking-[1.5px] uppercase text-[12px] mb-4 block">
            Groundwork For Change
          </span>

          <h2 className="text-4xl font-extrabold text-slate-800 mb-4">
            Climate Innovation Through Project Development
          </h2>

          <p className="text-accent italic text-xl mb-8">
            "Where Vision Meets the Ground"
          </p>

          <p className="text-slate-600 leading-relaxed">
            At Ecoveda Climate, we believe the most credible statement any organisation
            can make about climate is not a target, it is a project. We build scalable,
            community-centred programmes that drive a measurable transition to a low-carbon economy.
          </p>

          <p className="text-slate-600 leading-relaxed mt-6">
            Our work sits at the convergence of ecological science, financial structuring
            and regulatory strategy. We deliver environmentally sound, socially equitable
            and economically viable development outcomes through high-integrity carbon credits.
          </p>

        </div>
      </section>

      {/* FILTER BUTTONS */}
      <section className="bg-card-bg pt-10">
        <div className="max-w-7xl mx-auto px-10">

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold border transition ${
                  activeCategory === cat
                    ? "bg-emerald-600 text-white"
                    : "bg-white text-slate-700 hover:bg-emerald-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="pb-24 bg-card-bg">
        <div className="max-w-7xl mx-auto px-10">

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-[450px] rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
              >

                <Link to={`/portfolio/${project.id}`} className="block h-full w-full">

                  {/* IMAGE */}
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* TYPE BADGE */}
                  <div className="absolute top-6 right-6">
                    <span
                      className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase text-white ${
                        project.type === 'NCS'
                          ? 'bg-emerald-600'
                          : 'bg-gradient-to-r from-blue-600 to-purple-600'
                      }`}
                    >
                      {project.type}
                    </span>
                  </div>

                  {/* TITLE */}
                  <div className="absolute bottom-10 left-8 right-8">
                    <h3 className="text-white text-2xl font-extrabold group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                  </div>

                </Link>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-t border-slate-100 text-center">

        <h2 className="text-3xl font-extrabold text-slate-800 mb-8 max-w-2xl mx-auto">
          Advancing Global Climate Stewardship Through High-Integrity Carbon Markets
        </h2>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-10 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-md font-bold text-sm uppercase tracking-wider transition"
        >
          Discuss Your Strategy
        </Link>

      </section>

    </div>
  );
}