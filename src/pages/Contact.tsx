import { useState } from "react";
import { Send, CheckCircle2, MapPin, Mail, Phone, ExternalLink } from "lucide-react";
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
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    let val: string | boolean = value;
    
    if (type === "checkbox") {
      val = (e.target as HTMLInputElement).checked;
    }
    
    if (name === "message") {
      setCharCount(val.toString().length);
    }
    
    setForm({ ...form, [name]: val });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (form.message.length < 50 || form.message.length > 1500) {
      setErrorMessage("Message must be between 50 and 1,500 characters.");
      return;
    }

    if (!form.consent) {
      setErrorMessage("Please consent to the privacy policy before submitting.");
      return;
    }

    setStatus('submitting');

    try {
      await addDoc(collection(db, "leads"), {
        type: "contact_enquiry",
        ...form,
        createdAt: serverTimestamp()
      });

      setStatus('success');
      setForm({
        firstName: "", lastName: "", organisation: "", jobTitle: "",
        email: "", phone: "", country: "", city: "", enquiryType: "",
        serviceArea: "", message: "", consent: false,
      });
      setCharCount(0);
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage("Error saving data. Please try again.");
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-white text-slate-900">
      
      {/* 1. HERO BANNER */}
      <section className="bg-gradient-to-r from-emerald-950 to-teal-900 py-24 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Let’s Build Something That Lasts
          </h1>
          <p className="text-emerald-300 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Partner with us to implement high-integrity climate solutions, drive measurable impact, and achieve your sustainability goals.
          </p>
        </div>
      </section>

      {/* 2. INTRO TEXT BLOCK */}
      <section className="py-16 px-6 md:px-10 max-w-5xl mx-auto text-center border-b border-slate-100">
        <p className="text-slate-600 text-lg leading-relaxed">
          Whether you are exploring nature-based solutions, requiring advanced DMRV technology, or seeking strategic carbon advisory, our expert team is ready to assist. Please fill out the detailed enquiry form below to help us direct your request to the appropriate department.
        </p>
      </section>

      {/* 3. ENQUIRY FORM */}
      <section className="py-16 px-6 md:px-10 max-w-4xl mx-auto">
        <div className="mb-10 border-b border-slate-200 pb-4">
          <h2 className="text-2xl font-bold text-slate-900">Enquiry Form</h2>
        </div>

        {status === 'success' ? (
          <div className="py-12 px-6 bg-emerald-50 border border-emerald-100 rounded-lg text-center">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-emerald-900 mb-2">Enquiry Submitted Successfully!</h3>
            <p className="text-emerald-700 mb-6">A member of our team will review your request and be in touch shortly.</p>
            <button 
              onClick={() => setStatus('idle')}
              className="px-6 py-2 bg-emerald-600 text-white rounded font-medium hover:bg-emerald-700 transition-colors"
            >
              Submit Another Enquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* ROW 1: Name */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">First Name <span className="text-red-500">*</span></label>
                <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required className="w-full px-4 py-3 border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all rounded-sm" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name <span className="text-red-500">*</span></label>
                <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required className="w-full px-4 py-3 border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all rounded-sm" />
              </div>
            </div>

            {/* ROW 2: Org & Role */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Organisation / Company</label>
                <input type="text" name="organisation" value={form.organisation} onChange={handleChange} className="w-full px-4 py-3 border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all rounded-sm" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Job Title / Role</label>
                <input type="text" name="jobTitle" value={form.jobTitle} onChange={handleChange} className="w-full px-4 py-3 border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all rounded-sm" />
              </div>
            </div>

            {/* ROW 3: Contact */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address <span className="text-red-500">*</span></label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-3 border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all rounded-sm" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="w-full px-4 py-3 border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all rounded-sm" />
              </div>
            </div>

            {/* ROW 4: Location */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Country <span className="text-red-500">*</span></label>
                <input type="text" name="country" value={form.country} onChange={handleChange} required className="w-full px-4 py-3 border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all rounded-sm" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">City</label>
                <input type="text" name="city" value={form.city} onChange={handleChange} className="w-full px-4 py-3 border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all rounded-sm" />
              </div>
            </div>

            <hr className="border-slate-200" />

            {/* ROW 5 & 6: Dropdowns */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Enquiry Type <span className="text-red-500">*</span></label>
                <select name="enquiryType" value={form.enquiryType} onChange={handleChange} required className="w-full px-4 py-3 border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all rounded-sm bg-white">
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
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Relevant Service Area</label>
                <select name="serviceArea" value={form.serviceArea} onChange={handleChange} className="w-full px-4 py-3 border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all rounded-sm bg-white">
                  <option value="" disabled>Select an option</option>
                  <option value="Sustainability Services">Sustainability Services</option>
                  <option value="Climate Services">Climate Services</option>
                  <option value="Nature-Based Solutions">Nature-Based Solutions</option>
                  <option value="Climate Technology">Climate Technology</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Your Message <span className="text-red-500">*</span></label>
              <textarea 
                name="message" 
                value={form.message} 
                onChange={handleChange} 
                required 
                rows={6}
                minLength={50}
                maxLength={1500}
                className="w-full px-4 py-3 border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none transition-all rounded-sm resize-y" 
              />
              <div className="flex justify-between items-center text-xs mt-2">
                <span className="text-slate-500">Min 50 characters. Max 1,500 characters.</span>
                <span className={charCount < 50 || charCount > 1500 ? "text-red-600 font-semibold" : "text-slate-600"}>{charCount} / 1500</span>
              </div>
            </div>

            {/* CONSENT */}
            <div className="flex items-start gap-3 bg-slate-50 p-4 border border-slate-200 rounded-sm">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                checked={form.consent}
                onChange={handleChange}
                required
                className="mt-1 w-4 h-4 text-emerald-600 bg-white border-slate-300 rounded focus:ring-emerald-600 cursor-pointer"
              />
              <label htmlFor="consent" className="text-sm text-slate-700 cursor-pointer select-none">
                I consent to Ecoveda Climate storing and using the information submitted above to respond to my enquiry, in accordance with the Privacy Policy. <span className="text-red-500">*</span>
              </label>
            </div>

            {/* ERROR MESSAGE */}
            {errorMessage && (
              <div className="text-red-600 text-sm font-medium p-3 bg-red-50 border border-red-200 rounded-sm">
                {errorMessage}
              </div>
            )}

            {/* SUBMIT BUTTON */}
            <div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white font-bold tracking-wide transition-colors flex items-center justify-center gap-2 disabled:opacity-70 rounded-sm"
              >
                {status === 'submitting' ? 'Submitting...' : 'Submit Enquiry'}
              </button>
            </div>
          </form>
        )}
      </section>

      {/* 4 & 5. OFFICE LOCATIONS & MAP */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* TEXT LOCATION */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4">Headquarters</h2>
              <div className="space-y-4">
                <p className="text-slate-800 font-medium text-lg">Ecoveda Climate</p>
                <p className="text-slate-600 leading-relaxed max-w-sm">
                  Ground Floor, DLF Galleria<br />
                  Metro Station (Blue Line), DGL 019<br />
                  Mayur Vihar Phase I, Extension<br />
                  New Delhi, Delhi 110091<br />
                  India
                </p>
              </div>
            </div>

            {/* MAP */}
            <div className="w-full h-80 bg-slate-200 rounded-sm overflow-hidden border border-slate-300">
              {/* Desktop Iframe */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.8368817929424!2d77.30061981508215!3d28.604671082428614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4f6b64d4b2f%3A0x2a98f1618685e135!2sDLF%20Galleria%20Mayur%20Vihar!5e0!3m2!1sen!2sin!4v1684824317923!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="hidden md:block"
                title="Office Location"
              />
              
              {/* Mobile Static Fallback */}
              <div className="md:hidden w-full h-full flex flex-col items-center justify-center bg-slate-100 p-6 text-center">
                <MapPin className="w-10 h-10 text-emerald-700 mb-4" />
                <p className="text-slate-700 font-medium mb-4">View our location on Google Maps</p>
                <a 
                  href="https://goo.gl/maps/5a5R4yEaF4RkE5w58" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-emerald-700 text-emerald-700 font-medium rounded-sm"
                >
                  Open Maps <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. DIRECT CONTACT TABLE */}
      <section className="py-16 px-6 md:px-10 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">Direct Contact</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-800">
                <th className="py-4 px-4 font-bold text-slate-900 w-1/3">Department</th>
                <th className="py-4 px-4 font-bold text-slate-900 w-1/3">Email</th>
                <th className="py-4 px-4 font-bold text-slate-900 w-1/3">Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-200">
                <td className="py-4 px-4 text-slate-700 font-medium">General Enquiries</td>
                <td className="py-4 px-4"><a href="mailto:info@ecovedaclimate.com" className="text-emerald-700 hover:underline">info@ecovedaclimate.com</a></td>
                <td className="py-4 px-4 text-slate-600">+91 93437 70556</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-4 px-4 text-slate-700 font-medium">Carbon Project Development</td>
                <td className="py-4 px-4"><a href="mailto:projects@ecovedaclimate.com" className="text-emerald-700 hover:underline">projects@ecovedaclimate.com</a></td>
                <td className="py-4 px-4 text-slate-600">-</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="py-4 px-4 text-slate-700 font-medium">Careers & HR</td>
                <td className="py-4 px-4"><a href="mailto:careers@ecovedaclimate.com" className="text-emerald-700 hover:underline">careers@ecovedaclimate.com</a></td>
                <td className="py-4 px-4 text-slate-600">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 7. MEDIA & PARTNERSHIPS */}
      <section className="py-16 bg-slate-900 text-white px-6 md:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Media & Partnerships</h2>
          <p className="text-slate-300 mb-6">
            For press inquiries, media features, or strategic partnership proposals, please contact our corporate communications team. Ensure your email clearly outlines the nature of the request in the subject line.
          </p>
          <a href="mailto:media@ecovedaclimate.com" className="text-emerald-400 font-bold hover:underline text-lg">
            media@ecovedaclimate.com
          </a>
        </div>
      </section>

      {/* 8. MINIMAL CTA SECTION */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Need Immediate Assistance?</h2>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto">
            Our primary support lines are open Monday to Friday, 9:00 AM – 6:00 PM (IST).
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg font-medium">
            <span className="flex items-center gap-2 text-slate-800">
              <Mail className="w-5 h-5 text-emerald-600" />
              info@ecovedaclimate.com
            </span>
            <span className="hidden md:inline text-slate-300">|</span>
            <span className="flex items-center gap-2 text-slate-800">
              <Phone className="w-5 h-5 text-emerald-600" />
              +91 93437 70556
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}
