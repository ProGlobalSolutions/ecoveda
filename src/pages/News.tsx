import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, CalendarDays, Newspaper, Sparkles, TrendingUp, X } from "lucide-react";
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

This process not only reduces reliance on chemical fertilizers, which are heavily carbon-intensive to produce and deploy, but also creates a self-sustaining loop of organic matter regeneration. As part of our ongoing commitment to nature-based solutions, Ecoveda Climate is working closely with local agricultural communities to deploy vermicomposting at scale. These initiatives are projected to significantly lower agricultural emissions and generate high-quality carbon credits.`,
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
    desc: "The idea of a circular economy has gained popularity recently as people look for more environmentally friendly ways to manage waste and resources in their",
    content: `The idea of a circular economy has gained popularity recently as people look for more environmentally friendly ways to manage waste and resources in their daily lives and across major industrial sectors. Unlike the traditional linear economy, which follows a "take, make, dispose" model, the circular economy focuses on designing out waste.

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

Ecoveda Climate's portfolio heavily prioritizes these high-integrity nature-based projects. By aligning ecological restoration with the economic interests of indigenous and local communities, we ensure that conservation efforts are self-sustaining over the long term. Embracing NBS is fundamental to achieving global net-zero targets and building a truly resilient future.`,
    image: news5,
  },
  {
    id: 6,
    title: "The Ripple Effect: How Carbon Credits Create a Wave of Change",
    desc: "In our quest for a sustainable future, every action we take, no matter how small, sends ripples through the fabric of our planet. One such",
    content: `In our quest for a sustainable future, every action we take, no matter how small, sends ripples through the fabric of our planet. One such powerful mechanism is the use of high-quality carbon credits. While often viewed simply as a corporate compliance tool, the true impact of a carbon credit extends far beyond offsetting emissions.

When capital is channeled into premium carbon projects, it triggers a cascading effect of positive change. It funds the planting of native trees, protects endangered wildlife habitats, provides clean cooking solutions to rural families, and creates sustainable green jobs.

At Ecoveda Climate, we measure the success of our carbon credits not just in tonnes of CO2 equivalent removed or reduced, but by the tangible socio-economic improvements experienced by the communities we partner with. This ripple effect ensures that climate finance addresses systemic inequalities alongside environmental degradation.`,
    image: news6,
  },
  {
    id: 7,
    title: "Embarking on the Biochar Adventure: A Sustainable Triumph for Our Ecoveda Family",
    desc: "Hold onto your hats because we've got something truly thrilling to share with you. Today, let's dive deep into the enchanting world of Biochar",
    content: `Hold onto your hats because we've got something truly thrilling to share with you. Today, let's dive deep into the enchanting world of Biochar, a revolutionary climate solution that sounds like magic but is rooted in ancient agricultural science.

Biochar is a highly porous, stable form of carbon produced by super-heating biomass waste in the absence of oxygen (a process called pyrolysis). When applied to soil, biochar acts like a sponge, retaining water and nutrients while locking away carbon for hundreds, if not thousands, of years.

The Ecoveda family has recently launched a major biochar initiative aimed at converting massive amounts of agricultural residue, which would otherwise be burned and release toxic smoke, into this valuable resource. This project is a sustainable triumph, showcasing how innovative technology can simultaneously solve waste management, soil degradation, and atmospheric carbon accumulation.`,
    image: news7,
  },
  {
    id: 8,
    title: "Plastic Credits : A Catalyst For Sustainability",
    desc: "Plastic pollution has become one of the most pressing environmental challenges of our time, with devastating effects on our planet and unsustainable practices threatening the",
    content: `Plastic pollution has become one of the most pressing environmental challenges of our time, with devastating effects on our planet and unsustainable practices threatening the health of our oceans and terrestrial ecosystems. In response, plastic credits have emerged as a vital market-based catalyst for sustainability.

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

function getItemCategory(title: string) {
  const lowered = title.toLowerCase();

  if (lowered.includes("market") || lowered.includes("credit")) {
    return "Market";
  }

  if (lowered.includes("blueprint") || lowered.includes("policy")) {
    return "Policy";
  }

  if (lowered.includes("family") || lowered.includes("partner")) {
    return "Partnerships";
  }

  return "Projects";
}

function getItemDate(id: number) {
  return new Date(2025, 10 - (id % 12), 15 - (id % 15)).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function News() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedStory, setSelectedStory] = useState<(typeof NEWS_ITEMS)[number] | null>(null);

  const filteredNews = useMemo(() => {
    return NEWS_ITEMS.filter((item) => {
      if (activeFilter === "All") {
        return true;
      }

      return getItemCategory(item.title) === activeFilter;
    });
  }, [activeFilter]);

  const featuredStory = filteredNews[0] ?? NEWS_ITEMS[0];
  const spotlightStories = filteredNews.slice(1, 3);
  const gridStories = filteredNews.slice(3);

  useEffect(() => {
    if (!selectedStory) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedStory]);

  return (
    <div className="min-h-screen bg-slate-50 pt-16 text-slate-900">
      <section className="relative overflow-hidden bg-[#012A24]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(52,211,153,0.22),transparent_34%),radial-gradient(circle_at_85%_20%,rgba(250,204,21,0.12),transparent_24%)]" />
        <div className="absolute left-[-120px] top-12 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute bottom-[-100px] right-0 h-72 w-72 rounded-full bg-yellow-300/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.8fr)] lg:items-end lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200 backdrop-blur-md">
              <Newspaper className="h-4 w-4" />
              Newsroom
            </div>

            <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
              Climate intelligence, project momentum, and market signals in one place.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/72 md:text-xl">
              Explore the latest project updates, market commentary, and strategic developments shaping how climate action gets financed, delivered, and scaled.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
          >
            {[
              { label: "Stories Published", value: NEWS_ITEMS.length.toString().padStart(2, "0") },
              { label: "Core Themes", value: `${FILTERS.length - 1}` },
              { label: "Editorial Focus", value: "High Integrity" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur-md"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-emerald-200/80">{stat.label}</p>
                <p className="mt-3 text-2xl font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 -mt-10 px-6">
        <div className="mx-auto max-w-7xl rounded-[32px] border border-emerald-900/10 bg-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.08)] md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
                Refine Feed
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900 md:text-3xl">
                Browse news by theme
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">
              {FILTERS.map((filter) => {
                const count =
                  filter === "All"
                    ? NEWS_ITEMS.length
                    : NEWS_ITEMS.filter((item) => getItemCategory(item.title) === filter).length;

                return (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                      activeFilter === filter
                        ? "border-[#012A24] bg-[#012A24] text-white shadow-[0_14px_30px_rgba(1,42,36,0.22)]"
                        : "border-slate-200 bg-slate-50 text-slate-700 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
                    }`}
                  >
                    {filter}
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                        activeFilter === filter ? "bg-white/15 text-white" : "bg-white text-slate-500"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:py-16">
        {filteredNews.length > 0 ? (
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.7fr)]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <button
                type="button"
                onClick={() => setSelectedStory(featuredStory)}
                className="group block h-full w-full text-left"
              >
                <article className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(15,23,42,0.12)]">
                  <div className="relative h-[360px] overflow-hidden md:h-[420px]">
                    <img
                      src={featuredStory.image}
                      alt={featuredStory.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/35 to-transparent" />
                    <div className="absolute left-6 top-6 flex flex-wrap gap-3">
                      <span className="rounded-full border border-white/15 bg-[#012A24]/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-200 backdrop-blur-md">
                        Featured Story
                      </span>
                      <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                        {getItemCategory(featuredStory.title)}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
                      <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-white/72">
                        <CalendarDays className="h-4 w-4" />
                        {getItemDate(featuredStory.id)}
                      </div>
                      <h2 className="max-w-3xl text-2xl font-bold leading-tight md:text-4xl">
                        {featuredStory.title}
                      </h2>
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    <p className="max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
                      {featuredStory.desc}
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-emerald-700">
                      Read Full Story
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              </button>
            </motion.div>

            <div className="grid gap-6">
              {spotlightStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedStory(story)}
                    className="group block h-full w-full text-left"
                  >
                    <article className="grid h-full gap-4 overflow-hidden rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(15,23,42,0.1)] sm:grid-cols-[150px_minmax(0,1fr)]">
                      <div className="relative h-48 overflow-hidden rounded-2xl sm:h-full">
                        <img
                          src={story.image}
                          alt={story.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>

                      <div className="flex flex-col justify-between py-1">
                        <div>
                          <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                            <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">
                              {getItemCategory(story.title)}
                            </span>
                            <span>{getItemDate(story.id)}</span>
                          </div>
                          <h3 className="text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-emerald-700">
                            {story.title}
                          </h3>
                          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-slate-600">
                            {story.desc}
                          </p>
                        </div>

                        <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition-colors group-hover:text-emerald-700">
                          Explore Story
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </article>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        ) : (
          <div className="rounded-[28px] border border-slate-200 bg-white px-6 py-14 text-center shadow-sm">
            <p className="text-lg font-semibold text-slate-900">No news items found for this category.</p>
            <p className="mt-2 text-slate-500">Try another theme to explore more updates.</p>
          </div>
        )}
      </section>

      <section className="bg-[#012A24] py-14">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">
              <TrendingUp className="h-4 w-4" />
              Market Pulse
            </div>
            <h2 className="mt-5 text-3xl font-bold leading-tight text-white md:text-4xl">
              News designed around what clients, partners, and project teams actually need to track.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="grid gap-4 sm:grid-cols-3"
          >
            {[
              "Project-led updates with real climate context",
              "Clear market themes across policy, projects, and partnerships",
              "Stronger visual hierarchy for faster reading",
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-white/8 p-5 backdrop-blur-md">
                <Sparkles className="h-5 w-5 text-emerald-300" />
                <p className="mt-4 text-sm leading-relaxed text-white/78">{item}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:py-16">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
              More Stories
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
              Explore the full newsroom
            </h2>
          </div>
          <p className="max-w-2xl text-slate-500">
            A more flexible, card-based feed makes the page easier to scan and brings the strongest stories forward.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {gridStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <button
                type="button"
                onClick={() => setSelectedStory(story)}
                className="group block h-full w-full text-left"
              >
                <article className="flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(15,23,42,0.1)]">
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 to-transparent" />
                    <div className="absolute left-5 top-5">
                      <span className="rounded-full border border-white/15 bg-[#012A24]/90 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-200">
                        {getItemCategory(story.title)}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-slate-500">
                      <CalendarDays className="h-4 w-4 text-emerald-600" />
                      {getItemDate(story.id)}
                    </div>
                    <h3 className="text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-emerald-700">
                      {story.title}
                    </h3>
                    <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-slate-600">
                      {story.desc}
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-slate-900 transition-colors group-hover:text-emerald-700">
                      Read Story
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </article>
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedStory && (
          <motion.div
            className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedStory(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.96 }}
              transition={{ duration: 0.28 }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-[32px] bg-white shadow-[0_28px_80px_rgba(15,23,42,0.35)]"
            >
              <button
                type="button"
                onClick={() => setSelectedStory(null)}
                className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-slate-950/65 text-white transition hover:bg-slate-950"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid max-h-[90vh] overflow-y-auto lg:grid-cols-[minmax(320px,0.9fr)_minmax(0,1.1fr)]">
                <div className="relative min-h-[280px] lg:min-h-full">
                  <img
                    src={selectedStory.image}
                    alt={selectedStory.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/35 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
                    <div className="mb-3 flex flex-wrap gap-3">
                      <span className="rounded-full border border-white/15 bg-[#012A24]/90 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-emerald-200">
                        {getItemCategory(selectedStory.title)}
                      </span>
                      <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
                        News Release
                      </span>
                    </div>
                    <h2 className="max-w-xl text-2xl font-bold leading-tight md:text-4xl">
                      {selectedStory.title}
                    </h2>
                  </div>
                </div>

                <div className="flex flex-col p-6 md:p-8 lg:p-10">
                  <div className="mb-6 flex flex-wrap items-center gap-4 border-b border-slate-200 pb-5 text-sm font-medium text-slate-500">
                    <div className="inline-flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 text-emerald-600" />
                      Published on {getItemDate(selectedStory.id)}
                    </div>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">
                      {getItemCategory(selectedStory.title)}
                    </span>
                  </div>

                  <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                    {selectedStory.desc}
                  </p>

                  <div className="mt-6 whitespace-pre-line text-base leading-relaxed text-slate-700 md:text-lg">
                    {selectedStory.content}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
