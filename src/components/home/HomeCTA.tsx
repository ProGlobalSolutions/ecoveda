import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import homeVideo from '../../assets/homebe.mp4';

export default function HomeCTA() {
  return (
    <section className="relative overflow-hidden py-8">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover"
        >
          <source src={homeVideo} type="video/mp4" />
        </video>
        {/* Dark Overlay with subtle blur for readability */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        
        <h2 className="mb-3 text-4xl font-serif font-bold drop-shadow-2xl md:text-5xl">
          Ready to Build Something That Lasts?
        </h2>
        
        <p className="mx-auto mb-5 max-w-2xl text-xl leading-relaxed text-white/90 drop-shadow-lg">
          Whether you are exploring your first carbon project or scaling a global decarbonisation strategy, our team is ready to partner with you.
        </p>
        
        <Link 
          to="/contact" 
          className="mb-5 inline-flex items-center gap-3 rounded-full bg-emerald-600 px-8 py-3 text-lg font-bold text-white transition-all duration-300 hover:bg-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
        >
          Contact Our Climate Advisory Team
          <ArrowRight className="w-5 h-5" />
        </Link>

        {/* CONTACT INFO */}
        <div className="grid gap-6 border-t border-white/20 pt-8 text-white/80 md:grid-cols-3">
          
          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 shadow-sm text-emerald-400 mb-2">
              <Mail className="w-6 h-6" />
            </div>
            <p className="font-semibold text-white">Email Us</p>
            <a href="mailto:info@ecovedaclimate.com" className="hover:text-emerald-400 transition-colors">
              info@ecovedaclimate.com
            </a>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 shadow-sm text-emerald-400 mb-2">
              <Phone className="w-6 h-6" />
            </div>
            <p className="font-semibold text-white">Call Us</p>
            <a href="tel:+919343770556" className="hover:text-emerald-400 transition-colors">
              +91 93437 70556
            </a>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 shadow-sm text-emerald-400 mb-2">
              <MapPin className="w-6 h-6" />
            </div>
            <p className="font-semibold text-white">Visit Us</p>
            <p className="text-center px-4 text-white/70">
              DGL 019, Ground Floor, DLF Galleria<br />
              Mayur Vihar, New Delhi 110091
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}




