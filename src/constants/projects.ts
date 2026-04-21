import maharashtra from "../assets/maharashtra.webp"
import madhya from "../assets/madhya.webp"
import mangrove from "../assets/mangrove.webp"
import rainbow from "../assets/rainbow.webp"
import telangana from "../assets/telangana.webp"

export interface Project {
  id: string;
  name: string;
  type: 'NCS' | 'CDR';
  image: string;
  registry: string;
  location: string;
  creditingPeriod: string;
  primaryActivity: string;
  secondaryActivities?: string[];
  impacts: { title: string; description: string }[];
  sdgs: number[];
}

export const PROJECTS: Project[] = [
  {
    id: 'maharashtra-arr',
    name: 'Maharashtra ARR Project',
    type: 'NCS',
    image: maharashtra,
    registry: 'Verra / VCS',
    location: 'Maharashtra, India',
    creditingPeriod: '20 Years',
    primaryActivity: 'Afforestation, Reforestation and Revegetation (ARR) across degraded forest lands and community areas in Maharashtra. The project focuses on planting indigenous species to restore native ecosystems while creating robust carbon sinks.',
    secondaryActivities: [
      'Biodiversity monitoring and protection',
      'Community forest management training',
      'Fire prevention and management systems',
      'Non-timber forest product development'
    ],
    impacts: [
      { title: 'Carbon Sequestration', description: 'Expected to sequester over 500,000 tCO2e over the first crediting period.' },
      { title: 'Biodiversity', description: 'Restoration of habitat for local fauna and enhancement of floral diversity.' },
      { title: 'Community', description: 'Creation of over 200 seasonal and permanent local jobs.' },
      { title: 'Soil Health', description: 'Significant reduction in soil erosion and improved water retention.' }
    ],
    sdgs: [1, 5, 8, 13, 15]
  },
  {
    id: 'madhya-pradesh-arr',
    name: 'Madhya Pradesh ARR Project',
    type: 'NCS',
    image: madhya,
    registry: 'Verra / VCS',
    location: 'Madhya Pradesh, India',
    creditingPeriod: '30 Years',
    primaryActivity: 'Large-scale reforestation of degraded lands in central India. This initiative utilizes climate-resilient species to ensure long-term carbon permanence and ecosystem stability.',
    impacts: [
      { title: 'Emission Reduction', description: 'Long-term sequestration in biomass and soil pools.' },
      { title: 'Water Security', description: 'Enhanced groundwater recharge through restored vegetation cover.' },
      { title: 'Livelihoods', description: 'Support for local agrarian communities through silvopastural integration.' },
      { title: 'Climate Resilience', description: 'Mitigation of heat island effects in the local microclimate.' }
    ],
    sdgs: [1, 3, 13, 15]
  },
  {
    id: 'telangana-andhra-arr',
    name: 'Telangana & Andhra Pradesh ARR Project',
    type: 'NCS',
    image: telangana,
    registry: 'Gold Standard',
    location: 'Telangana & Andhra Pradesh, India',
    creditingPeriod: '20 Years',
    primaryActivity: 'A multi-state project focusing on agroforestry and sustainable land management. By integrating trees into existing agricultural landscapes, the project enhances farmer incomes while sequestering significant carbon.',
    secondaryActivities: [
      'Agroforestry workshop for smallholder farmers',
      'Seedling distribution network',
      'Carbon literacy programmes'
    ],
    impacts: [
      { title: 'Income Diversity', description: 'New revenue streams for 1,500+ smallholder farmers.' },
      { title: 'Ecosystem Services', description: 'Natural pest control and improved soil nutrient cycling.' },
      { title: 'Adaptation', description: 'Increased resilience to extreme weather events for crops.' },
      { title: 'Carbon Capture', description: 'High-integrity credits verified under Gold Standard.' }
    ],
    sdgs: [1, 2, 8, 13, 17]
  },
  {
    id: 'india-mangrove-restoration',
    name: 'India Mangrove Restoration Project',
    type: 'NCS',
    image: mangrove,
    registry: 'Verra / Blue Carbon',
    location: 'Coastal India',
    creditingPeriod: '25 Years',
    primaryActivity: 'Restoration of critical mangrove ecosystems along the Indian coastline. Mangroves are among the most carbon-rich ecosystems on earth, and their restoration provides both carbon sequestration and coastal protection.',
    secondaryActivities: [
      'Nursery establishment for salt-tolerant species',
      'Coastal community engagement and education',
      'Marine life habitat surveys'
    ],
    impacts: [
      { title: 'Blue Carbon', description: 'Highly efficient sequestration in both biomass and deep sediment layers.' },
      { title: 'Coastal Shield', description: 'Protection against storm surges and rising sea levels for local villages.' },
      { title: 'Fisheries', description: 'Restoration of key breeding grounds for commercially important fish species.' },
      { title: 'Phytoremediation', description: 'Natural filtration of coastal runoff and improved water quality.' }
    ],
    sdgs: [11, 13, 14, 15]
  },
  {
    id: 'rainbow-erw-madhya-pradesh',
    name: 'Rainbow ERW Project, Madhya Pradesh',
    type: 'CDR',
    image: rainbow,
    registry: 'Puro.earth / ISO 14064-2',
    location: 'Madhya Pradesh, India',
    creditingPeriod: '10 Years (Renewable)',
    primaryActivity: 'Enhanced Rock Weathering (ERW) involving the application of crushed silicate rocks (like basalt) onto agricultural soils. This accelerated natural weathering process permanently removes CO2 from the atmosphere by converting it into stable bicarbonates.',
    secondaryActivities: [
      'Soil nutrient analysis and monitoring',
      'Baseline mineralogical surveys',
      'Optimised logistics for rock dust distribution'
    ],
    impacts: [
      { title: 'Permanent Removal', description: 'CO2 removal with a durability of 1,000+ years.' },
      { title: 'Soil Enrichment', description: 'Natural restoration of essential minerals and pH balancing in farmland.' },
      { title: 'Agronomic Yield', description: 'Potential increase in crop productivity due to improved soil health.' },
      { title: 'Ocean Health', description: 'Bicarbonates eventually flow to oceans, helping combat acidification.' }
    ],
    sdgs: [2, 9, 13, 14]
  }
];
