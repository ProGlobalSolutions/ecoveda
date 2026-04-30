import React from 'react';
import { motion } from 'framer-motion';

const PARTNERS = [
  "Aarksee", "SK Forest", "CarboVerte", "Meta Materials Circular Markets",
  "Sevenstar", "Cenergist", "Resources Future", "SKG Sangha",
  "Thriveni", "ATOA", "ATR Carbon Solution", "Attero",
  "Sembcorp", "Prana Climatech", "CO2 Cap Projects Africa", "Vision Green Tech",
  "YadGreen", "Planet NetZero", "Al-Badhour Al-Hayya", "RM Agrico",
  "Mahadesh Farms", "Goenvi Technologies", "Pineview Technology", "Lloyds Metals",
  "Ruuris Innovations", "Govt. of Maharashtra", "AADB"
];

export default function Partners() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-600 font-semibold uppercase text-sm tracking-wider block mb-3">
            Our Clients and Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6 leading-tight">
            Trusted by Innovators Across the Climate Economy
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            From governments and multilateral agencies to pioneering climate technology start-ups, Ecoveda Climate partners with organisations that share our commitment to high-integrity carbon markets and measurable climate impact.
          </p>
        </div>

        {/* LOGO GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {PARTNERS.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="aspect-[3/2] md:aspect-square bg-white border border-stone-200/60 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300 group"
            >
              <h3 className="font-heading font-bold text-slate-800 text-lg md:text-xl tracking-tight group-hover:text-emerald-700 transition-colors">
                {partner}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
