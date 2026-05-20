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
  { name: 'Aarksee', logo: logo1 },
  { name: 'SK Forest', logo: logo2 },
  { name: 'CarboVerte', logo: logo3 },
  { name: 'Meta Materials Circular Markets', logo: logo4 },
  { name: 'Sevenstar', logo: logo5 },
  { name: 'Cenergist', logo: logo6 },
  { name: 'Resources Future', logo: logo7 },
  { name: 'SKG Sangha', logo: logo8 },
  { name: 'Thriveni', logo: logo9 },
  { name: 'ATOA', logo: logo10 },
  { name: 'ATR Carbon Solution', logo: logo11 },
  { name: 'Attero', logo: logo12 },
  { name: 'Sembcorp', logo: logo13 },
  { name: 'Prana Climatech', logo: logo14 },
  { name: 'CO2 Cap Projects Africa', logo: logo15 },
  { name: 'Vision Green Tech', logo: logo16 },
  { name: 'YadGreen', logo: logo17 },
  { name: 'Planet NetZero', logo: logo18 },
  { name: 'Al-Badhour Al-Hayya', logo: logo19 },
  { name: 'RM Agrico', logo: logo20 },
  { name: 'Mahadesh Farms', logo: logo21 },
  { name: 'Goenvi Technologies', logo: logo22 },
  { name: 'Pineview Technology', logo: logo23 },
  { name: 'Lloyds Metals', logo: logo24 },
  { name: 'Ruuris Innovations', logo: logo25 },
  { name: 'Govt. of Maharashtra', logo: logo26 },
  { name: 'AADB', logo: logo27 },
];

type LogoPartner = (typeof ALL_LOGOS)[0];

/* ─────────────────────────────────────────────
   LOGO CARD
───────────────────────────────────────────── */
function LogoTile({ partner }: { partner: LogoPartner }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -6,
      }}
      transition={{ duration: 0.25 }}
      className="
        group
        relative
        mx-3
        flex
        h-[190px]
        w-[240px]
        shrink-0
        items-center
        justify-center
        rounded-2xl
        border
        border-emerald-100
        bg-white/80
        p-8
        backdrop-blur-sm
        transition-all
        duration-300
        hover:border-emerald-300
        hover:bg-emerald-50
        hover:shadow-2xl
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-100/0 via-emerald-100/30 to-green-100/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Logo */}
      <img
        src={partner.logo}
        alt={partner.name}
        title={partner.name}
        loading="lazy"
        className="
          relative
          z-10
          h-auto
          max-h-[75px]
          w-auto
          max-w-[180px]
          object-contain
          opacity-90
          transition-all
          duration-300
          group-hover:scale-105
          group-hover:opacity-100
        "
      />
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MARQUEE ROW
───────────────────────────────────────────── */
function MarqueeRow({
  logos,
  reverse = false,
}: {
  logos: LogoPartner[];
  reverse?: boolean;
}) {
  return (
    <div className="relative flex overflow-hidden py-4">
      <motion.div
        initial={{
          x: reverse ? '-50%' : '0%',
        }}
        animate={{
          x: reverse ? '0%' : '-50%',
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="flex"
      >
        {[...logos, ...logos].map((partner, index) => (
          <LogoTile
            key={`${partner.name}-${index}`}
            partner={partner}
          />
        ))}
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   SPLIT LOGOS INTO ROWS
───────────────────────────────────────────── */
const row1 = ALL_LOGOS.slice(0, 9);
const row2 = ALL_LOGOS.slice(9, 18);
const row3 = ALL_LOGOS.slice(18, 27);

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function Partners() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-emerald-50 to-green-100 py-16 md:py-24">

      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-green-200/40 blur-3xl" />

      {/* GRID PATTERN */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[radial-gradient(#065f46_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.24em] text-emerald-700 md:text-sm">
            Our Clients and Partners
          </span>

          <h2 className="mb-5 text-3xl font-bold leading-tight text-emerald-950 md:text-5xl">
            Trusted by Innovators Across the Climate Economy
          </h2>

          <p className="text-base leading-relaxed text-emerald-900/80 md:text-lg">
            From governments and multilateral agencies to pioneering climate
            technology start-ups, Ecoveda Climate partners with organisations
            committed to high-integrity carbon markets and measurable climate
            impact.
          </p>
        </motion.div>

        {/* MARQUEE LOGOS */}
        <div className="space-y-6">

          {/* ROW 1 */}
          <MarqueeRow logos={row1} />

          {/* ROW 2 REVERSE */}
          <MarqueeRow logos={row2} reverse />

          {/* ROW 3 */}
          <MarqueeRow logos={row3} />

        </div>
      </div>
    </section>
  );
}