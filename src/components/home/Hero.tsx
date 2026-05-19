import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HERO_SLIDES } from '@/src/constants';

import hero1 from "../../assets/hero.mp4";

export default function Hero() {

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.02,
duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  const renderLetters = (text, className = "") => {
  return (
    <span className={className}>
      {text.split(" ").map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-block whitespace-nowrap"
        >
          {word.split("").map((char, charIndex) => {
            const index =
              text
                .split(" ")
                .slice(0, wordIndex)
                .join("").length +
              charIndex +
              wordIndex;

            return (
              <motion.span
                key={charIndex}
                custom={index}
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {char}
              </motion.span>
            );
          })}

          {/* SPACE BETWEEN WORDS */}
          <span className="inline-block">&nbsp;</span>
        </span>
      ))}
    </span>
  );
};

  return (
    <section className="relative h-[93vh] sm:h-screen min-h-[650px] sm:min-h-[700px] w-full overflow-hidden">

      {/* VIDEO */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0"
      >

        <video
          src={hero1}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40" />

      </motion.div>

      {/* CONTENT */}
      <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center text-white pt-20">

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >

          {/* TAGLINE */}
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/30 text-sm uppercase tracking-wider mb-6">
            {renderLetters("Climate & Carbon Solutions")}
          </div>

          {/* HEADING */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            {renderLetters(HERO_SLIDES[0]?.title || "")}
          </h1>

          {/* DESCRIPTION */}
          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            {renderLetters(HERO_SLIDES[0]?.description || "")}
          </p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >

            <Link
              to={HERO_SLIDES[0]?.link || "/"}
              className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md font-semibold flex items-center gap-2 transition-all duration-300"
            >
              {HERO_SLIDES[0]?.cta || "Learn More"}
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/contact"
              className="px-8 py-3 border border-white text-white rounded-md font-semibold hover:bg-white hover:text-black transition-all duration-300"
            >
              Get in Touch
            </Link>

          </motion.div>

        </motion.div>
      </div>

    </section>
  );
}