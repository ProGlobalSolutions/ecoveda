import { useParams, Link } from "react-router-dom";
import { NEWS_ITEMS } from "./News";

export default function NewsDetail() {
  const { id } = useParams();
  const news = NEWS_ITEMS.find((n) => n.id.toString() === id);

  if (!news) {
    return (
      <div className="pt-32 pb-24 text-center min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">News Not Found</h1>
        <Link to="/news" className="text-emerald-600 font-semibold hover:underline">
          Return to News
        </Link>
      </div>
    );
  }

  // Derive tag dynamically based on title (matching News.tsx filter logic)
  let tag = "Projects";
  const titleLower = news.title.toLowerCase();
  if (titleLower.includes("market") || titleLower.includes("credit")) tag = "Market";
  else if (titleLower.includes("blueprint") || titleLower.includes("policy")) tag = "Policy";
  else if (titleLower.includes("family") || titleLower.includes("partner")) tag = "Partnerships";

  // Derive date dynamically (matching News.tsx timeline logic)
  const date = new Date(2025, 10 - (news.id % 12), 15 - (news.id % 15)).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

  return (
    <div className="pt-16 min-h-screen bg-white">

      {/* HERO */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end pb-16">

        <img
          src={news.image}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy" decoding="async" 
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-white w-full">

          <Link
            to="/news"
            className="text-sm mb-8 inline-flex items-center opacity-80 hover:opacity-100 transition-opacity font-medium tracking-wide"
          >
            ← Back to News
          </Link>

          <div>
            <span className="bg-emerald-500/20 border border-emerald-400/30 backdrop-blur-md text-emerald-100 px-4 py-1.5 rounded-full text-xs font-bold tracking-[2px] uppercase">
              {tag}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-6 mb-6 leading-tight tracking-tight">
            {news.title}
          </h1>

          <p className="text-sm font-medium text-emerald-300">
            Published on {date}
          </p>

        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-3xl mx-auto px-6 py-20">

        <div className="prose prose-lg prose-emerald max-w-none text-slate-700 leading-relaxed whitespace-pre-line text-xl font-medium">
          {news.content}
        </div>

      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-50 text-center border-t border-slate-100">

        <h2 className="text-3xl font-bold mb-6 text-slate-900 tracking-tight">
          Stay Updated with Our Work
        </h2>

        <p className="text-slate-600 mb-10 max-w-lg mx-auto text-lg">
          Explore more news, announcements, and global climate insights or connect with our team.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 px-6">
          <Link
            to="/news"
            className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/20 hover:-translate-y-1 hover:shadow-emerald-600/30 transition-all"
          >
            View All News
          </Link>

          <Link
            to="/contact"
            className="px-8 py-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>

      </section>

    </div>
  );
}



