import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import baby from '../../assets/baby.jpg';

export default function Intro() {
  /* LETTER ANIMATION */
  const letterAnimation = {
    hidden: {
      opacity: 0,
      y: 12,
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.006,
        duration: 0.12,
        ease: 'easeOut',
      },
    }),
  };

  /* LETTER RENDER */
  const renderLetters = (text: string) => {
    return (
      <span>
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={letterAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-block whitespace-pre"
          >
            {char}
          </motion.span>
        ))}
      </span>
    );
  };

  return (
    <section className="overflow-hidden bg-stone-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: 'easeOut',
            }}
            className="max-w-2xl"
          >

            {/* LABEL */}
            <span className="mb-5 block text-sm font-semibold uppercase tracking-[0.22em] text-emerald-600">
              {renderLetters('About Ecoveda Climate')}
            </span>

            {/* TITLE */}
            <h2 className="mb-7 text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] text-slate-900 md:text-5xl xl:text-6xl">
              <div>
                {renderLetters('New Age Climate')}
              </div>

              <div className="mt-2 text-emerald-600">
                {renderLetters('Solution Provider')}
              </div>
            </h2>

            {/* DESCRIPTION */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.25,
              }}
              className="
                mb-10
                max-w-[640px]
                text-[17px]
                leading-[2]
                tracking-[0.01em]
                text-slate-600
                md:text-[18px]
                text-left
              "
            >
              Ecoveda Climate is a mission-driven global development
              organisation delivering sustainable solutions across the climate
              and carbon market landscape. Incorporated in November 2023, we
              operate as action-oriented carbon credit developers committed to
              empowering vulnerable and underserved communities worldwide.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
              className="flex flex-wrap gap-4"
            >

              {/* PRIMARY BUTTON */}
              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-emerald-500
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-emerald-500/20
                  transition-all
                  duration-300
                  hover:bg-emerald-400
                  hover:shadow-[0_0_35px_rgba(16,185,129,0.35)]
                "
              >
                Get in Touch

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>

              {/* SECONDARY BUTTON */}
              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.04,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-slate-300
                  bg-white
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-slate-700
                  transition-all
                  duration-300
                  hover:border-emerald-500
                  hover:text-emerald-600
                  hover:shadow-lg
                "
              >
                Explore Our Work
              </motion.a>

            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: 'easeOut',
            }}
            className="relative flex justify-center lg:justify-end"
          >

            {/* GLOW */}
            <div className="absolute -inset-4 rounded-[32px] bg-emerald-500/10 blur-3xl" />

            {/* IMAGE CARD */}
            <div
              className="
                relative
                w-full
                max-w-[620px]
                overflow-hidden
                rounded-[28px]
                bg-white
                shadow-[0_25px_80px_rgba(15,23,42,0.18)]
              "
            >

              {/* IMAGE */}
              <img
                src={baby}
                alt="Baby"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="
                  h-[420px]
                  w-full
                  object-cover
                  object-center
                  transition-transform
                  duration-[1800ms]
                  ease-out
                  hover:scale-105
                  md:h-[500px]
                  lg:h-[560px]
                "
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}