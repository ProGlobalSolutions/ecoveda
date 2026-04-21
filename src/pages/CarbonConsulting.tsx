import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, BarChart3, FileCheck, Shield } from "lucide-react";

export default function CarbonConsulting() {
  return (
    <div className="pt-20">

      {/* HERO */}
      <section className="py-16 text-center bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">
            Carbon Consulting
          </h1>

          <p className="text-lg text-slate-600">
            Strategic advisory and execution support to help organizations
            navigate carbon markets, reduce emissions and unlock value.
          </p>
        </div>
      </section>

      {/* INTRO + IMAGE */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div className="h-[420px] rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1509395176047-4a66953fd231"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-800">
              From Strategy to Market Execution
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6">
              We help businesses design, implement and scale carbon strategies
              aligned with global standards. From emissions assessment to credit
              monetization, our approach ensures measurable impact and financial viability.
            </p>

            <ul className="space-y-3 text-slate-600">
              <li>• End-to-end carbon strategy</li>
              <li>• Market positioning & entry</li>
              <li>• Regulatory & compliance advisory</li>
              <li>• Carbon credit monetization</li>
            </ul>
          </div>

        </div>
      </section>

      {/* CORE SERVICES GRID (NO IMAGE) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-16 text-slate-800">
            What We Deliver
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div>
              <Globe className="text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Carbon Market Strategy</h3>
              <p className="text-slate-600">
                Identify the right carbon pathways and align with voluntary
                and compliance market opportunities.
              </p>
            </div>

            <div>
              <BarChart3 className="text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Emissions Assessment</h3>
              <p className="text-slate-600">
                Measure, analyze and benchmark emissions across operations
                to build actionable reduction strategies.
              </p>
            </div>

            <div>
              <FileCheck className="text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Compliance & Reporting</h3>
              <p className="text-slate-600">
                Ensure alignment with global frameworks and reporting standards
                for transparency and credibility.
              </p>
            </div>

            <div>
              <Shield className="text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Risk & Integrity Advisory</h3>
              <p className="text-slate-600">
                Maintain environmental integrity while mitigating risks
                across carbon project lifecycles.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CAPABILITIES STRIP */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12 text-slate-800">
            Our Capabilities
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-slate-600 font-medium">

            <div>Carbon Strategy Design</div>
            <div>Project Structuring</div>
            <div>Registry Advisory</div>
            <div>Credit Monetization</div>
            <div>Lifecycle Management</div>
            <div>Impact Measurement</div>
            <div>Market Access</div>
            <div>Stakeholder Alignment</div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Build a Strong Carbon Strategy
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
            Talk to Experts
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}