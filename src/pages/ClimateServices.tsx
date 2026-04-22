import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import climatservice1 from "../assets/climateservices1.webp";
import climatservice2 from "../assets/climateservices2.webp";
import climatservice3 from "../assets/climateservices3.webp";
import climatservice4 from "../assets/climateservices4.webp";


export default function ClimateServices() {
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
            Climate Services
          </motion.h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            End-to-end climate advisory and implementation services supporting
            organizations across carbon markets, sustainability and compliance.
          </p>
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h3 className="text-3xl font-bold mb-6 text-slate-800">
              Carbon Market Advisory
            </h3>
            <p className="text-slate-600 mb-6">
              Navigating voluntary and compliance carbon markets with structured
              advisory support for project entry, strategy and long-term positioning.
            </p>

            <ul className="space-y-3 text-slate-600">
              <li>• Carbon market entry strategy</li>
              <li>• Registry selection (VCS, Gold Standard)</li>
              <li>• Methodology alignment</li>
              <li>• Credit lifecycle advisory</li>
            </ul>
          </div>

          <div className="h-[350px] rounded-xl overflow-hidden">
            <img
              src={climatservice1}
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
              src={climatservice2}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-bold mb-6 text-slate-800">
              Project Feasibility & Design
            </h3>
            <p className="text-slate-600 mb-6">
              Assessing project viability and designing carbon programs aligned
              with environmental integrity and financial feasibility.
            </p>

            <ul className="space-y-3 text-slate-600">
              <li>• Feasibility studies</li>
              <li>• Baseline assessments</li>
              <li>• Financial modelling</li>
              <li>• Project structuring</li>
            </ul>
          </div>

        </div>
      </section>

      {/* SECTION 3 */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h3 className="text-3xl font-bold mb-6 text-slate-800">
              Monitoring, Reporting & Verification (MRV)
            </h3>
            <p className="text-slate-600 mb-6">
              Ensuring accurate tracking and reporting of emission reductions
              through robust monitoring frameworks.
            </p>

            <ul className="space-y-3 text-slate-600">
              <li>• Data collection systems</li>
              <li>• Emission tracking</li>
              <li>• Verification support</li>
              <li>• Audit readiness</li>
            </ul>
          </div>

          <div className="h-[350px] rounded-xl overflow-hidden">
            <img
              src={climatservice3}
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
              src={climatservice4}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-bold mb-6 text-slate-800">
              Credit Issuance & Trading
            </h3>
            <p className="text-slate-600 mb-6">
              Supporting the issuance, management and monetization of carbon
              credits across global markets.
            </p>

            <ul className="space-y-3 text-slate-600">
              <li>• Credit issuance process</li>
              <li>• Registry coordination</li>
              <li>• Market access</li>
              <li>• Trading strategies</li>
            </ul>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-center text-white">
        <h2 className="text-4xl font-bold mb-6">
          Navigate the Carbon Market With Confidence
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
            Request Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}