import { Link } from "react-router-dom";
import { BLOGS } from "../data/blogs";

export default function Blogs() {
  return (
    <div className="pt-16">

      {/* HERO */}
      <section className="py-24 bg-emerald-600 text-white text-center mt-10 md:mt-0">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
            Blogs
          </h1>
          <p className="text-lg text-emerald-100 font-light">
            Insights & Resources
          </p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {BLOGS.map((blog) => (
              <Link
                key={blog.id}
                to={`/blogs/${blog.id}`}
                className="group block"
              >
                <div className="overflow-hidden rounded-2xl shadow-lg bg-white border border-slate-100 h-full flex flex-col hover:shadow-xl hover:-translate-y-1 transition duration-300">

                  {/* IMAGE */}
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={blog.image}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-8 flex flex-col flex-grow">
                    <p className="text-sm text-emerald-600 font-bold uppercase tracking-wider mb-3">
                      {blog.category}
                    </p>

                    <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-emerald-600 transition leading-snug">
                      {blog.title}
                    </h3>

                    <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-sm text-slate-500 font-medium">
                      <span>{blog.date}</span>
                      <span className="text-emerald-600 group-hover:translate-x-1 transition-transform inline-block">Read More →</span>
                    </div>
                  </div>

                </div>
              </Link>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-2xl font-bold mb-4">
          Want to Learn More?
        </h2>
        <p className="text-slate-600 mb-6">
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