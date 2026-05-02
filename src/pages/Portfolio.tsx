import { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants/projects';
import { Link } from 'react-router-dom';

import pd1 from "../assets/projectdetail1.webp"
import pd2 from "../assets/projectdetail2.webp"
import pd3 from "../assets/projectdetail3.webp"

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "NCS", "Tech"];

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.type === activeCategory);

  return (
    <div className="pt-16 min-h-screen flex flex-col">

      {/* 🔥 STEP 4 FIX (IMPORTANT) */}
      <div className="flex-grow">

        {/* HERO SECTION */}
        <section className="bg-gradient-to-br from-stone-50 via-emerald-50/40 to-slate-50 py-16 text-center mb-6 border-b border-stone-200">
          <span className="text-emerald-600 font-semibold uppercase text-sm tracking-wider block mb-3">
            Our Work
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4">
            Our Portfolio
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">
            Real projects. Real places. Real impact.
          </p>
        </section>

        {/* PROJECT GRID */}
        <section className="pt-10 pb-16 bg-stone-50">
          <div className="max-w-7xl mx-auto px-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProjects.map((project) => (
                <motion.div key={project.id} className="group relative h-[450px] rounded-xl overflow-hidden shadow-md">

                  <Link to={`/portfolio/${project.id}`} className="block h-full w-full">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                     loading="lazy" decoding="async" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                    <div className="absolute bottom-10 left-8 right-8">
                      <h3 className="text-white text-2xl font-extrabold">
                        {project.name}
                      </h3>
                    </div>
                  </Link>

                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* IMPLEMENTATION */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-10">

            <h2 className="text-4xl font-extrabold text-center text-slate-800 mb-6">
              On-Ground Implementation & Monitoring
            </h2>

            <div className="grid md:grid-cols-3 gap-10">

              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <img src={pd1} className="h-[220px] w-full object-cover"  loading="lazy" decoding="async" />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">
                    Field Measurement & Data Collection
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Accurate ground-level measurements ensure reliable carbon data and project validation.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <img src={pd2} className="h-[220px] w-full object-cover"  loading="lazy" decoding="async" />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">
                    Ecosystem Restoration Activities
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Teams restore degraded ecosystems using sustainable methods and native species.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <img src={pd3} className="h-[220px] w-full object-cover"  loading="lazy" decoding="async" />
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">
                    Monitoring & Verification (MRV)
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Continuous monitoring ensures compliance and high-integrity carbon credit generation.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-10 bg-emerald-50 text-center">
          <h2 className="text-3xl font-extrabold text-slate-800 mb-6">
            Advancing Global Climate Stewardship
          </h2>

          <Link to="/contact" className="px-10 py-4 border-2 border-primary text-primary rounded-md">
            Discuss Your Strategy
          </Link>
        </section>

      </div>
      {/* 🔥 END OF flex-grow */}

    </div>
  );
}



