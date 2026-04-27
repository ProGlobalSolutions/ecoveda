import { motion } from "motion/react";
import whyeco from "../assets/whyeco.webp";

// 👇 your 12 company logos
import comp1 from "../assets/comp1.webp";
import comp2 from "../assets/comp2.webp";
import comp3 from "../assets/comp3.webp";
import comp4 from "../assets/comp4.webp";
import comp5 from "../assets/comp5.webp";
import comp6 from "../assets/comp6.webp";
import comp7 from "../assets/comp7.webp";
import comp8 from "../assets/comp8.webp";
import comp9 from "../assets/comp9.webp";
import comp10 from "../assets/comp10.webp";
import comp11 from "../assets/comp11.webp";
import comp12 from "../assets/comp12.webp";

export default function WhyEcoveda() {
  return (
    <div className="pt-16">

      {/* 🔥 WHY SECTION */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADING */}
          <div className="mb-10 md:mb-14">
            <p className="text-xs font-semibold tracking-widest text-emerald-600 uppercase mb-2">
              Why Ecoveda
            </p>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Driving Climate Impact with Real Solutions
            </h2>
          </div>

          {/* CONTENT */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">

            {/* TEXT */}
            <div className="text-slate-600 text-sm md:text-base leading-relaxed space-y-4">
              <p>
                Ecoveda Climate delivers scalable climate solutions across global carbon markets,
                empowering communities and organisations to achieve sustainability goals.
              </p>

              <p>
                We design and implement high-integrity climate projects that generate measurable
                environmental benefits while creating sustainable livelihoods for local communities.
              </p>

              <p>
                Our approach combines innovation, transparency and strong execution to ensure
                long-term environmental and social impact across diverse geographies.
              </p>

              <p>
                By leveraging advanced technologies, data-driven insights and global partnerships,
                we enable organisations to transition towards low-carbon and climate-resilient systems.
              </p>

              <p>
                From project development to carbon finance, we provide end-to-end solutions that are
                scalable, credible and aligned with international sustainability standards.
              </p>
            </div>

            {/* IMAGE */}
            <div>
              <img
                src={whyeco}
                alt="Ecoveda Impact"
                className="w-full h-auto rounded-2xl shadow-lg object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 🔥 REGISTRIES / STANDARDS */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-10">
          <h2 className="text-2xl md:text-5xl font-bold">
            Registries / Standards
          </h2>
        </div>

        {/* RESPONSIVE ANIMATED LOGO GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 max-w-7xl mx-auto px-6 place-items-center">
          {[comp1, comp2, comp3, comp4,
            comp5, comp6, comp7, comp8,
            comp9, comp10, comp11, comp12].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08, type: "spring", stiffness: 120 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="w-full flex justify-center items-center"
            >
              <img
                src={img}
                className="h-16 sm:h-20 w-auto object-contain hover:drop-shadow-lg transition-all duration-300"
                alt={`Partner logo ${i + 1}`}
              />
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}