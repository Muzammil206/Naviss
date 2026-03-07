import { SITE } from "@/lib/data";
import SR from "@/components/ui/SR";
import ContactLink from "@/components/ui/ContactLink";
import SocialLink from "@/components/ui/SocialLink";

export default function Contact() {
  return (
    <section id="contact" className="rule-b bg-obsidian">
      <div className="wrap">
        <div className="rule-b py-5 flex items-center justify-between" style={{borderColor:"rgba(216,210,200,0.15)"}}>
          <span className="t-label" style={{color:"rgba(216,210,200,0.4)"}}>010 — Get in Touch</span>
        </div>

        <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x rule-b" style={{borderColor:"rgba(216,210,200,0.12)"}}>
          {/* Big headline */}
          <div className="py-20 lg:py-28 pr-0 lg:pr-16">
            <SR>
              <h2 className="t-h1" style={{color:"#F0EEE9"}}>
                Let's build<br/>something<br/><em className="not-italic" style={{color:"#2A7A50"}}>that matters.</em>
              </h2>
            </SR>
            <SR delay={80}>
              <p className="mt-6 text-sm leading-relaxed font-light max-w-sm" style={{color:"rgba(240,238,233,0.5)"}}>
                Whether you're an investor, potential partner, or organisation ready to harness geospatial intelligence — we'd love to start the conversation.
              </p>
            </SR>
          </div>

          {/* Details */}
          <div className="py-20 lg:py-28 lg:pl-16 flex flex-col divide-y" style={{borderColor:"rgba(216,210,200,0.12)"}}>
            <SR delay={0}>
              <div className="py-8">
                <p className="t-label mb-2" style={{color:"rgba(216,210,200,0.4)"}}>Email</p>
                <ContactLink href={`mailto:${SITE.email}`} className="text-xl font-light transition-colors">{SITE.email}</ContactLink>
              </div>
            </SR>

            <SR delay={70}>
              <div className="py-8">
                <p className="t-label mb-2" style={{color:"rgba(216,210,200,0.4)"}}>Phone</p>
                <ContactLink href={`tel:${SITE.phone.replace(/\s/g,"")}`} className="text-xl font-light transition-colors">{SITE.phone}</ContactLink>
              </div>
            </SR>

            <SR delay={140}>
              <div className="py-8">
                <p className="t-label mb-2" style={{color:"rgba(216,210,200,0.4)"}}>Location</p>
                <p className="text-xl font-light" style={{color:"#F0EEE9"}}>{SITE.location}</p>
              </div>
            </SR>

            <SR delay={260}>
              <div className="pt-8 flex flex-wrap gap-3">
                {["LinkedIn","Twitter / X","GitHub"].map(s=>(
                  <SocialLink key={s} href="#" label={s} />
                ))}
              </div>
            </SR>

            <SR delay={340}>
              <div className="pt-8">
                <ContactLink href={`mailto:${SITE.email}`} className="btn-v">
                  Send a Message
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </ContactLink>
              </div>
            </SR>
          </div>
        </div>
      </div>
    </section>
  );
}
