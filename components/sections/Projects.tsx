import Image from "next/image";
import { PROJECTS } from "@/lib/data";
import SR from "@/components/ui/SR";

export default function Projects() {
  const featured = PROJECTS[0];
  const rest     = PROJECTS.slice(1);

  return (
    <section id="projects" className="rule-b bg-linen">
      <div className="wrap">
        <div className="rule-b py-5 flex items-center justify-between">
          <span className="t-label text-stone">004 — Selected Work</span>
          <span className="t-label text-verdant">{PROJECTS.length} Projects</span>
        </div>

        <div className="rule-b py-14">
          <SR>
            <h2 className="t-h1 text-obsidian max-w-3xl">
              Projects that<br/><em className="text-verdant">move the needle.</em>
            </h2>
          </SR>
          <SR delay={80}>
            <p className="t-body-sm mt-5 max-w-xl">
              Every project is built around a genuine problem, not a brief. Real impact measured in outcomes.
            </p>
          </SR>
        </div>

        {/* ── Featured ── */}
        <SR>
          <div className="rule-b grid lg:grid-cols-2">
            {/* Photo */}
            <div className="photo h-80 lg:h-[540px] rule-r">
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                fill sizes="50vw"
              />
              <div className="absolute inset-0" style={{background:"linear-gradient(to top,rgba(20,18,16,0.7) 0%,transparent 55%)"}}/>
              <div className="absolute bottom-0 left-0 p-8 z-10">
                <span className="t-label text-verdant block mb-2">{featured.id}</span>
                <div className="flex flex-wrap gap-2">
                  {featured.tags.map(t=>(
                    <span key={t} className="t-label text-white/60 border border-white/20 px-2 py-0.5" style={{fontSize:"0.6rem"}}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <span className="t-label text-verdant block mb-5">{featured.sector}</span>
                <h3 className="t-h3 text-obsidian mb-3">{featured.title}</h3>
                <p className="t-label text-stone mb-6">{featured.client} · {featured.region} · {featured.year}</p>
                <p className="t-body-sm">{featured.body}</p>
              </div>
              <div className="mt-10 pt-8 rule">
                <p className="t-label text-stone mb-2">Impact</p>
                <p className="f-sans text-iron text-sm font-medium">{featured.impact}</p>
              </div>
            </div>
          </div>
        </SR>

        {/* ── Grid ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3" style={{borderBottom:"1px solid #D8D2C8"}}>
          {rest.map((p,i)=>(
            <SR key={p.id} delay={i*65}>
              <article className="flex flex-col rule-b rule-r last:border-r-0 hover:bg-cloud transition-colors group">
                {/* Photo */}
                <div className="photo h-52 flex-shrink-0">
                  <Image src={p.image} alt={p.imageAlt} fill sizes="33vw"/>
                  <div className="absolute inset-0" style={{background:"linear-gradient(to top,rgba(20,18,16,0.6) 0%,transparent 55%)"}}/>
                  <div className="absolute top-4 left-4 z-10">
                    <span className="t-label bg-cloud/80 text-iron px-2 py-1 backdrop-blur-sm" style={{fontSize:"0.6rem"}}>{p.sector}</span>
                  </div>
                  <div className="absolute bottom-4 right-4 z-10">
                    <span className="t-label text-white/60">{p.id}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="f-serif font-bold text-lg text-obsidian tracking-tight mb-1 leading-snug">{p.title}</h3>
                  <p className="t-label text-stone mb-4" style={{fontSize:"0.62rem"}}>{p.client} · {p.year}</p>
                  <p className="t-body-sm flex-1">{p.body}</p>

                  <div className="mt-5 pt-5 rule">
                    <p className="t-label text-stone mb-1" style={{fontSize:"0.6rem"}}>Impact</p>
                    <p className="f-sans text-iron text-xs font-medium leading-relaxed">{p.impact}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.tags.map(t=>(
                      <span key={t} className="t-label text-stone border px-2 py-0.5 group-hover:border-verdant group-hover:text-verdant transition-colors" style={{borderColor:"#D8D2C8",fontSize:"0.58rem"}}>{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            </SR>
          ))}
        </div>
      </div>
    </section>
  );
}
