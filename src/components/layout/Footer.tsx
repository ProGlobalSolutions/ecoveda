import { Link } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, 
  ArrowRight, ShieldCheck, Leaf, Target, Lightbulb
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const whyChooseUs = [
    { icon: Leaf, title: 'Sustainable Focus', desc: 'Prioritizing long-term ecological balance.' },
    { icon: Lightbulb, title: 'Innovative Solutions', desc: 'Cutting-edge technology for climate action.' },
    { icon: Target, title: 'Proven Results', desc: 'Track record of impactful carbon projects.' },
    { icon: ShieldCheck, title: 'Expert Team', desc: 'Decades of combined industry experience.' },
  ];

  return (
    <footer className="bg-primary-dark relative text-white/90 pt-16 pb-8 overflow-hidden font-sans border-t border-white/10">
      
      {/* Subtle Glow Effects */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-accent/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary/30 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-8">

        {/* 1. BRAND & ABOUT */}
        <div className="flex flex-col space-y-5 col-span-2 md:col-span-1">
          <div>
            <h3 className="text-3xl font-heading font-bold text-white mb-2 tracking-tight">EcoVeda <span className="text-accent">Climate</span></h3>
            <p className="text-base text-white/70 leading-relaxed max-w-xs">
              Pioneering comprehensive climate solutions through innovation, sustainability, and actionable insights.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://in.linkedin.com/company/ecoveda-climate?trk=public_post_follow-view-profile" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 hover:-translate-y-1 group">
              <Linkedin className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 hover:-translate-y-1 group">
              <Twitter className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 hover:-translate-y-1 group">
              <Facebook className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 hover:-translate-y-1 group">
              <Instagram className="w-5 h-5 text-white/70 group-hover:text-white transition-colors duration-300" />
            </a>
          </div>
        </div>

        {/* 2. QUICK LINKS */}
        <div className="flex flex-col col-span-1">
          <h4 className="text-xl font-bold text-white mb-5 tracking-wide relative inline-block">
            Quick Links
            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-accent rounded-full"></span>
          </h4>
          <ul className="space-y-3">
            {['Home', 'About', 'Portfolio', 'Blogs', 'Contact'].map((link) => (
              <li key={link}>
                <Link to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="group flex items-center text-base text-white/70 hover:text-accent transition-colors duration-300 w-fit">
                  <ArrowRight className="w-5 h-5 mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{link}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. WHY CHOOSE US */}
        <div className="hidden md:flex flex-col col-span-1">
          <h4 className="text-xl font-bold text-white mb-5 tracking-wide relative inline-block">
            Why Choose Us
            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-accent rounded-full"></span>
          </h4>
          <ul className="space-y-3">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={index} className="flex items-start space-x-3 group cursor-default">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <Icon className="w-4 h-4 text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h5 className="text-base font-semibold text-white/90 group-hover:text-white transition-colors duration-300">{item.title}</h5>
                    <p className="text-sm text-white/60 mt-0.5">{item.desc}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* 4. GET IN TOUCH */}
        <div className="flex flex-col col-span-1">
          <h4 className="text-xl font-bold text-white mb-4 tracking-wide relative inline-block w-fit">
            Get in Touch
            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-accent rounded-full"></span>
          </h4>
          <div className="space-y-1">
            <div className="flex items-start space-x-3 group py-2 -ml-2 rounded-xl hover:bg-white/5 transition-colors duration-300">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300 text-accent">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
              </div>
              <div className="pt-0.5 md:pt-1">
                <h5 className="text-sm md:text-base font-semibold text-white mb-0.5">Our Location</h5>
                <p className="text-xs md:text-sm text-white/70 leading-relaxed pr-0 md:pr-2 break-words">
                  Ground Floor, DLF Galleria, Metro Station (Blue Line), DGL 019, Mayur Vihar Phase I, Extension, New Delhi, Delhi 110091
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 group py-2 -ml-2 rounded-xl hover:bg-white/5 transition-colors duration-300">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300 text-accent">
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="pt-1 md:pt-1.5">
                <h5 className="text-sm md:text-base font-semibold text-white mb-0.5">Email Us</h5>
                <a href="mailto:info@ecovedaclimate.com" className="text-xs md:text-sm text-white/70 hover:text-accent transition-colors duration-300 break-all md:break-normal">
                  info@ecovedaclimate.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3 group py-2 -ml-2 rounded-xl hover:bg-white/5 transition-colors duration-300">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors duration-300 text-accent">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
              </div>
              <div className="pt-1 md:pt-1.5">
                <h5 className="text-sm md:text-base font-semibold text-white mb-0.5">Call Us</h5>
                <a href="tel:+919343770556" className="text-xs md:text-sm text-white/70 hover:text-accent transition-colors duration-300">
                  +91 93437 70556
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-white/10 flex items-center justify-center relative z-10">
        <p className="text-sm text-white/60 text-center">
          © {currentYear} EcoVeda Climate Solutions. All rights reserved.
        </p>
      </div>

    </footer>
  );
}