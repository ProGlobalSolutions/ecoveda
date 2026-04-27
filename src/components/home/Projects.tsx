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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">

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
        <div className="grid md:grid-cols-2 gap-8">

          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl h-[400px] bg-primary-dark hover:bg-[#053d2e] border border-white/5 hover:border-emerald-500/30 flex flex-col justify-end p-8 cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-900/20"
            >

              {/* CONTENT */}
              <div className="relative z-10 text-white transform transition-transform duration-500 group-hover:translate-y-[-8px]">

                <span className="text-xs uppercase tracking-wider text-emerald-400 font-medium">
                  {project.subtitle}
                </span>

                <h3 className="text-3xl font-heading font-bold mt-3 mb-4">
                  {project.title}
                </h3>

                <p className="text-base text-white/70 mb-8 max-w-sm leading-relaxed">
                  {project.description}
                </p>

                <Link
                  to={project.link}
                  className="inline-flex items-center gap-2 bg-emerald-500 px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-emerald-400 hover:text-primary-dark transition-colors duration-300"
                >
                  Explore Projects
                </Link>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}