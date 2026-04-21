import { motion } from 'motion/react';
import { Leaf, ShieldCheck, Globe } from 'lucide-react';

export default function Intro() {
  const features = [
    {
      icon: Leaf,
      title: 'Nature-Based Solutions',
      description: 'Afforestation, restoration and sustainable land-use programs driving measurable carbon impact.',
    },
    {
      icon: ShieldCheck,
      title: 'High Integrity Projects',
      description: 'Transparent methodologies aligned with global carbon standards and verification systems.',
    },
    {
      icon: Globe,
      title: 'Global Climate Impact',
      description: 'Scaling projects that empower communities and accelerate transition to a low-carbon economy.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <span className="text-emerald-600 font-semibold uppercase text-sm tracking-wider mb-4 block">
              About Ecoveda Climate
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight mb-6">
              Building Scalable Climate Solutions for a Low-Carbon Future
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Ecoveda Climate is a global climate solutions provider focused on developing
              high-integrity carbon projects and sustainability initiatives. We operate at
              the intersection of environmental science, financial structuring and regulatory
              strategy to deliver measurable climate impact.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Our mission is to accelerate ecological preservation and climate resilience by
              leveraging carbon finance and collective action — with an ambition to impact
              over <span className="font-semibold text-slate-800">100 million people</span> and generate
              <span className="font-semibold text-slate-800"> 1 billion+ carbon credits</span> by 2030.
            </p>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div key={i} className="p-5 border border-gray-200 rounded-xl hover:shadow-md transition">

                  <div className="w-10 h-10 flex items-center justify-center bg-emerald-50 text-emerald-600 rounded-md mb-3">
                    <f.icon className="w-5 h-5" />
                  </div>

                  <h4 className="font-semibold text-slate-800 mb-1">
                    {f.title}
                  </h4>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {f.description}
                  </p>

                </div>
              ))}
            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1508780709619-79562169bc64"
                alt="Climate Solutions"
                className="w-full h-full object-cover"
              />
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}