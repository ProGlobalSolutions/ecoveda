import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Building2, Cpu, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICES = [

  {
    icon: Building2,
    title: 'Government & NGOs',
    description: 'Supporting public sector and development organisations with scalable climate initiatives.',
    link: '/services/govt-ngo',
    bg: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df',// community/government
  },
  {
    icon: Globe,
    title: 'Corporates',
    description: 'Helping businesses achieve net-zero through ESG, decarbonisation and carbon markets.',
    link: '/services/corporates',
    bg: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72', // corporate/building
  },
  {
    icon: Cpu,
    title: 'Climate Technology',
    description: 'Advanced DMRV systems, AI, IoT and data-driven climate monitoring solutions.',
    link: '/services/ecotech',
    bg: 'https://images.unsplash.com/photo-1518770660439-4636190af475', // tech
  },
];

export default function Verticals() {
  return (
   <section className="py-8 bg-stone-50">
    <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-center"
        >
          <span className="text-emerald-600 font-semibold uppercase text-sm tracking-wider block mb-3">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
            Comprehensive Climate Solutions
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Delivering end-to-end services across carbon markets, sustainability strategy and climate technology.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">

          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative w-full max-w-sm mx-auto rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 bg-white"
            >

              {/* BACKGROUND IMAGE */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 group-hover:brightness-110"
                style={{ backgroundImage: `url(${service.bg})` }}
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/60 lg:bg-transparent lg:group-hover:bg-black/50 transition-colors duration-500" />

              {/* CONTENT */}
              <div className="relative z-10 p-6">

                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center rounded-lg mb-6 transition-colors duration-500 bg-white/20 text-white lg:bg-emerald-50 lg:text-emerald-600 lg:group-hover:bg-emerald-500 lg:group-hover:text-white">
                  <service.icon className="w-6 h-6" />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-bold mb-3 transition-colors duration-500 text-white lg:text-slate-900 lg:group-hover:text-white">
                  {service.title}
                </h3>

                {/* DESC */}
                <p className="text-sm leading-relaxed mb-6 transition-colors duration-500 text-white/90 lg:text-slate-600 lg:group-hover:text-white/90">
                  {service.description}
                </p>

                {/* LINK */}
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 font-semibold text-sm transition-colors duration-500 text-emerald-300 lg:text-emerald-600 lg:group-hover:text-emerald-300"
                >
                  Explore
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}



