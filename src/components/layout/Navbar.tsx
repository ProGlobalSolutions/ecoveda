import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../../assets/logo.webp";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const NAV_ITEMS = [
    { name: "Home", path: "/" },
    {
      name: "About",
      dropdown: [
        { name: "About us", path: "/about" },
        { name: "Vision & Mission", path: "/vision-mission" },
        { name: "Why Ecoveda", path: "/why-ecoveda" },
        { name: "Team", path: "/team" },
      ],
    },
    {
      name: "Our Services",
      dropdown: [
        { name: "Sustainability Services", path: "/services/sustainability" },
        { name: "Climate Services", path: "/services/climate" },
      ],
    },
    { name: "Our Portfolio", path: "/portfolio" },
    {
      name: "Insights & Resources",
      dropdown: [
        { name: "Blogs", path: "/blogs" },
        { name: "News", path: "/news" },
        { name: "Stakeholder Consultation", path: "/stakeholder-consultation" },
      ],
    },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 h-[72px] md:h-[88px] flex items-center transition-all duration-300 ${
        isScrolled || !isHome
          ? 'bg-white shadow-sm border-b'
          : 'bg-transparent border-b border-white/10'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-5 md:px-10 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="lg:-ml-6 xl:-ml-8">
          <img
            src={logo}
            className={`h-[62px] md:h-[82px] w-auto object-contain ${
              !(isScrolled || !isHome) ? 'brightness-0 invert' : ''
            }`}
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-10">

          {NAV_ITEMS.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >

              {link.dropdown ? (
                <div className={`flex items-center gap-1 text-sm font-medium uppercase cursor-pointer ${
                  isScrolled || !isHome ? 'text-slate-900' : 'text-white'
                }`}>
                  {link.name}
                  <ChevronDown size={16} />
                </div>
              ) : (
                <Link
                  to={link.path}
                  className={`text-sm font-medium uppercase ${
                    isScrolled || !isHome ? 'text-slate-900' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              )}

              {link.dropdown && (
                <div className={`absolute top-full left-0 pt-2 w-64 ${
                  activeDropdown === link.name
                    ? 'opacity-100 scale-y-100'
                    : 'opacity-0 scale-y-0 pointer-events-none'
                } transition-all duration-200 origin-top`}>
                  <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="block px-5 py-3 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-600"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            </div>
          ))}

          <Link
            to="/get-started"
            className={`px-6 py-2 rounded-md text-sm font-semibold ${
              isScrolled || !isHome
                ? 'bg-emerald-500 text-white'
                : 'bg-white text-black'
            }`}
          >
            Get Started
          </Link>

        </div>
      </div>

      {/* MOBILE BUTTON */}
      <button
        onClick={() => setMobileMenuOpen(true)}
        className="lg:hidden absolute right-0 h-16 w-16 flex items-center justify-center"
      >
        <Menu size={28} />
      </button>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-50"
            onClick={() => setMobileMenuOpen(false)}
          >
            <motion.div
              className="absolute right-0 top-0 w-[80%] max-w-sm h-full bg-white p-6"
              onClick={(e) => e.stopPropagation()}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
            >

              <div className="flex justify-between mb-6">
                {/* ✅ FIXED HERE */}
                <img src={logo} className="h-[35px]" />
                <X onClick={() => setMobileMenuOpen(false)} />
              </div>

              {NAV_ITEMS.map((link) => (
                <div key={link.name} className="mb-4">

                  {link.dropdown ? (
                    <>
                      <div
                        onClick={() =>
                          setActiveMobileDropdown(
                            activeMobileDropdown === link.name ? null : link.name
                          )
                        }
                        className="flex justify-between font-semibold"
                      >
                        {link.name}
                        <ChevronDown />
                      </div>

                      <AnimatePresence initial={false}>
                        {activeMobileDropdown === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 mt-3 flex flex-col gap-3 border-l border-gray-200">
                              {link.dropdown.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.path}
                                  className="text-gray-700"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link to={link.path} className="font-semibold">
                      {link.name}
                    </Link>
                  )}

                </div>
              ))}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}