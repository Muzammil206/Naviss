import Image from "next/image";
import SR from "@/components/ui/SR";

const points=[
  {n:"01",title:"Underserved Market",        body:"Massive unmet demand for locally-customised geospatial services across public and private sectors in Nigeria and West Africa."},
  {n:"02",title:"Rising Digital Investment",  body:"Government digitisation programs, donor-funded projects, and private-sector modernisation driving surging demand for GIS solutions."},
  {n:"03",title:"AI + Spatial Convergence",   body:"The fusion of AI and geospatial data is creating entirely new product categories — Naviss sits exactly at this intersection."},
];

export default function Statement() {
  return (
    <section className="rule-b" id="opportunity">
      <div className="wrap">
        <div className="rule-b py-5 flex items-center justify-between">
          <span className="t-label text-stone">002 — The Opportunity</span>
          <span className="t-label text-verdant">Africa's Geospatial Revolution</span>
        </div>

        <div className="grid lg:grid-cols-2 rule-b">
          {/* Left */}
          <div className="rule-r">
            {/* Real photo — Nigerian aerial / urban */}
            <div className="photo h-80">
              <Image
                src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1000&q=85"
                alt="Aerial view of an African city showing urban sprawl"
                fill sizes="50vw"
              />
              <div className="absolute inset-0" style={{background:"linear-gradient(to top,rgba(20,18,16,0.6) 0%,transparent 60%)"}}/>
            </div>
            <div className="p-10 lg:p-12">
              <SR>
                <h2 className="t-h2 text-obsidian mb-6">
                  The gap is real.<br/>
                  <em className="not-italic text-verdant">We fill it.</em>
                </h2>
              </SR>
              <SR delay={80}>
                <p className="t-body-sm mb-4">
                  Africa's rapid urbanisation and growing demand for data-driven governance have created an unprecedented opportunity in location intelligence.
                </p>
                <p className="t-body-sm">
                  Most organisations remain locked out — constrained by lack of local expertise, generic vendor lock-in, and systems not designed for African realities. Naviss closes this gap.
                </p>
              </SR>
            </div>
          </div>

          {/* Right — numbered points */}
          <div className="flex flex-col divide-y" style={{borderColor:"#D8D2C8"}}>
            {points.map((p,i)=>(
              <SR key={p.n} delay={i*80}>
                <div className="p-8 lg:p-10 hover:bg-linen transition-colors flex gap-6">
                  <span className="t-label text-verdant shrink-0 mt-1">{p.n}</span>
                  <div>
                    <h3 className="f-serif font-bold text-xl text-obsidian mb-2 tracking-tight">{p.title}</h3>
                    <p className="t-body-sm">{p.body}</p>
                  </div>
                </div>
              </SR>
            ))}
            {/* Stat callout */}
            <SR delay={280}>
              <div className="p-8 lg:p-10 bg-verdant-pale grid grid-cols-3 gap-4">
                {[{n:"$2B+",l:"Est. Africa GIS market"},{n:"47%",l:"Annual growth rate"},{n:"2030",l:"Target maturity"}].map(s=>(
                  <div key={s.l}>
                    <div className="stat-n">{s.n}</div>
                    <div className="t-label text-stone mt-1 text-[0.6rem]">{s.l}</div>
                  </div>
                ))}
              </div>
            </SR>
          </div>
        </div>
      </div>
    </section>
  );
}
