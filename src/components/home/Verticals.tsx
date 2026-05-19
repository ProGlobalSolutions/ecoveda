import { motion } from 'framer-motion';
import { ArrowRight, Building2, Cpu, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    icon: Building2,
    title: 'Government & NGOs',
    description:
      'Supporting public sector and development organisations with scalable climate initiatives.',
    link: '/services/govt-ngo',
    bg: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df',
  },
  {
    icon: Globe,
    title: 'Corporates',
    description:
      'Helping businesses achieve net-zero through ESG, decarbonisation and carbon markets.',
    link: '/services/corporates',
    bg: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72',
  },
  {
    icon: Cpu,
    title: 'Climate Technology',
    description:
      'Advanced DMRV systems, AI, IoT and data-driven climate monitoring solutions.',
    link: '/services/ecotech',
    bg: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
  },
];

export default function Verticals() {

  /* LETTER ANIMATION */
  const letterAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.004,
        duration: 0.18,
        ease: 'easeOut',
      },
    }),
  };

  /* RENDER LETTERS */
  const renderLetters = (text, className = '') => {
    return (
      <span className={`inline ${className}`}>
        {text.split(' ').map((word, wordIndex) => (
          <span
            key={wordIndex}
            className="mr-[0.35em] inline-block whitespace-nowrap"
          >
            {word.split('').map((char, charIndex) => {
              const index = wordIndex * 10 + charIndex;

              return (
                <motion.span
                  key={index}
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
          </span>
        ))}
      </span>
    );
  };

  return (
    <section className="bg-stone-50 py-8">

      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-center"
        >

          {/* SUBTITLE */}
          <div className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-600">
            {renderLetters('Our Services')}
          </div>

          {/* TITLE */}
          <h2 className="mb-4 text-4xl font-extrabold leading-tight text-slate-800 md:text-5xl">
            {renderLetters('Comprehensive Climate Solutions')}
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
            {renderLetters(
              'Delivering end-to-end services across carbon markets, sustainability strategy and climate technology.'
            )}
          </p>

        </motion.div>

        {/* GRID */}
        <div className="grid justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">

          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{
                y: 40,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
              }}
              className="group relative mx-auto w-full max-w-sm overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:shadow-xl"
            >

              {/* BACKGROUND IMAGE */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-100 transition-all duration-700 group-hover:scale-110 group-hover:brightness-110 lg:opacity-0 lg:group-hover:opacity-100"
                style={{
                  backgroundImage: `url(${service.bg})`,
                }}
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/60 transition-colors duration-500 lg:bg-transparent lg:group-hover:bg-black/50" />

              {/* CONTENT */}
              <div className="relative z-10 p-6">

                {/* ICON */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 text-white transition-colors duration-500 lg:bg-emerald-50 lg:text-emerald-600 lg:group-hover:bg-emerald-500 lg:group-hover:text-white">
                  <service.icon className="h-6 w-6" />
                </div>

                {/* TITLE */}
                <h3 className="mb-3 text-xl font-bold leading-snug text-white transition-colors duration-500 lg:text-slate-900 lg:group-hover:text-white">
                  {renderLetters(service.title)}
                </h3>

                {/* DESCRIPTION */}
                <p className="mb-6 text-sm leading-relaxed text-white/90 transition-colors duration-500 lg:text-slate-600 lg:group-hover:text-white/90">
                  {renderLetters(service.description)}
                </p>

                {/* LINK */}
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition-colors duration-500 lg:text-emerald-600 lg:group-hover:text-emerald-300"
                >
                  {renderLetters('Explore')}

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}