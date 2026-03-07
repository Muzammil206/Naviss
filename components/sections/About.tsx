import Image from "next/image";
import SR from "@/components/ui/SR";

const VALUES=[
  {title:"Clarity Over Complexity",    body:"Powerful yet intuitive. Sophisticated yet accessible."},
  {title:"Partnership Mindset",         body:"Your success is our success. Long-term, trust-first."},
  {title:"Purpose-Driven Innovation",  body:"Technology should serve meaningful goals, not novelty."},
  {title:"Quality & Accountability",   body:"We own our commitments. Challenges resolved proactively."},
  {title:"Continuous Learning",         body:"In a fast-moving field, we remain students always."},
  {title:"Integrity & Ethics",          body:"Highest standards in data privacy and professional conduct."},
];

export default function About() {
  return (
    <section id="about" className="rule-b">
      <div className="wrap">
        <div className="rule-b py-5 flex items-center justify-between">
          <span className="t-label text-stone">009 — About</span>
          <span className="t-label text-verdant">Mission & Vision</span>
        </div>

        {/* Mission / Vision */}
        <div className="grid lg:grid-cols-2 rule-b divide-y lg:divide-y-0 lg:divide-x" style={{borderColor:"#D8D2C8"}}>
          <SR>
            <div className="p-10 lg:p-14 bg-verdant-pale h-full flex flex-col justify-between">
              <span className="t-label text-verdant mb-8 block">Mission</span>
              <blockquote className="f-serif font-bold text-obsidian leading-tight" style={{fontSize:"clamp(1.5rem,2.8vw,2.5rem)",letterSpacing:"-0.02em"}}>
                "To empower organisations with intelligent geospatial solutions that create lasting positive impact."
              </blockquote>
            </div>
          </SR>
          <SR delay={100}>
            <div className="p-10 lg:p-14 h-full flex flex-col justify-between">
              <span className="t-label text-stone mb-8 block">Vision</span>
              <blockquote className="f-serif font-bold text-iron leading-tight" style={{fontSize:"clamp(1.5rem,2.8vw,2.5rem)",letterSpacing:"-0.02em",fontStyle:"italic"}}>
                "The premier geospatial partner for purpose-driven organisations across Africa and beyond."
              </blockquote>
            </div>
          </SR>
        </div>

        {/* Photo + Values */}
        <div className="grid lg:grid-cols-2 rule-b divide-y lg:divide-y-0 lg:divide-x" style={{borderColor:"#D8D2C8"}}>
          <div className="photo min-h-[320px] lg:h-auto">
            <Image
              src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=900&q=85"
              alt="Team collaborating over maps and data"
              fill sizes="50vw"
            />
            <div className="absolute inset-0" style={{background:"linear-gradient(to top,rgba(20,18,16,0.55) 0%,transparent 55%)"}}/>
            <div className="absolute bottom-6 left-8 z-10">
              <p className="t-label text-verdant mb-1">Naviss Technologies</p>
              <p className="t-label text-white/40" style={{fontSize:"0.6rem"}}>Abuja, Nigeria · Est. 2025</p>
            </div>
          </div>

          <div className="grid grid-cols-2 divide-x divide-y" style={{borderColor:"#D8D2C8"}}>
            {VALUES.map((v,i)=>(
              <SR key={v.title} delay={i*45}>
                <div className="p-6 hover:bg-linen transition-colors">
                  <h4 className="f-serif font-bold text-sm text-obsidian mb-1.5 tracking-tight">{v.title}</h4>
                  <p className="t-label text-stone" style={{fontSize:"0.62rem",letterSpacing:"0.1em"}}>{v.body}</p>
                </div>
              </SR>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
