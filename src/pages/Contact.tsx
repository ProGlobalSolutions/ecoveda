import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Fill all fields");
      return;
    }

    try {
      await addDoc(collection(db, "leads"), {
        type: "contact",
        ...form,
        createdAt: serverTimestamp()
      });

      alert("Message sent!");

      setForm({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {
      console.error(error);
      alert("Error saving data");
    }
  };

  return (
    <div className="pt-16">

      {/* HERO */}
      <section className="relative py-24 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-emerald-900/80 backdrop-blur-sm" />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Contact Us
          </h1>
          <p className="text-white/80">
            Have a question or need support? Our team is here to help.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">

          {/* LEFT INFO */}
          <div className="space-y-6">

            <div className="p-6 rounded-2xl bg-white shadow-md border flex items-center gap-4">
              <Mail className="text-emerald-600 w-6 h-6" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-slate-800 font-medium">info@ecovedaclimate.com</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-md border flex items-center gap-4">
              <Phone className="text-emerald-600 w-6 h-6" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-slate-800 font-medium">+1 (234) 567-8910</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white shadow-md border flex items-center gap-4">
              <MapPin className="text-emerald-600 w-6 h-6" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-slate-800 font-medium">EcoVeda Climate, Global Offices</p>
              </div>
            </div>

          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-gray-100 space-y-6"
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
                className="peer w-full px-4 pt-6 pb-2 border rounded-xl outline-none 
                focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition"
              />
              <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all
                peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                peer-focus:top-2 peer-focus:text-sm peer-focus:text-emerald-600">
                Your Name
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
                className="peer w-full px-4 pt-6 pb-2 border rounded-xl outline-none 
                focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition"
              />
              <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all
                peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                peer-focus:top-2 peer-focus:text-sm peer-focus:text-emerald-600">
                Your Email
              </label>
            </div>

            {/* MESSAGE */}
            <div className="relative">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                required
                placeholder=" "
                className="peer w-full px-4 pt-6 pb-2 border rounded-xl outline-none 
                focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition"
              />
              <label className="absolute left-4 top-2 text-sm text-gray-500 transition-all
                peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                peer-focus:top-2 peer-focus:text-sm peer-focus:text-emerald-600">
                Your Message
              </label>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-emerald-500 to-emerald-700 text-white rounded-xl font-semibold 
              hover:scale-[1.02] hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              Send Message <Send className="w-4 h-4" />
            </button>

          </form>

        </div>
      </section>

    </div>
  );
}