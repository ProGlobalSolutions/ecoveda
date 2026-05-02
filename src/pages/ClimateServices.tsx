import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CheckCircle2, ShieldCheck, Globe, Zap, BarChart3, Users, Scale, FileText } from "lucide-react";

export default function ClimateServices() {
  return (
    <div className="pt-16 bg-slate-50 text-slate-900 overflow-hidden">

      {/* HERO */}
      <section className="relative py-32 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 via-slate-50 to-slate-50" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 text-slate-900"
          >
            Climate Projects
          </motion.h1>
          <p className="text-xl md:text-2xl font-semibold text-emerald-700 mb-6">
            Where science meets action. Where ambition meets accountability.
          </p>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed max-w-4xl mx-auto">
            The climate emergency demands more than pledges: it demands projects. Real, verified, measurable reductions in emissions. At Ecoveda Climate, we design, develop and deliver high-integrity climate projects that generate durable environmental outcomes and credible carbon assets. From the first idea to the last credit, we are with you at every step of the journey.
            <br/><br/>
            Our work spans continents, ecosystems and methodologies. We bring together ecological science, financial structuring, regulatory expertise and carbon market intelligence to turn climate ambition into certified, tradeable results.
          </p>
        </div>
      </section>

      {/* WORKING WITH US */}
      <section className="py-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-5">
            <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-2 block">Working With Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">A Partner Built for the Long Game</h2>
            <p className="mt-6 text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Climate project development is not a sprint, it is a multi-year commitment requiring tenacity, technical excellence and deep market relationships. Ecoveda Climate was built to serve as a long-term partner to governments, landowners, corporations, project developers, and indigenous communities navigating this landscape.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-4 text-emerald-700">End-to-End Expertise</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                From project identification and feasibility through validation, MRV and carbon credit sales, we cover the full cycle so you never need to piece together multiple advisors.
              </p>
            </div>
            <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-4 text-emerald-700">Market-Grade Rigour</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Every project we touch is built to the highest integrity standards. Our team combines field science with financial discipline to create assets that earn and sustain buyer trust.
              </p>
            </div>
            <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-4 text-emerald-700">Aligned Incentives</h3>
              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                We succeed when your project succeeds. Our engagement models are designed to align our interests with yours, whether you are a first-time developer or a seasoned operator scaling a portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FIVE-PHASE FRAMEWORK */}
      <section className="py-10 border-t border-slate-200 bg-slate-100/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-5">
            <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-2 block">Developing Climate Projects</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Five-Phase Project Development Framework</h2>
            <p className="mt-6 text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Successful climate projects do not happen by accident. They are built through a structured, disciplined process that accounts for scientific complexity, regulatory requirements, community dynamics, and market realities. Our proprietary five-phase framework ensures nothing is left to chance.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                num: "01",
                title: "Identification: Project Screening And Origination",
                points: ["Opportunity mapping", "Site assessment", "Baseline analysis", "Feasibility scoring"]
              },
              {
                num: "02",
                title: "Design: Technical And Financial Assessment",
                points: ["Registry and Methodology selection", "Carbon quantification modelling", "Financial structuring", "Institutional arrangements and partnerships"]
              },
              {
                num: "03",
                title: "Advisory: Strategy And Capacity Building",
                points: ["Carbon market review", "Article 6 implementation", "Host country technical assistance", "Stakeholder capacity building"]
              },
              {
                num: "04",
                title: "Development: Validation, MRV And Operations",
                points: ["Third-party validation", "Project registration", "Monitoring, reporting and verification (MRV)", "Management & operations"]
              },
              {
                num: "05",
                title: "Commercialisation: Market Access",
                points: ["Long-term offtake agreements", "Carbon credit sales and marketing", "Buyer matching and negotiation", "Portfolio optimisation"]
              }
            ].map((phase, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 p-6 md:p-5 border border-slate-200 rounded-xl bg-white shadow-sm hover:border-emerald-300 transition">
                <div className="md:w-1/3 xl:w-1/4">
                  <div className="text-5xl font-extrabold text-slate-200 mb-2">{phase.num}</div>
                  <h3 className="text-xl font-bold text-emerald-700 leading-snug">{phase.title.split(':')[0]}</h3>
                  <div className="text-slate-700 font-semibold mt-2">{phase.title.split(':')[1]}</div>
                </div>
                <div className="md:w-2/3 xl:w-3/4 flex items-center">
                  <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 w-full">
                    {phase.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="text-emerald-500 shrink-0 w-5 h-5 mt-0.5" />
                        <span className="text-slate-600 text-sm md:text-base">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPES OF PROJECTS */}
      <section className="py-10 border-t border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-5">
            <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-2 block">Types of Projects</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Where We Work Across the Carbon Landscape</h2>
            <p className="mt-6 text-slate-600 max-w-3xl mx-auto leading-relaxed">
              The carbon market is expanding rapidly across ecosystems, technologies and geographies. Ecoveda Climate provides consultancy across three interconnected domains, each critical to achieving net-zero at scale.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-5">
            {/* NCS */}
            <div className="relative p-5 rounded-xl overflow-hidden group hover:shadow-xl transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1511497584788-876760111969"
                alt="Natural Climate Solutions"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                loading="lazy" decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-slate-900/60" />
              <div className="relative z-10">
                <Globe className="w-12 h-12 text-emerald-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-white">Natural Climate Solutions (NCS)</h3>
                <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                  Nature holds extraordinary power to absorb and store carbon. Our NCS practice helps project developers unlock the full potential of ecosystems as living carbon infrastructure, with rigorous science and genuine co-benefits for biodiversity and communities.
                </p>
                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex flex-col"><span className="text-emerald-400 font-bold mb-1">ARR</span> Afforestation, Reforestation and Revegetation</li>
                  <li className="flex flex-col"><span className="text-emerald-400 font-bold mb-1">REDD+</span> Reducing Emissions from Deforestation & Degradation</li>
                  <li className="flex flex-col"><span className="text-emerald-400 font-bold mb-1">WRC</span> Wetland Restoration and Conservation</li>
                  <li className="flex flex-col"><span className="text-emerald-400 font-bold mb-1">ALM</span> Sustainable Agricultural Land Management</li>
                  <li className="flex flex-col"><span className="text-emerald-400 font-bold mb-1">IFM</span> Improved Forest Management</li>
                </ul>
              </div>
            </div>

            {/* CDR */}
            <div className="relative p-5 rounded-xl overflow-hidden group hover:shadow-xl transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Carbon Dioxide Removal"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                loading="lazy" decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-slate-900/60" />
              <div className="relative z-10">
                <ShieldCheck className="w-12 h-12 text-emerald-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-white">Carbon Dioxide Removal (CDR)</h3>
                <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                  As the world recognises that emission reductions alone cannot achieve 1.5°C, engineered and enhanced removal pathways are gaining critical importance. We help CDR technology developers navigate methodologies, markets, and commercialisation.
                </p>
                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex flex-col"><span className="text-emerald-400 font-bold mb-1">Biochar:</span> Converting organic waste into stable carbon stored for centuries in soils.</li>
                  <li className="flex flex-col"><span className="text-emerald-400 font-bold mb-1">ERW:</span> Enhanced Rock Weathering, applying crushed silicate rock to agricultural lands.</li>
                  <li className="flex flex-col"><span className="text-emerald-400 font-bold mb-1">DAC:</span> Direct Air Capture of CO2 directly from the atmosphere.</li>
                </ul>
              </div>
            </div>

            {/* Energy */}
            <div className="relative p-5 rounded-xl overflow-hidden group hover:shadow-xl transition duration-300">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276"
                alt="Energy and Industry"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
                loading="lazy" decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-slate-900/60" />
              <div className="relative z-10">
                <Zap className="w-12 h-12 text-emerald-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-white">Energy & Industry</h3>
                <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                  The energy transition requires deep decarbonisation of power systems, industrial processes and waste streams. Our energy and industry practice supports project developers delivering measurable emissions reductions through proven technologies.
                </p>
                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex flex-col"><span className="text-emerald-400 font-bold mb-1">Renewables:</span> Solar, wind, hydro and geothermal projects.</li>
                  <li className="flex flex-col"><span className="text-emerald-400 font-bold mb-1">Energy Efficiency:</span> Industrial, commercial and residential efficiency.</li>
                  <li className="flex flex-col"><span className="text-emerald-400 font-bold mb-1">Biogas:</span> Capturing methane from agricultural and organic waste.</li>
                  <li className="flex flex-col"><span className="text-emerald-400 font-bold mb-1">Waste Management:</span> Landfill gas capture and waste-to-energy.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REGISTRIES */}
      <section className="py-10 border-t border-slate-200 bg-gradient-to-b from-slate-100 to-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-6">
            <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-2 block">05 · Registries We Work With</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Credibility Starts With the Right Standard</h2>
            <p className="mt-4 text-slate-600 leading-relaxed text-lg">
              The integrity of a carbon credit is only as strong as the standard it is certified against. Ecoveda Climate works across the full spectrum of leading voluntary and compliance carbon standards.
            </p>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-lg">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="p-6 font-bold text-emerald-700 tracking-wider">REGISTRY</th>
                  <th className="p-6 font-bold text-emerald-700 tracking-wider">STANDARDS</th>
                </tr>
              </thead>
              <tbody className="text-sm md:text-base text-slate-800">
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition">
                  <td className="p-6 font-bold text-slate-900">VERRA</td>
                  <td className="p-6 text-slate-600 space-y-1">
                    <div>Verified Carbon Standard</div>
                    <div>Climate, Community and Biodiversity Standard</div>
                    <div>Sustainable Development Verified Impact Standard</div>
                  </td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition">
                  <td className="p-6 font-bold text-slate-900">Gold Standard</td>
                  <td className="p-6 text-slate-600">GS4GG</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition">
                  <td className="p-6 font-bold text-slate-900">International Carbon Registry (ICR)</td>
                  <td className="p-6 text-slate-600">-</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition">
                  <td className="p-6 font-bold text-slate-900">Cercarbono</td>
                  <td className="p-6 text-slate-600">-</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition">
                  <td className="p-6 font-bold text-slate-900">Global Carbon Council (GCC)</td>
                  <td className="p-6 text-slate-600">-</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition">
                  <td className="p-6 font-bold text-slate-900">Plan Vivo</td>
                  <td className="p-6 text-slate-600">PV Standard</td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="p-6 font-bold text-slate-900">Climate Action Reserve (CAR)</td>
                  <td className="p-6 text-slate-600">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* HIGH INTEGRITY FRAMEWORK */}
      <section className="py-10 border-t border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-5">
            <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-2 block">Ecoveda Climate's High Integrity Framework</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Integrity Is Not a Feature. It Is the Foundation.</h2>
            <p className="mt-6 text-slate-600 max-w-4xl mx-auto leading-relaxed text-lg">
              In a market where credit quality controversies have shaken buyer confidence, Ecoveda Climate stands apart. Our High Integrity Framework is a set of non-negotiable principles that govern every project we touch. We believe that the voluntary carbon market’s most urgent challenge is not scale, it is credibility. Every project we develop or advise on is held to a standard that goes beyond certification.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-6">
            <div className="p-5 bg-white border border-slate-200 rounded-xl hover:border-emerald-400 hover:shadow-md transition">
              <BarChart3 className="w-10 h-10 text-emerald-600 mb-6" />
              <h3 className="text-xl font-bold mb-6 text-slate-900">Scientific Rigour</h3>
              <ul className="space-y-4 text-slate-600 text-sm md:text-base">
                <li className="flex gap-3"><span className="text-emerald-600">›</span> Conservative baselines</li>
                <li className="flex gap-3"><span className="text-emerald-600">›</span> Peer-reviewed methodology selection</li>
                <li className="flex gap-3"><span className="text-emerald-600">›</span> Independent MRV with zero tolerance for manipulation</li>
                <li className="flex gap-3"><span className="text-emerald-600">›</span> Permanence and leakage accounted for in every model</li>
              </ul>
            </div>
            <div className="p-5 bg-white border border-slate-200 rounded-xl hover:border-emerald-400 hover:shadow-md transition">
              <Users className="w-10 h-10 text-emerald-600 mb-6" />
              <h3 className="text-xl font-bold mb-6 text-slate-900">Social Equity</h3>
              <ul className="space-y-4 text-slate-600 text-sm md:text-base">
                <li className="flex gap-3"><span className="text-emerald-600">›</span> Free, prior and informed consent (FPIC) of communities</li>
                <li className="flex gap-3"><span className="text-emerald-600">›</span> Benefit-sharing mechanisms built into project design</li>
                <li className="flex gap-3"><span className="text-emerald-600">›</span> Gender-inclusive stakeholder engagement</li>
                <li className="flex gap-3"><span className="text-emerald-600">›</span> Protection of indigenous rights and tenure</li>
              </ul>
            </div>
            <div className="p-5 bg-white border border-slate-200 rounded-xl hover:border-emerald-400 hover:shadow-md transition">
              <Scale className="w-10 h-10 text-emerald-600 mb-6" />
              <h3 className="text-xl font-bold mb-6 text-slate-900">Transparent Governance</h3>
              <ul className="space-y-4 text-slate-600 text-sm md:text-base">
                <li className="flex gap-3"><span className="text-emerald-600">›</span> Full project documentation available to buyers</li>
                <li className="flex gap-3"><span className="text-emerald-600">›</span> Real-time monitoring dashboards where applicable</li>
                <li className="flex gap-3"><span className="text-emerald-600">›</span> Third-party audits at every verification cycle</li>
                <li className="flex gap-3"><span className="text-emerald-600">›</span> Zero tolerance for double-counting or double-claiming</li>
              </ul>
            </div>
            <div className="p-5 bg-white border border-slate-200 rounded-xl hover:border-emerald-400 hover:shadow-md transition">
              <FileText className="w-10 h-10 text-emerald-600 mb-6" />
              <h3 className="text-xl font-bold mb-6 text-slate-900">Market Alignment</h3>
              <ul className="space-y-4 text-slate-600 text-sm md:text-base">
                <li className="flex gap-3"><span className="text-emerald-600">›</span> VCMI, ICVCM Core Carbon Principles alignment</li>
                <li className="flex gap-3"><span className="text-emerald-600">›</span> Article 6 corresponding adjustment readiness</li>
                <li className="flex gap-3"><span className="text-emerald-600">›</span> Buyer-grade documentation and disclosure</li>
                <li className="flex gap-3"><span className="text-emerald-600">›</span> Long-term credit quality and price stability focus</li>
              </ul>
            </div>
          </div>

          <div className="text-center p-5 border border-emerald-200 rounded-xl bg-emerald-50 text-emerald-900 max-w-4xl mx-auto font-medium text-lg">
            The High Integrity Framework is not a marketing statement. It is an operational commitment embedded in our due diligence checklists, our project agreements and our team’s day-to-day decisions.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center border-t border-slate-200 bg-slate-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-5 text-slate-900">Ready to Build Something That Lasts?</h2>
          <p className="text-slate-700 mb-6 leading-relaxed text-lg max-w-3xl mx-auto">
            Whether you are a landowner exploring your first NCS project, a corporation building a credible carbon procurement strategy, a government designing Article 6 frameworks or an investor seeking high-integrity climate assets, we want to hear from you.
            <br/><br/>
            Climate action at the scale the planet needs requires collaboration between science, finance, policy, and communities. Ecoveda Climate exists at the intersection of all four.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-5">
            <div className="text-left bg-white p-5 rounded-2xl border border-slate-200 shadow-sm md:w-1/2 hover:shadow-md transition group">
              <h3 className="font-bold text-2xl mb-3 text-emerald-700">Start a Conversation</h3>
              <p className="text-base text-slate-600 mb-5">Tell us about your project idea, your organisation’s climate goals or the challenge you are trying to solve. Our team will respond within 48 hours.</p>
              <Link to="/contact" className="inline-block px-8 py-3 bg-emerald-600 rounded-lg text-base font-bold hover:bg-emerald-700 transition w-full text-center text-white shadow-md">
                Send Us a Message
              </Link>
            </div>
            
            <div className="text-left bg-white p-5 rounded-2xl border border-slate-200 shadow-sm md:w-1/2 hover:shadow-md transition group">
              <h3 className="font-bold text-2xl mb-3 text-emerald-700">Request a Project Assessment</h3>
              <p className="text-base text-slate-600 mb-5">Have a specific site or project in mind? Request a no-obligation preliminary assessment from our technical team. We will evaluate the potential.</p>
              <Link to="/contact" className="inline-block px-8 py-3 border border-emerald-600 text-emerald-700 rounded-lg text-base font-bold hover:bg-emerald-50 transition w-full text-center">
                Request Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}



