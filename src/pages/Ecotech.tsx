import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Database, Satellite, Shield, CheckCircle2 } from "lucide-react";
import climateVideo from "../assets/climate.mp4";
import assessImg from "../assets/assess.webp";
import reduceImg from "../assets/reduce.webp";
import embedImg from "../assets/embed.webp";
import govtImg from "../assets/go.webp";
import corp1 from "../assets/corporate1.webp";
import tech1 from "../assets/climateserhero.webp";

export default function Ecotech() {
  return (
    <div className="flex flex-col text-slate-900 overflow-hidden">

      {/* HERO */}
      <section className="relative h-[93vh] sm:h-screen min-h-[650px] sm:min-h-[700px] flex items-center justify-center text-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={climateVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-6 text-white tracking-tight"
          >
            Climate Technology
          </motion.h1>

          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Building digital infrastructure for monitoring, verifying and scaling climate impact.
          </p>

          <Link
            to="/contact"
            className="px-8 py-3 bg-emerald-600 text-white rounded-md font-bold hover:bg-emerald-700 transition shadow-md hover:shadow-lg inline-block"
          >
            Explore Platform
          </Link>
        </div>
      </section>

      {/* GRID FEATURES */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">

          <div className="relative p-6 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition group min-h-[300px] flex flex-col justify-end border border-slate-100">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30 group-hover:via-black/70 transition-colors duration-500" />
            <div className="relative z-10">
              <Cpu className="mb-4 text-emerald-400 w-10 h-10 drop-shadow-md" />
              <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-md">Digital MRV Systems</h3>
              <p className="text-white/80 drop-shadow-md font-medium">
                End-to-end Monitoring, Reporting and Verification systems
                enabling transparent carbon tracking.
              </p>
            </div>
          </div>

          <div className="relative p-6 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition group min-h-[300px] flex flex-col justify-end border border-slate-100">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1000&auto=format&fit=crop')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30 group-hover:via-black/70 transition-colors duration-500" />
            <div className="relative z-10">
              <Satellite className="mb-4 text-emerald-400 w-10 h-10 drop-shadow-md" />
              <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-md">Remote Sensing & GIS</h3>
              <p className="text-white/80 drop-shadow-md font-medium">
                Satellite data and geospatial intelligence for real-time
                environmental monitoring.
              </p>
            </div>
          </div>

          <div className="relative p-6 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition group min-h-[300px] flex flex-col justify-end border border-slate-100">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30 group-hover:via-black/70 transition-colors duration-500" />
            <div className="relative z-10">
              <Database className="mb-4 text-emerald-400 w-10 h-10 drop-shadow-md" />
              <h3 className="text-2xl font-bold mb-3 text-white drop-shadow-md">Data Analytics</h3>
              <p className="text-white/80 drop-shadow-md font-medium">
                Advanced analytics platforms for carbon performance,
                reporting and optimization.
              </p>
            </div>
          </div>

          <div className="relative p-6 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition group min-h-[300px] flex flex-col justify-end border border-slate-100">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1000&auto=format&fit=crop')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30 group-hover:via-black/70 transition-colors duration-500" />
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
      <section className="py-16 text-center bg-white border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">
            Technology Driven Climate Solutions
          </h2>
          <p className="text-slate-600 text-lg">
            From satellite monitoring to AI-powered carbon systems,
            we integrate technology to bring accuracy, scale and trust
            to climate projects.
          </p>
        </div>
      </section>

      {/* ---------------- SUSTAINABILITY ADVISORY & SERVICES ---------------- */}
      <section className="py-24 bg-gradient-to-br from-[#012A24] via-[#012A24] to-[#D4AF37]/40 relative overflow-hidden">
        {/* Decorative Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/20 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/3" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* ADVISORY */}
          <div className="text-center mb-24">
            <span className="text-emerald-400 font-bold tracking-wider uppercase text-sm mb-3 block">Sustainability Advisory</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-white leading-tight">
              Architects of carbon and climate finance <br className="hidden md:block" /> that drives real-world impact.
            </h2>
            <p className="text-white/80 text-xl leading-relaxed max-w-4xl mx-auto">
              We partner with governments, global institutions and enterprises to navigate the climate transition, combining deep technical expertise in policy design, carbon markets and decarbonisation strategy to turn ambition into measurable outcomes.
            </p>
          </div>

          <div className="w-full h-px bg-white/10 mb-24" />

          {/* METHODOLOGY: 4 PHASES */}
          <div className="text-center mb-16">
            <span className="text-emerald-400 font-bold tracking-wider uppercase text-sm mb-3 block">Sustainability Services</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Turning Compliance Into Competitive Advantage</h2>
            <p className="text-white/70 max-w-3xl mx-auto leading-relaxed text-lg mb-12">
              Sustainability is not a checklist, it is a strategic operating system. We architect resilient, future-ready organisations through a disciplined four-phase methodology that transforms regulatory obligation into long-term enterprise value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Assess", subtitle: "Discover and Align",
                desc: "Rigorous Double Materiality assessments and stakeholder mapping to identify the ESG indicators that shape your financial resilience and social licence to operate.",
                img: assessImg
              },
              {
                title: "Report", subtitle: "Disclose and Defend",
                desc: "Raw operational data transformed into audit-grade, regulator-ready disclosures, from SEBI’s BRSR Core to the EU’s Carbon Border Adjustment Mechanism.",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800"
              },
              {
                title: "Reduce", subtitle: "Engineer and Execute",
                desc: "Marginal Abatement Cost Curve analysis and energy transition modelling to design Net Zero pathways that are technically grounded and financially viable.",
                img: reduceImg
              },
              {
                title: "Embed", subtitle: "Govern and Empower",
                desc: "Sustainability institutionalised into your governance architecture, building frameworks and capability programmes that make ESG a permanent organisational muscle.",
                img: embedImg
              }
            ].map((phase, i) => (
              <div key={i} className="relative group rounded-2xl overflow-hidden h-[450px] border border-white/20 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(212,175,55,0.6)] hover:border-yellow-400/50">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${phase.img})` }}
                />
                
                {/* Overlays - Brighter style */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-500 group-hover:opacity-40" />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />

                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-center text-center">
                  
                  {/* HEADING GROUP */}
                  <div className="transition-all duration-700 ease-in-out group-hover:-translate-y-24">
                    <p className="text-sm text-emerald-400 font-extrabold mb-4 tracking-widest drop-shadow-lg">PHASE {`0${i + 1}`}</p>
                    <h3 className="text-4xl font-black mb-3 text-white group-hover:text-yellow-400 transition-colors drop-shadow-xl">{phase.title}</h3>
                    <p className="text-[12px] font-bold text-white uppercase tracking-[0.2em] drop-shadow-lg">{phase.subtitle}</p>
                  </div>

                  {/* DESCRIPTION GROUP */}
                  <div className="absolute bottom-8 left-5 right-5 transition-all duration-700 ease-in-out opacity-0 translate-y-12 group-hover:opacity-100 group-hover:translate-y-0">
                    <p className="text-[13px] text-white/90 font-medium leading-relaxed drop-shadow-lg bg-black/60 backdrop-blur-lg p-5 rounded-2xl border border-white/10 text-center">
                      {phase.desc}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE PILLARS */}
      <section className="py-24 bg-[#012A24] border-t border-white/5 relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-emerald-400 font-bold tracking-wider uppercase text-sm mb-3 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">Three Pillars of Climate and <br className="hidden md:block" /> Sustainability Impact</h2>
            <p className="text-white/60 max-w-3xl mx-auto leading-relaxed text-lg">
              Our advisory practice operates across three interconnected domains, each calibrated to the unique pressures, timelines and opportunities of its stakeholders.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                id: "01",
                title: "Governments, Multilaterals and NGOs",
                subtitle: "Host country technical assistance and policy architecture",
                img: govtImg,
                items: [
                  "Carbon market infrastructure design aligned with Article 6",
                  "NDC review, sector-level analysis and implementation",
                  "Transition strategy for international compliance obligations",
                  "Stakeholder engagement and capacity development"
                ]
              },
              {
                id: "02",
                title: "Corporations and Enterprises",
                subtitle: "Decarbonisation and value chain strategy",
                img: corp1,
                items: [
                  "BRSR Core reporting with automated data pipelines",
                  "Forensic Double Materiality assessments",
                  "Product-level CBAM carbon accounting",
                  "Science-Based Net Zero roadmaps with MACC modelling"
                ]
              },
              {
                id: "03",
                title: "Climate Technology Companies",
                subtitle: "Asset value maximisation and commercial deployment",
                img: tech1,
                items: [
                  "Carbon asset structuring for removal activities",
                  "Full lifecycle impact assessments for supply chain",
                  "New methodology development and credit issuance",
                  "Innovation roadmaps for BECCS and Biochar"
                ]
              }
            ].map((pillar, idx) => (
              <div key={idx} className="relative group rounded-3xl overflow-hidden h-[550px] border border-white/10 shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(212,175,55,0.4)] hover:border-yellow-400/30">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url(${pillar.img})` }}
                />
                
                {/* Overlays - Brighter style */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent transition-opacity duration-700 group-hover:opacity-40" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700" />

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-center text-center">
                  
                  {/* HEADING GROUP */}
                  <div className="transition-all duration-700 ease-in-out group-hover:-translate-y-32">
                    <p className="text-xs text-emerald-400 font-extrabold mb-4 tracking-[0.3em] uppercase drop-shadow-md">PILLAR {pillar.id}</p>
                    <h3 className="text-3xl font-black mb-4 text-white group-hover:text-yellow-400 transition-colors drop-shadow-xl leading-tight">{pillar.title}</h3>
                    <p className="text-[13px] font-bold text-white/90 uppercase tracking-wider drop-shadow-lg max-w-[250px] mx-auto">{pillar.subtitle}</p>
                  </div>

                  {/* DESCRIPTION GROUP (LIST) */}
                  <div className="absolute bottom-10 left-6 right-6 transition-all duration-700 ease-in-out opacity-0 translate-y-12 group-hover:opacity-100 group-hover:translate-y-0">
                    <div className="bg-black/60 backdrop-blur-xl p-6 rounded-3xl border border-white/10 text-left">
                      <ul className="space-y-3">
                        {pillar.items.map((item, i) => (
                          <li key={i} className="flex gap-3 text-[13px] text-white/90 leading-snug">
                            <span className="text-emerald-400 font-bold shrink-0">●</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKING WITH US */}
      <section className="py-24 bg-[#012A24] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-emerald-400 font-bold tracking-wider uppercase text-sm mb-3 block">Working With Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">A Partnership Engineered for Lasting Impact</h2>
          
          <div className="text-white/70 text-lg leading-relaxed space-y-6 text-left max-w-4xl mx-auto mb-12">
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
              <div key={i} className="bg-[#022C22] p-6 rounded-xl border border-white/10 flex gap-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CheckCircle2 className="text-emerald-400 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-white/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-slate-50 border-t border-slate-200">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
          Ready to Deliver on Your Net-Zero Ambition?
        </h2>
        <p className="text-slate-600 mb-8 text-lg max-w-2xl mx-auto">
          Whether you are shaping national climate policy or decarbonising a global supply chain, our advisory team is ready to build the path forward with you.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/contact"
            className="px-8 py-3 bg-emerald-600 text-white rounded-md font-bold hover:bg-emerald-700 transition shadow-md"
          >
            Contact Our Team
          </Link>

          <Link
            to="/contact"
            className="px-8 py-3 bg-white border border-slate-300 rounded-md font-bold text-slate-700 hover:bg-slate-50 transition flex items-center gap-2 shadow-sm"
          >
            Request Demo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}



