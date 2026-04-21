import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const POSTS = [
  {
    title: 'The Future of Voluntary Carbon Markets',
    excerpt: 'Understanding how carbon markets are evolving and the increasing demand for high-integrity credits globally.',
    date: 'April 2026',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
    category: 'Carbon Markets',
  },
  {
    title: 'How Climate Technology is Transforming Monitoring',
    excerpt: 'From satellite data to AI-powered MRV systems, innovation is redefining climate accountability.',
    date: 'April 2026',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    category: 'Climate Tech',
  },
  {
    title: 'Scaling ESG and Sustainability Strategies',
    excerpt: 'How organisations can build scalable ESG frameworks aligned with global climate goals.',
    date: 'March 2026',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    category: 'Sustainability',
  },
];

export default function BlogSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-center md:text-left">

          <div className="max-w-xl">
            <span className="text-emerald-600 font-semibold uppercase text-sm tracking-wider block mb-3">
              Insights & Resources
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-4">
              Knowledge Driving Climate Action
            </h2>

            <p className="text-slate-600">
              Explore insights, trends and innovations shaping the future of climate and carbon markets.
            </p>
          </div>

          {/* CTA FIXED */}
          <Link
            to="/blogs"
            className="flex items-center gap-2 text-emerald-600 font-semibold hover:underline"
          >
            View All Insights
            <ArrowRight className="w-5 h-5" />
          </Link>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {POSTS.map((post, i) => (
            <motion.article
              key={i}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition"
            >

              {/* IMAGE */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                <span className="absolute top-4 left-4 bg-emerald-500 text-white text-xs px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col h-full">

                <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                  <Calendar className="w-4 h-4 text-emerald-500" />
                  {post.date}
                </div>

                <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition">
                  {post.title}
                </h3>

                <p className="text-sm text-slate-600 mb-6 flex-grow">
                  {post.excerpt}
                </p>

                <Link
                  to={`/blogs/${i + 1}`}
                  className="flex items-center gap-2 text-emerald-600 font-semibold text-sm"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </Link>

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}