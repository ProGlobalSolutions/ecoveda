import React from 'react';
import { motion } from 'framer-motion';
import { geoNaturalEarth1, geoPath } from 'd3-geo';
// @ts-ignore
import { feature } from 'topojson-client';
import worldData from '../../assets/countries-110m.json';

const WIDTH = 960;
const HEIGHT = 500;

const projection = geoNaturalEarth1()
  .scale(175)
  .translate([WIDTH / 2, HEIGHT / 2]);

const pathGenerator = geoPath().projection(projection);

// @ts-ignore
const countries = feature(
  worldData,
  // @ts-ignore
  worldData.objects.countries
);

/* ──────────────────────────────────────────────────
   LETTER ANIMATION
────────────────────────────────────────────────── */
const letterAnimation = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.003,
      duration: 0.18,
      ease: 'easeOut',
    },
  }),
};

/* ──────────────────────────────────────────────────
   WORD ANIMATION
────────────────────────────────────────────────── */
const renderAnimatedText = (text, className = '') => {
  return (
    <span className={`inline leading-[inherit] ${className}`}>
      {text.split(' ').map((word, wordIndex) => (
        <span
          key={wordIndex}
          className="inline-block whitespace-nowrap align-baseline mr-[0.35em]"
        >
          {word.split('').map((char, charIndex) => {
            const index = wordIndex * 20 + charIndex;

            return (
              <motion.span
                key={index}
                custom={index}
                variants={letterAnimation}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="inline-block will-change-transform"
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

/* ──────────────────────────────────────────────────
   LOCATIONS
────────────────────────────────────────────────── */
const LOCATIONS = [
  {
    id: 'delhi',
    name: 'New Delhi, India (HQ)',
    lon: 77.2,
    lat: 28.6,
    color: '#22c55e',
    glow: 'rgba(34,197,94,0.55)',
  },
  {
    id: 'guwahati',
    name: 'Guwahati, India',
    lon: 91.7,
    lat: 26.1,
    color: '#22c55e',
    glow: 'rgba(34,197,94,0.55)',
  },
  {
    id: 'pakistan',
    name: 'Pakistan',
    lon: 67.0,
    lat: 30.0,
    color: '#14b8a6',
    glow: 'rgba(20,184,166,0.45)',
  },
  {
    id: 'indonesia',
    name: 'Indonesia',
    lon: 113.9,
    lat: -0.8,
    color: '#14b8a6',
    glow: 'rgba(20,184,166,0.45)',
  },
  {
    id: 'timor',
    name: 'Timor-Leste',
    lon: 125.7,
    lat: -8.9,
    color: '#14b8a6',
    glow: 'rgba(20,184,166,0.45)',
  },
  {
    id: 'saudi',
    name: 'Saudi Arabia',
    lon: 45.1,
    lat: 23.9,
    color: '#14b8a6',
    glow: 'rgba(20,184,166,0.45)',
  },
  {
    id: 'cambodia',
    name: 'Cambodia',
    lon: 104.9,
    lat: 12.6,
    color: '#14b8a6',
    glow: 'rgba(20,184,166,0.45)',
  },
  {
    id: 'malawi',
    name: 'Malawi',
    lon: 34.3,
    lat: -13.3,
    color: '#14b8a6',
    glow: 'rgba(20,184,166,0.45)',
  },
  {
    id: 'rwanda',
    name: 'Rwanda',
    lon: 29.9,
    lat: -1.9,
    color: '#14b8a6',
    glow: 'rgba(20,184,166,0.45)',
  },
  {
    id: 'nigeria',
    name: 'Nigeria',
    lon: 8.7,
    lat: 9.1,
    color: '#14b8a6',
    glow: 'rgba(20,184,166,0.45)',
  },
  {
    id: 'mongolia',
    name: 'Mongolia',
    lon: 103.8,
    lat: 46.9,
    color: '#14b8a6',
    glow: 'rgba(20,184,166,0.45)',
  },
  {
    id: 'zambia',
    name: 'Zambia',
    lon: 27.8,
    lat: -13.1,
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.55)',
  },
  {
    id: 'mexico',
    name: 'Mexico City',
    lon: -99.1,
    lat: 19.4,
    color: '#f59e0b',
    glow: 'rgba(245,158,11,0.55)',
  },
];

export default function GlobalPresence() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-white
        via-emerald-50
        to-green-100
        py-16
        md:py-24
      "
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-green-200/40 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10 max-w-4xl"
        >
          <div className="mb-3 block text-sm font-semibold uppercase tracking-[0.35em] text-emerald-700">
            {renderAnimatedText('Global Presence')}
          </div>

          <h2 className="mb-5 text-4xl font-bold leading-[1.05] text-emerald-950 md:text-5xl">
            {renderAnimatedText('Where We Work')}
          </h2>

          <p className="text-lg leading-relaxed text-emerald-900/80">
            {renderAnimatedText(
              'From our headquarters in New Delhi, Ecoveda Climate operates a growing international network, with a regional office in Guwahati and representatives in Zambia and Mexico City, enabling us to deliver on-the-ground climate impact across Asia, Africa, the Middle East and Latin America.'
            )}
          </p>
        </motion.div>

        {/* MAP */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="
            relative
            mb-8
            overflow-hidden
            rounded-3xl
            border
            border-emerald-200
            bg-white/70
            shadow-[0_10px_40px_rgba(16,185,129,0.15)]
            backdrop-blur-md
          "
        >
          <div className="w-full overflow-x-auto overflow-y-hidden touch-pan-x">
            <div className="min-w-[900px] md:min-w-full">

              <svg
                viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
                xmlns="http://www.w3.org/2000/svg"
                className="block h-auto w-full"
              >
                {/* MAP BG */}
                <rect
                  width={WIDTH}
                  height={HEIGHT}
                  fill="#ecfdf5"
                />

                {/* COUNTRIES */}
                {/* @ts-ignore */}
                {countries.features.map((feat, i) => (
                  <motion.path
                    key={i}
                    d={pathGenerator(feat) || ''}
                    fill="#b7e4d7"
                    stroke="#d1fae5"
                    strokeWidth={0.5}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: i * 0.001,
                    }}
                    className="transition-all duration-300 hover:fill-[#86efac]"
                  />
                ))}

                {/* LOCATION PINS */}
                {LOCATIONS.map((loc, index) => {
                  const coords = projection([loc.lon, loc.lat]);

                  if (!coords) return null;

                  const [x, y] = coords;

                  return (
                    <motion.g
                      key={loc.id}
                      initial={{
                        opacity: 0,
                        scale: 0,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        delay: index * 0.08,
                        duration: 0.4,
                      }}
                      className="group cursor-pointer"
                    >
                      {/* PULSE */}
                      <circle
                        cx={x}
                        cy={y}
                        r={8}
                        fill={loc.glow}
                        opacity={0.45}
                      >
                        <animate
                          attributeName="r"
                          values="6;14;6"
                          dur="2.8s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.5;0;0.5"
                          dur="2.8s"
                          repeatCount="indefinite"
                        />
                      </circle>

                      {/* MAIN PIN */}
                      <circle
                        cx={x}
                        cy={y}
                        r={4.5}
                        fill={loc.color}
                        stroke="#ffffff"
                        strokeWidth={1.4}
                        style={{
                          filter: `drop-shadow(0 0 8px ${loc.glow})`,
                        }}
                      />

                      {/* HOVER LABEL */}
                      <g className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <rect
                          x={x + 10}
                          y={y - 30}
                          rx={6}
                          ry={6}
                          width={150}
                          height={24}
                          fill="rgba(15,23,42,0.88)"
                        />

                        <text
                          x={x + 20}
                          y={y - 14}
                          fill="#ffffff"
                          fontSize="11"
                          fontWeight="600"
                        >
                          {loc.name}
                        </text>
                      </g>
                    </motion.g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* LEGEND */}
          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-6
              border-t
              border-emerald-100
              bg-white/70
              px-6
              py-5
              backdrop-blur-sm
            "
          >
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />

              <span className="text-sm text-emerald-900/80">
                {renderAnimatedText('HQ & Regional Offices')}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.7)]" />

              <span className="text-sm text-emerald-900/80">
                {renderAnimatedText('Active Projects')}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.7)]" />

              <span className="text-sm text-emerald-900/80">
                {renderAnimatedText('Representatives')}
              </span>
            </div>
          </div>
        </motion.div>

        {/* DETAILS GRID */}
        <div className="grid gap-6 md:grid-cols-3">

          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5 }}
            className="
              rounded-2xl
              border
              border-emerald-200
              bg-white/70
              p-6
              backdrop-blur-sm
              transition-all
              duration-300
              hover:shadow-xl
            "
          >
            <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.3em] text-emerald-600">
              {renderAnimatedText('Headquarters')}
            </span>

            <h3 className="mb-2 text-2xl font-bold text-emerald-950">
              {renderAnimatedText('New Delhi, India')}
            </h3>

            <p className="text-sm leading-relaxed text-emerald-900/70">
              {renderAnimatedText(
                'DGL 019, Ground Floor, DLF Galleria, Mayur Vihar, New Delhi 110091'
              )}
            </p>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="
              rounded-2xl
              border
              border-teal-200
              bg-white/70
              p-6
              backdrop-blur-sm
              transition-all
              duration-300
              hover:shadow-xl
            "
          >
            <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.3em] text-teal-600">
              {renderAnimatedText('Regional Office')}
            </span>

            <h3 className="mb-2 text-2xl font-bold text-emerald-950">
              {renderAnimatedText('Guwahati, India')}
            </h3>

            <p className="text-sm leading-relaxed text-emerald-900/70">
              {renderAnimatedText(
                'Supporting operations across North-East India and South-East Asian markets.'
              )}
            </p>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="
              rounded-2xl
              border
              border-amber-200
              bg-white/70
              p-6
              backdrop-blur-sm
              transition-all
              duration-300
              hover:shadow-xl
            "
          >
            <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-600">
              {renderAnimatedText('International')}
            </span>

            <h3 className="mb-2 text-2xl font-bold text-emerald-950">
              {renderAnimatedText('Zambia & Mexico City')}
            </h3>

            <p className="text-sm leading-relaxed text-emerald-900/70">
              {renderAnimatedText(
                'Regional representatives driving climate projects across Africa and Latin America.'
              )}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}