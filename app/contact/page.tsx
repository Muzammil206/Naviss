import { SITE } from "@/lib/data";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import Contact from "@/components/sections/Contact";
import SR from "@/components/ui/SR";
import ContactLink from "@/components/ui/ContactLink";

export default function ContactPage() {
  return (
    <>
      <Nav />

      <main>
        {/* ─── Hero ────────────────────────────────────── */}
        <section className="rule-b bg-linen pt-32 pb-16">
          <div className="wrap max-w-5xl">
            <SR>
              <span className="t-label text-verdant block mb-6">005 — Contact</span>
            </SR>
            <SR delay={80}>
              <h1 className="t-h1 text-obsidian mb-8">
                Let's start a{" "}
                <em className="text-verdant">conversation.</em>
              </h1>
            </SR>
            <SR delay={120}>
              <p className="t-body-sm max-w-2xl">
                Whether you're exploring geospatial solutions, looking to partner
                with us, or just want to discuss a challenge you're facing — we'd
                love to hear from you.
              </p>
            </SR>
          </div>
        </section>

        {/* ─── Contact Methods ─────────────────────────── */}
        <section className="py-16 bg-cloud">
          <div className="wrap max-w-5xl">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Email */}
              <SR>
                <div className="bg-linen p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-verdant/10 flex items-center justify-center mx-auto mb-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1B5E3B"
                      strokeWidth="2"
                    >
                      <path d="M3 8l9 6 9-6M3 8v10a2 2 0 002 2h14a2 2 0 002-2V8M3 8a2 2 0 012-2h14a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="t-label text-verdant mb-3 text-xs">Email</h3>
                  <ContactLink
                    href={`mailto:${SITE.email}`}
                    className="f-sans  text-verdant transition-colors text-sm"
                  >
                    {SITE.email}
                  </ContactLink>
                  <p className="t-body-sm mt-3 text-stone">
                    General inquiries and project requests
                  </p>
                </div>
              </SR>

              {/* Phone */}
              <SR delay={70}>
                <div className="bg-linen p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-verdant/10 flex items-center justify-center mx-auto mb-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1B5E3B"
                      strokeWidth="2"
                    >
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <h3 className="t-label text-verdant mb-3 text-xs">Phone</h3>
                  <ContactLink
                    href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                    className="f-sans text-obsidian hover:text-verdant transition-colors text-sm"
                  >
                    {SITE.phone}
                  </ContactLink>
                  <p className="t-body-sm mt-3 text-stone">
                    Mon–Fri, 9am–5pm WAT
                  </p>
                </div>
              </SR>

              {/* Location */}
              <SR delay={140}>
                <div className="bg-linen p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-verdant/10 flex items-center justify-center mx-auto mb-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#1B5E3B"
                      strokeWidth="2"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </div>
                  <h3 className="t-label text-verdant mb-3 text-xs">Location</h3>
                  <p className="f-sans text-obsidian text-sm">
                    {SITE.location}
                  </p>
                  <p className="t-body-sm mt-3 text-stone">
                    Available for on-site meetings
                  </p>
                </div>
              </SR>
            </div>
          </div>
        </section>

        {/* ─── Specific Inquiries ──────────────────────── */}
        <section className="rule-b py-16 bg-linen">
          <div className="wrap max-w-5xl">
            <SR>
              <h2 className="t-h3 text-obsidian mb-10">
                Or reach out directly for:
              </h2>
            </SR>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "New Projects & Partnerships",
                  email: SITE.email,
                  description:
                    "Discuss your geospatial needs, explore potential collaborations, or request a proposal.",
                },
                {
                  title: "Careers & Opportunities",
                  email: "careers@naviss.tech",
                  description:
                    "Join our team, internship inquiries, or freelance collaboration opportunities.",
                },
                {
                  title: "Technical Support",
                  email: "support@naviss.tech",
                  description:
                    "Existing client support, platform issues, or technical questions about our services.",
                },
                {
                  title: "Media & Press",
                  email: "press@naviss.tech",
                  description:
                    "Media inquiries, interview requests, or speaking engagement opportunities.",
                },
              ].map((item, i) => (
                <SR key={item.title} delay={i * 60}>
                  <div className="bg-cloud p-6 rule-l" style={{ borderLeftWidth: "3px", borderColor: "#1B5E3B" }}>
                    <h3 className="f-serif font-bold text-lg text-obsidian mb-2">
                      {item.title}
                    </h3>
                    <ContactLink
                      href={`mailto:${item.email}`}
                      className="t-label text-verdant hover:underline text-xs block mb-3"
                    >
                      {item.email}
                    </ContactLink>
                    <p className="t-body-sm text-stone">{item.description}</p>
                  </div>
                </SR>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Office Hours ────────────────────────────── */}
        <section className="rule-b py-16 bg-cloud">
          <div className="wrap max-w-4xl">
            <div className="grid md:grid-cols-2 gap-12">
              <SR>
                <div>
                  <h3 className="t-h3 text-obsidian mb-6">Office Hours</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between pb-3 rule-b">
                      <span className="t-label text-stone text-xs">Monday – Friday</span>
                      <span className="f-sans text-obsidian font-medium text-sm">9:00 AM – 5:00 PM</span>
                    </div>
                    <div className="flex justify-between pb-3 rule-b">
                      <span className="t-label text-stone text-xs">Saturday</span>
                      <span className="f-sans text-stone font-medium text-sm">By Appointment</span>
                    </div>
                    <div className="flex justify-between pb-3">
                      <span className="t-label text-stone text-xs">Sunday</span>
                      <span className="f-sans text-stone font-medium text-sm">Closed</span>
                    </div>
                    <p className="t-body-sm text-stone mt-4">
                      <strong className="text-obsidian">Timezone:</strong> West Africa Time (WAT / GMT+1)
                    </p>
                  </div>
                </div>
              </SR>

              <SR delay={80}>
                <div>
                  <h3 className="t-h3 text-obsidian mb-6">Response Time</h3>
                  <div className="space-y-4">
                    <div className="bg-linen p-5">
                      <p className="f-sans font-medium text-obsidian mb-1">Email</p>
                      <p className="t-body-sm text-stone">
                        We typically respond within 24-48 hours during business days.
                      </p>
                    </div>
                    <div className="bg-linen p-5">
                      <p className="f-sans font-medium text-obsidian mb-1">Phone</p>
                      <p className="t-body-sm text-stone">
                        Immediate response during office hours. Leave a message after hours.
                      </p>
                    </div>
                    <div className="bg-linen p-5">
                      <p className="f-sans font-medium text-obsidian mb-1">Urgent Matters</p>
                      <p className="t-body-sm text-stone">
                        For urgent client support, call directly or mark email as "URGENT".
                      </p>
                    </div>
                  </div>
                </div>
              </SR>
            </div>
          </div>
        </section>

        {/* ─── Main Contact (Reused Component) ─────────── */}
        <Contact />
      </main>

      <Footer />
    </>
  );
}