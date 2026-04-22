import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants/projects';
import { MapPin, Calendar, Database, CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react';

const SDG_COLORS: Record<number, string> = {
  1: 'bg-[#E5243B]',  // No Poverty
  2: 'bg-[#DDA63A]',  // Zero Hunger
  3: 'bg-[#4C9F38]',  // Good Health
  4: 'bg-[#C5192D]',  // Quality Education
  5: 'bg-[#FF3A21]',  // Gender Equality
  6: 'bg-[#26BDE2]',  // Clean Water
  7: 'bg-[#FCC30B]',  // Affordable Energy
  8: 'bg-[#A21942]',  // Decent Work
  9: 'bg-[#FD6925]',  // Industry & Innovation
  10: 'bg-[#DD1367]', // Reduced Inequalities
  11: 'bg-[#FD9D24]', // Sustainable Cities
  12: 'bg-[#BF8B2E]', // Responsible Consumption
  13: 'bg-[#3F7E44]', // Climate Action
  14: 'bg-[#0A97D9]', // Life Below Water
  15: 'bg-[#56C02B]', // Life on Land
  16: 'bg-[#00689D]', // Peace & Justice
  17: 'bg-[#19486A]', // Partnerships
};

const SDG_NAMES: Record<number, string> = {
  1: 'No Poverty',
  2: 'Zero Hunger',
  3: 'Good Health and Well-being',
  4: 'Quality Education',
  5: 'Gender Equality',
  6: 'Clean Water and Sanitation',
  7: 'Affordable and Clean Energy',
  8: 'Decent Work and Economic Growth',
  9: 'Industry, Innovation and Infrastructure',
  10: 'Reduced Inequalities',
  11: 'Sustainable Cities and Communities',
  12: 'Responsible Consumption and Production',
  13: 'Climate Action',
  14: 'Life Below Water',
  15: 'Life on Land',
  16: 'Peace, Justice and Strong Institutions',
  17: 'Partnerships for the Goals',
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="pt-40 pb-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <Link to="/verticals/project-development" className="text-primary hover:underline">Return to Portfolio</Link>
      </div>
    );
  }

  const isCDR = project.type === 'CDR';

  return (
    <div className={`pt-16 min-h-screen ${isCDR ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}>
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center">

  {/* Background Image */}
  <img
    src={project.image}
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">

    <Link
      to="/verticals/project-development"
      className="text-sm mb-6 inline-block opacity-80 hover:opacity-100"
    >
      ← Back to Portfolio
    </Link>

    <h1 className="text-4xl md:text-6xl font-bold mb-4">
      {project.name}
    </h1>

    <div className="flex flex-wrap gap-6 text-sm">
      <span>📍 {project.location}</span>
      <span>📊 {project.registry}</span>
      <span>📅 {project.creditingPeriod}</span>
    </div>

  </div>
</section>
        {/* Subtle Gradient for CDR */}
        {isCDR && (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/10 to-transparent pointer-events-none" />
        )}
        
        
      

      {/* Main Content Area */}
      <section className="py-24 max-w-7xl mx-auto px-10">
        <div className="space-y-20">
          {/* Left: Content */}
          <div className="lg:col-span-2 space-y-20">
            {/* Primary Activity */}
            <div>
              <h2 className={`text-sm font-bold uppercase tracking-[2px] mb-8 pb-4 border-b ${isCDR ? 'text-blue-400 border-white/10' : 'text-primary border-slate-100'}`}>
                Primary Project Activity
              </h2>
              <p className={`text-xl lg:text-2xl font-medium leading-relaxed ${isCDR ? 'text-slate-300' : 'text-slate-700'}`}>
                {project.primaryActivity}
              </p>
            </div>

            {/* Secondary Activities */}


            <div>
  <h2 className="text-2xl font-bold mb-8">
    Project Impact
  </h2>

  <div className="grid md:grid-cols-2 gap-6">
    {project.impacts.map((impact, i) => (
      <div key={i} className="p-6 border rounded-xl">
        <h4 className="font-bold mb-2">
          {impact.title}
        </h4>
        <p className="text-slate-600 text-sm">
          {impact.description}
        </p>
      </div>
    ))}
  </div>
</div>
         {project.secondaryActivities && project.secondaryActivities.length > 0 && (
  <div>
    <h2 className={`text-sm font-bold uppercase tracking-[2px] mb-8 pb-4 border-b ${
      isCDR ? 'text-blue-400 border-white/10' : 'text-primary border-slate-100'
    }`}>
      Ancillary Initiatives
    </h2>

    <div className="grid sm:grid-cols-2 gap-6">
      {project.secondaryActivities.map((act, i) => (
        <div
          key={i}
          className={`flex items-start gap-4 p-6 rounded-xl border transition-all ${
            isCDR
              ? 'bg-slate-800/50 border-white/5 hover:border-blue-500/30'
              : 'bg-slate-50 border-slate-100 hover:border-accent'
          }`}
        >
          <CheckCircle2 className={`w-5 h-5 mt-0.5 shrink-0 ${
            isCDR ? 'text-blue-400' : 'text-accent'
          }`} />
          <span className="font-semibold text-sm leading-tight">{act}</span>
        </div>
      ))}
    </div>
  </div>
)}
            
            {/* Map Section */}
            <div>
              <h2 className={`text-sm font-bold uppercase tracking-[2px] mb-8 pb-4 border-b ${isCDR ? 'text-blue-400 border-white/10' : 'text-primary border-slate-100'}`}>
                Project Location Context
              </h2>
              <div className="h-[400px] w-full rounded-2xl overflow-hidden bg-slate-800 relative shadow-2xl">
                 <img 
                    src={project.image} 
                    className="w-full h-full object-cover opacity-30 grayscale blur-[2px]" 
                    alt="Map Context"
                    referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                    <div className={`p-4 rounded-full mb-6 ${isCDR ? 'bg-blue-600' : 'bg-primary'}`}>
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white text-xl font-bold mb-2">{project.location}</h3>
                    <p className="text-white/60 text-sm max-w-sm">Geospatial verification active. High-resolution satellite monitoring enabled for this boundary area.</p>
                 </div>
              </div>
            </div>
          </div>

       
        </div>
      </section>

      {/* Investor CTA */}
      <section className={`py-32 px-10 text-center ${isCDR ? 'bg-slate-950 mt-20' : 'bg-slate-50 mt-20'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl font-sans font-extrabold mb-8 ${isCDR ? 'text-white' : 'text-slate-900'}`}>
            Ready to Invest?
          </h2>
          <p className={`text-lg mb-12 max-w-2xl mx-auto ${isCDR ? 'text-slate-400' : 'text-slate-600'}`}>
            Access high-integrity carbon removal units from our verified project pipeline. Request a technical project deck or schedule a consultation with our development team.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              to="/contact"
              className={`px-12 py-4 rounded-md font-bold text-sm uppercase tracking-wider shadow-2xl transition-all hover:-translate-y-1 block w-full sm:w-auto ${
                isCDR ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-primary hover:bg-primary-dark text-white'
              }`}
            >
              Request Project Deck
            </Link>
            <Link
              to="/contact"
              className={`px-12 py-4 border-2 rounded-md font-bold text-sm uppercase tracking-wider transition-all hover:bg-white hover:text-slate-900 block w-full sm:w-auto ${
                 isCDR ? 'border-white/20 text-white hover:border-white' : 'border-slate-300 text-slate-600'
              }`}
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>

      {/* Floating Action Button (Optional but helps) */}
      <div className="fixed bottom-10 right-10 z-30">
        <Link 
          to="/contact"
          className={`flex items-center gap-3 px-6 py-4 rounded-full shadow-2xl text-white font-bold text-xs uppercase tracking-[2px] transition-all hover:scale-105 active:scale-95 ${
            isCDR ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-accent'
          }`}
        >
          Partner with us <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
