import React from 'react';

import logo1  from '../../assets/1.webp';
import logo2  from '../../assets/2.webp';
import logo3  from '../../assets/3.webp';
import logo4  from '../../assets/4.webp';
import logo5  from '../../assets/5.webp';
import logo6  from '../../assets/6.webp';
import logo7  from '../../assets/7.webp';
import logo8  from '../../assets/8.webp';
import logo9  from '../../assets/9.svg';
import logo10 from '../../assets/10.webp';
import logo11 from '../../assets/11.webp';
import logo12 from '../../assets/12.webp';
import logo13 from '../../assets/13.webp';
import logo14 from '../../assets/14.webp';
import logo15 from '../../assets/15.webp';
import logo16 from '../../assets/16.webp';
import logo17 from '../../assets/17.webp';
import logo18 from '../../assets/18.webp';
import logo19 from '../../assets/19.webp';
import logo20 from '../../assets/20.webp';
import logo21 from '../../assets/21.webp';
import logo22 from '../../assets/22.webp';
import logo23 from '../../assets/23.webp';
import logo24 from '../../assets/24.svg';
import logo25 from '../../assets/25.webp';
import logo26 from '../../assets/26.webp';
import logo27 from '../../assets/27.webp';

const ALL_LOGOS = [
  { name: "Aarksee",                         logo: logo1  },
  { name: "SK Forest",                        logo: logo2  },
  { name: "CarboVerte",                       logo: logo3  },
  { name: "Meta Materials Circular Markets",  logo: logo4  },
  { name: "Sevenstar",                        logo: logo5  },
  { name: "Cenergist",                        logo: logo6  },
  { name: "Resources Future",                 logo: logo7  },
  { name: "SKG Sangha",                       logo: logo8  },
  { name: "Thriveni",                         logo: logo9  },
  { name: "ATOA",                             logo: logo10 },
  { name: "ATR Carbon Solution",              logo: logo11 },
  { name: "Attero",                           logo: logo12 },
  { name: "Sembcorp",                         logo: logo13 },
  { name: "Prana Climatech",                  logo: logo14 },
  { name: "CO2 Cap Projects Africa",          logo: logo15 },
  { name: "Vision Green Tech",                logo: logo16 },
  { name: "YadGreen",                         logo: logo17 },
  { name: "Planet NetZero",                   logo: logo18 },
  { name: "Al-Badhour Al-Hayya",              logo: logo19 },
  { name: "RM Agrico",                        logo: logo20 },
  { name: "Mahadesh Farms",                   logo: logo21 },
  { name: "Goenvi Technologies",              logo: logo22 },
  { name: "Pineview Technology",              logo: logo23 },
  { name: "Lloyds Metals",                    logo: logo24 },
  { name: "Ruuris Innovations",               logo: logo25 },
  { name: "Govt. of Maharashtra",             logo: logo26 },
  { name: "AADB",                             logo: logo27 },
];

// Split 27 logos into 3 rows of 9
const ROW1 = ALL_LOGOS.slice(0,  9);
const ROW2 = ALL_LOGOS.slice(9,  18);
const ROW3 = ALL_LOGOS.slice(18, 27);

// Single logo — image only, no card box
function LogoCard({ partner }: { partner: (typeof ALL_LOGOS)[0] }) {
  return (
    <div className="group flex-shrink-0 mx-4 md:mx-8 flex items-center justify-center cursor-pointer">
      <img
        src={partner.logo}
        alt={partner.name}
        title={partner.name}
        className="h-8 md:h-12 w-auto max-w-[100px] md:max-w-[130px] object-contain transition-all duration-400 ease-in-out group-hover:scale-110 grayscale-[30%] opacity-90 group-hover:grayscale-0 group-hover:opacity-100"
        loading="lazy"
      />
    </div>
  );
}


// One scrolling marquee row — direction: 'left' | 'right'
function MarqueeRow({ logos, direction }: { logos: typeof ROW1; direction: 'left' | 'right' }) {
  // Use more logos to ensure the track is long enough on all screens
  const doubled = [...logos, ...logos, ...logos, ...logos];
  
  // On mobile, we can force left direction via CSS if we want, 
  // but for now let's just use the p
  const trackClass = direction === 'left' ? 'marquee-track-left' : 'marquee-track-right';

  return (
    <div className="marquee-row overflow-hidden w-full py-2 md:py-4 flex items-center">
      <div className={`${trackClass} flex`}>
        {doubled.map((partner, i) => (
          <LogoCard key={`${partner.name}-${i}`} partner={partner} />
        ))}
      </div>
    </div>
  );
}

export default function Partners() {
  return (
    <section className="py-16 overflow-hidden" style={{ backgroundColor: '#012A24', backgroundImage: 'none' }}>
      <div className="max-w-7xl mx-auto px-6 mb-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-emerald-400 font-semibold uppercase text-sm tracking-wider block mb-3">
            Our Clients and Partners
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Trusted by Innovators Across the Climate Economy
          </h2>
          <p className="text-white/70 text-base leading-relaxed">
            From governments and multilateral agencies to pioneering climate technology start-ups,
            Ecoveda Climate partners with organisations that share our commitment to high-integrity
            carbon markets and measurable climate impact.
          </p>
        </div>
      </div>

      {/* MARQUEE ROWS — full width */}
      <div className="flex flex-col gap-5">
        <MarqueeRow logos={ROW1} direction="left"  />
        <MarqueeRow logos={ROW2} direction="right" />
        <MarqueeRow logos={ROW3} direction="left"  />
      </div>
    </section>
  );
}
