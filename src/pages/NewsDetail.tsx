import { useParams, Link } from "react-router-dom";

const NEWS = [
  {
    id: "1",
    title: "Ecoveda Launches New ARR Project in Maharashtra",
    date: "April 2026",
    tag: "Project Launch",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    content: `Ecoveda Climate has officially launched a large-scale Afforestation, Reforestation and Revegetation (ARR) project in Maharashtra.

This initiative focuses on restoring degraded land while generating verified carbon credits through sustainable land-use practices.

The project aims to deliver long-term ecological and economic benefits by combining environmental restoration with community engagement.

Key Highlights:
• Large-scale land restoration across multiple districts  
• Community-based implementation model  
• Verified carbon credit generation  
• Long-term biodiversity improvement  

This marks a significant milestone in Ecoveda’s mission to scale climate impact globally.`,
  },
  {
    id: "2",
    title: "Partnership Announced with Global Climate Fund",
    date: "March 2026",
    tag: "Partnership",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    content: `Ecoveda Climate has entered into a strategic partnership with a global climate fund to accelerate carbon project development.

This collaboration will enable scaling of high-impact climate initiatives across multiple regions.

The partnership strengthens financial structuring and project delivery capabilities.`,
  },
  {
    id: "3",
    title: "Expansion into Southeast Asia Markets",
    date: "March 2026",
    tag: "Expansion",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    content: `Ecoveda Climate is expanding its operations into Southeast Asia to tap into emerging carbon markets.

The region presents strong opportunities for nature-based and technology-driven climate solutions.

This expansion aligns with our global growth strategy.`,
  },
  {
    id: "4",
    title: "New DMRV Platform Successfully Deployed",
    date: "February 2026",
    tag: "Technology",
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
    content: `Ecoveda Climate has successfully deployed its advanced DMRV platform across multiple pilot projects.

The system enables real-time monitoring and high-integrity reporting using IoT and remote sensing.

This strengthens transparency and trust in carbon markets.`,
  },
];

export default function NewsDetail() {
  const { id } = useParams();
  const news = NEWS.find((n) => n.id === id);

  if (!news) {
    return (
      <div className="pt-40 text-center text-2xl">
        News Not Found
      </div>
    );
  }

  return (
    <div className="pt-16">

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center">

        <img
          src={news.image}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-white">

          <Link
            to="/news"
            className="text-sm mb-6 inline-block opacity-80 hover:opacity-100"
          >
            ← Back to News
          </Link>

          <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            {news.tag}
          </span>

          <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-3 leading-tight">
            {news.title}
          </h1>

          <p className="text-sm text-white/80">
            {news.date}
          </p>

        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-3xl mx-auto px-6 py-16">

        <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed whitespace-pre-line">
          {news.content}
        </div>

      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50 text-center">

        <h2 className="text-2xl font-bold mb-4">
          Stay Updated with Our Work
        </h2>

        <p className="text-slate-600 mb-6">
          Explore more news or connect with our team.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/news"
            className="px-6 py-3 bg-emerald-500 text-white rounded-md"
          >
            View All News
          </Link>

          <Link
            to="/contact"
            className="px-6 py-3 border rounded-md"
          >
            Contact Us
          </Link>
        </div>

      </section>

    </div>
  );
}