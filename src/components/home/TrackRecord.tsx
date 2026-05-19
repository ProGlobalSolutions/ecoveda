import React, { useMemo, useState } from 'react';
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
    bgImage:
      'https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=800',
  },
  {
    id: 6,
    name: 'Maharashtra Industrial Waste Heat Recovery',
    category: 'Energy & Industry',
    registry: 'Gold Standard',
    status: 'Ongoing',
    statusColor: 'teal',
    bgImage:
      'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=800',
  },
];

const CATEGORIES = [
  'All',
  'Natural Climate Solutions',
  'Energy & Industry',
  'Methodology',
];

export default function TrackRecord() {
  const [activeFilter, setActiveFilter] = useState('All');

  /* LETTER ANIMATION */
  const letterAnimation = {
    hidden: {
      opacity: 0,
      y: 18,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.003,
        duration: 0.16,
        ease: 'easeOut',
      },
    }),
  };

  /* WORD ANIMATION */
  const renderLetters = (text, className = '') => {
    return (
      <span className={className}>
        {text.split(' ').map((word, wordIndex) => (
          <span
            key={wordIndex}
            className="inline-block whitespace-nowrap"
          >
            {word.split('').map((char, charIndex) => {
              const index = wordIndex * 10 + charIndex;

              return (
                <motion.span
                  key={charIndex}
                  custom={index}
                  variants={letterAnimation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              );
            })}

            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </span>
    );
  };

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(
      (project) =>
        activeFilter === 'All' ||
        project.category === activeFilter
    );
  }, [activeFilter]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#012A24] via-emerald-950 to-[#062F2B] py-20 lg:py-24">

      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-teal-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            ease: 'easeOut',
          }}
          className="mb-14"
        >

          {/* LABEL */}
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
            {renderLetters('Track Record')}
          </div>

          {/* TITLE */}
          <h2 className="max-w-4xl text-4xl font-extrabold leading-tight text-white md:text-5xl">
            {renderLetters(
              'Consulting and Project Development Portfolio'
            )}
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-emerald-50/75">
            {renderLetters(
              'With a rapidly growing portfolio of completed and ongoing engagements, Ecoveda Climate has established a proven track record across energy, nature-based solutions and frontier carbon removal across multiple continents and registries.'
            )}
          </p>

        </motion.div>

        {/* FILTERS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="mb-12 flex flex-wrap gap-3"
        >
          {CATEGORIES.map((category) => {
            const count =
              category === 'All'
                ? PROJECTS.length
                : PROJECTS.filter(
                    (project) =>
                      project.category === category
                  ).length;

            const isActive = activeFilter === category;

            return (
              <motion.button
                whileTap={{ scale: 0.96 }}
                whileHover={{ y: -1 }}
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`relative flex items-center gap-2 overflow-hidden rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-500 ${
                  isActive
                    ? 'border-emerald-400 bg-emerald-500 text-white shadow-[0_0_25px_rgba(16,185,129,0.35)]'
                    : 'border-white/10 bg-white/5 text-emerald-50 hover:border-emerald-400/30 hover:bg-white/10'
                }`}
              >

                {/* ACTIVE GLOW */}
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500"
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10">
                  {renderLetters(category)}
                </span>

                <span
                  className={`relative z-10 rounded-full px-2 py-0.5 text-xs font-bold transition-all duration-300 ${
                    isActive
                      ? 'bg-white text-emerald-600'
                      : 'bg-white/10 text-white'
                  }`}
                >
                  {count}
                </span>

              </motion.button>
            );
          })}
        </motion.div>

        {/* GRID */}
        <motion.div
          layout
          transition={{
            layout: {
              duration: 0.5,
              ease: [0.25, 1, 0.5, 1],
            },
          }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          <AnimatePresence mode="wait">

            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{
                  opacity: 0,
                  y: 35,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                  scale: 0.94,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                  ease: [0.25, 1, 0.5, 1],
                  layout: {
                    duration: 0.5,
                  },
                }}
                whileHover={{
                  y: -6,
                }}
                className={`group relative flex aspect-[1.2] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-slate-900/80 p-3.5 backdrop-blur-sm lg:aspect-[1.26] ${
                  project.statusColor === 'emerald'
                    ? 'border-t-[5px] border-t-emerald-400'
                    : 'border-t-[5px] border-t-teal-400'
                }`}
              >

                {/* IMAGE */}
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{
                    duration: 0.8,
                    ease: 'easeOut',
                  }}
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${project.bgImage})`,
                  }}
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-900/20 transition-opacity duration-500 group-hover:opacity-90" />

                {/* SHINE */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <div className="absolute -left-32 top-0 h-full w-24 rotate-12 bg-white/10 blur-xl transition-all duration-1000 group-hover:left-[120%]" />
                </div>

                {/* CONTENT */}
                <div className="relative z-10 flex h-full flex-col justify-between">

                  {/* TOP */}
                  <div>

                    <span className="mb-4 inline-flex rounded-md border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-md">
                      {renderLetters(project.registry)}
                    </span>

                    <h3 className="max-w-[90%] text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-emerald-300">
                      {renderLetters(project.name)}
                    </h3>

                  </div>

                  {/* BOTTOM */}
                  <div className="flex items-center gap-3 border-t border-white/15 pt-4">

                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.8, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className={`h-2.5 w-2.5 rounded-full ${
                        project.statusColor === 'emerald'
                          ? 'bg-emerald-400'
                          : 'bg-teal-400'
                      }`}
                    />

                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/90">
                      {renderLetters(project.status)}
                    </span>

                  </div>
                </div>

              </motion.div>
            ))}

          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}