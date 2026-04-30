import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomeCTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-stone-50 to-emerald-50/50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
          Ready to Build Something That Lasts?
        </h2>
        
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Whether you are exploring your first carbon project or scaling a global decarbonisation strategy, our team is ready to partner with you.
        </p>
        
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white rounded-full font-bold text-lg hover:bg-emerald-700 hover:shadow-lg transition-all duration-300 mb-16"
        >
          Contact Our Climate Advisory Team
          <ArrowRight className="w-5 h-5" />
        </Link>

        {/* CONTACT INFO */}
        <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-stone-200/60 text-slate-600">
          
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-emerald-600 mb-2">
              <Mail className="w-6 h-6" />
            </div>
            <p className="font-semibold text-slate-800">Email Us</p>
            <a href="mailto:info@ecovedaclimate.com" className="hover:text-emerald-600 transition-colors">
              info@ecovedaclimate.com
            </a>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-emerald-600 mb-2">
              <Phone className="w-6 h-6" />
            </div>
            <p className="font-semibold text-slate-800">Call Us</p>
            <a href="tel:+919343770556" className="hover:text-emerald-600 transition-colors">
              +91 93437 70556
            </a>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-emerald-600 mb-2">
              <MapPin className="w-6 h-6" />
            </div>
            <p className="font-semibold text-slate-800">Visit Us</p>
            <p className="text-center px-4">
              DGL 019, Ground Floor, DLF Galleria<br />
              Mayur Vihar, New Delhi 110091
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
