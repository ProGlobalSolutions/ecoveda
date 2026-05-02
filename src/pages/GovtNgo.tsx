import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import govthero from "../assets/govthero.webp";
import govt1 from "../assets/govt1.webp";
import govt2 from "../assets/govt2.webp";
import govt3 from "../assets/govt3.webp";
import govt4 from "../assets/govt4.webp";

export default function GovtNgo() {
  return (
    <div className="pt-16">

      {/* HERO */}
      <section className="relative py-32 flex items-center justify-center bg-gradient-to-br from-emerald-100 via-teal-50 to-emerald-100 border-b border-emerald-200/50">
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight"
          >
            Government & NGO Partnerships
          </motion.h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-emerald-700 font-medium tracking-wide">
            Delivering large-scale climate impact through institutional collaboration
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-10 bg-stone-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6 text-slate-800">
            Scaling Climate Solutions Through Partnerships
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We work with governments, global institutions, and grassroots organizations
            to design and implement scalable climate programs that deliver measurable
            environmental and social impact.
          </p>
        </div>
      </section>

      {/* SECTION 1 */}
      <section className="py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          <div>
            <h3 className="text-3xl font-bold mb-6 text-slate-800">
              Government Partnerships
            </h3>
            <p className="text-slate-600 mb-6">
              Collaborating with national and regional governments to implement
              large-scale sustainability and carbon programs.
            </p>

            <ul className="space-y-3 text-slate-600">
              <li>• Public sector climate programs</li>
              <li>• Policy alignment & execution</li>
              <li>• Carbon project integration</li>
              <li>• National sustainability initiatives</li>
            </ul>
          </div>

          <div className="h-[350px] rounded-xl overflow-hidden">
            <img
              src={govt1}
              className="w-full h-full object-cover"
             loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="py-10 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div className="h-[350px] rounded-xl overflow-hidden order-2 md:order-1">
            <img
              src={govt2}
              className="w-full h-full object-cover"
             loading="lazy" decoding="async" />
          </div>

          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-bold mb-6 text-slate-800">
              Multilateral Agencies
            </h3>
            <p className="text-slate-600 mb-6">
              Working with global institutions to deliver climate finance
              and cross-border sustainability programs.
            </p>

            <ul className="space-y-3 text-slate-600">
              <li>• World Bank / UN programs</li>
              <li>• Climate finance structuring</li>
              <li>• Cross-border projects</li>
              <li>• Impact-driven implementation</li>
            </ul>
          </div>

        </div>
      </section>

      {/* SECTION 3 */}
      <section className="py-10 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <h3 className="text-3xl font-bold mb-6 text-slate-800">
              NGO Collaboration
            </h3>
            <p className="text-slate-600 mb-6">
              Supporting grassroots organizations to scale community-led
              climate interventions.
            </p>

            <ul className="space-y-3 text-slate-600">
              <li>• Community engagement</li>
              <li>• Rural sustainability programs</li>
              <li>• Clean cooking initiatives</li>
              <li>• Water & sanitation programs</li>
            </ul>
          </div>

          <div className="h-[350px] rounded-xl overflow-hidden">
            <img
              src={govt3}
              className="w-full h-full object-cover"
             loading="lazy" decoding="async" />
          </div>

        </div>
      </section>

      {/* SECTION 4 */}
      <section className="py-10 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div className="h-[350px] rounded-xl overflow-hidden order-2 md:order-1">
            <img
              src={govt4}
              className="w-full h-full object-cover"
             loading="lazy" decoding="async" />
          </div>

          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-bold mb-6 text-slate-800">
              Public-Private Partnerships
            </h3>
            <p className="text-slate-600 mb-6">
              Bridging government and private sector to accelerate
              climate investments and infrastructure.
            </p>

            <ul className="space-y-3 text-slate-600">
              <li>• PPP project models</li>
              <li>• Carbon credit financing</li>
              <li>• Infrastructure development</li>
              <li>• Sustainable investment frameworks</li>
            </ul>
          </div>

        </div>
      </section>

      {/* WORKING WITH US FROM SUSTAINABILITY */}
      <section className="py-10 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-extrabold mb-6 text-slate-800">
            A Partnership Engineered for Lasting Impact
          </h2>

          <p className="text-slate-600 leading-relaxed mb-5">
            Climate and sustainability advisory is not a transaction, it is a
            multi-year commitment requiring technical depth and regulatory foresight.
            We operate at the intersection of science, policy and market design.
          </p>

          <p className="text-slate-600 leading-relaxed mb-6">
            We do not deliver reports that sit on shelves. Every engagement is
            designed around measurable milestones, embedded governance structures
            and knowledge transfer that leaves your organisation stronger.
          </p>

          {/* VALUES GRID */}
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              {
                title: "Technical Rigour",
                desc: "Every recommendation is rooted in science and data."
              },
              {
                title: "Long-Term Lens",
                desc: "We build for decade-long resilience, not short-term optics."
              },
              {
                title: "Knowledge Transfer",
                desc: "We embed capability so impact outlasts our engagement."
              },
              {
                title: "Integrity First",
                desc: "High-integrity frameworks guide every project."
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-5 rounded-lg border flex gap-3 shadow-sm hover:shadow-md transition">
                <CheckCircle2 className="text-emerald-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-800">{item.title}</h4>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-black text-center text-white">
        <h2 className="text-4xl font-bold mb-6">
          Build Impact With Us
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
            Start Collaboration
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}



