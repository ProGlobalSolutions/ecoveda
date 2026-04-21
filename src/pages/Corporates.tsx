import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Corporates() {
  return (
    <div className="pt-20">

      {/* TITLE */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6"
          >
            Corporations
          </motion.h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            Supporting businesses in achieving sustainability goals through
            carbon strategies, ESG frameworks, and climate-driven innovation.
          </p>
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h3 className="text-3xl font-bold mb-6 text-slate-800">
              ESG & Sustainability Strategy
            </h3>
            <p className="text-slate-600 mb-6">
              Helping organizations define and implement sustainability strategies
              aligned with global ESG standards and regulatory frameworks.
            </p>

            <ul className="space-y-3 text-slate-600">
              <li>• ESG reporting frameworks</li>
              <li>• Net-zero roadmaps</li>
              <li>• Sustainability benchmarking</li>
              <li>• Regulatory compliance</li>
            </ul>
          </div>

          <div className="h-[350px] rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* SECTION 2 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div className="h-[350px] rounded-xl overflow-hidden order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-bold mb-6 text-slate-800">
              Carbon Strategy & Offsetting
            </h3>
            <p className="text-slate-600 mb-6">
              Designing carbon strategies that enable companies to reduce,
              offset, and manage emissions effectively.
            </p>

            <ul className="space-y-3 text-slate-600">
              <li>• Carbon footprint assessment</li>
              <li>• Offset portfolio design</li>
              <li>• Carbon credit sourcing</li>
              <li>• Long-term carbon planning</li>
            </ul>
          </div>

        </div>
      </section>

      {/* SECTION 3 */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h3 className="text-3xl font-bold mb-6 text-slate-800">
              Climate Risk & Compliance
            </h3>
            <p className="text-slate-600 mb-6">
              Identifying climate-related risks and ensuring compliance with
              evolving environmental regulations.
            </p>

            <ul className="space-y-3 text-slate-600">
              <li>• Risk assessment frameworks</li>
              <li>• Regulatory compliance</li>
              <li>• Climate disclosure support</li>
              <li>• Audit & verification readiness</li>
            </ul>
          </div>

          <div className="h-[350px] rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* SECTION 4 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div className="h-[350px] rounded-xl overflow-hidden order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-bold mb-6 text-slate-800">
              Sustainable Operations
            </h3>
            <p className="text-slate-600 mb-6">
              Improving operational efficiency while reducing environmental
              impact across supply chains and production systems.
            </p>

            <ul className="space-y-3 text-slate-600">
              <li>• Energy efficiency optimization</li>
              <li>• Supply chain sustainability</li>
              <li>• Waste reduction strategies</li>
              <li>• Resource optimization</li>
            </ul>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-center text-white">
        <h2 className="text-4xl font-bold mb-6">
          Build a Sustainable Business Future
        </h2>

        <div className="flex justify-center gap-4">
          <Link
            to="/contact"
            className="px-8 py-3 bg-accent rounded-md font-bold hover:scale-105 transition"
          >
            Get in Touch
          </Link>

          <Link
            to="/contact"
            className="px-8 py-3 border border-white rounded-md font-bold hover:bg-white hover:text-black transition flex items-center gap-2"
          >
            Request Proposal
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}