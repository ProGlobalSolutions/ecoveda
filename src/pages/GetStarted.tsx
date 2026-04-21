import { Send } from "lucide-react";

export default function GetStarted() {
  return (
    <div className="pt-16">

      {/* HERO */}
      <section className="relative py-28 text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508780709619-79562169bc64')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-emerald-900/80 backdrop-blur-sm" />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Start Your Climate Journey
          </h1>
          <p className="text-white/80 text-lg">
            Partner with experts to build scalable, high-impact climate solutions.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="py-24 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-4xl mx-auto px-6">

          <form className="bg-white/70 backdrop-blur-2xl p-10 md:p-14 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-white/40 space-y-8 transition-all">

            {/* INPUT */}
            {["Full Name", "Business Email", "Company Name"].map((label, i) => (
              <div key={i} className="relative group">
                <input
                  type={i === 1 ? "email" : "text"}
                  required={i !== 2}
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-2 bg-transparent border border-gray-300 rounded-xl outline-none 
                  focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-300"
                />
                <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all duration-300
                  peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                  peer-focus:top-2 peer-focus:text-sm peer-focus:text-emerald-600">
                  {label}
                </label>
              </div>
            ))}

            {/* SELECTS */}
            <div className="grid md:grid-cols-2 gap-6">
              <select className="w-full px-4 py-4 border border-gray-300 rounded-xl bg-white 
                focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition">
                <option>Select Project Type</option>
                <option>Carbon Consulting</option>
                <option>Project Development</option>
                <option>DMRV / Ecotech</option>
                <option>Climate Services</option>
                <option>Solar EPC</option>
                <option>Training</option>
              </select>

              <select className="w-full px-4 py-4 border border-gray-300 rounded-xl bg-white 
                focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition">
                <option>Project Scale</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Enterprise</option>
              </select>
            </div>

            {/* TEXTAREA */}
            <div className="relative">
              <textarea
                rows={4}
                placeholder=" "
                className="peer w-full px-4 pt-6 pb-2 border border-gray-300 rounded-xl outline-none 
                focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition"
              />
              <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all duration-300
                peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                peer-focus:top-2 peer-focus:text-sm peer-focus:text-emerald-600">
                Describe your project
              </label>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-emerald-500 to-emerald-700 text-white rounded-xl font-semibold text-lg 
              hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              Get Started <Send className="w-5 h-5" />
            </button>

          </form>

        </div>
      </section>

    </div>
  );
}