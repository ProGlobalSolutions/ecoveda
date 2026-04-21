import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-emerald-600 font-semibold uppercase text-sm tracking-wider block mb-3">
            Clients & Partners
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
            Collaborating Across the Climate Ecosystem
          </h2>

          <p className="text-slate-600 text-lg">
            We work with governments, corporates, financial institutions and development organisations to deliver high-impact climate solutions globally.
          </p>
        </div>

        {/* LOGO GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition">

          {/* Replace with real logos later */}
          {[
            "Global Corp",
            "Eco Partners",
            "Nature Trust",
            "Blue Carbon",
            "Future Energy",
          ].map((name, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-lg md:text-xl font-bold text-gray-400 tracking-wide text-center"
            >
              {name}
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}