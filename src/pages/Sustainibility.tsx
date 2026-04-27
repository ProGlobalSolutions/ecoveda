import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import sustainibility from "../assets/sustainibility.webp";

export default function Sustainibility() {
  return (
    <div className="pt-16">

      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${sustainibility})` }}
        />
        <div className="absolute inset-0 bg-primary-dark/85" />

        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Sustainability Advisory
          </h1>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            Architects of carbon and climate finance that drives real-world impact.
            We partner with governments, global institutions and enterprises to
            navigate the climate transition.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-6">
            Turning Compliance Into Competitive Advantage
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Sustainability is not a checklist, it is a strategic operating system.
            We architect resilient, future-ready organisations through a disciplined
            four-phase methodology that transforms regulatory obligation into
            long-term enterprise value.
          </p>
        </div>
      </section>

      {/* PHASES */}
      <section className="py-20 bg-card-bg">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {[
            {
              title: "Assess",
              subtitle: "Discover and Align",
              desc: "Double Materiality assessments and stakeholder mapping to identify ESG indicators shaping resilience."
            },
            {
              title: "Report",
              subtitle: "Disclose and Defend",
              desc: "Audit-grade disclosures from BRSR Core to CBAM with regulator-ready data systems."
            },
            {
              title: "Reduce",
              subtitle: "Engineer and Execute",
              desc: "MACC analysis and energy modelling to build financially viable Net Zero pathways."
            },
            {
              title: "Embed",
              subtitle: "Govern and Empower",
              desc: "Governance frameworks and capability programs to embed ESG permanently."
            }
          ].map((phase, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              className="bg-white p-6 rounded-xl shadow border hover:shadow-lg transition"
            >
              <p className="text-sm text-accent font-bold mb-2">
                PHASE {`0${i + 1}`}
              </p>
              <h3 className="text-xl font-bold mb-1">{phase.title}</h3>
              <p className="text-sm font-medium text-slate-500 mb-3">
                {phase.subtitle}
              </p>
              <p className="text-sm text-slate-600">{phase.desc}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* EXPERTISE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-extrabold text-center mb-4">
            Our Expertise
          </h2>
          <p className="text-center text-slate-600 mb-12">
            Three Pillars of Climate and Sustainability Impact
          </p>

          <div className="grid md:grid-cols-3 gap-10">

            {/* PILLAR 1 */}
            <div className="border p-6 rounded-xl hover:shadow-md transition">
              <h3 className="font-bold text-lg mb-4">
                Governments, Multilaterals and NGOs
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>Carbon market infrastructure (Article 6)</li>
                <li>NDC review & implementation roadmaps</li>
                <li>Climate compliance strategies</li>
                <li>Stakeholder & regulatory programs</li>
              </ul>
            </div>

            {/* PILLAR 2 */}
            <div className="border p-6 rounded-xl hover:shadow-md transition">
              <h3 className="font-bold text-lg mb-4">
                Corporations and Enterprises
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>BRSR Core reporting systems</li>
                <li>Double Materiality assessments</li>
                <li>CBAM carbon accounting</li>
                <li>Net Zero & Scope 3 strategy</li>
                <li>Stakeholder grievance systems</li>
              </ul>
            </div>

            {/* PILLAR 3 */}
            <div className="border p-6 rounded-xl hover:shadow-md transition">
              <h3 className="font-bold text-lg mb-4">
                Climate Technology Companies
              </h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>Carbon asset structuring</li>
                <li>Lifecycle impact assessments</li>
                <li>Credit issuance support</li>
                <li>Innovation roadmaps (BECCS, biochar)</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* WORKING WITH US */}
      <section className="py-20 bg-card-bg">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-extrabold mb-6">
            A Partnership Engineered for Lasting Impact
          </h2>

          <p className="text-slate-600 leading-relaxed mb-8">
            Climate and sustainability advisory is not a transaction, it is a
            multi-year commitment requiring technical depth and regulatory foresight.
            We operate at the intersection of science, policy and market design.
          </p>

          <p className="text-slate-600 leading-relaxed mb-12">
            We do not deliver reports that sit on shelves. Every engagement is
            designed around measurable milestones, embedded governance structures
            and knowledge transfer that leaves your organisation stronger.
          </p>

          {/* VALUES GRID */}
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              {
                title: "Technical Rigour",
                desc: "Every recommendation is rooted in science and data."
              },
              {
                title: "Long-Term Lens",
                desc: "We build for decade-long resilience, not short-term optics."
              },
              {
                title: "Knowledge Transfer",
                desc: "We embed capability so impact outlasts our engagement."
              },
              {
                title: "Integrity First",
                desc: "High-integrity frameworks guide every project."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-5 rounded-lg border flex gap-3">
                <CheckCircle2 className="text-accent mt-1" />
                <div>
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-dark text-center text-white">
        <h2 className="text-4xl font-extrabold mb-6">
          Ready to Deliver on Your Net-Zero Ambition?
        </h2>

        <p className="text-white/80 mb-8 max-w-2xl mx-auto">
          Whether shaping national policy or decarbonising a global supply chain,
          our advisory team is ready to build the path forward.
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