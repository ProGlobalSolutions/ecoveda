import { motion } from 'motion/react';
import { ShieldCheck, Award, Eye, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import about1 from '../assets/about1.webp';
import vision from '../assets/vision.webp';
import whyeco from '../assets/whyeco.webp';


const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Integrity',
    description:
      'We ensure adherence to ethical principles and rigorous standards.',
  },
  {
    icon: Award,
    title: 'Accountability',
    description:
      'We hold ourselves responsible for every aspect of our initiatives.',
  },
  {
    icon: Eye,
    title: 'Transparency',
    description:
      'We share information openly with all stakeholders.',
  },
];

export default function About() {
  return (
    <div className="pt-16">

      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${about1})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />

        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            New Age Climate Solutions
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6">
            Driving global impact through carbon innovation & sustainability
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="px-6 py-3 bg-emerald-500 rounded-md font-semibold">
              Get in Touch
            </Link>
            <Link to="/portfolio" className="px-6 py-3 border border-white rounded-md">
              Explore Work
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6 text-slate-800">
  About Ecoveda Climate
</h2>

<p className="text-slate-600 mb-4 leading-relaxed">
  Ecoveda Climate is a mission-driven organisation delivering scalable climate solutions across global carbon markets.
</p>

<p className="text-slate-600 mb-4 leading-relaxed">
  We operate at the intersection of science, finance and technology to accelerate low-carbon transitions.
</p>

<p className="text-slate-600 mb-4 leading-relaxed">
  Our approach focuses on developing high-integrity carbon projects that create measurable environmental and social impact.
</p>

<p className="text-slate-600 mb-4 leading-relaxed">
  By leveraging innovative climate technologies and data-driven insights, we ensure transparency, efficiency and long-term sustainability in every initiative.
</p>

<p className="text-slate-600 mb-4 leading-relaxed">
  We collaborate with governments, organisations and local communities to implement solutions that drive real-world change at scale.
</p>

<p className="font-semibold text-slate-800">
  Target: 100M+ people impacted & 1B+ carbon credits by 2030.
</p>
          </div>

         <img
  src={vision}
  className="rounded-2xl shadow-xl w-[75%] mx-auto object-cover"
/>

        </div>
      </section>

      {/* MISSION + VISION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

  {/* MISSION */}
  <div className="group bg-white p-10 rounded-2xl shadow-sm text-center transition-all duration-300 hover:bg-emerald-600 hover:text-white cursor-pointer">
    <h3 className="text-2xl font-bold mb-4">
      Our Mission
    </h3>

    <p className="text-slate-600 group-hover:text-white/90 leading-relaxed">
      Drive global transition to a low-carbon economy through scalable climate solutions.
      We aim to accelerate climate action by integrating science, technology and finance
      to deliver measurable and long-term environmental impact across communities worldwide.
    </p>
  </div>

  {/* VISION */}
  <div className="group bg-white p-10 rounded-2xl shadow-sm text-center transition-all duration-300 hover:bg-emerald-600 hover:text-white cursor-pointer">
    <h3 className="text-2xl font-bold mb-4">
      Our Vision
    </h3>

    <p className="text-slate-600 group-hover:text-white/90 leading-relaxed">
      Build a sustainable future powered by innovation, transparency and impact.
      Our vision is to become a global leader in climate solutions, enabling
      organisations and communities to achieve net-zero goals effectively.
    </p>
  </div>

</div>
      </section>

      {/* STATS */}
     <section className="py-16 md:py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">

    {/* LEFT CONTENT */}
    <div>
      <p className="text-xs md:text-sm font-semibold tracking-widest text-emerald-600 uppercase mb-3">
        Who We Are
      </p>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
        ecoveda: Pioneering Sustainability Solutions for Global Impact.
      </h2>

      <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">
        Ecoveda Climate is a mission-driven global development organization delivering sustainable solutions in the climate and carbon market ecosystem.
      </p>

      <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
        We focus on empowering vulnerable and underserved communities through scalable, science-backed and economically viable climate programs that create long-term impact.
      </p>

      <button className="px-6 py-3 bg-emerald-600 text-white rounded-full text-sm md:text-base font-semibold hover:bg-emerald-700 transition">
        CONTACT US
      </button>
    </div>

    {/* RIGHT IMAGE */}
    <div className="w-full">
      <img
        src={whyeco}
        alt="Ecoveda Impact"
        className="w-full h-full object-cover rounded-2xl shadow-lg"
      />
    </div>

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
            <div
              key={i}
              className="bg-white p-8 rounded-xl border hover:shadow-lg transition"
            >
              <val.icon className="mb-4 text-emerald-600" />
              <h3 className="font-bold text-lg mb-2">{val.title}</h3>
              <p className="text-slate-600 text-sm">{val.description}</p>
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