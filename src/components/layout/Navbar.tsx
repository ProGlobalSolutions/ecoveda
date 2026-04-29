import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../../assets/logo.webp";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);

  const location = useLocation();

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
        { 
          name: "Sustainability Services", 
          subDropdown: [
            { name: "Government, Multilateral agencies & NGO", path: "/services/govt-ngo" },
            { name: "Corporations", path: "/services/corporates" },
            { name: "Climate Technology - Ecotech", path: "/services/ecotech" },
          ]
        },
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
    <nav className="fixed top-0 left-0 w-full z-50 h-[72px] md:h-[76px] flex items-center bg-white shadow-sm md:shadow-none border-b md:border-b-0 transition-all duration-300">
      <div className="w-full max-w-7xl mx-auto px-5 md:px-10 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="lg:-ml-6 xl:-ml-8">
          <img
            src={logo}
            className="h-[42px] md:h-[48px] w-auto object-contain"
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
                <div className="flex items-center gap-1 text-sm font-medium uppercase cursor-pointer text-slate-900 h-full py-6">
                  {link.name}
                  <ChevronDown size={16} />
                </div>
              ) : (
                <Link
                  to={link.path}
                  className="text-sm font-medium uppercase text-slate-900"
                >
                  {link.name}
                </Link>
              )}

              {link.dropdown && (
                <div className={`absolute top-[90%] left-0 pt-2 w-64 ${
                  activeDropdown === link.name
                    ? 'opacity-100 visible'
                    : 'opacity-0 invisible pointer-events-none'
                } transition-all duration-200 origin-top`}>
                  <div className="bg-white rounded-xl shadow-xl py-2">
                    {link.dropdown.map((item) => (
                      item.subDropdown ? (
                        <div key={item.name} className="group relative">
                          <div className="flex items-center justify-between px-5 py-3 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 cursor-pointer">
                            {item.name}
                            <ChevronDown size={14} className="-rotate-90" />
                          </div>
                          
                          {/* SUB-DROPDOWN */}
                          <div className="absolute top-0 left-full w-[280px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                            <div className="bg-white rounded-xl shadow-xl overflow-hidden py-2 ml-1">
                              {item.subDropdown.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.path}
                                  className="block px-5 py-3 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-600"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <Link
                          key={item.name}
                          to={item.path as string}
                          className="block px-5 py-3 text-sm text-slate-700 hover:bg-emerald-50 hover:text-emerald-600"
                        >
                          {item.name}
                        </Link>
                      )
                    ))}
                  </div>
                </div>
              )}

            </div>
          ))}

          <Link
            to="/get-started"
            className="px-6 py-2 rounded-md text-sm font-semibold bg-emerald-500 text-white"
          >
            Get Started
          </Link>

        </div>
      </div>

      {/* MOBILE BUTTON */}
      <button
        onClick={() => setMobileMenuOpen(true)}
        className="lg:hidden absolute right-0 h-16 w-16 flex items-center justify-center text-slate-900"
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
              className="absolute right-0 top-0 w-[80%] max-w-sm h-full bg-white p-6 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
            >

              <div className="flex justify-between mb-6">
                <img src={logo} className="h-[23px]" />
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
                            <div className="pl-4 mt-3 flex flex-col gap-4 border-l border-gray-200">
                              {link.dropdown.map((item) => (
                                item.subDropdown ? (
                                  <div key={item.name} className="flex flex-col gap-2">
                                    <div className="text-gray-800 font-semibold">{item.name}</div>
                                    <div className="pl-4 flex flex-col gap-3 border-l border-gray-100">
                                      {item.subDropdown.map(subItem => (
                                        <Link key={subItem.name} to={subItem.path} className="text-gray-500 text-sm">
                                          {subItem.name}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ) : (
                                  <Link
                                    key={item.name}
                                    to={item.path as string}
                                    className="text-gray-700"
                                  >
                                    {item.name}
                                  </Link>
                                )
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