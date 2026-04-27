import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import climatservice1 from "../assets/climateservices1.webp";
import heroimg from "../assets/climateserhero.webp"

export default function ClimateServices() {
  return (
    <div className="pt-16 bg-[#0a0f1a] text-white">

      {/* HERO - STORM */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">

        {/* BACKGROUND */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: `url(${heroimg})` }}
        />

        {/* OVERLAYS */}
        {/* OVERLAYS - FIXED */}
<div className="absolute inset-0 bg-black/40" />
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#0a0f1a]/40 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_60%)]" />

        {/* CONTENT */}
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Climate Services
          </h1>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            Engineering climate intelligence, carbon market strategy and
            decarbonisation pathways to deliver measurable impact at scale.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 border-t border-white/10 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-6">
            Climate Strategy Meets Execution
          </h2>

          <p className="text-white/70 text-lg leading-relaxed">
            Climate services are no longer optional. They are a strategic
            necessity. We design integrated climate frameworks that move from
            ambition to measurable, verifiable outcomes across carbon markets
            and sustainability ecosystems.
          </p>
        </div>
      </section>

      {/* PHASES */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            {
              title: "Assess",
              subtitle: "Understand Emissions",
              desc: "Baseline emissions mapping, carbon footprinting and risk identification."
            },
            {
              title: "Design",
              subtitle: "Build Strategy",
              desc: "Decarbonisation roadmap, carbon market entry and project structuring."
            },
            {
              title: "Execute",
              subtitle: "Implement Projects",
              desc: "On-ground implementation, MRV systems and emissions tracking."
            },
            {
              title: "Monetise",
              subtitle: "Unlock Value",
              desc: "Carbon credit issuance, trading strategy and revenue optimisation."
            }
          ].map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-accent hover:shadow-lg transition"
            >
              <p className="text-sm text-accent font-bold mb-2">
                PHASE {`0${i + 1}`}
              </p>
              <h3 className="text-xl font-bold mb-1">{phase.title}</h3>
              <p className="text-sm text-white/60 mb-3">{phase.subtitle}</p>
              <p className="text-sm text-white/70">{phase.desc}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* EXPERTISE */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-extrabold text-center mb-4">
            Our Expertise
          </h2>

          <p className="text-center text-white/60 mb-12">
            Integrated Climate and Carbon Market Capabilities
          </p>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-accent transition">
              <h3 className="font-bold text-lg mb-4">Carbon Markets</h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li>Voluntary & compliance markets</li>
                <li>Registry selection & methodology</li>
                <li>Credit lifecycle advisory</li>
                <li>Market positioning strategy</li>
              </ul>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-accent transition">
              <h3 className="font-bold text-lg mb-4">Project Development</h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li>Feasibility & baseline analysis</li>
                <li>Financial modelling</li>
                <li>Project structuring</li>
                <li>Implementation strategy</li>
              </ul>
            </div>

            <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-accent transition">
              <h3 className="font-bold text-lg mb-4">MRV & Compliance</h3>
              <ul className="space-y-3 text-sm text-white/70">
                <li>Monitoring frameworks</li>
                <li>Emission tracking systems</li>
                <li>Verification support</li>
                <li>Audit readiness</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* WORKING WITH US */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-extrabold mb-6">
            Built for Long-Term Climate Impact
          </h2>

          <p className="text-white/70 leading-relaxed mb-10">
            Climate services demand deep integration across science, policy and
            financial systems. We build solutions that are not only compliant
            but scalable and revenue-generating.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              {
                title: "Technical Depth",
                desc: "Scientific and engineering-backed solutions."
              },
              {
                title: "Market Intelligence",
                desc: "Global carbon market expertise."
              },
              {
                title: "Execution Focus",
                desc: "Real implementation, not theory."
              },
              {
                title: "Scalable Impact",
                desc: "Designed for long-term growth."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-3 bg-white/5 p-5 rounded-lg border border-white/10 hover:border-accent transition"
              >
                <CheckCircle2 className="text-accent mt-1" />
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-white/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center border-t border-white/10">
        <h2 className="text-4xl font-extrabold mb-6">
          Ready to Lead in the Climate Economy?
        </h2>

        <p className="text-white/70 mb-8 max-w-2xl mx-auto">
          Build scalable, compliant and high-value climate strategies with us.
        </p>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-3 bg-accent rounded-md font-bold hover:scale-105 transition"
        >
          Contact Our Team
          <ArrowRight />
        </Link>
      </section>

    </div>
  );
}