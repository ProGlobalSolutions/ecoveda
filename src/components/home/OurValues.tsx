import { motion } from 'motion/react';
import {
  ShieldCheck,
  BadgeCheck,
  Eye,
} from 'lucide-react';

export default function OurValues() {
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

  /* VALUES DATA */
  const values = [
    {
      title: 'Integrity',
      description:
        'We ensure adherence to ethical principles and rigorous standards, safeguarding the credibility and effectiveness of every emission reduction effort we undertake.',
      icon: ShieldCheck,
      bg: 'from-emerald-500 to-green-600',
    },
    {
      title: 'Accountability',
      description:
        'We hold ourselves responsible for every aspect of our initiatives, fostering trust and credibility within communities, with partners and across markets.',
      icon: BadgeCheck,
      bg: 'from-teal-500 to-cyan-600',
    },
    {
      title: 'Transparency',
      description:
        'We share information and processes openly, empowering stakeholders to understand, verify, and engage with our work towards environmental sustainability.',
      icon: Eye,
      bg: 'from-blue-500 to-indigo-600',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-stone-50 py-20 lg:py-24">
      {/* BACKGROUND BLUR EFFECTS */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mx-auto max-w-6xl">
            {/* SECTION HEADING */}
            <div className="mb-14 text-center">
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-600">
                {renderLetters('Our Values')}
              </div>

              <h2 className="mx-auto max-w-5xl text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
                {renderLetters(
                  'Integrity. Accountability. Transparency.'
                )}
              </h2>

              <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-slate-600">
                {renderLetters(
                  'These are not aspirational statements. They are operational commitments embedded in every project we develop, every credit we issue, and every community partnership we build.'
                )}
              </p>
            </div>

            {/* VALUES GRID */}
            <div className="grid gap-8 md:grid-cols-3">
              {values.map((value, index) => {
                const Icon = value.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                    }}
                    whileHover={{
                      y: -10,
                    }}
                    className="group relative overflow-hidden rounded-3xl border border-white/40 bg-white p-8 shadow-lg transition-all duration-500 hover:shadow-2xl"
                  >
                    {/* CARD GLOW */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-cyan-50 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                    {/* ICON */}
                    <div
                      className={`relative mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${value.bg} shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <Icon className="h-10 w-10 text-white" strokeWidth={2.2} />

                      {/* ICON RING */}
                      <div className="absolute inset-0 rounded-2xl border border-white/20"></div>
                    </div>

                    {/* TITLE */}
                    <h3 className="relative mb-4 text-2xl font-bold text-slate-800">
                      {renderLetters(value.title)}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="relative text-base leading-relaxed text-slate-600">
                      {renderLetters(value.description)}
                    </p>

                    {/* HOVER LINE */}
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-emerald-500 to-cyan-500 transition-all duration-500 group-hover:w-full"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}