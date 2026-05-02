import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Database, Satellite, Shield, CheckCircle2 } from "lucide-react";

export default function Ecotech() {
  return (
    <div className="pt-16 bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="relative py-32 text-center">

        <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 via-black to-black" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            Climate Technology
          </motion.h1>

          <p className="text-lg text-white/70 mb-6">
            Building digital infrastructure for monitoring, verifying and scaling climate impact
          </p>

          <Link
            to="/contact"
            className="px-8 py-3 bg-accent rounded-md font-bold hover:scale-105 transition"
          >
            Explore Platform
          </Link>
        </div>
      </section>

      {/* GRID FEATURES */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="relative p-5 rounded-xl overflow-hidden border border-white/10 hover:border-emerald-500/50 transition group min-h-[300px] flex flex-col justify-end">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 group-hover:via-black/70 transition-colors duration-500" />
            <div className="relative z-10">
              <Cpu className="mb-4 text-emerald-400 w-10 h-10 drop-shadow-md" />
              <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-md">Digital MRV Systems</h3>
              <p className="text-white/80 drop-shadow-md font-medium">
                End-to-end Monitoring, Reporting and Verification systems
                enabling transparent carbon tracking.
              </p>
            </div>
          </div>

          <div className="relative p-5 rounded-xl overflow-hidden border border-white/10 hover:border-emerald-500/50 transition group min-h-[300px] flex flex-col justify-end">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1000&auto=format&fit=crop')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 group-hover:via-black/70 transition-colors duration-500" />
            <div className="relative z-10">
              <Satellite className="mb-4 text-emerald-400 w-10 h-10 drop-shadow-md" />
              <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-md">Remote Sensing & GIS</h3>
              <p className="text-white/80 drop-shadow-md font-medium">
                Satellite data and geospatial intelligence for real-time
                environmental monitoring.
              </p>
            </div>
          </div>

          <div className="relative p-5 rounded-xl overflow-hidden border border-white/10 hover:border-emerald-500/50 transition group min-h-[300px] flex flex-col justify-end">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 group-hover:via-black/70 transition-colors duration-500" />
            <div className="relative z-10">
              <Database className="mb-4 text-emerald-400 w-10 h-10 drop-shadow-md" />
              <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-md">Data Analytics</h3>
              <p className="text-white/80 drop-shadow-md font-medium">
                Advanced analytics platforms for carbon performance,
                reporting and optimization.
              </p>
            </div>
          </div>

          <div className="relative p-5 rounded-xl overflow-hidden border border-white/10 hover:border-emerald-500/50 transition group min-h-[300px] flex flex-col justify-end">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1000&auto=format&fit=crop')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 group-hover:via-black/70 transition-colors duration-500" />
            <div className="relative z-10">
              <Shield className="mb-4 text-emerald-400 w-10 h-10 drop-shadow-md" />
              <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-md">Blockchain & AI</h3>
              <p className="text-white/80 drop-shadow-md font-medium">
                Secure and intelligent systems ensuring trust,
                automation and transparency in carbon markets.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* HIGHLIGHT STRIP */}
      <section className="py-10 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Technology Driven Climate Solutions
          </h2>
          <p className="text-white/60">
            From satellite monitoring to AI-powered carbon systems,
            we integrate technology to bring accuracy, scale and trust
            to climate projects.
          </p>
        </div>
      </section>

      {/* ---------------- NEW CONTENT: SUSTAINABILITY ADVISORY ---------------- */}
      <section className="py-10 border-t border-white/10 bg-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-emerald-500 font-bold tracking-wider uppercase text-sm mb-2 block">Sustainability Advisory</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Architects of carbon and climate finance that drives real-world impact.</h2>
          <p className="text-white/70 text-lg leading-relaxed max-w-4xl mx-auto">
            We partner with governments, global institutions and enterprises to navigate the climate transition, combining deep technical expertise in policy design, carbon markets and decarbonisation strategy to turn ambition into measurable outcomes.
          </p>
        </div>
      </section>

      {/* METHODOLOGY: 4 PHASES */}
      <section className="py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-5">
            <span className="text-emerald-500 font-bold tracking-wider uppercase text-sm mb-2 block">Sustainability Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Turning Compliance Into Competitive Advantage</h2>
            <p className="text-white/70 max-w-3xl mx-auto leading-relaxed">
              Sustainability is not a checklist, it is a strategic operating system. We architect resilient, future-ready organisations through a disciplined four-phase methodology that transforms regulatory obligation into long-term enterprise value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: "Assess", subtitle: "Discover and Align",
                desc: "Rigorous Double Materiality assessments and stakeholder mapping to identify the ESG indicators that shape your financial resilience and social licence to operate."
              },
              {
                title: "Report", subtitle: "Disclose and Defend",
                desc: "Raw operational data transformed into audit-grade, regulator-ready disclosures, from SEBI’s BRSR Core to the EU’s Carbon Border Adjustment Mechanism."
              },
              {
                title: "Reduce", subtitle: "Engineer and Execute",
                desc: "Marginal Abatement Cost Curve analysis and energy transition modelling to design Net Zero pathways that are technically grounded and financially viable."
              },
              {
                title: "Embed", subtitle: "Govern and Empower",
                desc: "Sustainability institutionalised into your governance architecture, building frameworks and capability programmes that make ESG a permanent organisational muscle."
              }
            ].map((phase, i) => (
              <div key={i} className="bg-white/5 p-5 rounded-xl border border-white/10 hover:bg-white/10 transition">
                <p className="text-sm text-emerald-400 font-bold mb-3">PHASE {`0${i + 1}`}</p>
                <h3 className="text-2xl font-bold mb-1 text-white">{phase.title}</h3>
                <p className="text-sm font-semibold text-white/60 mb-4">{phase.subtitle}</p>
                <p className="text-sm text-white/70 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE PILLARS */}
      <section className="py-10 border-t border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-5">
            <span className="text-emerald-500 font-bold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Three Pillars of Climate and Sustainability Impact</h2>
            <p className="text-white/70 max-w-3xl mx-auto leading-relaxed">
              Our advisory practice operates across three interconnected domains, each calibrated to the unique pressures, timelines and opportunities of its stakeholders.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-5">
            {/* PILLAR 1 */}
            <div className="relative p-5 border border-white/10 rounded-xl overflow-hidden hover:border-emerald-500/50 transition group flex flex-col min-h-[400px]">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1502224562085-639556652f33?q=80&w=1000&auto=format&fit=crop')` }}
              />
              <div className="absolute inset-0 bg-black/85 group-hover:bg-black/75 transition-colors duration-500" />
              <div className="relative z-10 flex flex-col h-full">
                <p className="text-emerald-400 font-bold mb-2">PILLAR 01</p>
                <h3 className="text-xl font-bold mb-2 text-white">Governments, Multilaterals and NGOs</h3>
                <p className="text-white/60 mb-6 text-sm">Host country technical assistance and policy architecture</p>
                <ul className="space-y-4 text-sm text-white/80 mt-auto">
                  <li className="flex gap-3"><span className="text-emerald-500 mt-1">●</span> <span>Carbon market infrastructure design aligned with Article 6 of the Paris Agreement</span></li>
                  <li className="flex gap-3"><span className="text-emerald-500 mt-1">●</span> <span>NDC review, sector-level analysis and implementation roadmaps</span></li>
                  <li className="flex gap-3"><span className="text-emerald-500 mt-1">●</span> <span>Transition strategy for international climate compliance obligations</span></li>
                  <li className="flex gap-3"><span className="text-emerald-500 mt-1">●</span> <span>Stakeholder engagement and regulatory capacity development programmes</span></li>
                </ul>
              </div>
            </div>

            {/* PILLAR 2 */}
            <div className="relative p-5 border border-white/10 rounded-xl overflow-hidden hover:border-emerald-500/50 transition group flex flex-col min-h-[400px]">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop')` }}
              />
              <div className="absolute inset-0 bg-black/85 group-hover:bg-black/75 transition-colors duration-500" />
              <div className="relative z-10 flex flex-col h-full">
                <p className="text-emerald-400 font-bold mb-2">PILLAR 02</p>
                <h3 className="text-xl font-bold mb-2 text-white">Corporations and Enterprises</h3>
                <p className="text-white/60 mb-6 text-sm">Decarbonisation, regulatory resilience and value chain strategy</p>
                <ul className="space-y-4 text-sm text-white/80 mt-auto">
                  <li className="flex gap-3"><span className="text-emerald-500 mt-1">●</span> <span>BRSR Core reporting with automated data pipelines for SEBI’s assurance mandates</span></li>
                  <li className="flex gap-3"><span className="text-emerald-500 mt-1">●</span> <span>Forensic Double Materiality assessments that align capital with strategic risk</span></li>
                  <li className="flex gap-3"><span className="text-emerald-500 mt-1">●</span> <span>Product-level CBAM carbon accounting and supplier data programmes</span></li>
                  <li className="flex gap-3"><span className="text-emerald-500 mt-1">●</span> <span>Science-Based Net Zero roadmaps with MACC modelling and Scope 3 strategy</span></li>
                  <li className="flex gap-3"><span className="text-emerald-500 mt-1">●</span> <span>Stakeholder mapping and digital grievance mechanisms for social licence</span></li>
                </ul>
              </div>
            </div>

            {/* PILLAR 3 */}
            <div className="relative p-5 border border-white/10 rounded-xl overflow-hidden hover:border-emerald-500/50 transition group flex flex-col min-h-[400px]">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1000&auto=format&fit=crop')` }}
              />
              <div className="absolute inset-0 bg-black/85 group-hover:bg-black/75 transition-colors duration-500" />
              <div className="relative z-10 flex flex-col h-full">
                <p className="text-emerald-400 font-bold mb-2">PILLAR 03</p>
                <h3 className="text-xl font-bold mb-2 text-white">Climate Technology Companies</h3>
                <p className="text-white/60 mb-6 text-sm">Asset value maximisation and commercial deployment</p>
                <ul className="space-y-4 text-sm text-white/80 mt-auto">
                  <li className="flex gap-3"><span className="text-emerald-500 mt-1">●</span> <span>Carbon asset structuring to maximise the value of removal activities</span></li>
                  <li className="flex gap-3"><span className="text-emerald-500 mt-1">●</span> <span>Full lifecycle impact assessments for supply chain validation</span></li>
                  <li className="flex gap-3"><span className="text-emerald-500 mt-1">●</span> <span>New methodology development and high-integrity credit issuance support</span></li>
                  <li className="flex gap-3"><span className="text-emerald-500 mt-1">●</span> <span>Innovation roadmaps for BECCS, enhanced weathering and biochar pathways</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKING WITH US */}
      <section className="py-10 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-emerald-500 font-bold tracking-wider uppercase text-sm mb-2 block">Working With Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-5">A Partnership Engineered for Lasting Impact</h2>
          
          <div className="text-white/70 text-lg leading-relaxed space-y-6 text-left max-w-4xl mx-auto mb-5">
            <p>
              Climate and sustainability advisory is not a transaction, it is a multi-year commitment that demands technical depth, regulatory foresight, and the patience to build solutions that endure beyond the first reporting cycle.
            </p>
            <p>
              We operate at the intersection of science, policy and market design. Our teams bring together carbon market specialists, environmental engineers and regulatory strategists who have worked across emerging and developed economies, from structuring Article 6 frameworks for sovereign nations to guiding India’s largest exporters through CBAM compliance.
            </p>
            <p>
              What sets Ecoveda Climate apart is our insistence on implementation over theory. We do not deliver reports that sit on shelves. Every engagement is designed around measurable milestones, embedded governance structures and knowledge transfer that leaves your organisation permanently more capable.
            </p>
            <p>
              Our advisory is built to phase itself out, because the real measure of our work is your ability to sustain the momentum without us. That is the mark of a true partnership: one that strengthens you enough to stand independently, while we remain available for the next strategic frontier.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
            {[
              { title: "Technical Rigour", desc: "Every recommendation is rooted in science, data and global regulatory intelligence." },
              { title: "Long-Term Lens", desc: "We build for decade-long resilience, not quarterly optics." },
              { title: "Knowledge Transfer", desc: "We embed capability inside your teams so impact outlasts our engagement." },
              { title: "Integrity First", desc: "High-integrity frameworks guide every project, methodology and credit we touch." }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/10 flex gap-4 hover:border-emerald-500/50 transition">
                <CheckCircle2 className="text-emerald-400 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-white/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 text-center border-t border-white/10 bg-black">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Deliver on Your Net-Zero Ambition?
        </h2>
        <p className="text-white/70 mb-6 text-lg max-w-2xl mx-auto">
          Whether you are shaping national climate policy or decarbonising a global supply chain, our advisory team is ready to build the path forward with you.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/contact"
            className="px-8 py-3 bg-emerald-600 rounded-md font-bold hover:bg-emerald-500 transition"
          >
            Contact Our Team
          </Link>

          <Link
            to="/contact"
            className="px-8 py-3 border border-white rounded-md font-bold hover:bg-white hover:text-black transition flex items-center gap-2"
          >
            Request Demo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}



