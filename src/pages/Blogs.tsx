import { Link } from "react-router-dom";
import { BLOGS } from "../data/blogs";

export default function Blogs() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="px-6 md:px-10 max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
          Insights & Resources
        </h1>
        <div className="h-1 w-20 bg-emerald-600 mt-4"></div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-24">
        
        {/* BLOG GRID: 4 cards on first row, 2 cards on second row with same card size */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {BLOGS.map((blog, index) => (
            <Link
              key={blog.id}
              to={`/blogs/${blog.id}`}
              className={`group block h-full ${index === 4 ? "lg:col-start-2" : ""} ${index === 5 ? "lg:col-start-3" : ""}`}
            >
              <div className="relative h-[380px] w-full rounded-2xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-300">
                
                {/* Background Image */}
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy" decoding="async"
                />
                
                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>

                {/* Inner Border Container */}
                <div className="absolute inset-3 border border-white/40 rounded-xl flex flex-col overflow-hidden">
                  
                  {/* Top Area (Header + Date) */}
                  <div className="p-4 flex flex-col flex-grow">
                    
                    {/* Category & Globe Icon */}
                    <div className="flex justify-between items-center pb-2 border-b border-white/40 mb-3">
                      <span className="text-white text-[10px] font-bold tracking-widest uppercase">
                        {blog.category}
                      </span>
                      <svg className="w-4 h-4 text-white opacity-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </div>
                    
                    {/* Date Badge */}
                    <div>
                      <span className="bg-white text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded-sm shadow-sm inline-block">
                        {blog.date}
                      </span>
                    </div>

                  </div>
                  
                  {/* Bottom Title Box */}
                  <div className="bg-white p-4 w-full">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug line-clamp-2 group-hover:text-emerald-600 transition-colors">
                      {blog.title}
                    </h3>
                  </div>
                  
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}



