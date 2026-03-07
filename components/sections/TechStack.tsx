import React from "react";
import SR from "@/components/ui/SR";

const GROUPS=[
  {label:"GIS Platforms",  items:["ArcGIS","QGIS","PostGIS","ArcGIS Online"]},
  {label:"Web Mapping",    items:["Leaflet","Mapbox","OpenLayers"]},
  {label:"Development",    items:["Python","JavaScript","TypeScript","React","Node.js","Django","Flask","SQL","R"]},
  {label:"Cloud & Data",   items:["AWS","Azure","GCP","REST APIs","FME","ETL Pipelines"]},
  {label:"Analytics & AI", items:["Machine Learning","Spatial Stats","BI Visualisation","Big Data"]},
  {label:"Remote Sensing", items:["Satellite Imagery","Drone Mapping","NDVI Analysis","Change Detection"]},
];

export default function TechStack() {
  return (
    <section className="rule-b bg-linen">
      <div className="wrap">
        <div className="rule-b py-5 flex items-center justify-between">
          <span className="t-label text-stone">008 — Technology Stack</span>
          <span className="t-label text-verdant">World-Class Infrastructure</span>
        </div>
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x rule-b" style={{borderColor:"#D8D2C8"}}>
          {GROUPS.map((g,i)=>(
            <SR key={g.label} delay={i*50}>
              <div className="p-8">
                <p className="t-label text-stone mb-5">{g.label}</p>
                <div className="flex flex-wrap gap-2">
                  {g.items.map(t=>(
                    <span key={t} className="t-label text-iron border px-3 py-1.5 hover:border-verdant hover:text-verdant transition-colors cursor-default" style={{borderColor:"#D8D2C8",fontSize:"0.62rem"}}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </SR>
          ))}
        </div>
      </div>
    </section>
  );
}
