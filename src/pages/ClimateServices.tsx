import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CheckCircle2, ShieldCheck, Globe, Zap, BarChart3, Users, Scale, FileText } from "lucide-react";
import corpviVideo from "../assets/corpvi.mp4";
import endImage from "../assets/end.webp";
import marketImage from "../assets/market.webp";
import incentImage from "../assets/incent.webp";

const frameworkPhases = [
  {
    num: "01",
    title: "Identification: Project Screening And Origination",
    points: ["Opportunity mapping", "Site assessment", "Baseline analysis", "Feasibility scoring"],
  },
  {
    num: "02",
    title: "Design: Technical And Financial Assessment",
    points: ["Registry and methodology selection", "Carbon quantification modelling", "Financial structuring", "Institutional arrangements and partnerships"],
  },
  {
    num: "03",
    title: "Advisory: Strategy And Capacity Building",
    points: ["Carbon market review", "Article 6 implementation", "Host country technical assistance", "Stakeholder capacity building"],
  },
  {
    num: "04",
    title: "Development: Validation, MRV And Operations",
    points: ["Third-party validation", "Project registration", "Monitoring, reporting and verification (MRV)", "Management and operations"],
  },
  {
    num: "05",
    title: "Commercialisation: Market Access",
    points: ["Long-term offtake agreements", "Carbon credit sales and marketing", "Buyer matching and negotiation", "Portfolio optimisation"],
  },
];

export default function ClimateServices() {
  const partnershipCards = [
    {
      title: "End-to-End Expertise",
      desc: "From project identification and feasibility through validation, MRV and carbon credit sales, we cover the full cycle so you never need to piece together multiple advisors.",
      image: endImage,
    },
    {
      title: "Market-Grade Rigour",
      desc: "Every project we touch is built to the highest integrity standards. Our team combines field science with financial discipline to create assets that earn and sustain buyer trust.",
      image: marketImage,
    },
    {
      title: "Aligned Incentives",
      desc: "We succeed when your project succeeds. Our engagement models are designed to align our interests with yours, whether you are a first-time developer or a seasoned operator scaling a portfolio.",
      image: incentImage,
    },
  ];

  return (
    <div className="overflow-hidden bg-stone-50 text-slate-900">
      <section className="relative bg-black">
        <div className="h-[78vh] min-h-[560px] overflow-hidden">
          <video autoPlay loop muted playsInline className="h-full w-full object-cover">
            <source src={corpviVideo} type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="bg-[#012A24] py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 text-center">
            <span className="mb-2 block text-sm font-bold uppercase tracking-wider text-emerald-300">Working With Us</span>
            <h2 className="text-3xl font-bold text-white md:text-4xl">A Partner Built for the Long Game</h2>
            <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-white/72">
              Climate project development is not a sprint. It is a multi-year commitment requiring tenacity, technical excellence, and deep market relationships. Ecoveda Climate was built to serve as a long-term partner to governments, landowners, corporations, project developers, and indigenous communities navigating this landscape.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {partnershipCards.map((item) => (
              <div
                key={item.title}
                className="group relative min-h-[340px] overflow-hidden rounded-2xl border border-white/10 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-[0_0_38px_rgba(250,204,21,0.36)] hover:ring-1 hover:ring-yellow-400/70"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/20 transition duration-500 group-hover:from-slate-950 group-hover:via-slate-950/78 group-hover:to-slate-950/45" />
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.12),transparent_60%)]" />

                <div className="relative z-10 flex h-full flex-col justify-end p-6">
                  <h3 className="max-w-[14rem] text-2xl font-bold leading-snug text-white transition duration-500 group-hover:-translate-y-1 group-hover:text-yellow-300">
                    {item.title}
                  </h3>

                  <div className="mt-4 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                    <p className="border-t border-white/15 pt-4 text-sm leading-relaxed text-white/85 md:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 text-center">
            <span className="mb-2 block text-sm font-bold uppercase tracking-wider text-emerald-600">Developing Climate Projects</span>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Our Five-Phase Project Development Framework</h2>
            <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-slate-600">
              Successful climate projects do not happen by accident. They are built through a structured, disciplined process that accounts for scientific complexity, regulatory requirements, community dynamics, and market realities. Our proprietary five-phase framework ensures nothing is left to chance.
            </p>
          </div>

          <div className="space-y-6">
            {frameworkPhases.map((phase) => (
              <div
                key={phase.num}
                className="group flex flex-col gap-6 rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#012A24] hover:bg-[#012A24] hover:shadow-[0_20px_50px_rgba(1,42,36,0.24)] md:flex-row md:p-5"
              >
                <div className="md:w-1/3 xl:w-1/4">
                  <div className="mb-2 text-5xl font-extrabold text-slate-200 transition-colors duration-300 group-hover:text-white/25">
                    {phase.num}
                  </div>
                  <h3 className="text-xl font-bold leading-snug text-emerald-700 transition-colors duration-300 group-hover:text-emerald-300">{phase.title.split(":")[0]}</h3>
                  <div className="mt-2 font-semibold text-slate-700 transition-colors duration-300 group-hover:text-white">{phase.title.split(":")[1]}</div>
                </div>
                <div className="flex items-center md:w-2/3 xl:w-3/4">
                  <div className="grid w-full gap-x-8 gap-y-4 sm:grid-cols-2">
                    {phase.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500 transition-colors duration-300 group-hover:text-emerald-300" />
                        <span className="text-sm text-slate-600 transition-colors duration-300 group-hover:text-white/90 md:text-base">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 text-center">
            <span className="mb-2 block text-sm font-bold uppercase tracking-wider text-emerald-600">Types of Projects</span>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Where We Work Across the Carbon Landscape</h2>
            <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-slate-600">
              The carbon market is expanding rapidly across ecosystems, technologies, and geographies. Ecoveda Climate provides consultancy across three interconnected domains, each critical to achieving net-zero at scale.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl p-5 transition duration-300 hover:shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1511497584788-876760111969"
                alt="Natural Climate Solutions"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-slate-900/60" />
              <div className="relative z-10">
                <Globe className="mb-6 h-12 w-12 text-emerald-400" />
                <h3 className="mb-4 text-2xl font-bold text-white">Natural Climate Solutions (NCS)</h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-300">
                  Nature holds extraordinary power to absorb and store carbon. Our NCS practice helps project developers unlock the full potential of ecosystems as living carbon infrastructure, with rigorous science and genuine co-benefits for biodiversity and communities.
                </p>
                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex flex-col"><span className="mb-1 font-bold text-emerald-400">ARR</span> Afforestation, Reforestation and Revegetation</li>
                  <li className="flex flex-col"><span className="mb-1 font-bold text-emerald-400">REDD+</span> Reducing Emissions from Deforestation and Degradation</li>
                  <li className="flex flex-col"><span className="mb-1 font-bold text-emerald-400">WRC</span> Wetland Restoration and Conservation</li>
                  <li className="flex flex-col"><span className="mb-1 font-bold text-emerald-400">ALM</span> Sustainable Agricultural Land Management</li>
                  <li className="flex flex-col"><span className="mb-1 font-bold text-emerald-400">IFM</span> Improved Forest Management</li>
                </ul>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl p-5 transition duration-300 hover:shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Carbon Dioxide Removal"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-slate-900/60" />
              <div className="relative z-10">
                <ShieldCheck className="mb-6 h-12 w-12 text-emerald-400" />
                <h3 className="mb-4 text-2xl font-bold text-white">Carbon Dioxide Removal (CDR)</h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-300">
                  As the world recognises that emission reductions alone cannot achieve 1.5°C, engineered and enhanced removal pathways are gaining critical importance. We help CDR technology developers navigate methodologies, markets, and commercialisation.
                </p>
                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex flex-col"><span className="mb-1 font-bold text-emerald-400">Biochar</span> Converting organic waste into stable carbon stored for centuries in soils.</li>
                  <li className="flex flex-col"><span className="mb-1 font-bold text-emerald-400">ERW</span> Enhanced Rock Weathering applied to agricultural lands.</li>
                  <li className="flex flex-col"><span className="mb-1 font-bold text-emerald-400">DAC</span> Direct Air Capture of CO2 directly from the atmosphere.</li>
                </ul>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl p-5 transition duration-300 hover:shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276"
                alt="Energy and Industry"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-slate-900/60" />
              <div className="relative z-10">
                <Zap className="mb-6 h-12 w-12 text-emerald-400" />
                <h3 className="mb-4 text-2xl font-bold text-white">Energy & Industry</h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-300">
                  The energy transition requires deep decarbonisation of power systems, industrial processes, and waste streams. Our energy and industry practice supports project developers delivering measurable emissions reductions through proven technologies.
                </p>
                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex flex-col"><span className="mb-1 font-bold text-emerald-400">Renewables</span> Solar, wind, hydro, and geothermal projects.</li>
                  <li className="flex flex-col"><span className="mb-1 font-bold text-emerald-400">Energy Efficiency</span> Industrial, commercial, and residential efficiency.</li>
                  <li className="flex flex-col"><span className="mb-1 font-bold text-emerald-400">Biogas</span> Capturing methane from agricultural and organic waste.</li>
                  <li className="flex flex-col"><span className="mb-1 font-bold text-emerald-400">Waste Management</span> Landfill gas capture and waste-to-energy.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#081c19] py-12">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-6 text-center">
            <span className="mb-2 block text-sm font-bold uppercase tracking-wider text-emerald-300">05 · Registries We Work With</span>
            <h2 className="text-3xl font-bold text-white md:text-4xl">Credibility Starts With the Right Standard</h2>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              The integrity of a carbon credit is only as strong as the standard it is certified against. Ecoveda Climate works across the full spectrum of leading voluntary and compliance carbon standards.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white shadow-lg">
            <table className="min-w-[600px] w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="p-6 font-bold tracking-wider text-emerald-700">REGISTRY</th>
                  <th className="p-6 font-bold tracking-wider text-emerald-700">STANDARDS</th>
                </tr>
              </thead>
              <tbody className="text-sm text-slate-800 md:text-base">
                <tr className="border-b border-slate-100 transition hover:bg-slate-50">
                  <td className="p-6 font-bold text-slate-900">VERRA</td>
                  <td className="space-y-1 p-6 text-slate-600">
                    <div>Verified Carbon Standard</div>
                    <div>Climate, Community and Biodiversity Standard</div>
                    <div>Sustainable Development Verified Impact Standard</div>
                  </td>
                </tr>
                <tr className="border-b border-slate-100 transition hover:bg-slate-50">
                  <td className="p-6 font-bold text-slate-900">Gold Standard</td>
                  <td className="p-6 text-slate-600">GS4GG</td>
                </tr>
                <tr className="border-b border-slate-100 transition hover:bg-slate-50">
                  <td className="p-6 font-bold text-slate-900">International Carbon Registry (ICR)</td>
                  <td className="p-6 text-slate-600">-</td>
                </tr>
                <tr className="border-b border-slate-100 transition hover:bg-slate-50">
                  <td className="p-6 font-bold text-slate-900">Cercarbono</td>
                  <td className="p-6 text-slate-600">-</td>
                </tr>
                <tr className="border-b border-slate-100 transition hover:bg-slate-50">
                  <td className="p-6 font-bold text-slate-900">Global Carbon Council (GCC)</td>
                  <td className="p-6 text-slate-600">-</td>
                </tr>
                <tr className="border-b border-slate-100 transition hover:bg-slate-50">
                  <td className="p-6 font-bold text-slate-900">Plan Vivo</td>
                  <td className="p-6 text-slate-600">PV Standard</td>
                </tr>
                <tr className="transition hover:bg-slate-50">
                  <td className="p-6 font-bold text-slate-900">Climate Action Reserve (CAR)</td>
                  <td className="p-6 text-slate-600">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-stone-50 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8 text-center">
            <span className="mb-2 block text-sm font-bold uppercase tracking-wider text-emerald-600">Ecoveda Climate's High Integrity Framework</span>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Integrity Is Not a Feature. It Is the Foundation.</h2>
            <p className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-slate-600">
              In a market where credit quality controversies have shaken buyer confidence, Ecoveda Climate stands apart. Our High Integrity Framework is a set of non-negotiable principles that govern every project we touch. Every project we develop or advise on is held to a standard that goes beyond certification.
            </p>
          </div>

          <div className="mb-6 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-emerald-400 hover:shadow-md">
              <BarChart3 className="mb-6 h-10 w-10 text-emerald-600" />
              <h3 className="mb-6 text-xl font-bold text-slate-900">Scientific Rigour</h3>
              <ul className="space-y-4 text-sm text-slate-600 md:text-base">
                <li className="flex gap-3"><span className="text-emerald-600">›</span> Conservative baselines</li>
                <li className="flex gap-3"><span className="text-emerald-600">›</span> Peer-reviewed methodology selection</li>
                <li className="flex gap-3"><span className="text-emerald-600">›</span> Independent MRV with zero tolerance for manipulation</li>
                <li className="flex gap-3"><span className="text-emerald-600">›</span> Permanence and leakage accounted for in every model</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-emerald-400 hover:shadow-md">
              <Users className="mb-6 h-10 w-10 text-emerald-600" />
              <h3 className="mb-6 text-xl font-bold text-slate-900">Social Equity</h3>
              <ul className="space-y-4 text-sm text-slate-600 md:text-base">
                <li className="flex gap-3"><span className="text-emerald-600">›</span> Free, prior and informed consent of communities</li>
                <li className="flex gap-3"><span className="text-emerald-600">›</span> Benefit-sharing mechanisms built into project design</li>
                <li className="flex gap-3"><span className="text-emerald-600">›</span> Gender-inclusive stakeholder engagement</li>
                <li className="flex gap-3"><span className="text-emerald-600">›</span> Protection of indigenous rights and tenure</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-emerald-400 hover:shadow-md">
              <Scale className="mb-6 h-10 w-10 text-emerald-600" />
              <h3 className="mb-6 text-xl font-bold text-slate-900">Transparent Governance</h3>
              <ul className="space-y-4 text-sm text-slate-600 md:text-base">
                <li className="flex gap-3"><span className="text-emerald-600">›</span> Full project documentation available to buyers</li>
                <li className="flex gap-3"><span className="text-emerald-600">›</span> Real-time monitoring dashboards where applicable</li>
                <li className="flex gap-3"><span className="text-emerald-600">›</span> Third-party audits at every verification cycle</li>
                <li className="flex gap-3"><span className="text-emerald-600">›</span> Zero tolerance for double-counting or double-claiming</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-emerald-400 hover:shadow-md">
              <FileText className="mb-6 h-10 w-10 text-emerald-600" />
              <h3 className="mb-6 text-xl font-bold text-slate-900">Market Alignment</h3>
              <ul className="space-y-4 text-sm text-slate-600 md:text-base">
                <li className="flex gap-3"><span className="text-emerald-600">›</span> VCMI and ICVCM Core Carbon Principles alignment</li>
                <li className="flex gap-3"><span className="text-emerald-600">›</span> Article 6 corresponding adjustment readiness</li>
                <li className="flex gap-3"><span className="text-emerald-600">›</span> Buyer-grade documentation and disclosure</li>
                <li className="flex gap-3"><span className="text-emerald-600">›</span> Long-term credit quality and price stability focus</li>
              </ul>
            </div>
          </div>

          <div className="mx-auto max-w-4xl rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-center text-lg font-medium text-emerald-900">
            The High Integrity Framework is not a marketing statement. It is an operational commitment embedded in our due diligence checklists, project agreements, and day-to-day decisions.
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-[#012A24] py-24 text-center">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-5 text-4xl font-extrabold text-white md:text-5xl">Ready to Build Something That Lasts?</h2>
          <p className="mx-auto mb-6 max-w-3xl text-lg leading-relaxed text-white/72">
            Whether you are a landowner exploring your first NCS project, a corporation building a credible carbon procurement strategy, a government designing Article 6 frameworks, or an investor seeking high-integrity climate assets, we want to hear from you.
            <br /><br />
            Climate action at the scale the planet needs requires collaboration between science, finance, policy, and communities. Ecoveda Climate exists at the intersection of all four.
          </p>

          <div className="flex flex-col justify-center gap-5 md:flex-row">
            <div className="group text-left shadow-sm transition hover:shadow-md md:w-1/2 rounded-2xl border border-white/10 bg-white p-5">
              <h3 className="mb-3 text-2xl font-bold text-emerald-700">Start a Conversation</h3>
              <p className="mb-5 text-base text-slate-600">
                Tell us about your project idea, your organisation’s climate goals, or the challenge you are trying to solve. Our team will respond within 48 hours.
              </p>
              <Link to="/contact" className="inline-block w-full rounded-lg bg-emerald-600 px-8 py-3 text-center text-base font-bold text-white shadow-md transition hover:bg-emerald-700">
                Send Us a Message
              </Link>
            </div>

            <div className="group text-left shadow-sm transition hover:shadow-md md:w-1/2 rounded-2xl border border-white/10 bg-white p-5">
              <h3 className="mb-3 text-2xl font-bold text-emerald-700">Request a Project Assessment</h3>
              <p className="mb-5 text-base text-slate-600">
                Have a specific site or project in mind? Request a no-obligation preliminary assessment from our technical team. We will evaluate the potential.
              </p>
              <Link to="/contact" className="inline-block w-full rounded-lg border border-emerald-600 px-8 py-3 text-center text-base font-bold text-emerald-700 transition hover:bg-emerald-50">
                Request Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
