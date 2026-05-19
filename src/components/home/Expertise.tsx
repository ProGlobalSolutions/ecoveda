import { motion } from 'motion/react';

export default function Expertise() {

  /* LETTER ANIMATION */
  const letterAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.004,
        duration: 0.18,
        ease: 'easeOut',
      },
    }),
  };

  /* RENDER LETTERS */
  const renderLetters = (text, className = '') => {
    return (
      <span className={`inline ${className}`}>
        {text.split(' ').map((word, wordIndex) => (
          <span
            key={wordIndex}
            className="mr-[0.35em] inline-block whitespace-nowrap"
          >
            {word.split('').map((char, charIndex) => {
              const index = wordIndex * 10 + charIndex;

              return (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterAnimation}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        ))}
      </span>
    );
  };

  const expertise = [
    {
      number: '01',
      title: 'Nature-Based Solutions',
      description:
        'Afforestation • Reforestation and Revegetation • Wetland Restoration and Conservation • Sustainable Agricultural Land Management • REDD+',
    },
    {
      number: '02',
      title: 'Carbon Dioxide Removal',
      description:
        'Biochar Carbon Sequestration • Enhanced Rock Weathering • Direct Air Capture • Ex-Situ Mineralisation',
    },
    {
      number: '03',
      title: 'Energy and Renewables',
      description:
        'Solar, Wind and Hydropower • Biogas • Clean Cooking Solutions • Safe Drinking Water • Efficient Lighting • Fuel Switching',
    },
    {
      number: '04',
      title: 'Waste-to-Energy and Industry',
      description:
        'Waste Heat Recovery • Landfill Gas Capture • E-Waste Recycling • End-of-Life Vehicle Recovery • Biodiesel Production • Industrial Efficiency',
    },
    {
      number: '05',
      title: 'Hard-to-Abate Sectors',
      description:
        'Mining Fleet Electrification • Modal Shift in Mineral Transport • Low-Emission Commercial Vehicles • Industrial Decarbonisation • Supply Chain Abatement',
    },
    {
      number: '06',
      title: 'Climate Technology and DMRV',
      description:
        'Digital MRV Systems • Remote Sensing and GIS • Satellite Data Analytics • IoT Sensor Networks • Drone-Based Monitoring • Blockchain and AI',
    },
  ];

  return (
    <section className="bg-stone-50 py-2 lg:py-4">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <div className="mx-auto max-w-6xl">

            {/* SECTION HEADING */}
            <div className="mb-12">

              <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">
                {renderLetters('Our Expertise')}
              </div>

              <h2 className="max-w-5xl text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
                {renderLetters(
                  'Where We Operate Across the Carbon Landscape'
                )}
              </h2>

              <p className="mt-6 max-w-4xl text-lg leading-relaxed text-slate-600">
                {renderLetters(
                  'The carbon market is expanding rapidly across ecosystems, technologies and geographies. Ecoveda Climate provides end-to-end advisory and project development spanning six core domains, from nature-based interventions to frontier carbon removal technologies.'
                )}
              </p>

            </div>

            {/* EXPERTISE GRID */}
            <div className="grid overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50/40 md:grid-cols-2">

              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  className={`p-8 ${
                    index !== expertise.length - 1
                      ? 'border-b border-emerald-100'
                      : ''
                  } ${
                    index % 2 === 0
                      ? 'md:border-r md:border-emerald-100'
                      : ''
                  } ${
                    index < 4
                      ? 'md:border-b md:border-emerald-100'
                      : ''
                  }`}
                >

                  {/* NUMBER */}
                  <div className="mb-4 text-xs font-semibold tracking-[0.3em] text-emerald-600">
                    {renderLetters(item.number)}
                  </div>

                  {/* TITLE */}
                  <h3 className="mb-4 text-2xl font-bold leading-snug text-slate-800">
                    {renderLetters(item.title)}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-base leading-relaxed text-slate-600">
                    {renderLetters(item.description)}
                  </p>

                </motion.div>
              ))}

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}