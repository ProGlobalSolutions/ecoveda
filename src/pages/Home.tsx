import Hero from '../components/home/Hero';
import Intro from '../components/home/Intro';
import Verticals from '../components/home/Verticals';
import TrackRecord from '../components/home/TrackRecord';
import GlobalPresence from '../components/home/GlobalPresence';
import Partners from '../components/home/Partners';
import OurValues from '../components/home/OurValues';
import HomeCTA from '../components/home/HomeCTA';
import Expertise from '../components/home/Expertise';
import LatinAmericaSection from '../components/home/LatinAmericaSection';

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* 1. HERO */}
      <Hero />

      {/* 2. INTRO (About Ecoveda) */}
      <Intro />

      {/* 3. OUR VALUES */}
      <OurValues />

<Expertise />

      {/* 3. EXPERTISE */}
      

      {/* 4. TRACK RECORD */}
      <TrackRecord />

      {/* 5. GLOBAL PRESENCE */}
      <GlobalPresence />

        {/* NEW LATAM SECTION */}
      <LatinAmericaSection />

      {/* 6. CLIENTS & PARTNERS */}
      <Partners />

      {/* 7. CTA */}
      <HomeCTA />

    </div>
  );
}



