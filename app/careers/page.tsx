"use client";

import { useState } from "react";
import { CAREERS } from "@/lib/data";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import Contact from "@/components/sections/Contact";
import SR from "@/components/ui/SR";

export default function CareersPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <>
      <Nav />

      <main>
        {/* ─── Hero ────────────────────────────────────── */}
        <section className="rule-b bg-linen pt-32 pb-20">
          <div className="wrap">
            <SR>
              <span className="t-label text-verdant block mb-6">004 — Careers</span>
            </SR>
            <SR delay={80}>
              <h1 className="t-h1 text-obsidian max-w-5xl mb-8">
                Build solutions that{" "}
                <em className="text-verdant">actually matter.</em>
              </h1>
            </SR>
            <SR delay={120}>
              <p className="t-body-sm max-w-2xl">
                We're a small team solving big problems. If you value impact over
                titles, enjoy working across the full stack, and want to build
                geospatial solutions that genuinely improve people's lives — you
                might be a good fit.
              </p>
            </SR>
          </div>
        </section>

        {/* ─── Open Positions ──────────────────────────── */}
        <section className="py-16 bg-cloud">
          <div className="wrap max-w-5xl">
            <SR>
              <div className="flex items-center justify-between mb-10">
                <h2 className="t-h3 text-obsidian">Open Positions</h2>
                <span className="t-label text-verdant text-xs">
                  {CAREERS.length} {CAREERS.length === 1 ? "role" : "roles"}
                </span>
              </div>
            </SR>

            <div className="space-y-4">
              {CAREERS.map((job, i) => {
                const isExpanded = expandedId === job.id;
                return (
                  <SR key={job.id} delay={i * 60}>
                    <article className="bg-linen rule-b last:border-b-0 overflow-hidden">
                      {/* Compact header */}
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : job.id)}
                        className="w-full p-8 flex items-start justify-between gap-6 text-left hover:bg-cloud/50 transition-colors group"
                      >
                        <div className="flex-1">
                          <h3 className="f-serif font-bold text-2xl text-obsidian mb-2 group-hover:text-verdant transition-colors">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap gap-4 text-sm text-stone">
                            <span className="flex items-center gap-1.5">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                              >
                                <path d="M7 1c-2 0-3.5 1.5-3.5 3.5C3.5 7 7 12 7 12s3.5-5 3.5-7.5C10.5 2.5 9 1 7 1z" />
                                <circle cx="7" cy="4.5" r="1" />
                              </svg>
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                              >
                                <rect x="2" y="3" width="10" height="9" rx="1" />
                                <path d="M2 6h10M5 1v2M9 1v2" />
                              </svg>
                              {job.type}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                              >
                                <path d="M7 12A5 5 0 107 2a5 5 0 000 10zM7 4v3l2 2" />
                              </svg>
                              Posted {new Date(job.posted).toLocaleDateString()}
                            </span>
                          </div>
                          {!isExpanded && (
                            <p className="t-body-sm mt-4 line-clamp-2">
                              {job.description}
                            </p>
                          )}
                        </div>

                        {/* Expand icon */}
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="#1B5E3B"
                          strokeWidth="2"
                          className={`flex-shrink-0 transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        >
                          <path d="M5 7.5L10 12.5L15 7.5" />
                        </svg>
                      </button>

                      {/* Expanded details */}
                      {isExpanded && (
                        <div className="px-8 pb-8 pt-2 animate-fadeIn">
                          <div className="max-w-3xl">
                            {/* Description */}
                            <div className="mb-8">
                              <p className="t-body-sm leading-relaxed">
                                {job.description}
                              </p>
                            </div>

                            {/* Responsibilities */}
                            <div className="mb-8">
                              <h4 className="t-label text-verdant mb-4 text-xs">
                                Responsibilities
                              </h4>
                              <ul className="space-y-2">
                                {job.responsibilities.map((item, idx) => (
                                  <li
                                    key={idx}
                                    className="flex gap-3 t-body-sm"
                                  >
                                    <span className="text-verdant flex-shrink-0 mt-1">
                                      →
                                    </span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Requirements */}
                            <div className="mb-8">
                              <h4 className="t-label text-verdant mb-4 text-xs">
                                Requirements
                              </h4>
                              <ul className="space-y-2">
                                {job.requirements.map((item, idx) => (
                                  <li
                                    key={idx}
                                    className="flex gap-3 t-body-sm"
                                  >
                                    <span className="text-verdant flex-shrink-0 mt-1">
                                      ✓
                                    </span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Nice to Have */}
                            {job.niceToHave && job.niceToHave.length > 0 && (
                              <div className="mb-8">
                                <h4 className="t-label text-stone mb-4 text-xs">
                                  Nice to Have
                                </h4>
                                <ul className="space-y-2">
                                  {job.niceToHave.map((item, idx) => (
                                    <li
                                      key={idx}
                                      className="flex gap-3 t-body-sm text-stone"
                                    >
                                      <span className="flex-shrink-0 mt-1">
                                        ·
                                      </span>
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {/* Apply button */}
                            <div className="pt-6 rule flex gap-4">
                              <a
                                href={`mailto:careers@naviss.tech?subject=Application: ${job.title}`}
                                className="btn-v rounded-full"
                              >
                                Apply for this role
                                <svg
                                  width="10"
                                  height="10"
                                  viewBox="0 0 10 10"
                                  fill="none"
                                >
                                  <path
                                    d="M1 9L9 1M9 1H3M9 1V7"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                  />
                                </svg>
                              </a>
                              <button
                                onClick={() => setExpandedId(null)}
                                className="btn-o rounded-full"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </article>
                  </SR>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── Why Naviss ──────────────────────────────── */}
        <section className="rule-b py-20 bg-linen">
          <div className="wrap max-w-5xl">
            <SR>
              <h2 className="t-h2 text-obsidian mb-12 text-center">
                Why join Naviss?
              </h2>
            </SR>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Real Impact",
                  body: "Your work directly improves how governments deliver services, how NGOs respond to crises, and how communities access critical information. No vanity metrics, just measurable outcomes.",
                },
                {
                  title: "End-to-End Ownership",
                  body: "You'll see projects through from client discovery to deployment and training. No siloed roles — everyone contributes across the stack and learns continuously.",
                },
                {
                  title: "Sustainable Pace",
                  body: "We protect focused time, respect boundaries, and believe great work happens when people aren't burned out. Remote flexibility when it makes sense.",
                },
                {
                  title: "Growth & Learning",
                  body: "Small team means exposure to everything — client meetings, architecture decisions, field operations, and technical delivery. We invest in your development.",
                },
              ].map((item, i) => (
                <SR key={item.title} delay={i * 60 + 80}>
                  <div className="p-8 bg-cloud">
                    <h3 className="f-serif font-bold text-xl text-obsidian mb-3">
                      {item.title}
                    </h3>
                    <p className="t-body-sm">{item.body}</p>
                  </div>
                </SR>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Application Process ─────────────────────── */}
        <section className="rule-b py-20 bg-cloud">
          <div className="wrap max-w-4xl">
            <SR>
              <h2 className="t-h3 text-obsidian mb-10">How we hire</h2>
            </SR>

            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Submit Application",
                  body: "Email careers@naviss.tech with your CV, portfolio/GitHub (if applicable), and a brief note on why you're interested and what you'd bring to the role.",
                },
                {
                  step: "02",
                  title: "Initial Chat",
                  body: "If there's a potential fit, we'll schedule a 30-minute conversation to discuss your background, our work, and mutual expectations.",
                },
                {
                  step: "03",
                  title: "Technical Assessment",
                  body: "A practical task relevant to the role — we want to see how you think and work. Take-home, reasonable time commitment, paid if it exceeds 4 hours.",
                },
                {
                  step: "04",
                  title: "Team Interview",
                  body: "Meet the team, discuss your assessment, talk through real project scenarios. This is as much for you to evaluate us as for us to evaluate you.",
                },
                {
                  step: "05",
                  title: "Offer & Onboarding",
                  body: "If it's a mutual yes, we'll make an offer and get you set up. First 3 months are probationary for both sides to ensure it's the right fit.",
                },
              ].map((item, i) => (
                <SR key={item.step} delay={i * 50}>
                  <div className="flex gap-6 items-start bg-linen p-6">
                    <span className="stat-n text-2xl flex-shrink-0">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="f-serif font-bold text-lg text-obsidian mb-2">
                        {item.title}
                      </h4>
                      <p className="t-body-sm">{item.body}</p>
                    </div>
                  </div>
                </SR>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Contact (Reused Component) ──────────────── */}
        <Contact />
      </main>

      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}