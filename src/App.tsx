import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';

// Lazy loaded pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Region = React.lazy(() => import('./pages/Region'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Portfolio = React.lazy(() => import('./pages/Portfolio'));
const ProjectDetail = React.lazy(() => import('./pages/ProjectDetail'));
const Advisory = React.lazy(() => import('./pages/Advisory'));
const GovtNgo = React.lazy(() => import('./pages/GovtNgo'));
const Corporates = React.lazy(() => import('./pages/Corporates'));
const Ecotech = React.lazy(() => import('./pages/Ecotech'));
const ClimateServices = React.lazy(() => import('./pages/ClimateServices'));
const CarbonConsulting = React.lazy(() => import('./pages/CarbonConsulting'));
const CarbonProjectDevelopment = React.lazy(() => import('./pages/CarbonProjectDevelopment'));
const DMRV = React.lazy(() => import('./pages/DMRV'));
const Training = React.lazy(() => import('./pages/Training'));
const SolarEPC = React.lazy(() => import('./pages/SolarEPC'));
const Blogs = React.lazy(() => import('./pages/Blogs'));
const BlogDetail = React.lazy(() => import('./pages/BlogDetail'));
const News = React.lazy(() => import('./pages/News'));
const NewsDetail = React.lazy(() => import('./pages/NewsDetail'));
const StakeholderConsultation = React.lazy(() => import('./pages/StakeholderConsultation'));
const GetStarted = React.lazy(() => import('./pages/GetStarted'));
const VisionAndMission = React.lazy(() => import('./pages/VisionMission'));
const WhyEcoveda = React.lazy(() => import('./pages/WhyEcoveda'));
const Team = React.lazy(() => import('./pages/Team'));
const Admin = React.lazy(() => import('./pages/Admin'));

// Temporary stub pages
const VerticalPage = ({ title }: { title: string }) => (
  <div className="pt-20 pb-24 text-center">
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-5xl font-serif font-bold mb-6 text-gray-900">{title}</h1>
      <p className="text-xl text-gray-600 mb-6">
        Detailed insights and solutions for {title} coming soon.
      </p>
      <div className="bg-emerald-50 p-12 rounded-[2.5rem] border border-emerald-100">
        <p className="text-emerald-800 font-medium italic">
          "Transforming industries through innovation."
        </p>
      </div>
    </div>
  </div>
);

const Decarbonisation = () => <VerticalPage title="Decarbonisation & ESG" />;
const ClimateTechOld = () => <VerticalPage title="Climate Technology" />;
const Products = () => <VerticalPage title="Our Products" />;
const Blog = () => <VerticalPage title="Ecobuzz Blog" />;

// Loading Fallback Component
const Loader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900 overflow-x-hidden">
        <Navbar />

        <main className="flex-grow">
          <Suspense fallback={<Loader />}>
            <Routes>

              {/* HOME */}
              <Route path="/" element={<Home />} />

              {/* ABOUT */}
              <Route path="/about" element={<About />} />
              <Route path="/region" element={<Region />} />

              {/* OLD STRUCTURE (optional cleanup later) */}
              <Route path="/verticals/project-development" element={<Portfolio />} />
              <Route path="/verticals/advisory" element={<Advisory />} />
              <Route path="/verticals/decarbonisation" element={<Decarbonisation />} />
              <Route path="/verticals/climate-tech" element={<ClimateTechOld />} />

              <Route path="/portfolio/:id" element={<ProjectDetail />} />

              {/* EXTRA */}
              <Route path="/products" element={<Products />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/get-started" element={<GetStarted />} />

              {/* SERVICES */}
              <Route path="/services/govt-ngo" element={<GovtNgo />} />
              <Route path="/services/corporates" element={<Corporates />} />
              <Route path="/services/ecotech" element={<Ecotech />} />
              <Route path="/services/climate" element={<ClimateServices />} />
              <Route path="/services/carbon-consulting" element={<CarbonConsulting />} />
              <Route path="/services/project-development" element={<CarbonProjectDevelopment />} />
              <Route path="/services/dmrv" element={<DMRV />} />
              <Route path="/services/training" element={<Training />} />
              <Route path="/services/solar-epc" element={<SolarEPC />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:id" element={<BlogDetail />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:id" element={<NewsDetail />} />
              <Route path="/stakeholder-consultation" element={<StakeholderConsultation />} />
              <Route path="/vision-mission" element={<VisionAndMission />} />
              <Route path="/why-ecoveda" element={<WhyEcoveda />} />
              <Route path="/team" element={<Team />} />
              <Route path="/admin" element={<Admin />} />
              {/* FALLBACK */}
              <Route
                path="*"
                element={
                  <div className="pt-20 text-center text-2xl">
                    Page Not Found
                  </div>
                }
              />

            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  );
}



