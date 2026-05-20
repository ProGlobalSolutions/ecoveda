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
    <section className="relative w-full min-h-[650px] overflow-hidden">

  {/* Background Image */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=1600&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  />

  {/* Dark Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-teal-900/85 to-emerald-900/90" />

  {/* Extra Atmospheric Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_35%)]" />

  {/* Content */}
  <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">

    <span className="inline-block text-emerald-300 uppercase tracking-[0.2em] text-sm font-semibold mb-6">
      GET IN TOUCH
    </span>

    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-8">
      Let&apos;s Build Something That Lasts
    </h1>

    <h2 className="text-2xl md:text-4xl font-semibold text-white mb-8">
      We are here to{" "}
      <span className="text-emerald-300 italic">
        listen, advise and partner
      </span>
    </h2>

    <p className="text-emerald-100/90 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
       Whether you are exploring nature-based solutions, requiring advanced DMRV technology, or seeking strategic carbon advisory, our expert team is ready to assist. Please fill out the detailed enquiry form below to help us direct your request to the appropriate department.
    </p>

  </div>
</section>

      {/* 2. INTRO TEXT BLOCK */}
      

     {/* ========================================================= */}
{/* 3. ENQUIRY FORM */}
{/* ========================================================= */}

<section className="py-20 px-6 md:px-10 bg-gradient-to-b from-white to-slate-50">

  <div className="max-w-5xl mx-auto">

    {/* HEADER */}
    <div className="mb-14 text-center">


      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 leading-tight">
        Enquiry Form
      </h2>

      <p className="max-w-3xl mx-auto text-slate-600 text-[16px] leading-8 mt-5">
       Complete the form below and a member of our team will be in touch. Fields marked with * are required.

      </p>

    </div>

    {/* CARD */}
    <div className="bg-white border border-slate-200 rounded-[32px] shadow-xl shadow-slate-200/40 overflow-hidden">

      {/* TOP STRIP */}
      <div className="h-2 bg-gradient-to-r from-emerald-700 via-green-600 to-emerald-500" />

      <div className="p-8 md:p-12">

        {status === 'success' ? (

          <div className="py-16 px-6 bg-emerald-50 border border-emerald-100 rounded-3xl text-center">

            <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-10 h-10 text-emerald-700" />
            </div>

            <h3 className="text-3xl font-bold text-emerald-900 mb-4">
              Enquiry Submitted Successfully
            </h3>

            <p className="text-emerald-700 max-w-xl mx-auto leading-7 mb-8">
              Thank you for reaching out to Ecoveda Climate. A member
              of our team will review your request and within
              48 business hours.
            </p>

            <button
              onClick={() => setStatus('idle')}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
            >
              Submit Another Enquiry
            </button>

          </div>

        ) : (

          <form onSubmit={handleSubmit} className="space-y-10">

            {/* CONTACT DETAILS */}
            <div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Contact Details
                </h3>

                <p className="text-slate-500 mt-1 text-sm">
                  Please provide your primary contact information.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-slate-300 bg-slate-50/40 focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-slate-300 bg-slate-50/40 focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                  />
                </div>

              </div>

            </div>

            {/* ORGANISATION */}
            <div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Organisation Information
                </h3>

                <p className="text-slate-500 mt-1 text-sm">
                  Help us understand your professional background.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Organisation / Company
                  </label>

                  <input
                    type="text"
                    name="organisation"
                    value={form.organisation}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border border-slate-300 bg-slate-50/40 focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Job Title / Role
                  </label>

                  <input
                    type="text"
                    name="jobTitle"
                    value={form.jobTitle}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border border-slate-300 bg-slate-50/40 focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                  />
                </div>

              </div>

            </div>

            {/* CONTACT */}
            <div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Contact Information
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-slate-300 bg-slate-50/40 focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border border-slate-300 bg-slate-50/40 focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                  />
                </div>

              </div>

            </div>

            {/* LOCATION */}
            <div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Location
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Country <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-slate-300 bg-slate-50/40 focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    City
                  </label>

                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border border-slate-300 bg-slate-50/40 focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                  />
                </div>

              </div>

            </div>

            {/* ENQUIRY DETAILS */}
            <div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900">
                  Enquiry Details
                </h3>

                <p className="text-slate-500 mt-1 text-sm">
                  Select the category that best matches your request.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Enquiry Type <span className="text-red-500">*</span>
                  </label>

                  <select
                    name="enquiryType"
                    value={form.enquiryType}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-slate-300 bg-slate-50/40 focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                  >
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
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Relevant Service Area
                  </label>

                  <select
                    name="serviceArea"
                    value={form.serviceArea}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl border border-slate-300 bg-slate-50/40 focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 outline-none transition-all"
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="Sustainability Services">Sustainability Services</option>
                    <option value="Climate Services">Climate Services</option>
                    <option value="Nature-Based Solutions">Nature-Based Solutions</option>
                    <option value="Climate Technology">Climate Technology</option>
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </div>

              </div>

            </div>

            {/* MESSAGE */}
            <div>

              <label className="block text-sm font-semibold text-slate-700 mb-3">
                Your Message <span className="text-red-500">*</span>
              </label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={7}
                minLength={50}
                maxLength={1500}
                placeholder="Please provide details about your enquiry, project requirements, timelines or collaboration interests..."
                className="w-full px-5 py-4 rounded-2xl border border-slate-300 bg-slate-50/40 focus:bg-white focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 outline-none transition-all resize-y"
              />

              <div className="flex justify-between items-center mt-3 text-sm">

                <span className="text-slate-500">
                  Minimum 50 characters. Maximum 1,500 characters.
                </span>

                <span className={charCount < 50 || charCount > 1500
                  ? "text-red-600 font-semibold"
                  : "text-slate-600"}
                >
                  {charCount} / 1500
                </span>

              </div>

            </div>

            {/* CONSENT */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">

              <div className="flex items-start gap-4">

                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={form.consent}
                  onChange={handleChange}
                  required
                  className="mt-1 w-5 h-5 text-emerald-600 border-slate-300 rounded focus:ring-emerald-600 cursor-pointer"
                />

                <label
                  htmlFor="consent"
                  className="text-sm text-slate-700 leading-7 cursor-pointer"
                >
                  I consent to Ecoveda Climate storing and using the
                  information submitted above to respond to my enquiry,
                  in accordance with the Privacy Policy.
                  <span className="text-red-500 ml-1">*</span>
                </label>

              </div>

            </div>

            {/* ERROR */}
            {errorMessage && (

              <div className="p-4 rounded-2xl border border-red-200 bg-red-50 text-red-700 text-sm font-medium">
                {errorMessage}
              </div>

            )}

            {/* SUBMIT */}
            <div className="pt-2">

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold tracking-wide shadow-md hover:shadow-xl transition-all duration-300 disabled:opacity-70"
              >
                {status === 'submitting'
                  ? 'Submitting Enquiry...'
                  : 'Submit Enquiry'}
              </button>

            </div>

          </form>

        )}

      </div>

    </div>

  </div>

</section>











{/* ========================================================= */}
{/* OFFICE LOCATIONS & MAP */}
{/* ========================================================= */}

<section className="py-24 bg-slate-50 border-y border-slate-200 overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 md:px-10">

    {/* SECTION HEADER */}
    <div className="max-w-3xl mb-14">

      <span className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
        OUR OFFICES
      </span>

      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6 leading-tight">
        Where to Find Us
      </h2>

      <p className="text-slate-600 text-lg leading-8">
        Ecoveda Climate operates globally from offices in India and through
        regional representatives across Africa and Latin America.
      </p>

    </div>

    {/* ========================================================= */}
    {/* TOP MAP */}
    {/* ========================================================= */}

    <div className="w-full overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl mb-8">

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.8368817929424!2d77.30061981508215!3d28.604671082428614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4f6b64d4b2f%3A0x2a98f1618685e135!2sDLF%20Galleria%20Mayur%20Vihar!5e0!3m2!1sen!2sin!4v1684824317923!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ecoveda Climate Office Location"
        className="w-full h-[520px]"
      />

    </div>

    {/* ========================================================= */}
    {/* BOTTOM 3 CARDS */}
    {/* ========================================================= */}

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* ========================================================= */}
      {/* HEADQUARTERS */}
      {/* ========================================================= */}

      <div className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 h-full">

        <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
          Headquarters
        </span>

        <h3 className="text-2xl font-bold text-slate-900 mt-3 mb-5">
          New Delhi, India
        </h3>

        <div className="space-y-5">

          <p className="text-slate-600 text-[15px] leading-7">
            Ground Floor, DLF Galleria
            <br />
            Metro Station (Blue Line)
            <br />
            Mayur Vihar Phase I Extension
            <br />
            New Delhi 110091
          </p>

          <div className="border-t border-slate-100 pt-4 space-y-4">

            <div className="flex items-center gap-3 text-slate-700">

              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                <Mail className="w-4 h-4 text-emerald-700" />
              </div>

              <span className="text-sm break-all">
                info@ecovedaclimate.com
              </span>

            </div>

            <div className="flex items-center gap-3 text-slate-700">

              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                <Phone className="w-4 h-4 text-emerald-700" />
              </div>

              <span className="text-sm">
                +91 93437 70556
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* ========================================================= */}
      {/* REGIONAL OFFICE */}
      {/* ========================================================= */}

      <div className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 h-full">

        <span className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">
          Regional Office
        </span>

        <h3 className="text-2xl font-bold text-slate-900 mt-3 mb-5">
          Guwahati, India
        </h3>

        <div className="space-y-5 text-slate-600 text-[15px] leading-8">

          <p>
            North-East India Operations
            <br />
            Guwahati, Assam
          </p>

          <p>
            Covering North-East India
            <br />
            and South-East Asian markets
          </p>

        </div>

      </div>

      {/* ========================================================= */}
{/* INTERNATIONAL */}
{/* ========================================================= */}

<div className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm hover:shadow-lg transition-all duration-300 h-full">

  <span className="text-xs font-bold uppercase tracking-[0.18em] text-amber-700">
    International
  </span>

  <h3 className="text-2xl font-bold text-slate-900 mt-3 mb-5">
    Global Representatives
  </h3>

  <div className="space-y-5">

    <div className="text-slate-600 text-[15px] leading-7 space-y-4">

      <div>
        <p className="font-semibold text-slate-900">
          Zambia
        </p>

        <p>
          Sub-Saharan Africa operations
        </p>
      </div>

      <div>
        <p className="font-semibold text-slate-900">
          Mexico City, Mexico
        </p>

        <p>
          Latin America operations
        </p>
      </div>

    </div>

    <div className="border-t border-slate-100 pt-4 space-y-4">

      <div className="flex items-center gap-3 text-slate-700">

        <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
          <Mail className="w-4 h-4 text-amber-700" />
        </div>

        <a
          href="mailto:Javier.lascurain@ecovedaclimate.com"
          className="text-sm break-all hover:text-amber-700 hover:underline transition-colors"
        >
          Javier.lascurain@ecovedaclimate.com
        </a>

      </div>

      <div className="flex items-center gap-3 text-slate-700">

        <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
          <Phone className="w-4 h-4 text-amber-700" />
        </div>

        <a
          href="tel:+525527299360"
          className="text-sm hover:text-amber-700 transition-colors"
        >
          +52 (55) 2729-9360
        </a>

      </div>

    </div>

  </div>

</div>

    </div>

  </div>

</section>









  {/* 6. DIRECT CONTACT TABLE */}
<section className="py-16 px-6 md:px-10 max-w-6xl mx-auto">
  <div className="mb-8 border-b border-slate-300 pb-4">
    

    <h2 className="text-3xl font-bold text-slate-900 mt-2">
      Reach the Right Team
    </h2>

    <p className="text-slate-600 mt-2">
      For faster assistance, use the direct contact channels below based on your area of interest.
    </p>

    <div className="mt-4 flex flex-wrap gap-4 text-sm">
      

      
    </div>
  </div>

  <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-sm">
    <table className="w-full border-collapse text-left">
      <thead className="bg-emerald-800 text-white">
        <tr>
          <th className="py-3 px-4 font-semibold">Area of Interest</th>
          <th className="py-3 px-4 font-semibold">Contact</th>
          <th className="py-3 px-4 font-semibold">Response Time</th>
        </tr>
      </thead>

      <tbody className="bg-white">
        {[
          {
            area: "General Enquiries",
            email: "info@ecovedaclimate.com",
            response: "Within 48 hrs",
          },
          {
            area: "Carbon Consulting and Advisory",
            email: "info@ecovedaclimate.com",
            response: "Within 24 hrs",
          },
          {
            area: "Carbon Project Development",
            email: "info@ecovedaclimate.com",
            response: "Within 24 hrs",
          },
          {
            area: "DMRV / Ecotech Solutions",
            email: "info@ecovedaclimate.com",
            response: "Within 48 hrs",
          },
          {
            area: "Customized Training",
            email: "info@ecovedaclimate.com",
            response: "Within 48 hrs",
          },
          {
            area: "Solar EPC",
            email: "info@ecovedaclimate.com",
            response: "Within 48 hrs",
          },
          {
            area: "Latin America (all topics)",
            email: "javier.ascurain@ecovedaclimate.com",
            response: "Within 48 hrs",
          },
          {
            area: "Stakeholder Grievances",
            email: "info@ecovedaclimate.com",
            response: "Acknowledged within 14 days",
          },
        ].map((item, index) => (
          <tr
            key={index}
            className="border-t border-slate-200 hover:bg-slate-50"
          >
            <td className="py-3 px-4 text-slate-700 font-medium">
              {item.area}
            </td>

            <td className="py-3 px-4">
              <a
                href={`mailto:${item.email}`}
                className="text-emerald-700 hover:underline break-all"
              >
                {item.email}
              </a>
            </td>

            <td className="py-3 px-4 text-slate-600">
              {item.response}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>








      {/* ========================================================= */}
{/* 7. MEDIA & PARTNERSHIPS */}
{/* ========================================================= */}

<section className="py-20 bg-gradient-to-br from-slate-50 to-emerald-50 px-6 md:px-10 border-t border-slate-200">

  <div className="max-w-6xl mx-auto">

    {/* Section Header */}
    <div className="max-w-3xl mb-12">

      <span className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
        Media and Partnerships
      </span>

      <h2 className="text-4xl font-bold text-slate-900 mt-3 leading-tight">
        Press, Research and Partnership Enquiries
      </h2>

      <p className="text-slate-600 mt-5 text-[16px] leading-8">
        For media interviews, press releases, research collaboration or strategic
        partnership discussions, please contact our communications team directly.
        We welcome requests from journalists, academic researchers and civil
        society organisations working on climate, carbon markets and sustainable
        development.
      </p>

    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 gap-6">

      {/* MEDIA ENQUIRIES */}
      <div className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm hover:shadow-lg transition-all duration-300">

        <h3 className="text-2xl font-bold text-emerald-700 mb-5">
          Media Enquiries
        </h3>

        <p className="text-slate-600 text-[15px] leading-7">
          For press requests, media kits, interview scheduling and project
          photography, please reach out to our communications team. We aim to
          respond to all media enquiries within one business day.
        </p>

        <div className="border-t border-slate-100 mt-6 pt-5 space-y-4">

          <div className="flex items-center gap-3 text-slate-700">

            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
              <Mail className="w-4 h-4 text-emerald-700" />
            </div>

            <a
              href="mailto:media@ecovedaclimate.com"
              className="text-sm break-all hover:text-emerald-700 hover:underline transition-colors"
            >
              media@ecovedaclimate.com
            </a>

          </div>

          <div className="text-sm text-slate-500 italic">
            Subject line: MEDIA - [Your Organisation]
          </div>

        </div>

      </div>

      {/* PARTNERSHIPS */}
      <div className="bg-white border border-slate-200 rounded-3xl p-7 shadow-sm hover:shadow-lg transition-all duration-300">

        <h3 className="text-2xl font-bold text-emerald-700 mb-5">
          Partnership and Collaboration
        </h3>

        <p className="text-slate-600 text-[15px] leading-7">
          Interested in co-developing a project, participating in a consortium
          or exploring a strategic alliance? We welcome conversations with
          organisations that share our commitment to high-integrity climate
          action and sustainable impact.
        </p>

        <div className="border-t border-slate-100 mt-6 pt-5 space-y-4">

          <div className="flex items-center gap-3 text-slate-700">

            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
              <Mail className="w-4 h-4 text-emerald-700" />
            </div>

            <a
              href="mailto:partnerships@ecovedaclimate.com"
              className="text-sm break-all hover:text-emerald-700 hover:underline transition-colors"
            >
              partnerships@ecovedaclimate.com
            </a>

          </div>

          <div className="text-sm text-slate-500 italic">
            Subject line: PARTNERSHIP - [Brief Description]
          </div>

        </div>

      </div>

    </div>

  </div>

</section>










      {/* 8. MINIMAL CTA SECTION */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Build Something That Lasts?</h2>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto">
            Whether you are exploring your first carbon project or scaling a global decarbonisation strategy, our team is ready to partner with you.
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
