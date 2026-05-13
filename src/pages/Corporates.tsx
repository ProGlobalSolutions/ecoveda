import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, BarChart3, Globe, Zap, CheckCircle2, ChevronRight } from "lucide-react";
import instiImg from "../assets/insti.webp";
import corpHero from "../assets/corphero.webp";
import reportImg from "../assets/report.webp";
import assessImg from "../assets/assess.webp";
import reduceImg from "../assets/reduce.webp";
import embedImg from "../assets/embed.webp";
import corpVideo from "../assets/corpvi.mp4";

export default function Corporates() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-[#012A24] text-white">

      {/* HERO SECTION */}
      <section className="relative h-[86vh] sm:h-[93vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax effect simulation */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${corpHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#012A24]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
              Enterprise Excellence
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight drop-shadow-2xl">
              Turning Compliance into <span className="text-emerald-400">Competitive Advantage</span>
            </h1>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-12 left-0 right-0 z-10 hidden lg:block">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-4 gap-8">
            {[
              { label: "Compliance Rate", value: "100%" },
              { label: "Data Accuracy", value: "99.9%" },
              { label: "ROI Potential", value: "240%" },
              { label: "Global Reach", value: "45+" }
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl text-center">
                <p className="text-2xl font-black text-emerald-400 mb-1">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-widest text-white/60 font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE STRATEGY - SPLIT LAYOUT */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img src={instiImg} alt="Corporate Strategy" className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#012A24] via-transparent to-transparent opacity-60" />
                {/* Floating Card */}
                <div className="absolute bottom-8 left-8 right-8 bg-black/60 backdrop-blur-2xl border border-white/10 p-8 rounded-2xl shadow-3xl">
                  <BarChart3 className="text-emerald-400 w-10 h-10 mb-4" />
                  <h4 className="text-2xl font-bold mb-2">Data-Driven Decarbonization</h4>
                  <p className="text-white/70 text-sm">Every recommendation is rooted in forensic analysis and science-based modelling.</p>
                </div>
              </div>
              {/* Decorative Glow */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-500/20 blur-[80px] rounded-full" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-emerald-400 font-black tracking-widest uppercase text-sm mb-4 block">Institutional Rigour</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
                ESG as a <br /> Strategic <span className="text-emerald-400">Operating System</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Sustainability is not a checklist; it is a fundamental shift in how capital, carbon, and social license intersect. We partner with forward-thinking enterprises to build resilient frameworks.
              </p>
              
              <div className="space-y-6 mb-10">
                {[
                  "Audit-grade BRSR and TCFD reporting frameworks",
                  "Double Materiality assessments for capital alignment",
                  "Forensic supply chain carbon footprint mapping",
                  "Science-Based Net Zero roadmaps with MACC modelling"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="mt-1 w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/30 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <span className="text-white/90 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="inline-flex items-center gap-2 text-emerald-400 font-bold text-lg hover:gap-4 transition-all">
                Download Service Brochure <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOUR PHASE METHODOLOGY - INTERACTIVE CARDS */}
      <section className="py-32 bg-black/30 border-y border-white/5 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6">Our Transformation Framework</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">A disciplined, outcome-driven approach to corporate sustainability.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                id: "01",
                title: "Assess",
                subtitle: "Discover & Align",
                img: assessImg,
                desc: "Double Materiality assessments and stakeholder mapping to identify the ESG indicators shaping your long-term resilience."
              },
              {
                id: "02",
                title: "Report",
                subtitle: "Disclose & Defend",
                img: reportImg,
                desc: "Audit-grade disclosures from BRSR Core to CBAM, built on automated data pipelines and regulator-ready governance."
              },
              {
                id: "03",
                title: "Reduce",
                subtitle: "Engineer & Execute",
                img: reduceImg,
                desc: "Marginal Abatement Cost Curve (MACC) analysis and energy modelling to build financially viable Net Zero pathways."
              },
              {
                id: "04",
                title: "Embed",
                subtitle: "Govern & Empower",
                img: embedImg,
                desc: "Custom governance frameworks and capability development programs to embed ESG permanently into your corporate DNA."
              }
            ].map((phase, i) => (
              <div key={i} className="relative group rounded-3xl overflow-hidden h-[480px] border border-white/10 shadow-2xl transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(212,175,55,0.4)] hover:border-yellow-400/30">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                  style={{ backgroundImage: `url(${phase.img})` }}
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent transition-opacity duration-700 group-hover:opacity-40" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-700" />

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-center text-center">
                  
                  {/* HEADING GROUP */}
                  <div className="transition-all duration-700 ease-in-out group-hover:-translate-y-24">
                    <p className="text-xs text-emerald-400 font-extrabold mb-4 tracking-[0.3em] uppercase drop-shadow-md">PHASE {phase.id}</p>
                    <h3 className="text-3xl font-black mb-2 text-white group-hover:text-yellow-400 transition-colors drop-shadow-xl">{phase.title}</h3>
                    <p className="text-[12px] font-bold text-white/90 uppercase tracking-wider drop-shadow-lg">{phase.subtitle}</p>
                  </div>

                  {/* DESCRIPTION GROUP */}
                  <div className="absolute bottom-10 left-6 right-6 transition-all duration-700 ease-in-out opacity-0 translate-y-12 group-hover:opacity-100 group-hover:translate-y-0">
                    <div className="bg-black/60 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                      <p className="text-sm text-white/90 leading-relaxed font-medium">
                        {phase.desc}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RISK & COMPLIANCE - RESTRUCTURED GRID */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          {/* Top Heading Section */}
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <span className="text-emerald-400 font-black tracking-widest uppercase text-sm mb-4 block">Risk & Resilience</span>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Climate Risk & <span className="text-emerald-400">Institutional Compliance</span></h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Managing the complexities of evolving environmental regulations with forensic precision and strategic foresight.
            </p>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mt-8" />
          </div>

          {/* Grid Layout: 3 on top, 1 centered below */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {[
              { 
                icon: Shield, 
                title: "Risk Assessments", 
                desc: "Quantitative TCFD-aligned assessments for transition and physical risks." 
              },
              { 
                icon: Globe, 
                title: "Carbon Accounting", 
                desc: "Product-level CBAM accounting and Scope 3 supplier engagement data." 
              },
              { 
                icon: BarChart3, 
                title: "Disclosure Support", 
                desc: "End-to-end management of voluntary and mandatory sustainability reporting." 
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl group hover:bg-emerald-500/10 transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="w-8 h-8 text-emerald-400" />
                </div>
                <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Centered Bottom Item */}
          <div className="flex justify-center">
            <div className="w-full lg:w-1/3 bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl group hover:bg-emerald-500/10 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <Zap className="w-8 h-8 text-emerald-400" />
              </div>
              <h4 className="text-2xl font-bold mb-4">Energy Transition</h4>
              <p className="text-white/60 leading-relaxed">Techno-economic feasibility studies for renewable energy and industrial efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="pt-4 pb-32 relative overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src={corpVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8">Build a Sustainable <br /> Business Future</h2>
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join the elite tier of enterprises turning sustainability into a core strategic asset. Our team is ready to architect your transition.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="px-12 py-5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-black text-lg transition-all shadow-2xl hover:shadow-emerald-500/40">
                Request Proposal
              </Link>
              <Link to="/contact" className="px-12 py-5 bg-white text-black hover:bg-emerald-50 hover:text-emerald-900 rounded-full font-black text-lg transition-all shadow-2xl">
                Contact Experts
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}



