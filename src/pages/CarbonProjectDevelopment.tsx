import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CarbonProjectDevelopment() {
  return (
    <div className="pt-20">

      {/* TITLE */}
      <section className="py-16 text-center bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">
            Carbon Project Development
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            End-to-end development of high-integrity carbon projects, from feasibility
            and design to issuance and monetization across global carbon markets.
          </p>
        </div>
      </section>

      {/* IMAGE + INTRO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div className="h-[420px] rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-800">
              Building Scalable Climate Assets
            </h2>

            <p className="text-slate-600 mb-6 leading-relaxed">
              We develop carbon projects that deliver measurable emission reductions
              while creating long-term economic and environmental value. Our approach
              combines scientific rigor, financial structuring and market intelligence
              to ensure projects are both credible and commercially viable.
            </p>

            <ul className="space-y-3 text-slate-600">
              <li>• End-to-end project ownership</li>
              <li>• High-integrity carbon credit generation</li>
              <li>• Global standard alignment</li>
              <li>• Long-term revenue optimization</li>
            </ul>
          </div>

        </div>
      </section>

      {/* PROJECT LIFECYCLE */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-16 text-slate-800">
            Project Development Lifecycle
          </h2>

          <div className="space-y-10">

            <div>
              <h3 className="text-xl font-semibold mb-2">01. Feasibility & Assessment</h3>
              <p className="text-slate-600">
                Site evaluation, baseline studies, additionality assessment and financial viability analysis.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">02. Project Design</h3>
              <p className="text-slate-600">
                Selection of methodologies, defining project boundaries and structuring implementation models.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">03. Documentation (PDD)</h3>
              <p className="text-slate-600">
                Preparation of Project Design Documents aligned with global standards and regulatory frameworks.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">04. Validation & Registration</h3>
              <p className="text-slate-600">
                Third-party validation and registration under recognized carbon registries.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">05. Monitoring & Reporting</h3>
              <p className="text-slate-600">
                Continuous data collection, monitoring and reporting aligned with MRV protocols.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">06. Verification & Issuance</h3>
              <p className="text-slate-600">
                Independent verification and issuance of certified carbon credits.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">07. Monetization</h3>
              <p className="text-slate-600">
                Strategic sales, long-term offtake agreements and carbon market integration.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12 text-slate-800">
            Our Core Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-slate-600">

            <div>
              <h3 className="font-semibold mb-2">Technical Expertise</h3>
              <p>Methodology selection, emissions modelling and environmental integrity assurance.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Financial Structuring</h3>
              <p>Revenue modelling, investment structuring and carbon asset optimization.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Regulatory Alignment</h3>
              <p>Compliance with global carbon standards and local policy frameworks.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Market Access</h3>
              <p>Buyer networks, offtake agreements and carbon trading strategies.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Digital MRV Integration</h3>
              <p>Technology-enabled monitoring, reporting and verification systems.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">End-to-End Execution</h3>
              <p>From concept to credit issuance and monetization.</p>
            </div>

          </div>

        </div>
      </section>

      {/* PROJECT TYPES */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12 text-slate-800">
            Project Types We Develop
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-slate-600 font-medium">

            <div>Afforestation & Reforestation (ARR)</div>
            <div>REDD+ & Conservation</div>
            <div>Biochar & Carbon Removal</div>
            <div>Renewable Energy Projects</div>
            <div>Waste-to-Energy</div>
            <div>Industrial Decarbonization</div>

          </div>

        </div>
      </section>

      {/* STANDARDS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-12 text-slate-800">
            Standards & Registries
          </h2>

          <div className="flex flex-wrap justify-center gap-8 text-slate-600 font-semibold">

            <div>Verra (VCS)</div>
            <div>Gold Standard</div>
            <div>ACR</div>
            <div>CAR</div>
            <div>CDM</div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Develop High-Impact Carbon Projects
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
            Discuss a Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}