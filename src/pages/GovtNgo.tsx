import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import govthero from "../assets/govthero.webp";
import govt1 from "../assets/govt1.webp";
import govt2 from "../assets/govt2.webp";
import govt3 from "../assets/govt3.webp";
import govt4 from "../assets/govt4.webp";

export default function GovtNgo() {
  return (
    <div className="pt-16">

      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
          backgroundImage: `url(${govthero})`
          }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            Government & NGO Partnerships
          </motion.h1>

          <p className="max-w-2xl mx-auto text-white/80 text-lg">
            Delivering large-scale climate impact through institutional collaboration
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 bg-white text-center">
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
      <section className="py-24 bg-slate-50">
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
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div className="h-[350px] rounded-xl overflow-hidden order-2 md:order-1">
            <img
              src={govt2}
              className="w-full h-full object-cover"
            />
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
      <section className="py-24 bg-slate-50">
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
            />
          </div>

        </div>
      </section>

      {/* SECTION 4 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div className="h-[350px] rounded-xl overflow-hidden order-2 md:order-1">
            <img
              src={govt4}
              className="w-full h-full object-cover"
            />
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

      {/* CTA */}
      <section className="py-24 bg-black text-center text-white">
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