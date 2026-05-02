import news1 from "../assets/news1.png";
import news2 from "../assets/news2.webp";
import news3 from "../assets/news3.webp";
import news4 from "../assets/news4.webp";
import news5 from "../assets/news5.webp";
import news6 from "../assets/news6.webp";
import news7 from "../assets/news7.webp";
import news8 from "../assets/news8.webp";
import news9 from "../assets/news9.webp";

const NEWS_ITEMS = [
  {
    id: 1,
    title: "Understanding the Carbon Nexus: The Role of Vermicomposting in Sustainable Agriculture",
    desc: "Across India, a combination of farming practices having adverse environmental effects is causing a detrimental impact on soil, water, and air quality. Additionally, these practices",
    image: news1,
  },
  {
    id: 2,
    title: "The Future of Carbon Markets: Overcoming Barriers to Climate Action",
    desc: "The urgency of climate change has never been clearer, yet the path to meaningful decarbonization remains fraught with obstacles. The global carbon market, which plays",
    image: news2,
  },
  {
    id: 3,
    title: "Waste to Resource Conversion for a Sustainable Future: The Circular Economy",
    desc: "The idea of a “circular economy” has gained popularity recently as people look for more environmentally friendly ways to manage waste and resources in their",
    image: news3,
  },
  {
    id: 4,
    title: "Understanding the Carbon Nexus: The Role of Vermicomposting in Sustainable Agriculture",
    desc: "Understanding the Carbon Nexus: The Role of Vermicomposting in Sustainable Agriculture Across India, a combination of farming practices having adverse environmental effects is causing a",
    image: news4,
  },
  {
    id: 5,
    title: "Embracing Nature-Based Solutions: Building a Sustainable Future",
    desc: "As we navigate the challenges of a rapidly changing world, it is crucial to explore innovative approaches that harmonize with nature. Nature-based solutions (NBS) emerge",
    image: news5,
  },
  {
    id: 6,
    title: "The Ripple Effect: How Carbon Credits Create a Wave of Change",
    desc: "In our quest for a sustainable future, every action we take, no matter how small, sends ripples through the fabric of our planet. One such",
    image: news6,
  },
  {
    id: 7,
    title: "Embarking on the Biochar Adventure: A Sustainable Triumph for Our Ecoveda Family",
    desc: "Hold onto your hats because we’ve got something truly thrilling to share with you! Today, let’s dive deep into the enchanting world of Biochar –",
    image: news7,
  },
  {
    id: 8,
    title: "Plastic Credits : A Catalyst For Sustainability",
    desc: "Plastic pollution has become one of the most pressing environmental challenges of our time, with devastating effects on our planet and unsustainable practices threatening the",
    image: news8,
  },
  {
    id: 9,
    title: "Catalysing Global Transformation: A Strategic Blueprint for Climate Resilience and Net-Zero Impact",
    desc: "The urgency of addressing the perilous trajectory of greenhouse-gas emissions demands a profound re-evaluation of our prevailing models of land and energy use. A historical",
    image: news9,
  },
];

export default function News() {
  return (
    <div className="pt-16">

      {/* HERO */}
      <section className="py-10 bg-emerald-600 text-white text-center mt-10 md:mt-0">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
            News & Updates
          </h1>
          <p className="text-lg text-emerald-100 font-light">
            Latest announcements, insights and global climate news
          </p>
        </div>
      </section>

      {/* NEWS GRID */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {NEWS_ITEMS.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden flex flex-col hover:shadow-xl transition duration-300"
              >
                {/* IMAGE */}
                <div className="h-64 w-full relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                   loading="lazy" decoding="async" />
                </div>

                {/* CONTENT */}
                <div className="p-5 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold text-violet-700 mb-4 leading-snug">
                    {item.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {item.desc}...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}



