import { motion } from 'motion/react';

export default function OurValues() {

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

  const values = [
    {
      title: 'Integrity',
      description:
        'We ensure adherence to ethical principles and rigorous standards, safeguarding the credibility and effectiveness of every emission reduction effort we undertake.',
    },
    {
      title: 'Accountability',
      description:
        'We hold ourselves responsible for every aspect of our initiatives, fostering trust and credibility within communities, with partners and across markets.',
    },
    {
      title: 'Transparency',
      description:
        'We share information and processes openly, empowering stakeholders to understand, verify, and engage with our work towards environmental sustainability.',
    },
  ];

  return (
    <section className="bg-stone-50 py-20 lg:py-24">

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
                {renderLetters('Our Values')}
              </div>

              <h2 className="max-w-5xl text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">
                {renderLetters(
                  'Integrity. Accountability. Transparency.'
                )}
              </h2>

              <p className="mt-6 max-w-4xl text-lg leading-relaxed text-slate-600">
                {renderLetters(
                  'These are not aspirational statements. They are operational commitments embedded in every project we develop, every credit we issue, and every community partnership we build.'
                )}
              </p>

            </div>

            {/* VALUES GRID */}
            <div className="grid overflow-hidden rounded-2xl border border-emerald-100 bg-emerald-50/40 md:grid-cols-3">

              {values.map((value, index) => (
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
                    delay: index * 0.15,
                  }}
                  className={`p-8 ${
                    index !== values.length - 1
                      ? 'border-b border-emerald-100 md:border-b-0 md:border-r'
                      : ''
                  }`}
                >

                  {/* TITLE */}
                  <h3 className="mb-4 text-2xl font-bold leading-snug text-slate-800">
                    {renderLetters(value.title)}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-base leading-relaxed text-slate-600">
                    {renderLetters(value.description)}
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