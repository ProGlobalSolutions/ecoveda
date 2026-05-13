import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants/projects';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  Droplets,
  Globe,
  Leaf,
  MapPin,
  Shield,
  Sparkles,
  Trees,
  Users,
  Waves,
  Zap,
} from 'lucide-react';

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
  Biodiversity: Leaf,
  Community: Users,
  'Soil Health': Trees,
  'Water Security': Droplets,
  Livelihoods: Users,
  'Climate Resilience': Shield,
  'Income Diversity': Users,
  'Ecosystem Services': Leaf,
  Adaptation: Shield,
  'Carbon Capture': Zap,
  'Blue Carbon': Waves,
  'Coastal Shield': Shield,
  Fisheries: Users,
  Phytoremediation: Droplets,
  'Permanent Removal': Shield,
  'Soil Enrichment': Leaf,
  'Agronomic Yield': Zap,
  'Ocean Health': Waves,
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find((item) => item.id === id);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-6 pb-24 pt-32 text-center">
        <h1 className="mb-4 text-3xl font-bold">Project Not Found</h1>
        <Link to="/portfolio" className="font-semibold text-emerald-600 hover:underline">
          Return to Portfolio
        </Link>
      </div>
    );
  }

  const isCDR = project.type === 'CDR';
  const accent = isCDR ? '#3b82f6' : '#10b981';
  const projectLabel = isCDR ? 'Carbon Dioxide Removal' : 'Nature-Based Solutions';
  const spotlightLabel = isCDR ? 'Engineered Durability' : 'Landscape Regeneration';
  const spotlightCopy = isCDR
    ? 'Built around measurable removal, robust quantification, and permanence-first project design.'
    : 'Designed to restore ecosystems, generate durable carbon value, and strengthen local resilience.';

  const statCards = [
    { label: 'Registry', value: project.registry },
    { label: 'Location', value: project.location },
    { label: 'Crediting Period', value: project.creditingPeriod },
    { label: 'Project Type', value: project.type },
  ];

  const overviewPoints = [
    isCDR ? 'High-rigour carbon accounting and measurement strategy' : 'Ecological restoration integrated with local implementation capacity',
    isCDR ? 'Permanence-oriented climate intervention with verification readiness' : 'Community-linked land stewardship and biodiversity upside',
    isCDR ? 'Designed for premium market credibility and technical storytelling' : 'Strong nature-positive narrative with measurable carbon outcomes',
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <section className="relative overflow-hidden bg-[#012A24]">
        <div className="absolute inset-0">
          <img src={project.image} alt={project.name} className="h-full w-full object-cover object-center opacity-35" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,42,36,0.4)_0%,rgba(1,42,36,0.72)_34%,rgba(1,42,36,0.96)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.22),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.12),transparent_24%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-32 md:px-10 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-5xl"
          >
            <Link
              to="/portfolio"
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-medium text-white/72 backdrop-blur-md transition hover:border-white/25 hover:bg-white/12 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>

            <div className="mb-6 flex flex-wrap gap-3">
              <span
                className="rounded-full border border-white/12 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white shadow-lg backdrop-blur-md"
                style={{ backgroundColor: isCDR ? 'rgba(59,130,246,0.22)' : 'rgba(16,185,129,0.22)' }}
              >
                {projectLabel}
              </span>
              <span className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-200 backdrop-blur-md">
                {spotlightLabel}
              </span>
            </div>

            <h1 className="max-w-5xl text-4xl font-bold leading-[1.02] text-white md:text-6xl lg:text-7xl">
              {project.name}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/72 md:text-xl">
              {spotlightCopy}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4"
          >
            {statCards.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[28px] border border-white/10 bg-white/8 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.14)] backdrop-blur-md"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/45">{stat.label}</p>
                <p className="mt-3 text-lg font-semibold text-white">{stat.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 -mt-8 pb-12">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_360px]">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[32px] border border-emerald-900/10 bg-white p-6 shadow-[0_30px_70px_rgba(15,23,42,0.08)] md:p-8"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                <Sparkles className="h-4 w-4" />
                Project Overview
              </div>
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                High-integrity climate infrastructure with measurable ecological and social value.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                {project.primaryActivity}
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {overviewPoints.map((point) => (
                  <div key={point} className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-medium leading-relaxed text-slate-700">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="rounded-[32px] bg-[#012A24] p-6 text-white shadow-[0_30px_70px_rgba(1,42,36,0.26)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">Project Snapshot</p>
              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">Location</p>
                    <p className="mt-2 text-base font-medium text-white">{project.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">Crediting Period</p>
                    <p className="mt-2 text-base font-medium text-white">{project.creditingPeriod}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-300">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">Registry</p>
                    <p className="mt-2 text-base font-medium text-white">{project.registry}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-[28px] border border-white/10 bg-white/8 p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">Positioning</p>
                <p className="mt-3 text-sm leading-relaxed text-white/72">
                  {isCDR
                    ? 'Structured for technical credibility, premium removals storytelling, and long-horizon buyer confidence.'
                    : 'Structured to restore landscapes, activate community value, and generate resilient carbon outcomes over time.'}
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {['maharashtra-arr', 'madhya-pradesh-arr', 'telangana-andhra-arr'].includes(project.id) && (
        <section className="bg-stone-50 py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(340px,1.1fr)]">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Location Context</p>
                <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                  Verified implementation geography with on-ground ecosystem relevance.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-slate-600">
                  Situated in {project.location}, this project is framed through geospatial intelligence, ecological planning, and local implementation alignment to support durable carbon outcomes and defensible project boundaries.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    'Geospatial screening and site intelligence',
                    'Restoration planning linked to local conditions',
                    'Boundary clarity for monitoring and verification',
                    'Implementation pathways designed for scale',
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <p className="text-sm font-medium leading-relaxed text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="relative overflow-hidden rounded-[34px] border border-emerald-900/10 bg-[#012A24] shadow-[0_26px_70px_rgba(1,42,36,0.18)]"
              >
                <img
                  src={project.image}
                  alt={`${project.name} location context`}
                  className="h-[460px] w-full object-cover opacity-25"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,42,36,0.16)_0%,rgba(1,42,36,0.78)_100%)]" />
                <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '42px 42px' }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute h-24 w-24 animate-ping rounded-full bg-emerald-400/18" />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_0_0_16px_rgba(16,185,129,0.12)]">
                    <MapPin className="h-7 w-7" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-200">Geospatial Verification Active</p>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/72">
                    Project siting and implementation narrative designed to communicate credibility, locality, and ecological grounding.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className={`grid gap-8 ${project.activityImage ? 'lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,1.05fr)] lg:items-center' : 'max-w-4xl'}`}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[32px] border border-stone-200 bg-stone-50 p-6 md:p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Primary Activity</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Core implementation pathway
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                {project.primaryActivity}
              </p>
            </motion.div>

            {project.activityImage && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="group relative overflow-hidden rounded-[34px] border border-emerald-900/10 shadow-[0_22px_60px_rgba(15,23,42,0.12)]"
              >
                <img
                  src={project.activityImage}
                  alt={`${project.name} activity`}
                  className="aspect-[5/4] h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-200">Visual Activity Layer</p>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-white/72">
                    Illustrating the physical intervention, operational context, and design logic behind the project model.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {project.secondaryActivities && project.secondaryActivities.length > 0 && (
        <section className="bg-[#012A24] py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">Supporting Workstreams</p>
                <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                  Ancillary initiatives that strengthen delivery quality
                </h2>
              </div>
              <p className="max-w-2xl text-white/65">
                These complementary interventions increase implementation resilience, improve local adoption, and support the long-term quality of climate outcomes.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {project.secondaryActivities.map((activity, index) => (
                <motion.div
                  key={activity}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="group rounded-[28px] border border-white/10 bg-white/8 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/12"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-emerald-300 transition group-hover:bg-emerald-500 group-hover:text-white">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <p className="text-base font-medium leading-relaxed text-white">{activity}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-stone-50 py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Objectives & Impacts</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Environmental and community value drivers
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {project.impacts.map((impact, index) => {
              const Icon = IMPACT_ICONS[impact.title] || Shield;

              return (
                <motion.div
                  key={impact.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="group rounded-[30px] border border-stone-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:bg-[#012A24] hover:shadow-[0_22px_48px_rgba(1,42,36,0.18)]"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition group-hover:bg-white/10 group-hover:text-emerald-300">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 transition group-hover:text-white">{impact.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 transition group-hover:text-white/72">
                    {impact.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">Sustainable Development Goals</p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Impact aligned with global development outcomes
              </h2>
            </div>
            <p className="max-w-2xl text-slate-500">
              Each portfolio project is framed not just as a carbon asset, but as a broader development intervention connected to verified ecological and social progress.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {project.sdgs.map((sdg, index) => (
              <motion.div
                key={sdg}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(15,23,42,0.12)]"
              >
                <div className={`${SDG_COLORS[sdg]} p-5 text-white`}>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/72">SDG</p>
                  <p className="mt-3 text-4xl font-black">{sdg}</p>
                </div>
                <div className="p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-900">Goal {sdg}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">
                    A direct contribution to measurable progress under the wider sustainable development agenda.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-[#012A24] p-8 shadow-[0_30px_80px_rgba(1,42,36,0.28)] md:p-14"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.18),transparent_30%),radial-gradient(circle_at_85%_20%,rgba(250,204,21,0.12),transparent_25%)]" />
          <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">Next Step</p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
                Ready to explore the technical and commercial depth of this project?
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-white/72">
                Request the technical project deck, discuss credit strategy, or speak with our team about pipeline fit, diligence requirements, and market positioning.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-bold text-[#012A24] transition hover:-translate-y-1 hover:bg-emerald-50"
              >
                Request Technical Deck
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/8 px-8 py-4 text-base font-bold text-white transition hover:-translate-y-1 hover:bg-white/12"
              >
                Schedule Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
