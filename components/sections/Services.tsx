import { SERVICES } from "@/lib/data";
import SR from "@/components/ui/SR";

export default function Services() {
  return (
    <section id="services" className="rule-b">
      <div className="wrap">
        <div className="rule-b py-5 flex items-center justify-between">
          <span className="t-label text-stone">003 — Services</span>
          <span className="t-label text-verdant">Five Core Capabilities</span>
        </div>

        <div className="rule-b py-14">
          <SR>
            <h2 className="t-h1 text-obsidian max-w-3xl">
              One partner for your<br/><em className="text-verdant">entire journey.</em>
            </h2>
          </SR>
        </div>

        <div className="divide-y" style={{borderColor:"#D8D2C8"}}>
          {SERVICES.map((s,i)=>(
            <SR key={s.n} delay={i*55}>
              <div className="py-8 grid grid-cols-1 md:grid-cols-[64px_1fr_220px] gap-4 md:gap-8 items-start group hover:bg-linen transition-colors">
                <span className="t-label text-verdant">{s.n}</span>
                <div>
                  <h3 className="f-serif font-bold text-xl text-obsidian tracking-tight mb-2">{s.title}</h3>
                  <p className="t-body-sm max-w-lg">{s.body}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map(t=>(
                    <span key={t} className="t-label text-stone border py-1 px-3 group-hover:border-verdant group-hover:text-verdant transition-colors" style={{borderColor:"#D8D2C8",fontSize:"0.62rem"}}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </SR>
          ))}

          {/* Edge value prop */}
          <SR delay={320}>
            <div className="py-8 grid grid-cols-1 md:grid-cols-[64px_1fr_220px] gap-4 md:gap-8 border-l-2 border-verdant items-start pl-0">
              <span className="t-label text-verdant">—</span>
              <div>
                <h3 className="f-serif font-bold text-xl text-obsidian tracking-tight mb-2">Sustainability by Design</h3>
                <p className="t-body-sm max-w-lg">Every engagement includes comprehensive documentation and training. Your team owns the knowledge, not just the software.</p>
              </div>
              <span className="t-label text-verdant border border-verdant/30 px-3 py-1 self-start" style={{fontSize:"0.62rem"}}>Core Edge</span>
            </div>
          </SR>
        </div>
      </div>
    </section>
  );
}
