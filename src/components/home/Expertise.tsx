import { motion } from 'motion/react';
import {
  Leaf,
  Factory,
  Wind,
  Orbit,
  BarChart3,
  Cpu,
} from 'lucide-react';

export default function Expertise() {
  /* LETTER ANIMATION */
  const letterAnimation = {
    hidden: { opacity: 0, y: 14 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.003,
        duration: 0.18,
        ease: 'easeOut',
      },
    }),
  };

  const renderLetters = (text: string) => (
    <span className="inline">
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );

  /* EXPERTISE DATA */
  const expertise = [
    {
      number: '01',
      title: 'Nature-Based Solutions',
      icon: Leaf,
      description:
        'Afforestation • Reforestation • Wetland Restoration • Sustainable Land Management • REDD+',
      gradient: 'from-emerald-500 to-green-400',
      glow: 'group-hover:shadow-emerald-500/30',
    },
    {
      number: '02',
      title: 'Carbon Removal Technologies',
      icon: Orbit,
      description:
        'Biochar • Enhanced Rock Weathering • Direct Air Capture • Mineralisation Systems',
      gradient: 'from-cyan-500 to-emerald-400',
      glow: 'group-hover:shadow-cyan-500/30',
    },
    {
      number: '03',
      title: 'Clean Energy Transition',
      icon: Wind,
      description:
        'Solar • Wind • Hydropower • Biogas • Clean Cooking • Fuel Switching Solutions',
      gradient: 'from-sky-500 to-cyan-400',
      glow: 'group-hover:shadow-sky-500/30',
    },
    {
      number: '04',
      title: 'Industrial Decarbonisation',
      icon: Factory,
      description:
        'Waste Heat Recovery • E-Waste Recycling • Landfill Gas • Industrial Efficiency Systems',
      gradient: 'from-orange-500 to-amber-400',
      glow: 'group-hover:shadow-orange-500/30',
    },
    {
      number: '05',
      title: 'Hard-to-Abate Sectors',
      icon: BarChart3,
      description:
        'Fleet Electrification • Mining Logistics Shift • Low-Emission Transport • Supply Chain Abatement',
      gradient: 'from-violet-500 to-fuchsia-400',
      glow: 'group-hover:shadow-violet-500/30',
    },
    {
      number: '06',
      title: 'Climate Tech & DMRV',
      icon: Cpu,
      description:
        'AI-based MRV • Satellite Monitoring • IoT Sensors • GIS Analytics • Blockchain Tracking',
      gradient: 'from-teal-500 to-emerald-400',
      glow: 'group-hover:shadow-teal-500/30',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/30 to-white py-24">
      {/* TOP BACKGROUND GLOW */}
      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-emerald-300/20 blur-[130px]" />

      {/* SIDE GLOW */}
      <div className="absolute right-0 top-40 h-[350px] w-[350px] rounded-full bg-cyan-200/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <motion.div
  initial={{ opacity: 0, y: 18 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className="inline-block text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700"
>
  {renderLetters('Our Expertise')}
</motion.div> 

          <h2 className="mt-6 text-4xl font-black leading-tight text-slate-900 md:text-6xl">
            {renderLetters('Building Bankable Climate Solutions')}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            {renderLetters(
              'We design scalable climate infrastructure and high-integrity carbon assets that align sustainability with institutional-grade investment opportunities.'
            )}
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* OUTER GLOW */}
                <div
                  className={`
                    absolute
                    -inset-[2px]
                    rounded-[30px]
                    opacity-0
                    blur-2xl
                    transition-all
                    duration-700
                    group-hover:opacity-100
                    bg-gradient-to-r
                    ${item.gradient}
                  `}
                />

                {/* CARD */}
                <div
                  className={`
                    relative
                    z-10
                    h-full
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-white/60
                    bg-white/90
                    p-8
                    shadow-lg
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    group-hover:border-white
                    group-hover:shadow-2xl
                    ${item.glow}
                  `}
                >
                  {/* TOP LIGHT EFFECT */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.7),transparent_45%)] opacity-60" />

                  {/* ICON */}
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      rotate: 4,
                    }}
                    transition={{ type: 'spring', stiffness: 250 }}
                    className={`
                      relative
                      flex
                      h-20
                      w-20
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      ${item.gradient}
                      shadow-xl
                    `}
                  >
                    {/* ICON GLOW */}
                    <div className="absolute inset-0 rounded-2xl bg-white/20 blur-md" />

                    <Icon
                      size={34}
                      strokeWidth={2.2}
                      className="relative z-10 text-white"
                    />
                  </motion.div>

                  {/* NUMBER */}
                  <div className="relative z-10 mt-7 text-xs font-bold tracking-[0.35em] text-emerald-600">
                    {renderLetters(item.number)}
                  </div>

                  {/* TITLE */}
                  <h3 className="relative z-10 mt-4 text-2xl font-extrabold leading-snug text-slate-900 transition-all duration-300 group-hover:text-emerald-700">
                    {renderLetters(item.title)}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="relative z-10 mt-4 text-[15px] leading-8 text-slate-600">
                    {renderLetters(item.description)}
                  </p>

                  {/* HOVER SHINE */}
                  <div className="absolute -left-32 top-0 h-full w-20 rotate-12 bg-white/30 blur-2xl transition-all duration-1000 group-hover:left-[120%]" />

                  {/* BOTTOM LINE */}
                  <div
                    className={`
                      absolute
                      bottom-0
                      left-0
                      h-[3px]
                      w-0
                      rounded-full
                      bg-gradient-to-r
                      transition-all
                      duration-700
                      group-hover:w-full
                      ${item.gradient}
                    `}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}