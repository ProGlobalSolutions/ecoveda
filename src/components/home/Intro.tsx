import { motion } from 'motion/react';
import { Leaf, ShieldCheck, Globe } from 'lucide-react';
import largefarm from '../../assets/largefarms.webp';

export default function Intro() {
  const features = [
    {
      icon: Leaf,
      title: 'Nature-Based Solutions',
      description: 'Afforestation, restoration and sustainable land-use programs driving measurable carbon impact.',
      bg: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
    },
    {
      icon: ShieldCheck,
      title: 'High Integrity Projects',
      description: 'Transparent methodologies aligned with global carbon standards and verification systems.',
      bg: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85',
    },
    {
      icon: Globe,
      title: 'Global Climate Impact',
      description: 'Scaling projects that empower communities and accelerate transition to a low-carbon economy.',
      bg: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    },
  ];

  return (
    <section className="bg-stone-50 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] xl:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:gap-14 xl:gap-16">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="mb-4 block text-sm font-semibold uppercase tracking-wider text-emerald-600">
              About Ecoveda Climate
            </span>

            <h2 className="mb-6 text-4xl font-extrabold leading-tight text-slate-800 md:text-5xl">
              Building Scalable Climate Solutions for a Low-Carbon Future
            </h2>

            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              Ecoveda Climate is a global climate solutions provider focused on developing
              high-integrity carbon projects and sustainability initiatives. We operate at
              the intersection of environmental science, financial structuring and regulatory
              strategy to deliver measurable climate impact.
            </p>

            <p className="text-lg leading-relaxed text-slate-600">
              Our mission is to accelerate ecological preservation and climate resilience by
              leveraging carbon finance and collective action - with an ambition to impact
              over <span className="font-semibold text-slate-800">100 million people</span> and generate
              <span className="font-semibold text-slate-800"> 1 billion+ carbon credits</span> by 2030.
            </p>
          </motion.div>

          <motion.div
            className="hidden lg:block"
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[4/3] overflow-hidden rounded-[28px] shadow-[0_24px_70px_rgba(15,23,42,0.14)]">
              <img
                src={largefarm}
                alt="Climate Solutions"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 32, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-12 xl:grid-cols-3"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative min-h-[260px] overflow-hidden rounded-2xl border border-stone-200/80 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${feature.bg})` }}
              />

              <div className="absolute inset-0 bg-slate-950/55 transition group-hover:bg-slate-950/45" />

              <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-white/20 text-white backdrop-blur transition group-hover:bg-emerald-500">
                  <feature.icon className="h-5 w-5" />
                </div>

                <h4 className="mb-2 text-xl font-semibold">{feature.title}</h4>

                <p className="max-w-xs text-sm leading-relaxed text-white/90">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
