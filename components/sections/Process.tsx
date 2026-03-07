import { PROCESS } from "@/lib/data";
import SR from "@/components/ui/SR";

export default function Process() {
  return (
    <section id="process" className="rule-b">
      <div className="wrap">
        <div className="rule-b py-5 flex items-center justify-between">
          <span className="t-label text-stone">005 — How We Work</span>
        </div>
        <div className="rule-b py-14">
          <SR><h2 className="t-h1 text-obsidian">Clear process.<br/><em className="text-verdant">Zero surprises.</em></h2></SR>
        </div>
        <div className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x rule-b" style={{borderColor:"#D8D2C8"}}>
          {PROCESS.map((s,i)=>(
            <SR key={s.n} delay={i*70}>
              <div className="p-8 hover:bg-linen transition-colors h-full flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span className="t-label text-verdant">{s.n}</span>
                  <span className="t-label text-stone border px-2 py-0.5" style={{borderColor:"#D8D2C8",fontSize:"0.6rem"}}>{s.time}</span>
                </div>
                <h3 className="f-serif font-bold text-2xl text-obsidian tracking-tight">{s.title}</h3>
                <p className="t-body-sm flex-1">{s.body}</p>
              </div>
            </SR>
          ))}
        </div>
      </div>
    </section>
  );
}
