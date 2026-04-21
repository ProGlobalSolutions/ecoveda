import { useParams, Link } from "react-router-dom";

const BLOGS = [
  {
    id: "1",
    title: "Understanding Carbon Credit Markets",
    category: "Carbon Markets",
    date: "April 2026",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
    content: `Carbon credit markets are a key mechanism in global climate action.

They allow organizations to offset emissions by investing in verified
projects that reduce or remove carbon from the atmosphere.

These markets are rapidly evolving and becoming central to corporate
sustainability strategies.`,
  },
  {
    id: "2",
    title: "Nature-Based Solutions Explained",
    category: "Sustainability",
    date: "April 2026",
    image: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d",
    content: `Nature-based solutions use ecosystems to address environmental challenges.

This includes afforestation, wetland restoration, and sustainable land use.

They deliver both climate benefits and community impact.`,
  },
  {
    id: "3",
    title: "The Future of Climate Technology",
    category: "Climate Tech",
    date: "March 2026",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    content: `Climate technology is transforming how we measure, monitor and reduce emissions.

From satellite analytics to AI-driven MRV systems, innovation is accelerating.

This space will define the next decade of climate action.`,
  },
  {
    id: "4",
    title: "Scaling Renewable Energy Globally",
    category: "Energy",
    date: "March 2026",
    image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1",
    content: `Renewable energy is expanding rapidly across emerging and developed markets.

Solar, wind and hybrid systems are becoming more efficient and affordable.

Scaling these systems is critical for achieving net-zero targets.`,
  },
];

export default function BlogDetail() {
  const { id } = useParams();
  const blog = BLOGS.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="pt-40 text-center text-2xl">
        Blog Not Found
      </div>
    );
  }

  return (
    <div className="pt-16">

      {/* HERO */}
      <section className="relative h-[60vh] flex items-center">

        <img
          src={blog.image}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-white">

          <Link
            to="/blogs"
            className="text-sm mb-6 inline-block opacity-80 hover:opacity-100"
          >
            ← Back to Blogs
          </Link>

          <p className="text-emerald-400 font-semibold mb-2">
            {blog.category}
          </p>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            {blog.title}
          </h1>

          <p className="text-sm text-white/80">
            {blog.date}
          </p>

        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-3xl mx-auto px-6 py-16">

        <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed whitespace-pre-line">
          {blog.content}
        </div>

      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50 text-center">

        <h2 className="text-2xl font-bold mb-4">
          Want to Learn More?
        </h2>

        <p className="text-slate-600 mb-6">
          Explore more insights or connect with our team.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/blogs"
            className="px-6 py-3 bg-emerald-500 text-white rounded-md"
          >
            View All Blogs
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