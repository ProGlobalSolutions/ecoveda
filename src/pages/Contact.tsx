import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    organisation: "",
    jobTitle: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    enquiryType: "",
    serviceArea: "",
    message: "",
    consent: false,
  });

  const [charCount, setCharCount] = useState(0);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    
    if (name === "message") {
      setCharCount(val.length);
    }
    
    setForm({ ...form, [name]: val });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (form.message.length < 50 || form.message.length > 1500) {
      alert("Message must be between 50 and 1,500 characters.");
      return;
    }

    if (!form.consent) {
      alert("Please consent to the privacy policy before submitting.");
      return;
    }

    try {
      await addDoc(collection(db, "leads"), {
        type: "enquiry",
        ...form,
        createdAt: serverTimestamp()
      });

      alert("Enquiry submitted successfully! A member of our team will be in touch.");

      setForm({
        firstName: "",
        lastName: "",
        organisation: "",
        jobTitle: "",
        email: "",
        phone: "",
        country: "",
        city: "",
        enquiryType: "",
        serviceArea: "",
        message: "",
        consent: false,
      });
      setCharCount(0);

    } catch (error) {
      console.error(error);
      alert("Error saving data. Please try again.");
    }
  };

  return (
    <div className="pt-16">
      {/* HERO */}
      <section className="relative py-24 text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-emerald-900/80 backdrop-blur-sm" />

        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Contact Us
          </h1>
          <p className="text-lg text-white/90 font-light">
            Have a question or need support? Our team is here to help.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT INFO */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-32">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Get in Touch</h2>
              <p className="text-slate-600">Reach out directly through our contact details or fill out the enquiry form.</p>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-emerald-600 w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Email Address</p>
                  <a href="mailto:info@ecovedaclimate.com" className="text-slate-800 font-medium hover:text-emerald-600 transition-colors">info@ecovedaclimate.com</a>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-emerald-600 w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Phone Number</p>
                  <a href="tel:+919343770556" className="text-slate-800 font-medium hover:text-emerald-600 transition-colors">+91 93437 70556</a>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-emerald-600 w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Location</p>
                  <p className="text-slate-800 font-medium leading-relaxed text-sm">
                    Ground Floor, DLF Galleria, Metro Station (Blue Line), DGL 019, Mayur Vihar Phase I, Extension, New Delhi, Delhi 110091
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="lg:col-span-8 bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100">
            <div className="mb-10 border-b border-slate-100 pb-8">
              <h3 className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-2">ENQUIRY FORM</h3>
              <h4 className="text-3xl text-emerald-600 font-bold mb-4">Send Us a Message</h4>
              <p className="text-slate-500 text-sm md:text-base">Complete the form below and a member of our team will be in touch. Fields marked with <span className="text-red-500 font-bold">*</span> are required.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              
              {/* ROW 1: Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">First Name <span className="text-red-500">*</span></label>
                  <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required placeholder="e.g. Arjun" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-800 placeholder-slate-400" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Last Name <span className="text-red-500">*</span></label>
                  <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required placeholder="e.g. Sharma" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-800 placeholder-slate-400" />
                </div>
              </div>

              {/* ROW 2: Org & Role */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Organisation / Company</label>
                  <input type="text" name="organisation" value={form.organisation} onChange={handleChange} placeholder="e.g. Ecoveda Climate" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-800 placeholder-slate-400" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Job Title / Role</label>
                  <input type="text" name="jobTitle" value={form.jobTitle} onChange={handleChange} placeholder="e.g. Sustainability Manager" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-800 placeholder-slate-400" />
                </div>
              </div>

              {/* ROW 3: Contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Email Address <span className="text-red-500">*</span></label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="e.g. arjun@organisation.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-800 placeholder-slate-400" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Phone Number</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="e.g. +91 98765 43210" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-800 placeholder-slate-400" />
                </div>
              </div>

              {/* ROW 4: Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Country <span className="text-red-500">*</span></label>
                  <input type="text" name="country" value={form.country} onChange={handleChange} required placeholder="e.g. India" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-800 placeholder-slate-400" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">City</label>
                  <input type="text" name="city" value={form.city} onChange={handleChange} placeholder="e.g. New Delhi" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-800 placeholder-slate-400" />
                </div>
              </div>

              <hr className="border-slate-100 my-8" />

              {/* ROW 5: Enquiry Type */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Enquiry Type <span className="text-red-500">*</span></label>
                <select name="enquiryType" value={form.enquiryType} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-800 cursor-pointer">
                  <option value="" disabled>Select an option</option>
                  <option value="Carbon Consulting">Carbon Consulting</option>
                  <option value="Carbon Project Development">Carbon Project Development</option>
                  <option value="DMRV / Ecotech">DMRV / Ecotech</option>
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Customised Training">Customised Training</option>
                  <option value="Solar EPC">Solar EPC</option>
                  <option value="Stakeholder Grievance">Stakeholder Grievance</option>
                </select>
              </div>

              {/* ROW 6: Service Area */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Which service area is most relevant?</label>
                <select name="serviceArea" value={form.serviceArea} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-800 cursor-pointer">
                  <option value="" disabled>Select an option</option>
                  <option value="Sustainability Services">Sustainability Services</option>
                  <option value="Climate Services">Climate Services</option>
                  <option value="Nature-Based Solutions">Nature-Based Solutions</option>
                  <option value="Climate Technology">Climate Technology</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>

              {/* ROW 7: Message */}
              <div className="space-y-2 pt-2">
                <label className="text-sm font-semibold text-slate-700">Your Message <span className="text-red-500">*</span></label>
                <p className="text-xs text-slate-500 mb-2 leading-relaxed">Please describe your project, requirement or question in as much detail as possible. Include your preferred timeline, scale or geography if relevant.</p>
                <textarea 
                  name="message" 
                  value={form.message} 
                  onChange={handleChange} 
                  required 
                  rows={5}
                  minLength={50}
                  maxLength={1500}
                  placeholder="Type your message here..." 
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all text-slate-800 placeholder-slate-400 resize-none" 
                />
                <div className="flex justify-between items-center text-xs font-medium mt-2">
                  <span className="text-slate-500">Min 50 characters. Max 1,500 characters.</span>
                  <span className={charCount < 50 || charCount > 1500 ? "text-amber-500" : "text-emerald-600"}>{charCount} / 1500</span>
                </div>
              </div>

              {/* CONSENT */}
              <div className="flex items-start gap-4 mt-8 bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100">
                <div className="flex items-center h-5 mt-0.5">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    checked={form.consent}
                    onChange={handleChange}
                    required
                    className="w-5 h-5 text-emerald-600 bg-white border-slate-300 rounded focus:ring-emerald-500 cursor-pointer accent-emerald-600"
                  />
                </div>
                <label htmlFor="consent" className="text-sm text-slate-700 leading-relaxed cursor-pointer select-none">
                  I consent to Ecoveda Climate storing and using the information submitted above to respond to my enquiry, in accordance with the Privacy Policy. <span className="text-red-500">*</span>
                </label>
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 mt-8 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold tracking-wide shadow-lg shadow-emerald-600/20 
                hover:shadow-emerald-600/40 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                Submit Enquiry <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

            </form>
          </div>

        </div>
      </section>
    </div>
  );
}