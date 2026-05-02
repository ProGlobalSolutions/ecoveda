import React, { useEffect, useState } from 'react';
import { geoNaturalEarth1, geoPath } from 'd3-geo';
// @ts-ignore
import { feature } from 'topojson-client';
import worldData from '../../assets/countries-110m.json';

const WIDTH  = 960;
const HEIGHT = 500;

const projection = geoNaturalEarth1()
  .scale(190)
  .translate([WIDTH / 2 - 30, HEIGHT / 2 + 20]);

const pathGenerator = geoPath(projection);

// Convert TopoJSON → GeoJSON
// @ts-ignore
const countries = feature(worldData, worldData.objects.countries);

/* ──────────────────────────────────────────────────
   LOCATIONS — same as before, now in SVG coordinate space
   top/left as % of the SVG viewport (960×500)
   ────────────────────────────────────────────────── */
const LOCATIONS = [
  { id: 'delhi',     name: 'New Delhi, India (HQ)',  lon: 77.2,  lat: 28.6,  color: '#ffffff', glow: 'rgba(255,255,255,0.45)' },
  { id: 'guwahati',  name: 'Guwahati, India',         lon: 91.7,  lat: 26.1,  color: '#ffffff', glow: 'rgba(255,255,255,0.35)' },
  { id: 'pakistan',  name: 'Pakistan',                lon: 67.0,  lat: 30.0,  color: '#ffffff', glow: 'rgba(255,255,255,0.30)' },
  { id: 'indonesia', name: 'Indonesia',               lon: 113.9, lat: -0.8,  color: '#ffffff', glow: 'rgba(255,255,255,0.30)' },
  { id: 'timor',     name: 'Timor-Leste',             lon: 125.7, lat: -8.9,  color: '#ffffff', glow: 'rgba(255,255,255,0.30)' },
  { id: 'saudi',     name: 'Saudi Arabia',            lon: 45.1,  lat: 23.9,  color: '#ffffff', glow: 'rgba(255,255,255,0.30)' },
  { id: 'cambodia',  name: 'Cambodia',                lon: 104.9, lat: 12.6,  color: '#ffffff', glow: 'rgba(255,255,255,0.30)' },
  { id: 'malawi',    name: 'Malawi',                  lon: 34.3,  lat: -13.3, color: '#ffffff', glow: 'rgba(255,255,255,0.30)' },
  { id: 'rwanda',    name: 'Rwanda',                  lon: 29.9,  lat: -1.9,  color: '#ffffff', glow: 'rgba(255,255,255,0.30)' },
  { id: 'nigeria',   name: 'Nigeria',                 lon: 8.7,   lat: 9.1,   color: '#ffffff', glow: 'rgba(255,255,255,0.30)' },
  { id: 'mongolia',  name: 'Mongolia',                lon: 103.8, lat: 46.9,  color: '#ffffff', glow: 'rgba(255,255,255,0.30)' },
  { id: 'zambia',    name: 'Zambia',                  lon: 27.8,  lat: -13.1, color: '#f59e0b', glow: 'rgba(245,158,11,0.50)' },
  { id: 'mexico',    name: 'Mexico City',             lon: -99.1, lat: 19.4,  color: '#f59e0b', glow: 'rgba(245,158,11,0.50)' },
];

export default function GlobalPresence() {
  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-5">
          <span className="text-emerald-600 font-semibold uppercase text-sm tracking-wider block mb-3">
            Global Presence
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Where We Work
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            From our headquarters in New Delhi, Ecoveda Climate operates a growing international network, with a regional office in Guwahati and representatives in Zambia and Mexico City, enabling us to deliver on-the-ground climate impact across Asia, Africa, the Middle East and Latin America.
          </p>
        </div>

        {/* MAP CONTAINER */}
        <div className="relative w-full rounded-3xl overflow-hidden mb-6" style={{ backgroundColor: '#0d2e2a' }}>
          <div className="w-full overflow-auto scrollbar-hide">
            <svg
              viewBox="80 10 800 460"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto block"
              style={{ minWidth: '600px' }}
            >
              {/* Background */}
              <rect width={WIDTH} height={HEIGHT} fill="#0d2e2a" />

              {/* Country paths */}
              {/* @ts-ignore */}
              {countries.features.map((feat: any, i: number) => (
                <path
                  key={i}
                  d={pathGenerator(feat) || ''}
                  fill="#1a4a40"
                  stroke="#0d2e2a"
                  strokeWidth={0.5}
                />
              ))}

              {/* LOCATION PINS */}
              {LOCATIONS.map((loc) => {
                const coords = projection([loc.lon, loc.lat]);
                if (!coords) return null;
                const [x, y] = coords;
                return (
                  <g key={loc.id} transform={`translate(${x},${y})`} className="group">
                    {/* Outer pulse ring */}
                    <circle r={8} fill={loc.glow} opacity={0.4}>
                      <animate attributeName="r" values="6;12;6" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.5;0;0.5" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                    {/* Dot */}
                    <circle
                      r={4}
                      fill={loc.color}
                      style={{ filter: `drop-shadow(0 0 4px ${loc.glow})` }}
                    />
                    {/* Label on hover via title */}
                    <title>{loc.name}</title>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* LEGEND */}
          <div className="flex flex-wrap justify-center gap-6 px-6 py-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_6px_2px_rgba(255,255,255,0.5)]" />
              <span className="text-sm font-medium text-white/80">HQ &amp; Regional Offices</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-white/60 shadow-[0_0_6px_2px_rgba(255,255,255,0.3)]" />
              <span className="text-sm font-medium text-white/80">Active Projects &amp; Advisory</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_6px_2px_rgba(245,158,11,0.5)]" />
              <span className="text-sm font-medium text-white/80">Representatives</span>
            </div>
          </div>
        </div>

        {/* DETAILS GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
            <h3 className="font-bold text-slate-900 mb-2">Headquarters</h3>
            <p className="text-slate-600 mb-3">New Delhi, India</p>
            <p className="text-sm text-slate-500 leading-relaxed">
              DGL 019, Ground Floor, DLF Galleria, Mayur Vihar, New Delhi 110091
            </p>
          </div>
          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
            <h3 className="font-bold text-slate-900 mb-2">Regional Office</h3>
            <p className="text-slate-600 mb-3">Guwahati, India</p>
            <p className="text-sm text-slate-500 leading-relaxed">
              Supporting operations across North-East India and South-East Asian markets
            </p>
          </div>
          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
            <h3 className="font-bold text-slate-900 mb-2">International</h3>
            <p className="text-slate-600 mb-3">Zambia and Mexico City</p>
            <p className="text-sm text-slate-500 leading-relaxed">
              Regional representatives driving climate projects across Africa and Latin America
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
