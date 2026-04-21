import { Link } from "react-router-dom";

export default function StakeholderConsultation() {
  return (
    <div className="pt-20">

      {/* HERO */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Stakeholder Consultation
        </h1>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          Engaging communities, partners and stakeholders to ensure transparent,
          inclusive and impactful climate project development.
        </p>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Inclusive Engagement for Sustainable Impact
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Stakeholder consultation is a critical component of high-integrity
            climate projects. At Ecoveda Climate, we ensure that all relevant
            stakeholders — including local communities, government bodies and
            partners — are actively involved in the planning and implementation
            of climate initiatives.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-16">
            Our Consultation Process
          </h2>

          <div className="grid md:grid-cols-4 gap-10 text-center">

            <div>
              <h3 className="font-semibold mb-2">Identification</h3>
              <p className="text-sm text-slate-600">
                Mapping all relevant stakeholders across project regions.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Engagement</h3>
              <p className="text-sm text-slate-600">
                Conducting consultations, meetings and workshops.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Feedback</h3>
              <p className="text-sm text-slate-600">
                Collecting inputs and addressing concerns transparently.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Integration</h3>
              <p className="text-sm text-slate-600">
                Incorporating feedback into project design and execution.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Why It Matters
          </h2>

          <div className="grid md:grid-cols-3 gap-10 text-slate-600">

            <div>
              <h3 className="font-semibold mb-2">Transparency</h3>
              <p>Ensures all stakeholders understand project objectives.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Trust Building</h3>
              <p>Strengthens relationships with communities and partners.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Risk Reduction</h3>
              <p>Identifies potential issues early and mitigates risks.</p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-black text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Engage With Us
        </h2>

        <p className="text-slate-300 mb-8">
          Partner with us to design inclusive and impactful climate projects.
        </p>

        <Link
          to="/contact"
          className="px-8 py-3 bg-emerald-500 rounded-md font-bold hover:scale-105 transition"
        >
          Get in Touch
        </Link>
      </section>

    </div>
  );
}