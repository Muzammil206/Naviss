export const SITE = {
  name:      "Naviss Technologies",
  tagline:   "Where Location Meets Intelligence",
  sub:       "Geospatial & Digital Solutions · Abuja, Nigeria",
  phone:     "+234 806 696 8490",
  email:     "navisstech@gmail.com",
  location:  "Abuja, Nigeria",
  founded:   "2025",
};

export const NAV = [
  { label: "Services", href: "#services"  },
  { label: "Projects", href: "#projects"  },
  { label: "Process",  href: "#process"   },
  { label: "Sectors",  href: "#sectors"   },
  { label: "About",    href: "#about"     },
];

export const PROJECTS = [
  {
    id: "001",
    title: "Cropland Monitoring System",
    client: "Regional Agricultural Agency",
    region: "North-Central Nigeria",
    year: "2025",
    sector: "Agriculture",
    tags: ["Remote Sensing", "AI/ML", "Dashboard"],
    body: "Satellite-powered crop health monitoring enabling early detection of stress zones across 200,000+ hectares. Integrated NDVI, weather layers, and soil data into weekly actionable reports for extension workers across 6 LGAs.",
    impact: "200K+ ha monitored · 34% fewer field inspections · 6 LGAs served",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1400&q=85",
    imageAlt: "Aerial view of green agricultural fields",
  },
  {
    id: "002",
    title: "City Infrastructure Atlas",
    client: "Metropolitan Planning Authority",
    region: "Abuja FCT",
    year: "2025",
    sector: "Urban Planning",
    tags: ["Web GIS", "PostGIS", "React"],
    body: "Interactive web GIS platform consolidating roads, utilities, land-use and demographic data for daily use by four government departments. Replaced paper-based permit workflows entirely.",
    impact: "4 departments unified · 60% faster permits · 1,200 assets digitised",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1400&q=85",
    imageAlt: "Aerial cityscape at dusk",
  },
  {
    id: "003",
    title: "IDP Displacement Tracker",
    client: "International NGO",
    region: "North-East Nigeria",
    year: "2025",
    sector: "Humanitarian",
    tags: ["Mobile Data", "Offline-First", "Real-Time"],
    body: "Offline-capable mobile data collection and case management for IDP registration across three states. Automatic sync ensures field teams operate on verified live data at all times.",
    impact: "12,000+ registered · 3-state coverage · 40% faster intake",
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=1400&q=85",
    imageAlt: "Field worker using tablet for data collection",
  },
  {
    id: "004",
    title: "Disease Surveillance Dashboard",
    client: "State Ministry of Health",
    region: "South-West Nigeria",
    year: "2025",
    sector: "Public Health",
    tags: ["Spatial Analytics", "Alerts", "Python"],
    body: "Real-time geospatial surveillance integrating health facility reports with population density layers. Automated anomaly alerts cut outbreak detection time from two weeks to five days.",
    impact: "Detection −5 days · 320 facilities online · Weekly briefs automated",
    image: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=1400&q=85",
    imageAlt: "Doctor reviewing digital health data",
  },
  {
    id: "005",
    title: "Power Grid Asset Tracker",
    client: "Power Distribution Company",
    region: "South-West Nigeria",
    year: "2025",
    sector: "Energy",
    tags: ["ArcGIS", "Asset Mgmt", "Predictive"],
    body: "GIS-based asset inventory correlating fault history with spatial asset age. Proactive maintenance routing reduced unplanned outages within the first year of deployment.",
    impact: "8,500+ assets mapped · 22% fewer outages · ₦120M saved",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1400&q=85",
    imageAlt: "Electrical transmission towers at sunset",
  },
  {
    id: "006",
    title: "Forest Cover Change Analysis",
    client: "Conservation Authority",
    region: "South-South Nigeria",
    year: "2025",
    sector: "Environment",
    tags: ["Drone Mapping", "Multi-temporal", "QGIS"],
    body: "Multi-temporal satellite and drone-based deforestation monitoring across a protected watershed. Quarterly reports with GPS-tagged evidence were adopted directly by enforcement authorities.",
    impact: "45,000 ha monitored · 3 encroachments halted · State policy adopted",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1400&q=85",
    imageAlt: "Aerial view of dense forest canopy",
  },
];

export const SERVICES = [
  { n:"01", title:"Geospatial Strategy & Solution Design",    tags:["Feasibility","ROI Analysis","Roadmaps"],       body:"Needs assessment, solution architecture, business case development, and digital transformation roadmaps — built around your organisation's goals." },
  { n:"02", title:"Data Collection, Management & Integration",tags:["Drone Mapping","Cloud Infra","ETL"],           body:"Field collection via mobile, drone and satellite. Spatial database design, AWS / Azure / GCP cloud infrastructure, API development." },
  { n:"03", title:"Custom Software & Intelligent Systems",    tags:["AI/ML","Web GIS","Real-Time"],                 body:"Web GIS dashboards, mobile apps, AI/ML analytics, automated alerts, and real-time spatial visualisation — built around your workflows." },
  { n:"04", title:"Implementation & Technical Support",       tags:["Deployment","UAT","Helpdesk"],                 body:"Deployment, UAT, performance optimisation, documentation, helpdesk support, and long-term maintenance." },
  { n:"05", title:"Training & Capacity Development",          tags:["Workshops","Certification","Mentorship"],      body:"Customised training from beginner to advanced, train-the-trainer workshops, certification programs, and ongoing mentorship." },
];

export const PROCESS = [
  { n:"01", time:"1–2 wks",  title:"Discovery",       body:"Deep-dive needs assessment, stakeholder interviews, feasibility analysis. Align on goals, constraints, and what real success looks like." },
  { n:"02", time:"2–4 wks",  title:"Solution Design", body:"Architecture, technology selection, business case, data strategy, and a phased roadmap tailored for your context — not a template." },
  { n:"03", time:"4–12 wks", title:"Build & Deploy",  body:"Agile sprints, regular demos, rigorous UAT, clean deployment with full documentation. No black boxes, no disappearing acts." },
  { n:"04", time:"Ongoing",  title:"Train & Sustain", body:"Your team fully owns the system. Comprehensive training, documentation, and genuine long-term partnership." },
];

export const SECTORS = [
  { title:"Agriculture & Natural Resources", sub:"Precision farming, land management, forestry" },
  { title:"Urban Planning & Development",    sub:"City planning, infrastructure, smart cities"  },
  { title:"Public Health",                   sub:"Disease surveillance, facility mapping"       },
  { title:"Humanitarian & Development",      sub:"Disaster response, IDP services, monitoring"  },
  { title:"Environment & Conservation",      sub:"Biodiversity, climate adaptation"             },
  { title:"Energy & Utilities",              sub:"Asset management, network planning"           },
  { title:"Transportation & Logistics",      sub:"Route optimisation, fleet, infrastructure"    },
  { title:"Finance & Investment",            sub:"Market analysis, site selection, risk mapping"},
  { title:"Oil and Gas",                     sub:"Exploration, pipeline monitoring, environmental impact" },
];

export const TICKER = ["Geospatial Intelligence","Drone & Satellite Mapping","Custom GIS Platforms","AI / ML Spatial Analytics","Digital Transformation","Cloud Infrastructure","Capacity Development","Real-Time Monitoring","Web GIS Dashboards","Spatial Databases"];
