import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import nonafolu from "../../assets/nonafolu.webp"
import afolu from "../../assets/afolu.webp"

const PROJECTS = [
  {
    title: 'AFOLU Projects',
    subtitle: 'Nature-Based Solutions',
    description:
      'Afforestation, reforestation and sustainable land-use initiatives that restore ecosystems and generate verified carbon credits.',
    image:
      afolu,
    link: '/projects/afolu',
  },
  {
    title: 'Non-AFOLU Projects',
    subtitle: 'Energy & Industrial Solutions',
    description:
      'Renewable energy, waste-to-energy and industrial decarbonisation projects driving large-scale emission reductions.',
    image:
      nonafolu,
    link: '/projects/non-afolu',
  },
];

export default function Projects() {
  return (
    <section className="py-10 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-6">

          <div className="max-w-2xl">
            <span className="text-emerald-600 font-semibold uppercase text-sm tracking-wider mb-3 block">
              Our Portfolio
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight">
              Delivering Measurable Climate Impact
            </h2>

            <p className="text-slate-600 mt-4">
              From nature-based solutions to advanced carbon technologies, our projects are designed to deliver verified environmental and social outcomes.
            </p>
          </div>

          {/* CTA FIXED */}
          <Link
            to="/verticals/project-development"
            className="flex items-center gap-2 text-emerald-600 font-semibold hover:underline"
          >
            View Full Portfolio
            <ArrowUpRight className="w-5 h-5" />
          </Link>

        </div>

        {/* PROJECT CARDS */}
        <div className="grid md:grid-cols-2 gap-4">

          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative overflow-hidden rounded-2xl bg-primary-dark hover:bg-[#053d2e] border border-white/5 hover:border-emerald-500/40 flex flex-col justify-between p-5 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-900/30 min-h-[380px]"
            >

              {/* TOP: Icon + Subtitle */}
              <div className="flex flex-col">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 group-hover:bg-emerald-500/20 border border-white/10 group-hover:border-emerald-400/30 transition-all duration-300 mb-5">
                  <span className="text-emerald-400 text-xl">
                    {i === 0 ? '🌿' : '⚡'}
                  </span>
                </div>

                <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-3">
                  {project.subtitle}
                </span>

                <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-4">
                  {project.title}
                </h3>

                <p className="text-sm md:text-base text-white/65 leading-relaxed max-w-sm">
                  {project.description}
                </p>
              </div>

              {/* BOTTOM: CTA */}
              <div className="mt-8">
                <Link
                  to={project.link}
                  className="inline-flex items-center gap-2 text-emerald-400 font-semibold text-sm group-hover:text-emerald-300 transition-colors duration-300"
                >
                  Explore Projects
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                </Link>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}



