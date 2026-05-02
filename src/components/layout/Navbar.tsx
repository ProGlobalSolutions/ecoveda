import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../../assets/logo.webp";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const [activeMobileSubDropdown, setActiveMobileSubDropdown] = useState<string | null>(null);

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
        { name: "Region", path: "/region" },
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

  const getDropdownHeight = () => {
    if (!activeDropdown) return '100%';
    if (activeDropdown === "About") return '160px';
    if (activeDropdown === "Our Services") return '260px';
    if (activeDropdown === "Insights & Resources") return '210px';
    return '100%';
  };

  return (
    <>
      <nav 
        onMouseLeave={() => setActiveDropdown(null)}
        className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[95%] lg:w-[90%] max-w-7xl z-50"
      >
      {/* EXPANDING BACKGROUND PILL */}
      <div 
        className={`absolute top-0 left-0 w-full bg-white/95 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-stone-200/60 transition-all duration-400 ease-out -z-10
          ${activeDropdown ? 'rounded-[24px]' : 'rounded-[40px]'}
        `}
        style={{ height: activeDropdown ? getDropdownHeight() : '100%' }}
      />

      <div className="w-full px-6 md:px-8 flex justify-between items-start">

        {/* LOGO */}
        <Link to="/" className="flex items-center h-[64px] md:h-[72px] shrink-0">
          <img
            src={logo}
            className="h-[32px] md:h-[38px] w-auto object-contain"
            loading="lazy" decoding="async" 
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-start gap-5 xl:gap-10">

          {NAV_ITEMS.map((link) => (
            <div
              key={link.name}
              className="relative flex flex-col justify-start"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
            >
              
              {/* Main Link Wrapper */}
              <div className="h-[64px] md:h-[72px] flex items-center">
                {link.dropdown ? (
                  <div className={`flex items-center gap-1.5 text-[13px] font-semibold tracking-wider uppercase cursor-pointer transition-colors ${activeDropdown === link.name ? 'text-emerald-600' : 'text-slate-700 hover:text-emerald-600'}`}>
                    {link.name}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className="text-[13px] font-semibold tracking-wider uppercase text-slate-700 hover:text-emerald-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </div>

              {/* Mega Menu Content (Absolute to avoid pushing width) */}
              {link.dropdown && (
                <div 
                  className={`absolute top-[64px] md:top-[72px] left-0 whitespace-nowrap transition-all duration-300 ${
                    activeDropdown === link.name ? 'opacity-100 visible translate-y-0 delay-100' : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="pt-2 flex">
                    {link.name === "Our Services" ? (
                      <div className="flex gap-12">
                        {link.dropdown.map((item) => (
                          <div key={item.name} className="flex flex-col gap-3.5">
                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">{item.name}</span>
                            {item.subDropdown ? (
                              item.subDropdown.map((sub) => (
                                <Link key={sub.name} to={sub.path} className="text-[14px] font-medium text-slate-600 hover:text-emerald-600 transition-colors">
                                  {sub.name}
                                </Link>
                              ))
                            ) : (
                              <Link to={item.path as string} className="text-[14px] font-medium text-slate-600 hover:text-emerald-600 transition-colors">
                                {item.name} Overview
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col gap-3.5">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path as string}
                            className="text-[14px] font-medium text-slate-600 hover:text-emerald-600 transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

            </div>
          ))}

          <div className="h-[64px] md:h-[72px] flex items-center ml-2">
            <Link
              to="/get-started"
              className="px-6 py-2.5 rounded-full text-[13px] font-bold tracking-wide uppercase bg-emerald-500 text-white hover:bg-emerald-600 transition-all duration-300 shadow-[0_4px_14px_rgba(16,185,129,0.3)]"
            >
              Get Started
            </Link>
          </div>

        </div>

        {/* MOBILE BUTTON */}
        <div className="lg:hidden h-[64px] md:h-[72px] flex items-center shrink-0">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="h-12 w-12 flex items-center justify-center text-slate-700 bg-white/80 hover:bg-stone-50 transition-colors backdrop-blur-md border border-stone-200/60 shadow-sm rounded-full"
          >
            <Menu size={24} />
          </button>
        </div>

      </div>

      </nav>

      {/* MOBILE MENU (Rendered outside nav to prevent CSS transform containment) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex flex-col h-[100dvh]"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* White Solid Background */}
            <div className="absolute inset-0 bg-white" />

            <div className="relative z-10 flex flex-col h-full">
              {/* Header / Close */}
              <div className="flex justify-between items-center h-[80px] px-6 shrink-0 border-b border-stone-100">
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center">
                  <img src={logo} className="h-[32px] object-contain" loading="lazy" decoding="async" />
                </Link>
                <button 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="h-12 w-12 rounded-full bg-stone-50 flex items-center justify-center text-slate-700 hover:bg-stone-100 transition-colors border border-stone-200"
                >
                  <X size={24} strokeWidth={1.5} />
                </button>
              </div>

              {/* Links - Centered */}
           

{/* Links - Centered */}
<div className="flex-1 overflow-y-auto flex flex-col items-center pt-[18vh] pb-24 px-8 space-y-5">
  {NAV_ITEMS.map((link) => (
    <div key={link.name} className="w-full flex flex-col items-center">

      {link.dropdown ? (
        <>
          {/* 🔥 MAIN MENU */}
          <button
            onClick={() =>
              setActiveMobileDropdown(
                activeMobileDropdown === link.name ? null : link.name
              )
            }
            className="relative flex items-center justify-center text-[24px] tracking-wide font-semibold text-slate-800 hover:text-emerald-600 transition-colors"
          >
            <span>{link.name}</span>
            <ChevronDown className={`absolute -right-10 w-6 h-6 opacity-70 transition-transform duration-400 ${activeMobileDropdown === link.name ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence initial={false}>
            {activeMobileDropdown === link.name && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden w-full flex flex-col items-center mt-6 space-y-5"
              >
                {link.dropdown.map((item) => (

                  item.subDropdown ? (
                    <div key={item.name} className="flex flex-col items-center w-full">

                      {/* 🔥 SUB HEADING (LESS BOLD) */}
                      <button
                        onClick={() =>
                          setActiveMobileSubDropdown(
                            activeMobileSubDropdown === item.name ? null : item.name
                          )
                        }
                        className="relative flex items-center justify-center text-[18px] font-medium text-slate-600 hover:text-emerald-600 transition-colors text-center"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`absolute -right-8 w-5 h-5 opacity-60 transition-transform duration-400 ${activeMobileSubDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence initial={false}>
                        {activeMobileSubDropdown === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="overflow-hidden w-full flex flex-col items-center space-y-4 mt-4 bg-stone-50 border border-stone-100 rounded-2xl py-4"
                          >
                            {/* 🔥 FINAL ITEMS (LIGHTEST) */}
                            {item.subDropdown.map(subItem => (
                              <Link
                                key={subItem.name}
                                to={subItem.path}
                                className="text-[16px] font-normal text-slate-500 hover:text-emerald-600 transition-colors text-center w-full block px-4"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </div>
                  ) : (

                    <Link
                      key={item.name}
                      to={item.path as string}
                      className="text-[18px] font-medium text-slate-600 hover:text-emerald-600 transition-colors text-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>

                  )
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (

        <Link
          to={link.path}
          className="text-[24px] tracking-wide font-semibold text-slate-800 hover:text-emerald-600 transition-colors text-center"
          onClick={() => setMobileMenuOpen(false)}
        >
          {link.name}
        </Link>

      )}

    </div>
  ))}
</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}



