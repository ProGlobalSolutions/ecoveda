import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants/projects';
import { MapPin, Calendar, Database, CheckCircle2, ArrowLeft, Globe, Shield, Users, Leaf, Droplets, Zap } from 'lucide-react';

const SDG_COLORS: Record<number, string> = {
  1: 'bg-[#E5243B]',
  2: 'bg-[#DDA63A]',
  3: 'bg-[#4C9F38]',
  4: 'bg-[#C5192D]',
  5: 'bg-[#FF3A21]',
  6: 'bg-[#26BDE2]',
  7: 'bg-[#FCC30B]',
  8: 'bg-[#A21942]',
  9: 'bg-[#FD6925]',
  10: 'bg-[#DD1367]',
  11: 'bg-[#FD9D24]',
  12: 'bg-[#BF8B2E]',
  13: 'bg-[#3F7E44]',
  14: 'bg-[#0A97D9]',
  15: 'bg-[#56C02B]',
  16: 'bg-[#00689D]',
  17: 'bg-[#19486A]',
};

const IMPACT_ICONS: Record<string, any> = {
  'Carbon Sequestration': Zap,
  'Emission Reduction': Shield,
  'Biodiversity': Leaf,
  'Community': Users,
  'Soil Health': Leaf,
  'Water Security': Droplets,
  'Livelihoods': Users,
  'Climate Resilience': Shield,
  'Income Diversity': Users,
  'Ecosystem Services': Leaf,
  'Adaptation': Shield,
  'Carbon Capture': Zap,
  'Blue Carbon': Droplets,
  'Coastal Shield': Shield,
  'Fisheries': Users,
  'Phytoremediation': Droplets,
  'Permanent Removal': Shield,
  'Soil Enrichment': Leaf,
  'Agronomic Yield': Zap,
  'Ocean Health': Droplets,
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="pt-32 pb-24 text-center min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <Link to="/portfolio" className="text-emerald-600 font-semibold hover:underline">
          Return to Portfolio
        </Link>
      </div>
    );
  }

  const isCDR = project.type === 'CDR';

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* 1. HERO SECTION */}
      <section className="relative h-[80vh] min-h-[600px] flex flex-col justify-end overflow-hidden">
        {/* Background Image */}
        <img
          src={project.image}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pb-16">
          <Link
            to="/portfolio"
            className="inline-flex items-center text-sm font-medium text-white/70 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className={`px-4 py-1.5 text-xs font-bold tracking-[2px] uppercase rounded-full backdrop-blur-md border ${
              isCDR 
                ? 'bg-blue-500/20 border-blue-400/30 text-blue-100' 
                : 'bg-emerald-500/20 border-emerald-400/30 text-emerald-100'
            }`}>
              {project.type === 'NCS' ? 'Nature Based Solutions' : 'Carbon Dioxide Removal'}
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold text-white mb-10 max-w-4xl tracking-tight leading-tight">
            {project.name}
          </h1>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 px-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
            <div className="space-y-1">
              <span className="text-white/50 text-[10px] font-bold uppercase tracking-widest block">Registry</span>
              <p className="text-white font-medium text-lg">{project.registry}</p>
            </div>
            <div className="space-y-1">
              <span className="text-white/50 text-[10px] font-bold uppercase tracking-widest block">Location</span>
              <p className="text-white font-medium text-lg">{project.location}</p>
            </div>
            <div className="space-y-1">
              <span className="text-white/50 text-[10px] font-bold uppercase tracking-widest block">Period</span>
              <p className="text-white font-medium text-lg">{project.creditingPeriod}</p>
            </div>
            <div className="space-y-1">
              <span className="text-white/50 text-[10px] font-bold uppercase tracking-widest block">Status</span>
              <p className="text-emerald-400 font-medium text-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Active
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LOCATION MAP */}
      {['maharashtra-arr', 'madhya-pradesh-arr', 'telangana-andhra-arr'].includes(project.id) && (
        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 tracking-tight">
                  Project Location Context
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  Situated in {project.location}, this project operates within a high-integrity boundary verified through geospatial intelligence and on-ground assessments.
                </p>
                <div className="flex items-center gap-4 text-emerald-700 font-semibold">
                  <MapPin className="w-6 h-6" />
                  <span>Geospatial Verification Active</span>
                </div>
              </div>
              <div className="h-[450px] w-full rounded-3xl overflow-hidden shadow-2xl relative">
                {/* Static Map Styling */}
                <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                   <img 
                      src={project.image} 
                      className="w-full h-full object-cover opacity-20 grayscale brightness-50" 
                      alt="Map Background"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-emerald-600/20 rounded-full flex items-center justify-center animate-ping absolute"></div>
                      <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center relative shadow-lg">
                        <MapPin className="text-white w-6 h-6" />
                      </div>
                    </div>
                </div>
                {/* Overlay grid lines for tech look */}
                <div className="absolute inset-0 pointer-events-none opacity-10" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. PRIMARY ACTIVITY */}
      <section className="py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="max-w-3xl">
            <h2 className="text-sm font-bold uppercase tracking-[3px] text-emerald-600 mb-6">
              Primary Project Activity
            </h2>
            <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-[1.4]">
              {project.primaryActivity}
            </p>
          </div>
        </div>
      </section>

      {/* 4. SECONDARY ACTIVITIES (Optional - Only ARR & Mangrove) */}
      {(project.id.includes('arr') || project.id.includes('mangrove')) && project.secondaryActivities && project.secondaryActivities.length > 0 && (
        <section className="py-24 bg-stone-50 border-b border-stone-100">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <h2 className="text-sm font-bold uppercase tracking-[3px] text-slate-500 mb-12">
              Ancillary Initiatives
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.secondaryActivities.map((activity, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                  <p className="font-semibold text-slate-800 leading-tight">{activity}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. OBJECTIVES & IMPACTS */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-slate-900 tracking-tight text-center">
            Objectives & Environmental Impacts
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.impacts.map((impact, idx) => {
              const Icon = IMPACT_ICONS[impact.title] || Shield;
              return (
                <div key={idx} className="group p-8 rounded-3xl bg-slate-50 hover:bg-emerald-900 hover:text-white transition-all duration-500 border border-slate-100">
                  <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-emerald-800 flex items-center justify-center mb-6 shadow-sm group-hover:shadow-none transition-colors">
                    <Icon className="w-7 h-7 text-emerald-600 group-hover:text-emerald-100" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{impact.title}</h3>
                  <p className="text-slate-500 group-hover:text-emerald-100/70 text-sm leading-relaxed">
                    {impact.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. SDG TILES */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
            <h2 className="text-3xl font-bold tracking-tight">Sustainable Development Goals</h2>
            <p className="text-slate-500 max-w-md text-center md:text-left">
              This project contributes directly to several UN SDGs, ensuring holistic ecological and social progress.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {project.sdgs.map((sdg) => (
              <div
                key={sdg}
                className={`w-32 h-32 ${SDG_COLORS[sdg]} rounded-2xl shadow-lg flex flex-col items-center justify-center p-4 text-white hover:scale-105 transition-transform cursor-default group`}
              >
                <span className="text-3xl font-black mb-2 opacity-50 group-hover:opacity-100 transition-opacity">{sdg}</span>
                <span className="text-[10px] font-bold text-center uppercase leading-tight">
                  SDG {sdg}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <section className="py-32 px-6 md:px-10 text-center">
        <div className="max-w-4xl mx-auto bg-emerald-900 rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/50 to-transparent"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Ready to Invest?
            </h2>
            <p className="text-xl text-emerald-100/70 mb-12 max-w-2xl mx-auto">
              Access high-integrity carbon credits and contribute to verified climate solutions. Request a technical project deck today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="px-10 py-5 bg-white text-emerald-900 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all shadow-xl hover:-translate-y-1"
              >
                Request Technical Deck
              </Link>
              <Link
                to="/contact"
                className="px-10 py-5 border-2 border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
