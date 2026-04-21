import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const EXPERTISE = [
  {
    title: 'Afforestation, Reforestation & Revegetation',
    description: 'Planting and restoring forests to capture atmospheric carbon.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778eff?auto=format&fit=crop&q=80',
  },
  {
    title: 'Sustainable Agricultural Land Management',
    description: 'Optimizing farming practices to improve soil and sequester carbon.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fee74a62?auto=format&fit=crop&q=80',
  },
  {
    title: 'Wetland Restoration & Conservation',
    description: 'Restoring mangroves and marshes for powerful blue carbon storage.',
    image: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&q=80',
  },
  {
    title: 'Biochar Carbon Sequestration',
    description: 'Creating stable charcoal from biomass for long-term soil carbon storage.',
    image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80',
  },
];

const IMPACTS = [
  'Carbon sequestration enhancement',
  'Ecosystem restoration',
  'Improved soil health',
  'Community livelihood support',
];

export default function Afolu() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 to-primary-dark/95" />
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-sans font-extrabold uppercase tracking-tighter mb-4"
          >
            AFOLU
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-medium text-white/90 max-w-3xl mx-auto uppercase tracking-wide"
          >
            Agriculture, Forestry and Other Land Use
          </motion.p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-10 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[1.5px] uppercase text-[12px] mb-4 block"
          >
            Nature-Based Solutions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-sans font-extrabold text-slate-800 mb-8"
          >
            What is AFOLU?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg leading-relaxed"
          >
            AFOLU focuses on nature-based solutions that reduce emissions through sustainable land use, forestry, and agriculture practices. These projects enhance carbon sequestration while improving biodiversity and supporting local communities.
          </motion.p>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-card-bg">
        <div className="max-w-7xl mx-auto px-10">
          <div className="mb-16">
            <span className="text-primary font-bold tracking-[1.5px] uppercase text-[12px] mb-4 block">Our Expertise</span>
            <h2 className="text-3xl md:text-[36px] font-sans font-extrabold text-slate-800">Specialized Land Use Strategies</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {EXPERTISE.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-primary transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-bold tracking-[1.5px] uppercase text-[12px] mb-4 block">Measurable Outcomes</span>
              <h2 className="text-4xl font-sans font-extrabold text-slate-800 mb-8">Impact We Deliver</h2>
              <div className="grid gap-4">
                {IMPACTS.map((impact, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100"
                  >
                    <CheckCircle2 className="text-accent w-6 h-6 shrink-0" />
                    <span className="font-semibold text-slate-700">{impact}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778eff?auto=format&fit=crop&q=80"
                alt="Impact"
                className="rounded-xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent p-8 rounded-lg shadow-xl text-white">
                <p className="text-3xl font-extrabold">100%</p>
                <p className="text-[10px] font-bold uppercase tracking-wider">Verified Sequestration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-primary-dark/20" />
        <div className="relative z-10 max-w-4xl mx-auto px-10">
          <h2 className="text-4xl font-sans font-extrabold mb-8 leading-tight">Start Your Climate Project</h2>
          <p className="text-white/80 mb-10 text-lg">
            Ready to implement nature-based solutions? Let's work together to restore ecosystems and sequestrate carbon.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-accent hover:bg-emerald-600 text-white rounded-md font-bold text-sm uppercase tracking-wider shadow-2xl transition-all"
          >
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
