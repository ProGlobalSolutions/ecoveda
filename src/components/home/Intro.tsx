import { motion } from 'motion/react';
import { Leaf, ShieldCheck, Globe } from 'lucide-react';
import largefarm from '../../assets/largefarms.webp';

export default function Intro() {
  const features = [
    {
      icon: Leaf,
      title: 'Nature-Based Solutions',
      description: 'Afforestation, restoration and sustainable land-use programs driving measurable carbon impact.',
      bg: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e', // forest / nature
    },
    {
      icon: ShieldCheck,
      title: 'High Integrity Projects',
      description: 'Transparent methodologies aligned with global carbon standards and verification systems.',
      bg: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85', // documents / compliance
    },
    {
      icon: Globe,
      title: 'Global Climate Impact',
      description: 'Scaling projects that empower communities and accelerate transition to a low-carbon economy.',
      bg: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e', // global / earth / landscape
    },
  ];

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

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
                <div
                  key={i}
                  className="group relative rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition"
                >

                  {/* BG IMAGE */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${f.bg})` }}
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition" />

                  {/* CONTENT */}
                  <div className="relative z-10 p-5 text-white">

                    <div className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur text-white rounded-md mb-3 group-hover:bg-emerald-500 transition">
                      <f.icon className="w-5 h-5" />
                    </div>

                    <h4 className="font-semibold mb-1">
                      {f.title}
                    </h4>

                    <p className="text-sm text-white/90 leading-relaxed">
                      {f.description}
                    </p>

                  </div>

                </div>
              ))}
            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
         <motion.div
  className="hidden lg:block"
  initial={{ x: 40, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={largefarm}
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