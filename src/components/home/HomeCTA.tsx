import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import homeVideo from '../../assets/homebe.mp4';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

export default function HomeCTA() {
  return (
    <section className="relative overflow-hidden py-14 md:py-20">

      {/* BACKGROUND VIDEO */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={homeVideo} type="video/mp4" />
        </video>

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >

          {/* TITLE */}
          <motion.h2
            variants={fadeUp}
            className="mb-5 text-3xl md:text-5xl font-serif font-bold leading-tight tracking-tight drop-shadow-xl"
          >
            Ready to Build Something That Lasts?
          </motion.h2>

          {/* PARAGRAPH */}
          <motion.p
            variants={fadeUp}
            className="mx-auto mb-8 max-w-2xl text-base md:text-xl leading-relaxed text-white/90"
          >
            Whether you are exploring your first carbon project or scaling a
            global decarbonisation strategy, our team is ready to partner with you.
          </motion.p>

          {/* BUTTON */}
          <motion.div variants={fadeUp}>
            <Link
              to="/contact"
              className="
                inline-flex items-center gap-3
                rounded-full bg-emerald-600
                px-8 py-3 md:px-10 md:py-4
                text-base md:text-lg font-bold
                transition-all duration-300
                hover:bg-emerald-500
                hover:scale-105
                hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]
              "
            >
              Contact Our Climate Advisory Team
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

        </motion.div>

        {/* CONTACT GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            mt-12 md:mt-16
            grid gap-8
            border-t border-white/20
            pt-10
            md:grid-cols-3
          "
        >

          {/* EMAIL */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center gap-3"
          >
            <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 text-emerald-400">
              <Mail className="w-6 h-6" />
            </div>
            <p className="font-semibold text-white">Email Us</p>
            <a
              href="mailto:info@ecovedaclimate.com"
              className="text-white/80 hover:text-emerald-400 transition-colors text-center"
            >
              info@ecovedaclimate.com
            </a>
          </motion.div>

          {/* PHONE */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center gap-3"
          >
            <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 text-emerald-400">
              <Phone className="w-6 h-6" />
            </div>
            <p className="font-semibold text-white">Call Us</p>
            <a
              href="tel:+919343770556"
              className="text-white/80 hover:text-emerald-400 transition-colors"
            >
              +91 93437 70556
            </a>
          </motion.div>

          {/* ADDRESS */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center gap-3"
          >
            <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 text-emerald-400">
              <MapPin className="w-6 h-6" />
            </div>
            <p className="font-semibold text-white">Visit Us</p>
            <p className="text-center text-white/70 leading-relaxed">
              DGL 019, Ground Floor, DLF Galleria<br />
              Mayur Vihar, New Delhi 110091
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}