import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Globe2,
  Factory,
  Leaf,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

/* ──────────────────────────────────────────────────
   LETTER ANIMATION
────────────────────────────────────────────────── */
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
      duration: 0.18,
      ease: 'easeOut',
    },
  }),
};

/* ──────────────────────────────────────────────────
   WORD ANIMATION
────────────────────────────────────────────────── */
const renderAnimatedText = (text, className = '') => {
  return (
    <span className={`inline leading-[inherit] ${className}`}>
      {text.split(' ').map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="mr-[0.35em] inline-block whitespace-nowrap align-baseline"
        >
          {word.split('').map((char, charIndex) => {
            const index = wordIndex * 20 + charIndex;

            return (
              <motion.span
                key={index}
                custom={index}
                variants={letterAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="inline-block will-change-transform"
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </span>
  );
};

/* ──────────────────────────────────────────────────
   SERVICES
────────────────────────────────────────────────── */
const SERVICES = [
  {
    id: 1,
    title: 'Carbon Project Development and Management',
    icon: <Leaf size={22} />,
    content:
      'Comprehensive end-to-end support from feasibility and design through registration, monitoring, verification and credit issuance, spanning renewable energy, clean technology, industrial efficiency, waste management and nature-based solutions.',
  },
  {
    id: 2,
    title: 'Industrial Decarbonisation and Emission Reductions',
    icon: <Factory size={22} />,
    content:
      'Partnering with industrial and agro-industrial facilities to design and implement emission reduction strategies, including GHG inventories, process optimisation, waste-to-energy systems, fuel switching and carbon capture.',
  },
  {
    id: 3,
    title: 'Carbon Advisory and Strategy Development',
    icon: <Globe2 size={22} />,
    content:
      'Strategic guidance on carbon footprint assessment, credit potential evaluation, standard selection, portfolio strategy, credit marketing and regulatory compliance, maximising both environmental impact and financial returns.',
  },
  {
    id: 4,
    title: 'Capacity Building and Training',
    icon: <GraduationCap size={22} />,
    content:
      'Customised programmes covering carbon market fundamentals, project methodologies, MRV protocols, ESG reporting, and climate finance mechanisms, building long-term institutional capability.',
  },
];

export default function LatinAmericaSection() {
  const [active, setActive] = useState(1);

  return (
    <section className="relative overflow-hidden bg-[#071311] py-20">
      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-0 h-[350px] w-[350px] rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-amber-500/10 blur-3xl" />

      {/* MAP BACKGROUND */}
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-[0.06]"
        style={{
          backgroundImage:
            "url('https://upload.wikimedia.org/wikipedia/commons/3/32/Latin_America_%28orthographic_projection%29.svg')",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-4xl"
        >
          <div className="mb-3 block text-sm font-semibold uppercase tracking-[0.35em] text-emerald-400">
            {renderAnimatedText('Ecoveda Climate, Latin America')}
          </div>

          <h2 className="mb-6 text-4xl font-bold leading-[1.08] text-white md:text-5xl">
            {renderAnimatedText(
              'Scaling Climate Action Across the Americas'
            )}
          </h2>

          <p className="text-lg leading-relaxed text-white/70">
            {renderAnimatedText(
              'Ecoveda Climate delivers carbon credit development, commercialisation, and consulting services to clients across Latin America through its regional presence in Mexico City.'
            )}
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid gap-10 lg:grid-cols-1">
          {/* SERVICES */}
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold text-white">
                {renderAnimatedText(
                  'Our Services for Latin American Partners'
                )}
              </h3>
            </motion.div>

            {SERVICES.map((service, index) => {
              const isOpen = active === service.id;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className={`overflow-hidden rounded-2xl border transition-all duration-500 ${
                    isOpen
                      ? 'border-emerald-400/40 bg-white/10'
                      : 'border-white/10 bg-white/[0.04]'
                  }`}
                >
                  <button
                    onClick={() =>
                      setActive(isOpen ? null : service.id)
                    }
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <div className="flex items-center gap-4">
                      {/* ICON */}
                      <motion.div
                        whileHover={{ scale: 1.08 }}
                        className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${
                          isOpen
                            ? 'bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]'
                            : 'bg-white/10 text-emerald-300'
                        }`}
                      >
                        {service.icon}
                      </motion.div>

                      {/* TITLE */}
                      <h4 className="text-lg font-semibold leading-snug text-white">
                        {renderAnimatedText(service.title)}
                      </h4>
                    </div>

                    {/* CHEVRON */}
                    <motion.div
                      animate={{
                        rotate: isOpen ? 180 : 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <ChevronDown className="text-white/70" />
                    </motion.div>
                  </button>

                  {/* CONTENT */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          height: 0,
                        }}
                        animate={{
                          opacity: 1,
                          height: 'auto',
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                        }}
                        transition={{
                          duration: 0.4,
                          ease: 'easeInOut',
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pl-[88px]">
                          <p className="leading-relaxed text-white/70">
                            {renderAnimatedText(service.content)}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* CONTACT SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-10"
          >
            <div className="overflow-hidden rounded-3xl border border-amber-400/20 bg-gradient-to-br from-[#0d1d1b] to-[#112724] p-8 shadow-[0_0_40px_rgba(0,0,0,0.35)]">

              {/* TOP AREA */}
              <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                {/* LEFT */}
                <div>
                  <span className="mb-4 inline-block rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
                    {renderAnimatedText('Latin America Contact')}
                  </span>

                  <h3 className="mb-2 text-3xl font-bold text-white">
                    {renderAnimatedText('Javier Lascurain')}
                  </h3>

                  <p className="text-lg font-medium text-emerald-300">
                    {renderAnimatedText(
                      'LatAm Representative and Senior Consultant'
                    )}
                  </p>
                </div>

                {/* RIGHT */}
                

              </div>

              {/* HORIZONTAL CONTACT CARDS */}
              <div className="grid gap-6 md:grid-cols-3">

                {/* EMAIL */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:border-emerald-400/30 hover:bg-white/[0.06]"
                >
                  <div className="flex items-start gap-4">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300 transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                      <Mail size={22} />
                    </div>

                    <div className="min-w-0">
                      <p className="mb-2 text-sm uppercase tracking-wide text-white/40">
                        Email
                      </p>

                      <a
                        href="mailto:Javier.lascurain@ecovedaclimate.com"
                        className="break-all text-sm leading-relaxed text-white transition-colors duration-300 hover:text-emerald-300"
                      >
                        Javier.lascurain@ecovedaclimate.com
                      </a>
                    </div>

                  </div>
                </motion.div>

                {/* PHONE */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:border-emerald-400/30 hover:bg-white/[0.06]"
                >
                  <div className="flex items-start gap-4">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300 transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                      <Phone size={22} />
                    </div>

                    <div>
                      <p className="mb-2 text-sm uppercase tracking-wide text-white/40">
                        Telephone
                      </p>

                      <a
                        href="tel:+525527299360"
                        className="text-white transition-colors duration-300 hover:text-emerald-300"
                      >
                        +52 (55) 2729-9360
                      </a>
                    </div>

                  </div>
                </motion.div>

                {/* LOCATION */}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:border-emerald-400/30 hover:bg-white/[0.06]"
                >
                  <div className="flex items-start gap-4">

                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300 transition-all duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                      <MapPin size={22} />
                    </div>

                    <div>
                      <p className="mb-2 text-sm uppercase tracking-wide text-white/40">
                        Headquarters
                      </p>

                      <p className="text-white">
                        Mexico City, Mexico
                      </p>
                    </div>

                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 