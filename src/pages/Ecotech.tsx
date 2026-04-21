import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Database, Satellite, Shield } from "lucide-react";

export default function Ecotech() {
  return (
    <div className="pt-16 bg-black text-white overflow-hidden">

      {/* HERO */}
      <section className="relative py-32 text-center">

        <div className="absolute inset-0 bg-gradient-to-br from-green-900/40 via-black to-black" />

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            Climate Technology
          </motion.h1>

          <p className="text-lg text-white/70 mb-10">
            Building digital infrastructure for monitoring, verifying and scaling climate impact
          </p>

          <Link
            to="/contact"
            className="px-8 py-3 bg-accent rounded-md font-bold hover:scale-105 transition"
          >
            Explore Platform
          </Link>
        </div>
      </section>

      {/* GRID FEATURES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          <div className="p-8 bg-white/5 border border-white/10 rounded-xl backdrop-blur">
            <Cpu className="mb-4 text-accent" />
            <h3 className="text-2xl font-bold mb-4">Digital MRV Systems</h3>
            <p className="text-white/70">
              End-to-end Monitoring, Reporting and Verification systems
              enabling transparent carbon tracking.
            </p>
          </div>

          <div className="p-8 bg-white/5 border border-white/10 rounded-xl backdrop-blur">
            <Satellite className="mb-4 text-accent" />
            <h3 className="text-2xl font-bold mb-4">Remote Sensing & GIS</h3>
            <p className="text-white/70">
              Satellite data and geospatial intelligence for real-time
              environmental monitoring.
            </p>
          </div>

          <div className="p-8 bg-white/5 border border-white/10 rounded-xl backdrop-blur">
            <Database className="mb-4 text-accent" />
            <h3 className="text-2xl font-bold mb-4">Data Analytics</h3>
            <p className="text-white/70">
              Advanced analytics platforms for carbon performance,
              reporting and optimization.
            </p>
          </div>

          <div className="p-8 bg-white/5 border border-white/10 rounded-xl backdrop-blur">
            <Shield className="mb-4 text-accent" />
            <h3 className="text-2xl font-bold mb-4">Blockchain & AI</h3>
            <p className="text-white/70">
              Secure and intelligent systems ensuring trust,
              automation and transparency in carbon markets.
            </p>
          </div>

        </div>
      </section>

      {/* HIGHLIGHT STRIP */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            Technology Driven Climate Solutions
          </h2>
          <p className="text-white/60">
            From satellite monitoring to AI-powered carbon systems,
            we integrate technology to bring accuracy, scale and trust
            to climate projects.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center border-t border-white/10">
        <h2 className="text-4xl font-bold mb-6">
          Build With Our Technology
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
            Request Demo
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}