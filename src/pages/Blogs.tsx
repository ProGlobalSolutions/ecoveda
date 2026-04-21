import { Link } from "react-router-dom";

const BLOGS = [
  {
    id: 1,
    title: "Understanding Carbon Credit Markets",
    category: "Carbon Markets",
    date: "April 2026",
    image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
  },
  {
    id: 2,
    title: "Nature-Based Solutions Explained",
    category: "Sustainability",
    date: "April 2026",
    image: "https://images.unsplash.com/photo-1470115636492-6d2b56f9146d",
  },
  {
    id: 3,
    title: "The Future of Climate Technology",
    category: "Climate Tech",
    date: "March 2026",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    id: 4,
    title: "Scaling Renewable Energy Globally",
    category: "Energy",
    date: "March 2026",
    image: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1",
  },
];

export default function Blogs() {
  return (
    <div className="pt-20">

      {/* HERO */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Insights & Resources
        </h1>
        <p className="text-lg text-slate-300">
          Latest perspectives on climate markets, sustainability and innovation
        </p>
      </section>

      {/* BLOG GRID */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {BLOGS.map((blog) => (
              <Link
                key={blog.id}
                to={`/blogs/${blog.id}`}
                className="group block"
              >
                <div className="overflow-hidden rounded-xl shadow-md">

                  {/* IMAGE */}
                  <div className="h-56 overflow-hidden">
                    <img
                      src={blog.image}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 bg-white">
                    <p className="text-sm text-emerald-600 font-semibold mb-2">
                      {blog.category}
                    </p>

                    <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-emerald-600 transition">
                      {blog.title}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {blog.date}
                    </p>
                  </div>

                </div>
              </Link>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
}