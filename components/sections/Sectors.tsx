import { SECTORS } from "@/lib/data";
import SR from "@/components/ui/SR";

/* Lucide-style inline SVG icons — real icons, zero emoji */
const ICONS: Record<number, JSX.Element> = {
  0: <path d="M12 22V2m5 5-5-5-5 5M5 10.5 12 7l7 3.5M5 15.5 12 12l7 3.5M5 20.5 12 17l7 3.5" strokeLinecap="round" strokeLinejoin="round"/>,
  1: <><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/></>,
  2: <><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l1.5-2.5 2.5 5 1.5-2.5h5.27"/></>,
  3: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
  4: <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10ZM2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" strokeLinecap="round" strokeLinejoin="round"/>,
  5: <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14Z"/>,
  6: <><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></>,
  7: <><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></>,
};

function Icon({i}:{i:number}){
  return(
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      {ICONS[i]}
    </svg>
  );
}

export default function Sectors() {
  return (
    <section id="sectors" className="rule-b">
      <div className="wrap">
        <div className="rule-b py-5 flex items-center justify-between">
          <span className="t-label text-stone">007 — Industries Served</span>
        </div>
        <div className="rule-b py-14">
          <SR><h2 className="t-h1 text-obsidian">Wherever location<br/><em className="text-verdant">matters.</em></h2></SR>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 rule-b divide-x divide-y" style={{borderColor:"#D8D2C8"}}>
          {SECTORS.map((s,i)=>(
            <SR key={s.title} delay={i*45}>
              <div className="p-7 hover:bg-linen transition-colors group cursor-default">
                <div className="w-10 h-10 border flex items-center justify-center text-stone group-hover:text-verdant group-hover:border-verdant/40 transition-colors mb-5" style={{borderColor:"#D8D2C8"}}>
                  <Icon i={i}/>
                </div>
                <h4 className="f-serif font-bold text-sm text-obsidian tracking-tight mb-1.5 leading-tight group-hover:text-verdant transition-colors">{s.title}</h4>
                <p className="t-label text-stone" style={{fontSize:"0.62rem",letterSpacing:"0.1em"}}>{s.sub}</p>
              </div>
            </SR>
          ))}
        </div>
      </div>
    </section>
  );
}
