import { Link } from "react-router-dom";
import { Download, MessageCircle, Users, Scale, FileText } from "lucide-react";

export default function StakeholderConsultation() {
  return (
    <div className="pt-24 min-h-screen bg-stone-50">

      {/* HERO */}
      <section className="px-6 md:px-10 max-w-5xl mx-auto mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-stone-900 mb-6 tracking-tight">
          Stakeholder Consultation
        </h1>
        <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
          Engaging communities, partners and stakeholders to ensure transparent,
          inclusive and impactful climate project development.
        </p>
      </section>

      {/* INTRO WITH PULL QUOTE */}
      <section className="py-16 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-stone-800 mb-6">
              Inclusive Engagement for Sustainable Impact
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed">
              Stakeholder consultation is a critical component of high-integrity
              climate projects. At Ecoveda Climate, we ensure that all relevant
              stakeholders — including local communities, government bodies and
              partners — are actively involved in the planning and implementation
              of climate initiatives.
            </p>
          </div>
          <div className="bg-emerald-900 text-white p-10 md:p-14 rounded-3xl rounded-tl-none shadow-xl relative">
            <div className="absolute top-8 left-8 text-6xl text-emerald-700/50 font-serif leading-none">"</div>
            <p className="relative z-10 text-2xl font-medium leading-snug italic mb-6">
              Transparency and trust are the foundations of every successful climate initiative we build.
            </p>
            <p className="font-bold tracking-widest uppercase text-emerald-400 text-xs">Our Commitment</p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-white border-y border-stone-200">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900">
              Our Consultation Process
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-4 gap-12 text-center">
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">Identification</h3>
              <p className="text-stone-600 leading-relaxed">
                Mapping all relevant stakeholders across project regions.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">Engagement</h3>
              <p className="text-stone-600 leading-relaxed">
                Conducting consultations, meetings and workshops.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
                <Scale className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">Feedback</h3>
              <p className="text-stone-600 leading-relaxed">
                Collecting inputs and addressing concerns transparently.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">Integration</h3>
              <p className="text-stone-600 leading-relaxed">
                Incorporating feedback into project design and execution.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold text-stone-900 mb-6">
                Why It Matters
              </h2>
              <p className="text-stone-600">
                Meaningful engagement ensures that projects are not only environmentally viable but socially equitable.
              </p>
            </div>
            <div className="md:w-2/3 grid sm:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                <h3 className="text-lg font-bold text-stone-800 mb-2">Transparency</h3>
                <p className="text-stone-600 text-sm">Ensures all stakeholders understand project objectives.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                <h3 className="text-lg font-bold text-stone-800 mb-2">Trust Building</h3>
                <p className="text-stone-600 text-sm">Strengthens relationships with communities and partners.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
                <h3 className="text-lg font-bold text-stone-800 mb-2">Risk Reduction</h3>
                <p className="text-stone-600 text-sm">Identifies potential issues early and mitigates risks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCES & CTA */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Stakeholder Resources
          </h2>
          <p className="text-stone-400 text-lg mb-12 max-w-2xl mx-auto">
            We operate a formalized Grievance Redressal Mechanism. If you have any concerns or feedback regarding our projects, please submit it directly online.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">

            {/* Direct Contact Link */}
            <Link
              to="/contact?enquiryType=Stakeholder+Grievance"
              className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-stone-900 rounded-xl font-bold flex items-center justify-center gap-3 transition-colors shadow-lg shadow-amber-500/20"
            >
              Submit a Concern Online
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}



