import { useParams, Link } from "react-router-dom";
import { BLOGS } from "../data/blogs";

export default function BlogDetail() {
  const { id } = useParams();
  const blog = BLOGS.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="pt-40 pb-40 text-center text-2xl font-bold text-slate-800">
        Blog Not Found
      </div>
    );
  }

  return (
    <div className="pt-16">

      {/* HERO */}
      <section className="py-24 bg-emerald-600 text-white text-center mt-10 md:mt-0 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <Link
            to="/blogs"
            className="text-sm mb-8 inline-block font-semibold text-emerald-100 hover:text-white transition"
          >
            ← Back to Blogs
          </Link>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            {blog.title}
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16 md:py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          
          {/* BLOG IMAGE */}
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 mb-12">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
             loading="lazy" decoding="async" />
          </div>

          {/* BLOG HEADER (Category and Date) */}
          <div className="mb-12 border-b border-slate-100 pb-8 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 text-sm font-bold text-emerald-600 uppercase tracking-widest">
              <span>{blog.category}</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500">{blog.date}</span>
            </div>
          </div>

          {/* BLOG BODY */}
          <div className="prose prose-lg max-w-none text-slate-700 leading-relaxed whitespace-pre-line text-left">
            {blog.content}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50 text-center border-t border-slate-100">
        <h2 className="text-2xl font-bold mb-4">
          Want to Learn More?
        </h2>
        <p className="text-slate-600 mb-8">
          Explore more insights or connect with our team.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/contact"
            className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition shadow-lg shadow-emerald-600/20"
          >
            Contact Us
          </Link>
        </div>
      </section>

    </div>
  );
}