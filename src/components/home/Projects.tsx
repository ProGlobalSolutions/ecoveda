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
              className="group relative overflow-hidden rounded-2xl h-[400px] cursor-pointer"
            >

              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* CLEAN OVERLAY */}
              <div className="absolute inset-0 bg-black/50" />

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 p-8 text-white">

                <span className="text-xs uppercase tracking-wider text-emerald-300">
                  {project.subtitle}
                </span>

                <h3 className="text-2xl font-bold mt-2 mb-3">
                  {project.title}
                </h3>

                <p className="text-sm text-white/80 mb-6 max-w-sm">
                  {project.description}
                </p>

                <Link
                  to={project.link}
                  className="inline-flex items-center gap-2 bg-emerald-500 px-5 py-2 rounded-md text-sm font-semibold hover:bg-emerald-600 transition"
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