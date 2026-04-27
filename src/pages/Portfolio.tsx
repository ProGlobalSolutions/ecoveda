import { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants/projects';
import { Link } from 'react-router-dom';
import portfolio2 from "../assets/portfolio2.webp";
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
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mb-10">
          <div
            className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
            style={{
              backgroundImage: `url(${portfolio2})`,
            }}
          />
          <div className="absolute inset-0 bg-primary-dark/80 backdrop-blur-[2px]" />

          <div className="relative z-10 text-center text-white px-4">
            <motion.h1 className="text-5xl md:text-7xl font-extrabold mb-4">
              Our Portfolio
            </motion.h1>
            <motion.p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Real projects. Real places. Real impact.
            </motion.p>
          </div>
        </section>

        {/* PROJECT GRID */}
        <section className="pt-10 pb-16 bg-card-bg">
          <div className="max-w-7xl mx-auto px-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <motion.div key={project.id} className="group relative h-[450px] rounded-xl overflow-hidden shadow-md">

                  <Link to={`/portfolio/${project.id}`} className="block h-full w-full">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />

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
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-10">

            <h2 className="text-4xl font-extrabold text-center text-slate-800 mb-10">
              On-Ground Implementation & Monitoring
            </h2>

            <div className="grid md:grid-cols-3 gap-10">

              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <img src={pd1} className="h-[220px] w-full object-cover" />
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
                <img src={pd2} className="h-[220px] w-full object-cover" />
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
                <img src={pd3} className="h-[220px] w-full object-cover" />
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
        <section className="py-10 bg-white text-center">
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