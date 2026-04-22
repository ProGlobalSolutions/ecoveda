import { motion } from 'motion/react';
import { ShieldCheck, Award, Eye, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import about1 from '../assets/about1.webp'
import ecovedacli from '../assets/ecovedacli.webp' // ✅ ADDED

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Integrity',
    description:
      'We ensure adherence to ethical principles and rigorous standards, safeguarding the credibility and effectiveness of every emission reduction effort we undertake.',
  },
  {
    icon: Award,
    title: 'Accountability',
    description:
      'We hold ourselves responsible for every aspect of our initiatives, fostering trust and credibility within communities, partners and markets.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description:
      'We share information openly, empowering stakeholders to understand, verify, and engage with our sustainability work.',
  },
];

const EXPERTISE_CARDS = [
  {
    title: 'Nature-Based Solutions',
    items: [
      'Afforestation, Reforestation and Revegetation',
      'Wetland Restoration and Conservation',
      'Sustainable Agricultural Land Management',
      'REDD+',
    ],
  },
  {
    title: 'Carbon Dioxide Removal',
    items: [
      'Biochar Carbon Sequestration',
      'Enhanced Rock Weathering',
      'Direct Air Capture',
      'Open Ex-situ Mineralisation',
    ],
  },
  {
    title: 'Energy and Renewables',
    items: [
      'Solar, Wind and Hydropower',
      'Biogas',
      'Clean Cooking Solutions',
      'Safe Drinking Water',
      'Efficient Lighting',
      'Fuel Switching',
    ],
  },
  {
    title: 'Waste-to-Energy and Industry',
    items: [
      'Waste Heat Recovery',
      'Landfill Gas Capture',
      'E-Waste Recycling',
      'End-of-Life Vehicle Recovery',
      'Biodiesel Production',
      'Industrial Efficiency',
    ],
  },
  {
    title: 'Hard-to-Abate Sectors',
    items: [
      'Mining Fleet Electrification',
      'Modal Shift in Mineral Transport',
      'Low-Emission Commercial Vehicles',
      'Industrial Decarbonisation',
      'Supply Chain Abatement',
    ],
  },
  {
    title: 'Climate Technology and DMRV',
    items: [
      'Digital MRV Systems',
      'Remote Sensing and GIS',
      'Satellite Data Analytics',
      'IoT Sensor Networks',
      'Drone-Based Monitoring',
      'Blockchain and AI',
    ],
  },
];

export default function About() {
  return (
    <div className="pt-16">

      {/* HERO */}
      <section className="relative h-[65vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${about1})`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center text-white px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            New Age Climate Solution Provider
          </h1>
          <p className="text-lg text-white/90 mb-6">
            Delivering sustainable solutions across the global carbon and climate landscape
          </p>

          <div className="flex gap-4 justify-center">
            <Link
              to="/contact"
              className="px-6 py-3 bg-emerald-500 rounded-md font-semibold"
            >
              Get in Touch
            </Link>
            <Link
              to="/verticals/project-development"
              className="px-6 py-3 border border-white rounded-md"
            >
              Explore Work
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6 text-slate-800">
              About Ecoveda Climate
            </h2>

            <p className="text-slate-600 mb-4">
              Ecoveda Climate is a mission-driven global development organisation delivering sustainable solutions across the climate and carbon market landscape.
            </p>

            <p className="text-slate-600 mb-4">
              Our work sits at the convergence of ecological science, financial structuring and regulatory strategy, building scalable programmes that enable low-carbon transition.
            </p>

            <p className="font-semibold text-slate-800">
              Our mission is to impact over 100 million people and generate 1 billion+ carbon credits by 2030.
            </p>
          </div>

          {/* ✅ FIXED RIGHT IMAGE */}
          <img
            src={ecovedacli}
            alt="Ecoveda Climate"
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />

        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800">
            Our Values
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
          {VALUES.map((val, i) => (
            <div key={i} className="bg-white p-8 rounded-xl border">
              <val.icon className="mb-4 text-emerald-600" />
              <h3 className="font-bold text-lg mb-2">{val.title}</h3>
              <p className="text-slate-600 text-sm">{val.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800">
            Our Expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
          {EXPERTISE_CARDS.map((card, i) => (
            <div key={i} className="p-6 border rounded-xl">
              <h3 className="font-bold mb-4">{card.title}</h3>
              <ul className="space-y-2">
                {card.items.map((item, idx) => (
                  <li key={idx} className="flex gap-2 text-sm text-slate-600">
                    <CheckCircle2 className="w-4 text-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-emerald-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Partner With Us?
        </h2>
        <Link
          to="/contact"
          className="px-6 py-3 bg-white text-emerald-600 rounded-md font-semibold"
        >
          Contact Us
        </Link>
      </section>

    </div>
  );
}