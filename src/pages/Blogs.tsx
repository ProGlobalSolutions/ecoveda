import { Link } from "react-router-dom";
import { BLOGS } from "../data/blogs";

const CATEGORY_COLORS: Record<string, string> = {
  "Carbon Markets": "border-l-blue-500",
  "Policy": "border-l-purple-500",
  "Nature-Based Solutions": "border-l-emerald-500",
  "Climate Tech": "border-l-teal-500",
  "default": "border-l-emerald-600"
};

export default function Blogs() {
  const featuredBlog = BLOGS[0];
  const gridBlogs = BLOGS.slice(1);

  return (
    <div className="pt-24 min-h-screen bg-white">

      {/* HEADER */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
          Insights & Resources
        </h1>
        <div className="h-1 w-20 bg-emerald-600 mt-4"></div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* FEATURED POST */}
        {featuredBlog && (
          <div className="mb-16 group block">
            <div className="flex flex-col md:flex-row bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="md:w-2/3 h-64 md:h-[400px] overflow-hidden relative">
                <img
                  src={featuredBlog.image}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy" decoding="async" 
                />
              </div>
              <div className={`md:w-1/3 p-8 md:p-12 flex flex-col justify-center border-l-4 ${CATEGORY_COLORS[featuredBlog.category] || CATEGORY_COLORS.default} md:border-l-0 md:border-t-4`}>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4 block">
                  {featuredBlog.category}
                </span>
                <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-tight group-hover:text-emerald-700 transition-colors">
                  {featuredBlog.title}
                </h2>
                <div className="mt-auto flex items-center justify-between text-sm text-slate-500 font-medium pt-6 border-t border-slate-200">
                  <span>{featuredBlog.date}</span>
                  <Link to={`/blogs/${featuredBlog.id}`} className="text-emerald-600 font-bold hover:underline">
                    Read Featured →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {gridBlogs.map((blog) => (
            <div key={blog.id} className={`flex flex-col bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 border-l-4 ${CATEGORY_COLORS[blog.category] || CATEGORY_COLORS.default}`}>
              <div className="h-56 overflow-hidden relative group">
                <img
                  src={blog.image}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy" decoding="async" 
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3 block">
                  {blog.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug hover:text-emerald-600 transition-colors">
                  <Link to={`/blogs/${blog.id}`} className="line-clamp-3">
                    {blog.title}
                  </Link>
                </h3>
                <div className="mt-auto pt-4 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>{blog.date}</span>
                  <Link to={`/blogs/${blog.id}`} className="text-emerald-600 font-bold hover:underline inline-flex items-center gap-1">
                    Read More <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}



