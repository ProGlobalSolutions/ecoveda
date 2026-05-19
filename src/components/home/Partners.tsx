import React from 'react';
import { motion } from 'framer-motion';

import logo1 from '../../assets/1.webp';
import logo2 from '../../assets/2.webp';
import logo3 from '../../assets/3.webp';
import logo4 from '../../assets/4.webp';
import logo5 from '../../assets/5.webp';
import logo6 from '../../assets/6.webp';
import logo7 from '../../assets/7.webp';
import logo8 from '../../assets/8.webp';
import logo9 from '../../assets/9.svg';
import logo10 from '../../assets/10.webp';
import logo11 from '../../assets/11.webp';
import logo12 from '../../assets/12.webp';
import logo13 from '../../assets/13.webp';
import logo14 from '../../assets/14.webp';
import logo15 from '../../assets/15.webp';
import logo16 from '../../assets/16.webp';
import logo17 from '../../assets/17.webp';
import logo18 from '../../assets/18.webp';
import logo19 from '../../assets/19.webp';
import logo20 from '../../assets/20.webp';
import logo21 from '../../assets/21.webp';
import logo22 from '../../assets/22.webp';
import logo23 from '../../assets/23.webp';
import logo24 from '../../assets/24.svg';
import logo25 from '../../assets/25.webp';
import logo26 from '../../assets/26.webp';
import logo27 from '../../assets/27.webp';

const ALL_LOGOS = [
  { name: "Aarksee", logo: logo1 },
  { name: "SK Forest", logo: logo2 },
  { name: "CarboVerte", logo: logo3 },
  { name: "Meta Materials Circular Markets", logo: logo4 },
  { name: "Sevenstar", logo: logo5 },
  { name: "Cenergist", logo: logo6 },
  { name: "Resources Future", logo: logo7 },
  { name: "SKG Sangha", logo: logo8 },
  { name: "Thriveni", logo: logo9 },
  { name: "ATOA", logo: logo10 },
  { name: "ATR Carbon Solution", logo: logo11 },
  { name: "Attero", logo: logo12 },
  { name: "Sembcorp", logo: logo13 },
  { name: "Prana Climatech", logo: logo14 },
  { name: "CO2 Cap Projects Africa", logo: logo15 },
  { name: "Vision Green Tech", logo: logo16 },
  { name: "YadGreen", logo: logo17 },
  { name: "Planet NetZero", logo: logo18 },
  { name: "Al-Badhour Al-Hayya", logo: logo19 },
  { name: "RM Agrico", logo: logo20 },
  { name: "Mahadesh Farms", logo: logo21 },
  { name: "Goenvi Technologies", logo: logo22 },
  { name: "Pineview Technology", logo: logo23 },
  { name: "Lloyds Metals", logo: logo24 },
  { name: "Ruuris Innovations", logo: logo25 },
  { name: "Govt. of Maharashtra", logo: logo26 },
  { name: "AADB", logo: logo27 },
];

type LogoPartner = (typeof ALL_LOGOS)[0];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function LogoTile({ partner }: { partner: LogoPartner }) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        scale: 1.06,
        y: -6,
        transition: { duration: 0.2 },
      }}
      className="
        group
        aspect-square
        min-h-[170px]
        border border-emerald-100
        bg-white/80
        backdrop-blur-sm
        flex items-center justify-center
        p-7 md:p-10
        rounded-xl
        transition-all duration-300 ease-out
        hover:bg-emerald-50
        hover:border-emerald-300
        hover:shadow-xl
      "
    >
      <img
        src={partner.logo}
        alt={partner.name}
        title={partner.name}
        loading="lazy"
        className="
          h-auto
          max-h-[60px]      /* 🔥 increased from 52px → 70px */
          md:max-h-[80px]   /* 🔥 increased from 64px → 85px */
          w-auto
          max-w-[150px]     /* 🔥 increased from 140px → 170px */
          md:max-w-[180px]  /* 🔥 increased from 160px → 200px */
          object-contain
          opacity-90
          transition-all duration-300
          group-hover:opacity-100
        "
      />
    </motion.div>
  );
}
export default function Partners() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-white via-emerald-50 to-green-100">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14 md:mb-16 text-left"
        >
          <span className="text-emerald-700 font-semibold uppercase text-xs md:text-sm tracking-[0.24em] block mb-4">
            Our Clients and Partners
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 leading-tight mb-5">
            Trusted by Innovators Across the Climate Economy
          </h2>

          <p className="text-emerald-900/80 text-base md:text-lg leading-relaxed">
            From governments and multilateral agencies to pioneering climate
            technology start-ups, Ecoveda Climate partners with organisations
            committed to high-integrity carbon markets and measurable climate impact.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-4
          "
        >
          {ALL_LOGOS.map((partner) => (
            <LogoTile key={partner.name} partner={partner} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}