import { motion } from 'motion/react';
import { 
  Users, 
  Building2, 
  TrendingUp, 
  Gavel, 
  CheckCircle2, 
  Search, 
  Compass, 
  Layers, 
  ShieldCheck, 
  Globe, 
  Heart,
  ArrowRight,
  TreeDeciduous
} from 'lucide-react';
import { Link } from 'react-router-dom';

const AUDIENCES = [
  {
    icon: TreeDeciduous,
    title: 'Project Developers',
    description: 'Technical support for project inception and methodology alignment.'
  },
  {
    icon: Building2,
    title: 'Corporates & Enterprises',
    description: 'Strategic roadmaps for net-zero and high-quality credit sourcing.'
  },
  {
    icon: TrendingUp,
    title: 'Investors & Funds',
    description: 'Financial modelling and risk assessment for carbon assets.'
  },
  {
    icon: Gavel,
    title: 'Governments & Institutions',
    description: 'Policy framework alignment and compliance advisory.'
  }
];

const SERVICES = [
  {
    title: 'Carbon Project Development Advisory',
    points: ['Project feasibility', 'Methodology selection', 'Baseline modelling']
  },
  {
    title: 'Carbon Market Strategy',
    points: ['Market entry strategy', 'Credit positioning', 'Pricing insights']
  },
  {
    title: 'MRV & Compliance Advisory',
    points: ['Monitoring, Reporting, Verification', 'Registry alignment (VCS, Gold Standard)']
  },
  {
    title: 'Climate Finance Structuring',
    points: ['Carbon revenue modelling', 'Investment structuring', 'Offtake agreements']
  },
  {
    title: 'ESG & Decarbonisation Strategy',
    points: ['Net-zero roadmaps', 'Emission reduction pathways', 'ESG compliance']
  },
  {
    title: 'Policy & Regulatory Advisory',
    points: ['Climate policy navigation', 'Compliance frameworks', 'Government alignment']
  }
];

const PROCESS_STEPS = [
  { step: '01', title: 'Assess', description: 'Comprehensive analysis of local context, regulatory landscape and project potential.' },
  { step: '02', title: 'Design', description: 'Strategic framework development and methodology selection for optimal outcomes.' },
  { step: '03', title: 'Implement', description: 'Action-oriented execution and integration of monitoring systems.' },
  { step: '04', title: 'Verify', description: 'Rigorous third-party auditing and high-integrity credit issuance.' }
];

const HIGHLIGHTS = [
  { title: 'Deep Carbon Market Expertise', icon: Search, desc: 'Decades of collective experience across voluntary and compliance markets.' },
  { title: 'End-to-End Solutions', icon: Layers, desc: 'From the first soil sample to final credit delivery and offtake strategy.' },
  { title: 'Global Standards Alignment', icon: ShieldCheck, desc: 'Direct alignment with Verra, Gold Standard, Puro.earth and beyond.' },
  { title: 'Community-Centric Approach', icon: Heart, desc: 'Prioritizing social equity and local empowerment in every strategy.' }
];

export default function Advisory() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80)' }}
        />
        <div className="absolute inset-0 bg-primary-dark/85" />
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-sans font-extrabold uppercase tracking-tighter mb-6 leading-tight"
          >
            Sustainability & <br className="hidden md:block" /> Carbon Advisory
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl font-medium text-white/80 max-w-2xl mx-auto uppercase tracking-wide mb-10"
          >
            Strategic guidance across carbon markets, climate finance and project development
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          >
            <Link
              to="/contact"
              className="px-8 py-3 bg-accent text-white rounded-md font-bold text-sm uppercase tracking-wider hover:bg-emerald-600 hover:scale-105 transition-all shadow-xl"
            >
              Get in Touch
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border border-white text-white rounded-md font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-primary hover:scale-105 transition-all"
            >
              Schedule a Call
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-[1.5px] uppercase text-[12px] mb-4 block">Strategic Depth</span>
            <h2 className="text-4xl font-sans font-extrabold text-slate-800 mb-8">Advisory That Moves Projects Forward</h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Ecoveda Climate provides end-to-end advisory services across the carbon market value chain, supporting organisations, developers and investors in navigating complex regulatory, technical and financial landscapes.
              </p>
              <p>
                Our approach integrates climate science, market intelligence and financial structuring to deliver solutions that are not only compliant, but commercially viable and scalable.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-card-bg">
        <div className="max-w-7xl mx-auto px-10 text-center mb-16">
          <span className="text-primary font-bold tracking-[1.5px] uppercase text-[12px] mb-4 block">Collaboration</span>
          <h2 className="text-4xl font-sans font-extrabold text-slate-800">Who We Work With</h2>
        </div>
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {AUDIENCES.map((aud, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border border-border group text-center"
              >
                <div className="w-16 h-16 bg-slate-50 border border-border rounded-full flex items-center justify-center text-primary mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  <aud.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-slate-800 mb-3">{aud.title}</h3>
                <p className="text-slate-500 text-sm leading-tight italic">{aud.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-10 mb-16">
          <span className="text-primary font-bold tracking-[1.5px] uppercase text-[12px] mb-4 block">Our Expertise</span>
          <h2 className="text-4xl font-sans font-extrabold text-slate-800">Our Advisory Services</h2>
        </div>
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 border border-border p-10 rounded-xl hover:shadow-2xl hover:bg-white hover:border-accent transition-all duration-300 flex flex-col"
              >
                <h3 className="text-xl font-sans font-extrabold text-slate-800 mb-8 leading-tight">
                  {service.title}
                </h3>
                <ul className="space-y-4 flex-grow">
                  {service.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                      <span className="text-[14px] text-slate-600 font-medium leading-tight">
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-24 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-10 text-center mb-20">
          <span className="text-accent font-bold tracking-[1.5px] uppercase text-[12px] mb-4 block">Methodology</span>
          <h2 className="text-4xl font-sans font-extrabold text-white">How We Work</h2>
        </div>
        <div className="max-w-7xl mx-auto px-10 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[50px] right-[50px] h-[1px] bg-white/10 z-0" />
          
          <div className="grid lg:grid-cols-4 gap-12 relative z-10">
            {PROCESS_STEPS.map((ps, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-extrabold text-sm mb-6 ring-8 ring-accent/10">
                  {ps.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-widest">{ps.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{ps.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Ecoveda Section */}
      <section className="py-24 bg-card-bg">
        <div className="max-w-7xl mx-auto px-10 text-center mb-16">
          <span className="text-primary font-bold tracking-[1.5px] uppercase text-[12px] mb-4 block">Advantages</span>
          <h2 className="text-4xl font-sans font-extrabold text-slate-800">Why Ecoveda</h2>
        </div>
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {HIGHLIGHTS.map((h, idx) => (
              <div key={idx} className="p-8 border border-border rounded-xl bg-white hover:border-primary transition-all group">
                <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <h.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-800 mb-2 leading-tight">{h.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-10 text-center">
          <h2 className="text-4xl font-sans font-extrabold text-slate-800 mb-10">Ready to Build a <br /> Climate Project?</h2>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link
              to="/contact"
              className="px-10 py-4 bg-primary text-white rounded-md font-bold text-sm uppercase tracking-wider hover:bg-primary-dark transition-all"
            >
              Get in Touch
            </Link>
            <Link
              to="/contact"
              className="group px-10 py-4 border-2 border-primary text-primary rounded-md font-bold text-sm uppercase tracking-wider hover:bg-primary hover:text-white transition-all flex items-center gap-2"
            >
              Request Proposal
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
