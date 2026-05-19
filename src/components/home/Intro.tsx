import { motion } from 'motion/react';
import { Leaf, ShieldCheck, Globe, ArrowRight } from 'lucide-react';
import largefarm from '../../assets/largefarms.webp';

export default function Intro() {

  /* LETTER ANIMATION */
  const letterAnimation = {
    hidden: {
      opacity: 0,
      y: 25,
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

  /* WORD-BY-WORD LETTER RENDER */
  const renderLetters = (text, className = '') => {
    return (
      <span className={`inline leading-relaxed ${className}`}>
        {text.split(' ').map((word, wordIndex) => (
          <span
            key={wordIndex}
            className="inline-block whitespace-nowrap"
          >
            {word.split('').map((char, charIndex) => {
              const index =
                text
                  .split(' ')
                  .slice(0, wordIndex)
                  .join('').length +
                charIndex +
                wordIndex;

              return (
                <motion.span
                  key={`${wordIndex}-${charIndex}`}
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

            {/* SPACE */}
            <span className="inline-block w-[0.35em]" />
          </span>
        ))}
      </span>
    );
  };

  const features = [
    {
      icon: Leaf,
      title: 'Nature-Based Solutions',
      description:
        'Afforestation, restoration and sustainable land-use programs driving measurable carbon impact.',
      bg: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop',
    },
    {
      icon: ShieldCheck,
      title: 'High Integrity Projects',
      description:
        'Transparent methodologies aligned with global carbon standards and verification systems.',
      bg: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop',
    },
    {
      icon: Globe,
      title: 'Global Climate Impact',
      description:
        'Scaling projects that empower communities and accelerate transition to a low-carbon economy.',
      bg: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#071311]">

      {/* HERO BANNER */}
      <div className="relative min-h-[90vh] w-full">

        {/* BACKGROUND IMAGE */}
        <img
          src={largefarm}
          alt="Climate Solutions"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6 py-24">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >

            {/* LABEL */}
            <div className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
              {renderLetters('About Ecoveda Climate')}
            </div>

            {/* TITLE */}
          <h1 className="mb-8 text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">

  <div className="block">
    {renderLetters('New Age Climate')}
  </div>

  <div className="-mt-8 block text-emerald-400">
    {renderLetters('Solution Provider')}
  </div>

</h1>

            {/* DESCRIPTION */}
            <p className="mb-6 text-lg leading-relaxed text-white/80 md:text-xl">
              {renderLetters(
                'Ecoveda Climate is a mission-driven global development organisation delivering sustainable solutions across the climate and carbon market landscape. Incorporated in November 2023, we operate as action-oriented carbon credit developers committed to empowering vulnerable and underserved communities worldwide.'
              )}
            </p>

            <p className="max-w-2xl text-lg leading-relaxed text-white/65">
              {renderLetters(
                'Our work sits at the convergence of ecological science, financial structuring and regulatory strategy. We build scalable, community-centred programmes that drive a measurable transition to a low-carbon economy, delivering environmentally sound, socially equitable and economically viable development outcomes.'
              )}
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/65">

              {renderLetters(
                'Our mission is to accelerate the global shift toward ecological preservation and climate resilience through carbon finance and collective action, with an ambition to reach over'
              )}

              <span className="font-semibold text-white">
                {' '}
                {renderLetters('100 million people')}
              </span>

              {renderLetters('and generate')}

              <span className="font-semibold text-white">
                {' '}
                {renderLetters('1 billion+ carbon credits')}
              </span>

              {renderLetters('by 2030.')}

            </p>

            {/* CTA BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.6,
              }}
              className="mt-10 flex flex-wrap gap-4"
            >

              {/* PRIMARY BUTTON */}
              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
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
                  transition-all
                  duration-300
                  hover:bg-emerald-400
                  hover:shadow-[0_0_30px_rgba(16,185,129,0.35)]
                "
              >
                {renderLetters('Get in Touch')}

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>

              {/* SECONDARY BUTTON */}
              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/20
                  bg-white/5
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:border-emerald-400
                  hover:bg-white/10
                "
              >
                {renderLetters('Explore Our Work')}
              </motion.a>

            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* FEATURE CARDS */}
      <div className="relative z-20 -mt-8 pb-24 md:-mt-12">
        <div className="mx-auto max-w-7xl px-6">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
          >

            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 40,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.6,
                      ease: 'easeOut',
                    },
                  },
                }}
                className="
                  group
                  relative
                  min-h-[280px]
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-[#0b1c18]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-emerald-400/30
                  hover:shadow-xl
                "
              >

                {/* IMAGE */}
                <img
                  src={feature.bg}
                  alt={feature.title}
                  loading="lazy"
                  decoding="async"
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                  "
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/30" />

                {/* CONTENT */}
                <div className="relative z-10 flex h-full flex-col justify-end p-7 text-white">

                  {/* ICON */}
                  <div
                    className="
                      mb-5
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-emerald-500/20
                      text-emerald-300
                      transition-all
                      duration-300
                      group-hover:bg-emerald-500
                      group-hover:text-white
                    "
                  >
                    <feature.icon className="h-6 w-6" />
                  </div>

                  {/* TITLE */}
                  <h4 className="mb-3 text-2xl font-bold leading-snug">
                    {renderLetters(feature.title)}
                  </h4>

                  {/* DESCRIPTION */}
                  <p className="leading-relaxed text-white/80">
                    {renderLetters(feature.description)}
                  </p>

                </div>
              </motion.div>
            ))}

          </motion.div>
        </div>
      </div>
    </section>
  );
}