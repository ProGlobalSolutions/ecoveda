import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, ChevronDown, Leaf, Factory, Lightbulb, BookOpen } from 'lucide-react';
import mapOverlay from '../assets/latam_map.png';

const SERVICES = [
  {
    id: 1,
    title: "Carbon Project Development and Management",
    icon: <Leaf className="w-6 h-6 text-emerald-600" />,
    description: "Comprehensive end-to-end support from feasibility and design through registration, monitoring, verification and credit issuance, spanning renewable energy, clean technology, industrial efficiency, waste management and nature-based solutions."
  },
  {
    id: 2,
    title: "Industrial Decarbonisation and Emission Reductions",
    icon: <Factory className="w-6 h-6 text-emerald-600" />,
    description: "Partnering with industrial and agro-industrial facilities to design and implement emission reduction strategies, including GHG inventories, process optimisation, waste-to-energy systems, fuel switching and carbon capture."
  },
  {
    id: 3,
    title: "Carbon Advisory and Strategy Development",
    icon: <Lightbulb className="w-6 h-6 text-emerald-600" />,
    description: "Strategic guidance on carbon footprint assessment, credit potential evaluation, standard selection, portfolio strategy, credit marketing and regulatory compliance, maximising both environmental impact and financial returns."
  },
  {
    id: 4,
    title: "Capacity Building and Training",
    icon: <BookOpen className="w-6 h-6 text-emerald-600" />,
    description: "Customised programmes covering carbon market fundamentals, project methodologies, MRV protocols, ESG reporting, and climate finance mechanisms, building long-term institutional capability."
  }
];

export default function Region() {
  const [openServiceId, setOpenServiceId] = useState<number | null>(1);

  return (
    <div className="pt-24 pb-24 bg-stone-50 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative pt-16 pb-20 overflow-hidden bg-gradient-to-b from-emerald-50/60 to-stone-50 border-b border-stone-200/50 mb-5">
        <div 
          className="absolute inset-0 z-0 opacity-[0.08] pointer-events-none mix-blend-multiply bg-right-bottom bg-no-repeat"
          style={{ 
            backgroundImage: `url(${mapOverlay})`, 
            backgroundSize: '1000px', // Large scale map overlay
          }}
        />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-serif font-bold text-slate-900 mb-6 leading-tight">
              ECOVEDA CLIMATE, LATIN AMERICA
            </h1>
            <p className="text-xl md:text-2xl text-emerald-700 font-medium tracking-wide">
              Scaling Climate Action Across the Americas
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT COLUMN: Content & Accordion */}
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="prose prose-lg text-slate-600 mb-5 max-w-none">
              <p className="text-lg leading-relaxed font-medium">
                Ecoveda Climate delivers carbon credit development, commercialisation, and consulting services to clients across Latin America through its regional presence in Mexico City. The region’s vast population, natural resources, and industrial base present extraordinary potential for greenhouse gas mitigation — complemented by its export linkages to North America and Europe that amplify supply chain abatement opportunities.
              </p>
            </div>

            <h2 className="text-[28px] font-serif font-bold text-slate-900 mb-5 border-b border-stone-200 pb-4">
              Our Services for Latin American Partners
            </h2>

            {/* ACCORDION */}
            <div className="space-y-4">
              {SERVICES.map((service) => (
                <div 
                  key={service.id} 
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openServiceId === service.id ? 'border-emerald-200 bg-white shadow-md' : 'border-stone-200 bg-white/50 hover:bg-white'}`}
                >
                  <button
                    onClick={() => setOpenServiceId(openServiceId === service.id ? null : service.id)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <div className="flex items-center gap-5">
                      <div className={`p-3.5 rounded-xl transition-colors ${openServiceId === service.id ? 'bg-emerald-50' : 'bg-stone-100'}`}>
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 pr-4 leading-snug">{service.title}</h3>
                    </div>
                    <ChevronDown 
                      className={`w-6 h-6 text-slate-400 shrink-0 transition-transform duration-300 ${openServiceId === service.id ? 'rotate-180 text-emerald-600' : ''}`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {openServiceId === service.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-8 pt-1 pl-[92px] text-slate-600 text-lg leading-relaxed">
                          {service.description}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Sticky Contact Card & Map */}
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="sticky top-32 space-y-5">
              
              {/* CONTACT CARD */}
              <div className="bg-white rounded-[32px] p-5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-stone-100">
                <div className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-700 font-semibold text-[13px] tracking-wider uppercase rounded-full mb-5">
                  Latin America Contact
                </div>
                
                <h3 className="text-[26px] font-serif font-bold text-slate-900 mb-2">
                  Javier Lascurain
                </h3>
                <p className="text-slate-500 font-medium mb-6 text-lg">
                  LatAm Representative and Senior Consultant
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="p-3.5 bg-stone-50 rounded-2xl text-emerald-600 group-hover:bg-emerald-50 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-bold tracking-wide uppercase mb-1">Email</p>
                      <a href="mailto:Javier.lascurain@ecovedaclimate.com" className="text-slate-700 font-medium text-[15px] hover:text-emerald-600 transition-colors break-all">
                        Javier.lascurain@ecovedaclimate.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group">
                    <div className="p-3.5 bg-stone-50 rounded-2xl text-emerald-600 group-hover:bg-emerald-50 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-bold tracking-wide uppercase mb-1">Tel</p>
                      <a href="tel:+525527299360" className="text-slate-700 font-medium text-[15px] hover:text-emerald-600 transition-colors">
                        +52 (55) 2729-9360
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group">
                    <div className="p-3.5 bg-stone-50 rounded-2xl text-emerald-600 group-hover:bg-emerald-50 transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-bold tracking-wide uppercase mb-1">Regional Headquarters</p>
                      <p className="text-slate-700 font-medium text-[15px]">
                        Mexico City, Mexico
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* MAP IFRAME */}
              <div className="bg-white rounded-[32px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-stone-100 h-[300px] relative group">
                <iframe 
                  src="https://maps.google.com/maps?q=Mexico%20City,%20Mexico&t=&z=11&ie=UTF8&iwloc=&output=embed"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 grayscale contrast-125 opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
}




