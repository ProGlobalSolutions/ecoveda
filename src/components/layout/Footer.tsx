import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { NAV_LINKS } from '@/src/constants';
import logo from "../../assets/logo.webp";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white/70 pt-20 pb-10 border-t-4 border-accent">

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex flex-col lg:flex-row justify-between gap-12 pb-16">

        {/* LEFT - BRAND */}
        <div className="flex flex-col gap-6 max-w-md">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src={logo}
              alt="EcoVeda Climate" 
              className="h-14 w-auto brightness-0 invert"
            />
          </Link>

          {/* DESCRIPTION */}
          <p className="text-[18px] leading-relaxed text-white/80">
            Pioneering climate solutions through innovative technology and strategic advisory. Enabling a sustainable future for organizations worldwide through innovative carbon financing.
          </p>

          <div className="flex gap-4 mt-2">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white hover:scale-110 transition-all duration-300"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 w-full lg:max-w-2xl">

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[32px] font-bold text-white leading-tight">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-[18px]">
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path === '#' ? '/verticals/project-development' : link.path}
                    className="hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Why Choose Us */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[32px] font-bold text-white leading-tight">Why Choose Us</h4>
            <div className="flex flex-col gap-2 text-[18px] opacity-90">
              <div>✓ Global Expertise</div>
              <div>✓ Rigorous Standards</div>
              <div>✓ End-to-End Delivery</div>
              <div>✓ Impact Driven</div>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[32px] font-bold text-white leading-tight">Connect</h4>
            <ul className="flex flex-col gap-3 text-[18px]">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent mt-1" />
                Gurugram, India
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                +91 124 400 0000
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                info@ecovedaclimate.com
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 mt-12 pt-8 border-t border-gray-800 text-center">
        <p className="text-xs tracking-widest uppercase font-medium">
          © {currentYear} EcoVeda Climate Solutions. All rights reserved.
        </p>
      </div>

    </footer>
  );
}