export const SITE = {
  name:      "Naviss Technologies",
  tagline:   "Where Location Meets Intelligence",
  sub:       "Geospatial & Digital Solutions · Abuja, Nigeria",
  phone:     "+234 806 696 8490",
  email:     "contact@naviss.tech",
  location:  "Abuja, Nigeria",
  founded:   "2025",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/naviss-technologies/" },
    { label: "Twitter / X", href: "https://twitter.com/navisstech" },
    { label: "GitHub", href: "https://github.com" },
    { label: "Instagram", href: "https://www.instagram.com/naviss.technologies?igsh=MWhpbXNndmxoaTFvOA%3D%3D&utm_source=qr" }
  ],
};

export const NAV = [
  { label: "Services", href: "#services"  },
  { label: "Projects", href: "#projects"  },
  { label: "Process",  href: "#process"   },
  { label: "Sectors",  href: "#sectors"   },
  { label: "About",    href: "#about"     },
  { label: "Team",     href: "#team"      },
];

export const PROJECTS = [
  {
    id: "001",
    title: "West Africa GeoPortal",
    client: "GMES-MIFMAS Programme / African Union Commission",
    region: "West Africa (Multi-Country)",
    year: "2024-2025",
    sector: "Regional Development",
    tags: ["Geospatial data", "Web GIS", "Open Data"],
    body: "Comprehensive geospatial data portal providing access to 56+ spatial datasets across 6 West African countries (Nigeria, Ghana, Mali, Benin, Burkina Faso, Côte d'Ivoire). Platform enables researchers, policymakers and development practitioners to explore, visualize, analyze and download geospatial data including rivers, settlements, infrastructure, land cover, and administrative boundaries.",
    impact: "56+ datasets · 6 countries · 1,000+ daily users · 50,000+ features mapped",
    image: "/docs.jpg",
    imageAlt: "Satellite view of West African coastline and terrain",
  },
  {
    id: "002",
    title: "AirSense Nigeria",
    client: "NASRDA (National Space Research & Development Agency)",
    region: "Nigeria (Multi-City)",
    year: "2024-2025",
    sector: "Environment & Public Health",
    tags: ["Real-Time", "AI/ML", "Satellite Data"],
    body: "Real-time air quality monitoring platform integrating satellite data with ground sensors across Nigeria's major cities (Abuja, Lagos, Port Harcourt, Kano). Provides actionable environmental intelligence to scientists, policymakers, and citizens through live AQI readings, historical trend analysis, predictive modeling, and health-impact assessments.",
    impact: "4 cities monitored · 24/7 real-time data · 99.8% uptime · <2min latency",
    image: "https://images.unsplash.com/photo-1537372023620-37161b1ad8ac?w=1400&q=85",
    imageAlt: "City skyline with atmospheric monitoring overlay",
  },
  {
    id: "003",
    title: "Surveyor General Information System (SGIS)",
    client: "Office of the Surveyor General, Kwara State (KW-GIS)",
    region: "Kwara State, Nigeria",
    year: "2025",
    sector: "Land Administration",
    tags: ["Land information system", "PostGIS", "Workflow Automation"],
    body: "Comprehensive land registration and survey workflow automation platform for the Office of the Surveyor General. Four-component system including WebGIS parcel database, land registration workflows, institutional email infrastructure, and capacity development programme. Deployed on private office server infrastructure.",
    impact: "Paper workflows eliminated · 4 departments unified · 60% faster processing",
    image: "https://images.unsplash.com/photo-1685266325930-ffe4937f6eb9?w=1400&q=85",
    imageAlt: "Surveyor using digital equipment in field",
  },
  {
    id: "004",
    title: "Regional Cropland Monitoring System",
    client: "Agricultural Development Agency",
    region: "North-Central Nigeria",
    year: "2024",
    sector: "Agriculture",
    tags: ["Remote Sensing", "NDVI", "Dashboard"],
    body: "Satellite-powered crop health monitoring enabling early detection of stress zones across 200,000+ hectares. Integrated NDVI, weather layers, and soil data into weekly actionable reports for extension workers across multiple local government areas.",
    impact: "200K+ ha monitored · 34% fewer field inspections · 6 LGAs served",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1400&q=85",
    imageAlt: "Aerial view of green agricultural fields",
  },
  {
    id: "005",
    title: "City Infrastructure Digital Atlas",
    client: "Metropolitan Planning Authority",
    region: "Abuja FCT",
    year: "2024",
    sector: "Urban Planning",
    tags: ["Web GIS", "PostGIS", "React"],
    body: "Interactive web GIS platform consolidating roads, utilities, land-use and demographic data for daily use by four government departments. Replaced paper-based permit workflows entirely with digital system.",
    impact: "4 departments unified · 60% faster permits · 1,200+ assets digitized",
    image: "https://images.unsplash.com/photo-1749058388308-744fdc8991ed?w=1400&q=85",
    imageAlt: "Aerial cityscape at dusk showing urban infrastructure",
  },
  {
    id: "006",
    title: "IDP Displacement Tracker",
    client: "International NGO",
    region: "North-East Nigeria",
    year: "2024",
    sector: "Humanitarian",
    tags: ["Mobile Data", "Offline-First", "Real-Time"],
    body: "Offline-capable mobile data collection and case management for IDP registration across three states. Automatic sync ensures field teams operate on verified live data at all times even in areas with limited connectivity.",
    impact: "12,000+ registered · 3-state coverage · 40% faster intake",
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=1400&q=85",
    imageAlt: "Field worker using tablet for data collection",
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