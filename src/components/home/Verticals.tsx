import { motion } from 'motion/react';
import { ArrowRight, Leaf, Building2, Cpu, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    icon: Leaf,
    title: 'Sustainability Services',
    description: 'End-to-end climate solutions including carbon project development and sustainability strategy.',
    link: '/services/sustainability',
  },
  {
    icon: Building2,
    title: 'Government & NGOs',
    description: 'Supporting public sector and development organisations with scalable climate initiatives.',
    link: '/services/govt-ngo',
  },
  {
    icon: Globe,
    title: 'Corporates',
    description: 'Helping businesses achieve net-zero through ESG, decarbonisation and carbon markets.',
    link: '/services/corporates',
  },
  {
    icon: Cpu,
    title: 'Climate Technology',
    description: 'Advanced DMRV systems, AI, IoT and data-driven climate monitoring solutions.',
    link: '/services/ecotech',
  },
];

export default function Verticals() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-16 text-center">
          <span className="text-emerald-600 font-semibold uppercase text-sm tracking-wider block mb-3">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
            Comprehensive Climate Solutions
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Delivering end-to-end services across carbon markets, sustainability strategy and climate technology.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {SERVICES.map((service, i) => (
            <motion.div
              key={i}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition"
            >

              {/* ICON */}
              <div className="w-12 h-12 flex items-center justify-center bg-emerald-50 text-emerald-600 rounded-lg mb-6 group-hover:bg-emerald-500 group-hover:text-white transition">
                <service.icon className="w-6 h-6" />
              </div>

              {/* TITLE */}
              <h3 className="text-lg font-bold text-slate-800 mb-3">
                {service.title}
              </h3>

              {/* DESC */}
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* LINK */}
              <Link
                to={service.link}
                className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm"
              >
                Explore
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </Link>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}