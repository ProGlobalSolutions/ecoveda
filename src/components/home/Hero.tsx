import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HERO_SLIDES } from '@/src/constants';

import hero1 from "../../assets/hero.mp4";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">

      {/* SINGLE IMAGE */}
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
></video>

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
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/30 text-sm uppercase tracking-wider mb-6">
            Climate & Carbon Solutions
          </span>

          {/* HEADING */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            {HERO_SLIDES[0]?.title}
          </h1>

          {/* DESCRIPTION */}
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            {HERO_SLIDES[0]?.description}
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              to={HERO_SLIDES[0]?.link || "/"}
              className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md font-semibold flex items-center gap-2"
            >
              {HERO_SLIDES[0]?.cta || "Learn More"}
              <ArrowRight className="w-5 h-5" />
            </Link>

            <Link
              to="/contact"
              className="px-8 py-3 border border-white text-white rounded-md font-semibold hover:bg-white hover:text-black transition"
            >
              Get in Touch
            </Link>

          </div>

        </motion.div>
      </div>

    </section>
  );
}