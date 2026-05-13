import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Landmark,
  Network,
  ShieldCheck,
  Sprout,
  Users,
} from "lucide-react";
import govt1 from "../assets/govt1.webp";
import govt2 from "../assets/govt2.webp";
import govt3 from "../assets/govt3.webp";
import govt4 from "../assets/govt4.webp";
import govtVideo from "../assets/govt.mp4";

const collaborationTracks = [
  {
    title: "Government Partnerships",
    copy:
      "Collaborating with national and regional governments to design climate frameworks, activate public programmes, and deliver implementation pathways with measurable outcomes.",
    points: [
      "Public sector climate programmes",
      "Policy alignment and execution",
      "Carbon project integration",
      "National sustainability initiatives",
    ],
    image: govt1,
    icon: Landmark,
    tone: "emerald",
    panelClass: "bg-[linear-gradient(135deg,#f8efe4_0%,#fff8ef_48%,#ffffff_100%)]",
    badgeClass: "bg-amber-400/12 text-amber-700",
    iconClass: "bg-amber-100 text-amber-700 group-hover:bg-amber-600 group-hover:text-white",
    pointClass: "group-hover:border-amber-200 group-hover:bg-amber-50/60",
  },
  {
    title: "Multilateral Agencies",
    copy:
      "Working with global institutions to unlock climate finance, deliver high-integrity cross-border programmes, and structure implementation for scale.",
    points: [
      "World Bank and UN-linked programmes",
      "Climate finance structuring",
      "Cross-border project delivery",
      "Impact-driven implementation systems",
    ],
    image: govt2,
    icon: Globe2,
    tone: "teal",
    panelClass: "bg-[linear-gradient(135deg,#eef6ff_0%,#f6fbff_52%,#ffffff_100%)]",
    badgeClass: "bg-sky-400/12 text-sky-700",
    iconClass: "bg-sky-100 text-sky-700 group-hover:bg-sky-600 group-hover:text-white",
    pointClass: "group-hover:border-sky-200 group-hover:bg-sky-50/60",
  },
  {
    title: "NGO Collaboration",
    copy:
      "Supporting mission-driven organisations that lead community action on adaptation, restoration, livelihoods, and resilient development.",
    points: [
      "Community engagement systems",
      "Rural sustainability programmes",
      "Clean cooking initiatives",
      "Water and sanitation interventions",
    ],
    image: govt3,
    icon: Users,
    tone: "lime",
    panelClass: "bg-[linear-gradient(135deg,#f3f8ea_0%,#fbfff5_52%,#ffffff_100%)]",
    badgeClass: "bg-lime-400/12 text-lime-700",
    iconClass: "bg-lime-100 text-lime-700 group-hover:bg-lime-600 group-hover:text-white",
    pointClass: "group-hover:border-lime-200 group-hover:bg-lime-50/60",
  },
  {
    title: "Public-Private Partnerships",
    copy:
      "Bridging public ambition and private capital to accelerate bankable climate infrastructure, financing structures, and long-term delivery models.",
    points: [
      "PPP project models",
      "Carbon credit financing",
      "Infrastructure development",
      "Sustainable investment frameworks",
    ],
    image: govt4,
    icon: Network,
    tone: "amber",
    panelClass: "bg-[linear-gradient(135deg,#f8eef8_0%,#fff8ff_52%,#ffffff_100%)]",
    badgeClass: "bg-fuchsia-400/12 text-fuchsia-700",
    iconClass: "bg-fuchsia-100 text-fuchsia-700 group-hover:bg-fuchsia-600 group-hover:text-white",
    pointClass: "group-hover:border-fuchsia-200 group-hover:bg-fuchsia-50/60",
  },
];

const operatingPrinciples = [
  {
    title: "Technical Rigour",
    desc: "Every recommendation is anchored in scientific method, implementation logic, and verifiable measurement.",
    icon: ShieldCheck,
  },
  {
    title: "Long-Term Lens",
    desc: "We build programmes that remain credible and effective beyond the first funding cycle or policy window.",
    icon: Sprout,
  },
  {
    title: "Institutional Strengthening",
    desc: "Our work leaves behind stronger governance systems, clearer operating models, and internal capability.",
    icon: Landmark,
  },
  {
    title: "Partnership Integrity",
    desc: "We design structures that align governments, multilaterals, NGOs, and delivery partners around real outcomes.",
    icon: Users,
  },
];

export default function GovtNgo() {
  return (
    <div className="bg-stone-50 text-slate-900">
      <section className="relative min-h-[680px] overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="h-full w-full object-cover">
            <source src={govtVideo} type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 pt-32 md:px-10 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200 backdrop-blur-md">
              <Landmark className="h-4 w-4" />
              Institutional Partnerships
            </div>

            <h1 className="max-w-5xl text-4xl font-bold leading-[1.02] text-white md:text-6xl lg:text-7xl">
              Government, multilateral, and NGO collaboration designed for real climate delivery.
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/75 md:text-xl">
              We partner with public institutions, development actors, and mission-led organisations to turn climate ambition into bankable programmes, resilient systems, and measurable impact on the ground.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-10 grid gap-4 md:grid-cols-3"
          >
            {[
              { label: "Partner Types", value: "Govt · NGOs · Multilaterals" },
              { label: "Delivery Focus", value: "Climate Finance + Implementation" },
              { label: "Operating Style", value: "High Integrity, Long Horizon" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-[28px] border border-white/10 bg-white/8 p-5 text-white shadow-[0_22px_55px_rgba(0,0,0,0.16)] backdrop-blur-md"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">{item.label}</p>
                <p className="mt-3 text-lg font-semibold text-white">{item.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 -mt-8 pb-12">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-6 xl:grid-cols-[minmax(0,1.15fr)_360px]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[32px] border border-emerald-900/10 bg-white p-6 shadow-[0_28px_70px_rgba(15,23,42,0.08)] md:p-8"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Why This Matters
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Scaling climate solutions through institutional alignment and implementation depth.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                We work across public institutions, global agencies, and grassroots organisations to design and activate scalable climate programmes that produce measurable environmental and social outcomes. Our role is not limited to strategy. We help structure the path from policy intent to operational delivery.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  "Programme design that fits real institutional constraints",
                  "Implementation pathways that strengthen governance and delivery",
                  "Climate-finance structures tied to measurable public value",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-medium leading-relaxed text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="rounded-[32px] bg-[#012A24] p-6 text-white shadow-[0_28px_70px_rgba(1,42,36,0.22)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">
                Partnership Model
              </p>
              <div className="mt-6 space-y-5">
                {[
                  "Public-sector programme structuring",
                  "Multilateral implementation support",
                  "NGO and community delivery design",
                  "PPP pathways for climate infrastructure",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/8 p-4 backdrop-blur-md">
                    <p className="text-sm leading-relaxed text-white/80">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Collaboration Tracks
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
                Four ways we build institutional climate impact
              </h2>
            </div>
            <p className="max-w-2xl text-slate-500">
              Each track is designed to feel distinct visually while still belonging to one unified, premium page system.
            </p>
          </div>

          <div className="grid gap-6">
            {collaborationTracks.map((track, index) => {
              const Icon = track.icon;
              const reversed = index % 2 === 1;
              return (
                <motion.div
                  key={track.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  className="group overflow-hidden rounded-[34px] border border-stone-200 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
                >
                  <div className={`grid gap-0 lg:grid-cols-2 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
                    <div className="relative min-h-[320px] overflow-hidden">
                      <img
                        src={track.image}
                        alt={track.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent" />
                      <div className="absolute left-6 top-6">
                        <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] ${track.badgeClass}`}>
                          <Icon className="h-4 w-4" />
                          {track.title}
                        </div>
                      </div>
                    </div>

                    <div className={`flex flex-col justify-center p-6 md:p-8 lg:p-10 ${track.panelClass}`}>
                      <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl transition ${track.iconClass}`}>
                        <Icon className="h-7 w-7" />
                      </div>

                      <h3 className="text-3xl font-bold text-slate-900">{track.title}</h3>
                      <p className="mt-5 text-lg leading-relaxed text-slate-600">{track.copy}</p>

                      <div className="mt-8 grid gap-3 sm:grid-cols-2">
                        {track.points.map((point) => (
                          <div key={point} className={`rounded-2xl border border-stone-200 bg-white/70 p-4 transition ${track.pointClass}`}>
                            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white text-emerald-600 shadow-sm">
                              <CheckCircle2 className="h-4 w-4" />
                            </div>
                            <p className="text-sm font-medium leading-relaxed text-slate-700">{point}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#012A24] py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">
              How We Work
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              A partnership engine built for durable public value
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/70">
              Climate advisory for institutions is not a transaction. It is a multi-year operating commitment requiring technical depth, policy realism, delivery discipline, and trust between partners.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {operatingPrinciples.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="group rounded-[30px] border border-white/10 bg-white/8 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/12"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-emerald-300 transition group-hover:bg-emerald-500 group-hover:text-white">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/72">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-10 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-6xl overflow-hidden rounded-[40px] bg-white p-8 shadow-[0_28px_80px_rgba(15,23,42,0.1)] md:p-14"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.1),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(1,42,36,0.08),transparent_22%)]" />
          <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Next Step
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
                Build climate programmes with stronger governance, stronger finance, and stronger implementation.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Whether you are shaping a public-sector initiative, a donor-backed programme, or a community-led implementation model, we can help structure the path from ambition to delivery.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#012A24] px-8 py-4 text-base font-bold text-white transition hover:-translate-y-1 hover:bg-emerald-700"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-stone-50 px-8 py-4 text-base font-bold text-slate-900 transition hover:-translate-y-1 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
              >
                Start Collaboration
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
