import Hero from '../components/home/Hero';
import Intro from '../components/home/Intro';
import Verticals from '../components/home/Verticals';
import Projects from '../components/home/Projects';
import BlogSection from '../components/home/BlogSection';

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* 1. HERO */}
      <Hero />

      {/* 2. INTRO */}
      <Intro />

      {/* 3. SERVICES OVERVIEW */}
      <Verticals />

      {/* 4. FEATURED PROJECTS */}
      <Projects />

      {/* 5. INSIGHTS / NEWS */}
      <BlogSection />

      {/* 6. CONTACT CTA (NEW SECTION) */}
      <section className="py-24 bg-black text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Work With Us?
        </h2>

        <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
          Partner with Ecoveda Climate to develop high-impact carbon and climate projects globally.
        </p>

        <a
          href="/contact"
          className="px-8 py-3 bg-emerald-500 rounded-md font-semibold hover:scale-105 transition"
        >
          Contact Us
        </a>
      </section>

    </div>
  );
}