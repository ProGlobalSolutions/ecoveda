import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  Flame,
  Droplets,
  Sun,
  Factory,
  Recycle,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const SERVICES = [
  {
    icon: Flame,
    title: "Clean Cooking",
    desc: "Transitioning households from traditional fuels to clean energy solutions.",
    points: [
      "Improved biomass cookstoves",
      "Clean fuels (LPG, induction)",
      "Biogas systems",
      "Monitoring technologies"
    ]
  },
  {
    icon: Droplets,
    title: "Safe Drinking Water",
    desc: "Eliminating emissions from water boiling through clean purification systems.",
    points: [
      "Water purification systems",
      "Community water access",
      "Reduced fuel usage",
      "Carbon-linked water programs"
    ]
  },
  {
    icon: Sun,
    title: "Renewable Energy",
    desc: "Scaling clean energy through carbon-integrated financial models.",
    points: [
      "Solar (rooftop & utility)",
      "Wind energy",
      "Small hydro",
      "Battery storage (BESS)"
    ]
  },
  {
    icon: Factory,
    title: "Transport & Industry",
    desc: "Reducing emissions from heavy industries and logistics systems.",
    points: [
      "Fuel switching",
      "Industrial efficiency",
      "Transport electrification",
      "Emission reduction strategies"
    ]
  },
  {
    icon: Recycle,
    title: "Circular Economy",
    desc: "Turning waste streams into value through sustainable systems.",
    points: [
      "Recycling & material recovery",
      "Agri & bio-waste",
      "Industrial waste",
      "Waste-to-energy"
    ]
  }
];

export default function Sustainibility() {
  return (
    <div className="pt-16">

      {/* HERO */}
      <section className="relative h-[65vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&q=80)"
          }}
        />
        <div className="absolute inset-0 bg-primary-dark/85" />

        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-extrabold uppercase mb-6"
          >
            Sustainability Services
          </motion.h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Practical climate solutions across energy, water, industry and circular systems
          </p>

          <Link
            to="/contact"
            className="px-8 py-3 bg-accent text-white rounded-md font-bold uppercase hover:scale-105 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold text-slate-800 mb-6">
            Implementing Real-World Climate Solutions
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            We design and implement sustainability solutions that reduce emissions,
            improve resource efficiency and enable long-term environmental and economic value.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-card-bg">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          {SERVICES.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition border"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-slate-800">
                  {item.title}
                </h3>
              </div>

              <p className="text-slate-600 mb-6">{item.desc}</p>

              <ul className="space-y-3">
                {item.points.map((p, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-1" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

        </div>
      </section>

      {/* PROJECT EXAMPLES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-slate-800 mb-12 text-center">
            Project Portfolio Examples
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="border p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-2">Improved Cookstove Program</h3>
              <p className="text-sm text-slate-500">Region: Timor-Leste</p>
              <p className="text-sm text-slate-500">Standard: Gold Standard</p>
              <p className="text-sm text-slate-500">Status: Ongoing</p>
            </div>

            <div className="border p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-2">Wind Energy Project</h3>
              <p className="text-sm text-slate-500">Region: India</p>
              <p className="text-sm text-slate-500">Standard: VCS</p>
              <p className="text-sm text-slate-500">Status: Completed</p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-dark text-center text-white">
        <h2 className="text-4xl font-extrabold mb-6">
          Ready to Start Your Sustainability Journey?
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