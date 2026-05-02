import Hero from '../components/home/Hero';
import Intro from '../components/home/Intro';
import Verticals from '../components/home/Verticals';
import TrackRecord from '../components/home/TrackRecord';
import GlobalPresence from '../components/home/GlobalPresence';
import Partners from '../components/home/Partners';
import HomeCTA from '../components/home/HomeCTA';

export default function Home() {
  return (
    <div className="flex flex-col">

      {/* 1. HERO */}
      <Hero />

      {/* 2. INTRO (About Ecoveda) */}
      <Intro />

      {/* 3. EXPERTISE */}
      <Verticals />

      {/* 4. TRACK RECORD */}
      <TrackRecord />

      {/* 5. GLOBAL PRESENCE */}
      <GlobalPresence />

      {/* 6. CLIENTS & PARTNERS */}
      <Partners />

      {/* 7. CTA */}
      <HomeCTA />

    </div>
  );
}



