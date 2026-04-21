import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Training() {
  return (
    <div className="pt-20">

      {/* TITLE */}
      <section className="py-16 text-center bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">
            Customized Training Programs
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            Tailored training programs designed to build capacity across climate,
            carbon markets and sustainability practices for organizations and institutions.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-800">
              Practical Learning for Real-World Impact
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6">
              Our training programs are designed to bridge the gap between theory
              and implementation. We equip teams with the knowledge, tools and
              frameworks required to execute climate and carbon initiatives effectively.
            </p>

            <ul className="space-y-3 text-slate-600">
              <li>• Industry-focused curriculum</li>
              <li>• Case study-based learning</li>
              <li>• Hands-on project exposure</li>
              <li>• Expert-led sessions</li>
            </ul>
          </div>

          <div className="h-[400px] rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>

      {/* TARGET AUDIENCE */}
      <section className="py-20 bg-slate-50 text-center">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-12 text-slate-800">
            Who This Is For
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-slate-600">

            <div>
              <h3 className="font-semibold mb-2">Government Bodies</h3>
              <p>Capacity building for policy, climate programs and sustainability initiatives.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Corporates</h3>
              <p>Training teams on ESG, carbon strategy and sustainability implementation.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">NGOs & Institutions</h3>
              <p>Strengthening grassroots climate knowledge and program execution.</p>
            </div>

          </div>

        </div>
      </section>

      {/* TRAINING MODULES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12 text-slate-800">
            Core Training Modules
          </h2>

          <div className="grid md:grid-cols-2 gap-10 text-slate-600 text-left">

            <div>
              <h3 className="font-semibold mb-2">Carbon Markets & Mechanisms</h3>
              <p>Understanding voluntary and compliance carbon markets, standards and methodologies.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Project Development</h3>
              <p>End-to-end lifecycle of carbon projects from design to issuance.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">MRV Systems</h3>
              <p>Monitoring, reporting and verification frameworks for high-integrity carbon data.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">ESG & Sustainability</h3>
              <p>Frameworks, reporting standards and implementation strategies.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Climate Finance</h3>
              <p>Funding mechanisms, carbon revenue models and investment structures.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Policy & Compliance</h3>
              <p>Global climate policies and regulatory alignment.</p>
            </div>

          </div>

        </div>
      </section>

      {/* DELIVERY FORMAT */}
      <section className="py-20 bg-slate-50 text-center">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-12 text-slate-800">
            Training Formats
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-slate-600 font-medium">

            <div>On-site Workshops</div>
            <div>Virtual Sessions</div>
            <div>Executive Training</div>
            <div>Certification Programs</div>

          </div>

        </div>
      </section>

      {/* OUTCOMES */}
      <section className="py-20 text-center">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6 text-slate-800">
            Outcomes
          </h2>

          <p className="text-slate-600 leading-relaxed">
            Participants gain practical knowledge, strategic understanding and the
            ability to execute real-world climate and carbon initiatives within their organizations.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Build Climate Expertise Within Your Team
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
            Request Program
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}