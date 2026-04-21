import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function SolarEPC() {
  return (
    <div className="pt-20">

      {/* TITLE */}
      <section className="py-16 text-center bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">
            Solar EPC Solutions
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            End-to-end engineering, procurement and construction of solar energy
            systems designed for efficiency, scalability and long-term performance.
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
              Delivering Scalable Solar Infrastructure
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6">
              Our Solar EPC services cover the complete lifecycle of solar
              installations, from design and engineering to construction and commissioning.
              We ensure reliable, high-performance systems tailored to commercial,
              industrial and utility-scale requirements.
            </p>

            <ul className="space-y-3 text-slate-600">
              <li>• End-to-end project execution</li>
              <li>• Optimized system design</li>
              <li>• High-quality procurement</li>
              <li>• Reliable construction and commissioning</li>
            </ul>
          </div>

        </div>
      </section>

      {/* EPC SCOPE */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12 text-slate-800">
            EPC Scope
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-slate-600">

            <div>
              <h3 className="font-semibold mb-2">Engineering</h3>
              <p>
                Site assessment, system design, load analysis and technical planning
                to maximize efficiency and output.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Procurement</h3>
              <p>
                Sourcing high-quality modules, inverters and components from
                trusted global manufacturers.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Construction</h3>
              <p>
                Installation, integration and commissioning of solar systems
                ensuring operational excellence.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SYSTEM TYPES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12 text-slate-800">
            Solar Solutions We Deliver
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-slate-600 font-medium">

            <div>Rooftop Solar Systems</div>
            <div>Utility-Scale Solar Plants</div>
            <div>Industrial Solar Installations</div>
            <div>Ground-Mounted Systems</div>
            <div>Hybrid Energy Systems</div>
            <div>Battery Storage Integration</div>

          </div>

        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-20 bg-slate-50 text-center">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-12 text-slate-800">
            Our Capabilities
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-slate-600">

            <div>Project Planning</div>
            <div>Technical Design</div>
            <div>Vendor Management</div>
            <div>Construction Execution</div>
            <div>Quality Assurance</div>
            <div>Performance Optimization</div>
            <div>Maintenance Support</div>
            <div>Scalable Deployment</div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Power Your Operations With Solar Energy
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