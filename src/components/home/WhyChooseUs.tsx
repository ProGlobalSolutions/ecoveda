import { motion } from 'motion/react';
import { ShieldCheck, Eye, Scale } from 'lucide-react';

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Integrity',
    description:
      'We uphold the highest ethical standards in every project, ensuring credibility and trust in all emission reduction efforts.',
  },
  {
    icon: Scale,
    title: 'Accountability',
    description:
      'We take responsibility for every initiative, delivering measurable results while maintaining strong stakeholder confidence.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description:
      'We operate with openness, enabling stakeholders to understand, verify and engage with our climate solutions.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-emerald-600 font-semibold uppercase text-sm tracking-wider block mb-3">
            Our Values
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
            Principles That Guide Every Project
          </h2>

          <p className="text-slate-600 text-lg">
            Our approach is built on strong foundations of integrity, accountability and transparency — ensuring trust across communities, partners and markets.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {VALUES.map((value, i) => (
            <motion.div
              key={i}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-xl border border-gray-200 text-center hover:shadow-md transition"
            >

              {/* ICON */}
              <div className="w-14 h-14 mx-auto flex items-center justify-center bg-emerald-50 text-emerald-600 rounded-full mb-6">
                <value.icon className="w-6 h-6" />
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {value.title}
              </h3>

              {/* DESC */}
              <p className="text-slate-600 text-sm leading-relaxed">
                {value.description}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}