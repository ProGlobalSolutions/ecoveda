import { useState } from "react";
import { Link } from "react-router-dom";
import news1 from "../assets/news1.png";
import news2 from "../assets/news2.webp";
import news3 from "../assets/news3.webp";
import news4 from "../assets/news4.webp";
import news5 from "../assets/news5.webp";
import news6 from "../assets/news6.webp";
import news7 from "../assets/news7.webp";
import news8 from "../assets/news8.webp";
import news9 from "../assets/news9.webp";

export const NEWS_ITEMS = [
  {
    id: 1,
    title: "Understanding the Carbon Nexus: The Role of Vermicomposting in Sustainable Agriculture",
    desc: "Across India, a combination of farming practices having adverse environmental effects is causing a detrimental impact on soil, water, and air quality. Additionally, these practices",
    content: `Across India, a combination of farming practices having adverse environmental effects is causing a detrimental impact on soil, water, and air quality. Additionally, these practices have led to the rapid depletion of natural soil carbon and essential nutrients. 

To combat this, sustainable agriculture methods such as vermicomposting are taking center stage. By leveraging earthworms to convert organic waste into nutrient-rich fertilizer, farmers can organically restore soil health while actively sequestering carbon. 

This process not only reduces reliance on chemical fertilizers—which are heavily carbon-intensive to produce and deploy—but also creates a self-sustaining loop of organic matter regeneration. As part of our ongoing commitment to nature-based solutions, Ecoveda Climate is working closely with local agricultural communities to deploy vermicomposting at scale. These initiatives are projected to significantly lower agricultural emissions and generate high-quality carbon credits.`,
    image: news1,
  },
  {
    id: 2,
    title: "The Future of Carbon Markets: Overcoming Barriers to Climate Action",
    desc: "The urgency of climate change has never been clearer, yet the path to meaningful decarbonization remains fraught with obstacles. The global carbon market, which plays",
    content: `The urgency of climate change has never been clearer, yet the path to meaningful decarbonization remains fraught with obstacles. The global carbon market, which plays a pivotal role in bridging the financing gap for climate action, has faced intense scrutiny over verification, permanence, and equitable distribution of funds.

However, the future of these markets is highly promising as new regulatory frameworks and advanced digital MRV (Measurement, Reporting, and Verification) technologies come online. By utilizing satellite imagery, IoT sensors, and blockchain ledger systems, the next generation of carbon markets will offer unprecedented transparency.

Ecoveda Climate is at the forefront of this transition, ensuring that every carbon credit generated through our projects is robust, highly verified, and directly contributes to tangible environmental and social co-benefits. As compliance and voluntary markets continue to merge, addressing these barriers will unlock billions in vital climate finance.`,
    image: news2,
  },
  {
    id: 3,
    title: "Waste to Resource Conversion for a Sustainable Future: The Circular Economy",
    desc: "The idea of a “circular economy” has gained popularity recently as people look for more environmentally friendly ways to manage waste and resources in their",
    content: `The idea of a “circular economy” has gained popularity recently as people look for more environmentally friendly ways to manage waste and resources in their daily lives and across major industrial sectors. Unlike the traditional linear economy—which follows a "take, make, dispose" model—the circular economy focuses on designing out waste.

By keeping materials in use for as long as possible and regenerating natural systems, we can drastically reduce greenhouse gas emissions associated with manufacturing and waste decomposition. Ecoveda Climate is championing waste-to-resource initiatives that transform municipal and agricultural waste into clean energy, biochar, and reusable materials.

These projects not only mitigate methane emissions from landfills but also provide marginalized communities with new economic opportunities. The transition to a circular economy is no longer just an environmental imperative; it is a profound economic opportunity to decouple growth from resource consumption.`,
    image: news3,
  },
  {
    id: 4,
    title: "Understanding the Carbon Nexus: The Role of Vermicomposting in Sustainable Agriculture",
    desc: "Understanding the Carbon Nexus: The Role of Vermicomposting in Sustainable Agriculture Across India, a combination of farming practices having adverse environmental effects is causing a",
    content: `Understanding the Carbon Nexus: The Role of Vermicomposting in Sustainable Agriculture. Across India, a combination of farming practices having adverse environmental effects is causing a severe degradation of arable land. The heavy reliance on synthetic inputs has broken the natural carbon cycle within the soil ecosystem.

Vermicomposting serves as a critical intervention. This biological process uses specific earthworm species to rapidly digest agricultural waste, producing a highly potent, carbon-rich compost. When introduced back into the soil, it improves water retention, microbial activity, and carbon sequestration rates.

Through targeted workshops and financial support, Ecoveda Climate is helping farmers transition from extractive practices to regenerative agriculture. This shift is crucial for building climate resilience, ensuring food security, and creating verified nature-based carbon offsets that benefit both the planet and local economies.`,
    image: news4,
  },
  {
    id: 5,
    title: "Embracing Nature-Based Solutions: Building a Sustainable Future",
    desc: "As we navigate the challenges of a rapidly changing world, it is crucial to explore innovative approaches that harmonize with nature. Nature-based solutions (NBS) emerge",
    content: `As we navigate the challenges of a rapidly changing world, it is crucial to explore innovative approaches that harmonize with nature. Nature-based solutions (NBS) emerge as one of the most effective and scalable methods for combating the climate crisis while simultaneously protecting global biodiversity.

NBS encompass a wide range of activities, including afforestation, reforestation, mangrove restoration, and the protection of crucial peatlands. These ecosystems are natural carbon sinks, capable of absorbing vast amounts of CO2 from the atmosphere if properly managed and protected.

Ecoveda Climate’s portfolio heavily prioritizes these high-integrity nature-based projects. By aligning ecological restoration with the economic interests of indigenous and local communities, we ensure that conservation efforts are self-sustaining over the long term. Embracing NBS is fundamental to achieving global net-zero targets and building a truly resilient future.`,
    image: news5,
  },
  {
    id: 6,
    title: "The Ripple Effect: How Carbon Credits Create a Wave of Change",
    desc: "In our quest for a sustainable future, every action we take, no matter how small, sends ripples through the fabric of our planet. One such",
    content: `In our quest for a sustainable future, every action we take, no matter how small, sends ripples through the fabric of our planet. One such powerful mechanism is the use of high-quality carbon credits. While often viewed simply as a corporate compliance tool, the true impact of a carbon credit extends far beyond offsetting emissions.

When capital is channeled into premium carbon projects, it triggers a cascading effect of positive change. It funds the planting of native trees, protects endangered wildlife habitats, provides clean cooking solutions to rural families, and creates sustainable green jobs.

At Ecoveda Climate, we measure the success of our carbon credits not just in tonnes of CO2 equivalent removed or reduced, but by the tangible socio-economic improvements experienced by the communities we partner with. This "ripple effect" ensures that climate finance addresses systemic inequalities alongside environmental degradation.`,
    image: news6,
  },
  {
    id: 7,
    title: "Embarking on the Biochar Adventure: A Sustainable Triumph for Our Ecoveda Family",
    desc: "Hold onto your hats because we’ve got something truly thrilling to share with you! Today, let’s dive deep into the enchanting world of Biochar –",
    content: `Hold onto your hats because we’ve got something truly thrilling to share with you! Today, let’s dive deep into the enchanting world of Biochar – a revolutionary climate solution that sounds like magic but is rooted in ancient agricultural science. 

Biochar is a highly porous, stable form of carbon produced by super-heating biomass waste in the absence of oxygen (a process called pyrolysis). When applied to soil, biochar acts like a sponge, retaining water and nutrients while locking away carbon for hundreds, if not thousands, of years.

The Ecoveda Family has recently launched a major biochar initiative aimed at converting massive amounts of agricultural residue—which would otherwise be burned and release toxic smoke—into this valuable resource. This project is a sustainable triumph, showcasing how innovative technology can simultaneously solve waste management, soil degradation, and atmospheric carbon accumulation.`,
    image: news7,
  },
  {
    id: 8,
    title: "Plastic Credits : A Catalyst For Sustainability",
    desc: "Plastic pollution has become one of the most pressing environmental challenges of our time, with devastating effects on our planet and unsustainable practices threatening the",
    content: `Plastic pollution has become one of the most pressing environmental challenges of our time, with devastating effects on our planet and unsustainable practices threatening the health of our oceans and terrestrial ecosystems. In response, Plastic Credits have emerged as a vital market-based catalyst for sustainability.

Similar to carbon credits, a plastic credit represents a specific amount of plastic waste that has been successfully collected and sustainably recycled or managed from the environment. This system provides critical funding to waste management infrastructure in developing regions where it is needed most.

Ecoveda Climate is actively exploring and integrating plastic crediting mechanisms to help corporations neutralize their plastic footprint. By incentivizing the cleanup of legacy plastic waste and funding the transition to circular packaging, plastic credits are proving to be an essential tool in turning the tide against global pollution.`,
    image: news8,
  },
  {
    id: 9,
    title: "Catalysing Global Transformation: A Strategic Blueprint for Climate Resilience and Net-Zero Impact",
    desc: "The urgency of addressing the perilous trajectory of greenhouse-gas emissions demands a profound re-evaluation of our prevailing models of land and energy use. A historical",
    content: `The urgency of addressing the perilous trajectory of greenhouse-gas emissions demands a profound re-evaluation of our prevailing models of land and energy use. A historical reliance on fossil fuels and extractive agricultural practices has pushed planetary boundaries to their limits.

To catalyze global transformation, Ecoveda Climate has developed a comprehensive strategic blueprint for building climate resilience and achieving true net-zero impact. This blueprint integrates cutting-edge digital monitoring, robust nature-based carbon sequestration, and equitable community engagement models.

It emphasizes the necessity of moving beyond mere emission reductions to actively restoring ecological balance. By partnering with governments, private sector leaders, and local communities, we are deploying this blueprint across our global projects, ensuring that every initiative delivers measurable, verified, and permanent climate impact.`,
    image: news9,
  },
];

const FILTERS = ["All", "Policy", "Projects", "Partnerships", "Market"];

export default function News() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredNews = NEWS_ITEMS.filter((item) => {
    if (activeFilter === "All") return true;

    // Dynamically assign category based on content to avoid modifying the original array
    let itemCategory = "Projects"; // Default
    const title = item.title.toLowerCase();
    
    if (title.includes("market") || title.includes("credit")) {
      itemCategory = "Market";
    } else if (title.includes("blueprint") || title.includes("policy")) {
      itemCategory = "Policy";
    } else if (title.includes("family") || title.includes("partner")) {
      itemCategory = "Partnerships";
    }

    return itemCategory === activeFilter;
  });

  return (
    <div className="pt-24 min-h-screen bg-slate-50 text-slate-900">

      {/* HEADER */}
      <section className="px-6 md:px-10 max-w-5xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          News & Updates
        </h1>
        <p className="text-lg text-slate-500">
          Latest announcements, insights and global climate news.
        </p>
      </section>

      {/* FILTERS */}
      <section className="px-6 md:px-10 max-w-5xl mx-auto mb-16">
        <div className="flex flex-wrap gap-3">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors border ${
                activeFilter === f 
                  ? "bg-slate-900 text-white border-slate-900" 
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="px-6 md:px-10 max-w-5xl mx-auto pb-24">
        <div className="relative border-l border-slate-200 ml-4 md:ml-0 md:border-l-0">
          
          {/* Vertical line for desktop timeline */}
          <div className="hidden md:block absolute left-1/4 top-0 bottom-0 w-px bg-slate-200 -ml-px"></div>

          <div className="space-y-16">
            {filteredNews.length > 0 ? (
              filteredNews.map((item, idx) => (
                <div key={item.id} className="relative flex flex-col md:flex-row gap-8 md:gap-12 pl-8 md:pl-0 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  
                  {/* Timeline Dot (Mobile & Desktop) */}
                  <div className="absolute left-[-5px] top-2 md:left-1/4 md:-ml-[5px] md:top-6 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-slate-50"></div>

                  {/* Left: Date/Meta */}
                  <div className="md:w-1/4 pt-1 md:text-right md:pr-12">
                    <span className="text-emerald-600 font-bold uppercase tracking-widest text-xs block mb-1">
                      News Release
                    </span>
                    <span className="text-slate-500 text-sm font-medium">
                      {/* Simulated chronological dates based on item ID so it stays consistent across filters */}
                      {new Date(2025, 10 - (item.id % 12), 15 - (item.id % 15)).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </div>

                  {/* Right: Content Card */}
                  <div className="md:w-3/4">
                    <div className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-6">
                      <div className="w-full sm:w-1/3 h-48 sm:h-auto rounded-xl overflow-hidden shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h2 className="text-xl font-bold text-slate-900 mb-3 leading-snug group-hover:text-emerald-700 transition-colors">
                          <Link to={`/news/${item.id}`}>{item.title}</Link>
                        </h2>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                          {item.desc}
                        </p>
                        <Link to={`/news/${item.id}`} className="inline-flex items-center text-sm font-bold text-slate-800 hover:text-emerald-600 mt-auto">
                          Read Full Story <span className="ml-1">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>
              ))
            ) : (
              <div className="text-slate-500 py-10 md:pl-1/4">
                No news items found for this category.
              </div>
            )}
          </div>
        </div>

      </section>

    </div>
  );
}



