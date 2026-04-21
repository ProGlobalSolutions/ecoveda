import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { NAV_LINKS } from '@/src/constants';
import logo from "../../assets/logo.webp"
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white/70 pt-20 pb-10 border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={logo}
              alt="EcoVeda Climate" 
              className="h-10 w-auto brightness-0 invert"
              referrerPolicy="no-referrer"
            />
          </Link>
          <p className="text-[12px] leading-[1.4] opacity-80">
            Pioneering climate solutions through innovative technology and strategic advisory. Enabling a sustainable future for organizations worldwide through innovative carbon financing.
          </p>
          <div className="flex gap-4">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-6">
          <h4 className="text-accent font-bold text-[11px] uppercase tracking-wider">Quick Links</h4>
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.slice(0, 5).map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path === '#' ? '/verticals/project-development' : link.path}
                  className="hover:text-accent transition-colors text-xs"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-6">
          <h4 className="text-accent font-bold text-[11px] uppercase tracking-wider">Why Choose Us</h4>
          <div className="grid grid-cols-1 gap-2 text-xs opacity-90">
             <div className="flex items-center gap-2">✓ Global Expertise</div>
             <div className="flex items-center gap-2">✓ Rigorous Standards</div>
             <div className="flex items-center gap-2">✓ End-to-End Delivery</div>
             <div className="flex items-center gap-2">✓ Impact Driven</div>
          </div>
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-6">
          <h4 className="text-accent font-bold text-[11px] uppercase tracking-wider">Connect</h4>
          <ul className="flex flex-col gap-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-accent shrink-0" />
              <span className="text-xs">Gurugram, India</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-accent shrink-0" />
              <span className="text-xs">+91 124 400 0000</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-accent shrink-0" />
              <span className="text-xs">info@ecovedaclimate.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10 pt-10 border-t border-gray-900 text-center">
        <p className="text-xs tracking-widest uppercase font-medium">
          © {currentYear} EcoVeda Climate Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
