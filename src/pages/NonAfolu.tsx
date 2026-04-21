import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const EXPERTISE = [
  {
    title: 'Clean Cooking',
    description: 'Efficient cooking solutions reducing emissions and improving health.',
    image: 'https://images.unsplash.com/photo-1591189863430-ab87e120f312?auto=format&fit=crop&q=80',
  },
  {
    title: 'Biogas',
    description: 'Organic waste conversion into renewable energy sources.',
    image: 'https://images.unsplash.com/photo-1541625602330-2277a1cd43a7?auto=format&fit=crop&q=80',
  },
  {
    title: 'Renewable Energy Projects',
    description: 'Solar, wind, and hybrid solutions for sustainable power.',
    image: 'https://images.unsplash.com/photo-1509391366360-fe5bb58583bb?auto=format&fit=crop&q=80',
  },
  {
    title: 'Energy Efficiency Solutions',
    description: 'Reducing energy consumption through optimized systems.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
  },
  {
    title: 'Waste to Energy',
    description: 'Transforming waste into usable energy resources.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80',
  },
  {
    title: 'Sustainable Transportation',
    description: 'Low-emission transport systems and mobility solutions.',
    image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80',
  },
];

const IMPACTS = [
  'Reduced greenhouse gas emissions',
  'Clean energy adoption',
  'Improved air quality',
  'Sustainable industrial practices',
];

export default function NonAfolu() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1466611653911-954ffec136ce?auto=format&fit=crop&q=80)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/85 to-primary-dark/95" />
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-sans font-extrabold uppercase tracking-tighter mb-4"
          >
            Non AFOLU
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-medium text-white/90 max-w-3xl mx-auto uppercase tracking-wide"
          >
            Energy, Industry and Transportation
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
            Technology-Driven Solutions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-sans font-extrabold text-slate-800 mb-8"
          >
            What is Non-AFOLU?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg leading-relaxed"
          >
            Non-AFOLU projects focus on reducing emissions from energy, industrial processes, and transportation through technology-driven climate solutions and efficiency improvements.
          </motion.p>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-card-bg">
        <div className="max-w-7xl mx-auto px-10">
          <div className="mb-16">
            <span className="text-primary font-bold tracking-[1.5px] uppercase text-[12px] mb-4 block">Our Expertise</span>
            <h2 className="text-3xl md:text-[36px] font-sans font-extrabold text-slate-800">Technological & Industrial Innovations</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                src="https://images.unsplash.com/photo-1466611653911-954ffec136ce?auto=format&fit=crop&q=80"
                alt="Impact"
                className="rounded-xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent p-8 rounded-lg shadow-xl text-white">
                <p className="text-3xl font-extrabold">Net Zero</p>
                <p className="text-[10px] font-bold uppercase tracking-wider">Emission Reduction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-primary-dark/20" />
        <div className="relative z-10 max-w-4xl mx-auto px-10">
          <h2 className="text-4xl font-sans font-extrabold mb-8 leading-tight">Partner With Us</h2>
          <p className="text-white/80 mb-10 text-lg">
            Ready to transition to clean energy or sustainable industrial practices? Let's work together to reduce your carbon footprint.
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
