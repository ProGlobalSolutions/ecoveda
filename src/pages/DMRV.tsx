import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function DMRV() {
  return (
    <div className="pt-20 bg-slate-950 text-white">

      {/* TITLE */}
      <section className="py-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            DMRV & Climate Technology
          </h1>

          <p className="text-white/70 text-lg">
            Digital Monitoring, Reporting and Verification systems enabling
            accurate, transparent and scalable carbon project tracking.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Data-Driven Climate Intelligence
          </h2>

          <p className="text-white/70 leading-relaxed">
            Our DMRV systems combine remote sensing, IoT devices and advanced analytics
            to ensure real-time monitoring and high-integrity reporting across carbon
            projects. We transform raw environmental data into verified carbon outcomes.
          </p>
        </div>
      </section>

      {/* SYSTEM FLOW */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-16">
            How Our DMRV System Works
          </h2>

          <div className="space-y-12 text-white/70">

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">01. Data Collection</h3>
              <p>
                Capture environmental data using satellite imagery, IoT sensors,
                drones and on-ground measurements.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">02. Data Processing</h3>
              <p>
                Integrate and process data through geospatial systems and analytical
                models to generate accurate environmental metrics.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">03. Monitoring</h3>
              <p>
                Continuous tracking of emissions reduction, carbon sequestration
                and project performance.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">04. Reporting</h3>
              <p>
                Automated reporting aligned with global standards and registry requirements.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-2">05. Verification</h3>
              <p>
                Third-party verification supported by transparent and auditable data systems.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* TECH CAPABILITIES */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12">
            Technology Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-white/70">

            <div>
              <h3 className="text-white font-semibold mb-2">Remote Sensing</h3>
              <p>Satellite data for large-scale environmental monitoring.</p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">GIS & Mapping</h3>
              <p>Geospatial analytics for project boundary and land analysis.</p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">IoT Sensors</h3>
              <p>Real-time data collection from field-based devices.</p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">AI & Analytics</h3>
              <p>Advanced models for carbon estimation and prediction.</p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Blockchain</h3>
              <p>Transparent and secure carbon data verification systems.</p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-2">Cloud Platforms</h3>
              <p>Scalable infrastructure for data storage and processing.</p>
            </div>

          </div>

        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Why DMRV Matters
          </h2>

          <p className="text-white/70 leading-relaxed">
            Accurate measurement and verification are critical for ensuring
            credibility in carbon markets. Our systems eliminate uncertainty,
            improve transparency and build trust among stakeholders, investors
            and regulators.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center border-t border-white/10">
        <h2 className="text-4xl font-bold mb-6">
          Power Your Projects With Data
        </h2>

        <div className="flex justify-center gap-4">
          <Link
            to="/contact"
            className="px-8 py-3 bg-green-600 rounded-md font-bold hover:scale-105 transition"
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