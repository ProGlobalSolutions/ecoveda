import { useState } from "react";
import { Send } from "lucide-react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function GetStarted() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    projectScale: "",
    description: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.projectType) {
      alert("Fill required fields");
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "leads"), {
        type: "getStarted",
        ...form,
        createdAt: serverTimestamp()
      });

      alert("Submitted successfully!");

      setForm({
        name: "",
        email: "",
        company: "",
        projectType: "",
        projectScale: "",
        description: ""
      });

    } catch (error) {
      console.error(error);
      alert("Error saving data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-16">

      {/* HERO */}
      <section className="relative py-28 text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1508780709619-79562169bc64')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-emerald-900/80 backdrop-blur-sm" />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Start Your Climate Journey
          </h1>
          <p className="text-white/80 text-lg">
            Partner with experts to build scalable climate solutions.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="py-24 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-4xl mx-auto px-6">

          <form
            onSubmit={handleSubmit}
            className="bg-white/70 backdrop-blur-2xl p-10 md:p-14 rounded-[2rem] shadow-xl border space-y-8"
          >

            {/* NAME */}
            <div className="relative">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                required
                placeholder=" "
                className="peer w-full px-4 pt-6 pb-2 border rounded-xl outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
              />
              <label className="absolute left-4 top-2 text-sm text-gray-500 
                peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                peer-focus:top-2 peer-focus:text-sm peer-focus:text-emerald-600">
                Full Name
              </label>
            </div>

            {/* EMAIL */}
            <div className="relative">
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                required
                placeholder=" "
                className="peer w-full px-4 pt-6 pb-2 border rounded-xl outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
              />
              <label className="absolute left-4 top-2 text-sm text-gray-500 
                peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                peer-focus:top-2 peer-focus:text-sm peer-focus:text-emerald-600">
                Business Email
              </label>
            </div>

            {/* COMPANY */}
            <div className="relative">
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                type="text"
                placeholder=" "
                className="peer w-full px-4 pt-6 pb-2 border rounded-xl outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
              />
              <label className="absolute left-4 top-2 text-sm text-gray-500 
                peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                peer-focus:top-2 peer-focus:text-sm peer-focus:text-emerald-600">
                Company Name
              </label>
            </div>

            {/* SELECTS */}
            <div className="grid md:grid-cols-2 gap-6">

              <select
                name="projectType"
                value={form.projectType}
                onChange={handleChange}
                className="w-full px-4 py-4 border rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
              >
                <option value="">Select Project Type</option>
                <option>Carbon Consulting</option>
                <option>Project Development</option>
                <option>DMRV / Ecotech</option>
                <option>Climate Services</option>
                <option>Solar EPC</option>
                <option>Training</option>
              </select>

              <select
                name="projectScale"
                value={form.projectScale}
                onChange={handleChange}
                className="w-full px-4 py-4 border rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
              >
                <option value="">Project Scale</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Enterprise</option>
              </select>

            </div>

            {/* DESCRIPTION */}
            <div className="relative">
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={4}
                placeholder=" "
                className="peer w-full px-4 pt-6 pb-2 border rounded-xl outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
              />
              <label className="absolute left-4 top-2 text-sm text-gray-500 
                peer-placeholder-shown:top-4 peer-placeholder-shown:text-base
                peer-focus:top-2 peer-focus:text-sm peer-focus:text-emerald-600">
                Describe your project
              </label>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-emerald-600 text-white rounded-xl font-semibold text-lg 
              hover:scale-[1.03] transition flex items-center justify-center gap-2"
            >
              {loading ? "Submitting..." : "Get Started"}
              <Send className="w-5 h-5" />
            </button>

          </form>

        </div>
      </section>

    </div>
  );
}