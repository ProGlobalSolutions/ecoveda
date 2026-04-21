import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HERO_SLIDES } from '@/src/constants';
import { useLocation } from "react-router-dom";

import hero1 from "../../assets/hero1.webp";
import hero2 from "../../assets/hero2.webp";
import hero3 from "../../assets/hero3.webp";

// ✅ USE LOCAL IMAGES HERE
const HERO_IMAGES = [hero1, hero2, hero3];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % HERO_IMAGES.length);

  const prevSlide = () =>
    setCurrent((prev) =>
      prev === 0 ? HERO_IMAGES.length - 1 : prev - 1
    );

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">

      {/* SLIDER */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.5 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >

          {/* ✅ CLEAN BACKGROUND IMAGE */}
          <img
            src={HERO_IMAGES[current]}
            className="absolute inset-0 w-full h-full object-cover scale-105 transition-transform duration-[10000ms]"
            loading="eager"
            decoding="async"
          />

          {/* ✅ DARK OVERLAY (IMPORTANT) */}
          <div className="absolute inset-0 bg-black/40" />

        </motion.div>
      </AnimatePresence>

      {/* CONTENT */}
      <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center text-white pt-20">

        <motion.div
          key={current + '-content'}
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
            {HERO_SLIDES[current]?.title}
          </h1>

          {/* DESCRIPTION */}
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            {HERO_SLIDES[current]?.description}
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              to={HERO_SLIDES[current]?.link || "/"}
              className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md font-semibold flex items-center gap-2"
            >
              {HERO_SLIDES[current]?.cta || "Learn More"}
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

      {/* CONTROLS */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-6">

        <button
          onClick={prevSlide}
          className="p-2 rounded-full border border-white/40 text-white hover:bg-white hover:text-black transition"
        >
          <ChevronLeft />
        </button>

        <div className="flex gap-2">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all ${
                current === i ? 'bg-emerald-500 w-8' : 'bg-white/50 w-2'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-2 rounded-full border border-white/40 text-white hover:bg-white hover:text-black transition"
        >
          <ChevronRight />
        </button>

      </div>

    </section>
  );
}