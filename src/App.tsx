import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';

// Core Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

// Portfolio & Projects
import Afolu from './pages/Afolu';
import NonAfolu from './pages/NonAfolu';
import Portfolio from './pages/Portfolio';
import ProjectDetail from './pages/ProjectDetail';

// Old vertical pages (can remove later if not needed)
import Advisory from './pages/Advisory';

// Services Pages
import Sustainibility from './pages/Sustainibility';
import GovtNgo from './pages/GovtNgo';
import Corporates from './pages/Corporates';
import Ecotech from './pages/Ecotech';
import ClimateServices from './pages/ClimateServices';
import CarbonConsulting from './pages/CarbonConsulting';
import CarbonProjectDevelopment from './pages/CarbonProjectDevelopment';
import DMRV from './pages/DMRV';
import Training from './pages/Training';
import SolarEPC from './pages/SolarEPC';
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import StakeholderConsultation from "./pages/StakeholderConsultation";
import GetStarted from './pages/GetStarted';
import VisionAndMission from './pages/VisionMission';
import WhyEcoveda from './pages/WhyEcoveda';
import Team from './pages/Team';




// Temporary stub pages
const VerticalPage = ({ title }: { title: string }) => (
  <div className="pt-40 pb-24 text-center">
    <div className="max-w-4xl mx-auto px-4">
      <h1 className="text-5xl font-serif font-bold mb-6 text-gray-900">{title}</h1>
      <p className="text-xl text-gray-600 mb-12">
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

export default function App() {
  return (
    <Router>
      <ScrollToTop />

      <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900 overflow-x-hidden">
        <Navbar />

        <main className="flex-grow">
          <Routes>

            {/* HOME */}
            <Route path="/" element={<Home />} />

            {/* ABOUT */}
            <Route path="/about" element={<About />} />

            {/* OLD STRUCTURE (optional cleanup later) */}
            <Route path="/verticals/project-development" element={<Portfolio />} />
            <Route path="/verticals/advisory" element={<Advisory />} />
            <Route path="/verticals/decarbonisation" element={<Decarbonisation />} />
            <Route path="/verticals/climate-tech" element={<ClimateTechOld />} />

            {/* PROJECTS */}
            <Route path="/projects/afolu" element={<Afolu />} />
            <Route path="/projects/non-afolu" element={<NonAfolu />} />
            <Route path="/portfolio/:id" element={<ProjectDetail />} />

            {/* EXTRA */}
            <Route path="/products" element={<Products />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-started" element={<GetStarted />} />

            {/* SERVICES */}
            <Route path="/services/sustainability" element={<Sustainibility />} />
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
            {/* FALLBACK */}
            <Route
              path="*"
              element={
                <div className="pt-40 text-center text-2xl">
                  Page Not Found
                </div>
              }
            />

          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}