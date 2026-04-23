"use client";

import { useState } from "react";
import Image from "next/image";
import { TEAM } from "@/lib/data";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SR from "@/components/ui/SR";

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<typeof TEAM[0] | null>(null);

  return (
    <>
      <Nav />
      
      <main>
        {/* ─── Hero ────────────────────────────────────── */}
        <section className="rule-b bg-linen pt-32 pb-20">
          <div className="wrap">
            <SR>
              <span className="t-label text-verdant block mb-6">003 — Our Team</span>
            </SR>
            <SR delay={80}>
              <h1 className="t-h1 text-obsidian max-w-5xl mb-8">
                Meet the minds behind{" "}
                <em className="text-verdant">Naviss Technologies.</em>
              </h1>
            </SR>
            <SR delay={120}>
              <p className="t-body-sm max-w-2xl">
                We're a tight-knit team of geospatial specialists, developers, engineers, and
                data scientists who believe technology should solve real problems.
                No fluff, no jargon — just genuine expertise and a shared commitment
                to delivering solutions that work.
              </p>
            </SR>
          </div>
        </section>

        {/* ─── Team Grid ───────────────────────────────── */}
        <section className="rule-b py-16 bg-cloud">
          <div className="wrap">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TEAM.map((member, i) => (
                <SR key={member.id} delay={i * 55}>
                  <article
                    onClick={() => setSelectedMember(member)}
                    className="group cursor-pointer bg-linen rounded-none overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col"
                  >
                    {/* Photo */}
                    <div className="photo h-80 relative overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        sizes="33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Overlay gradient */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(27,94,59,0.85) 0%, transparent 60%)",
                        }}
                      />
                      {/* Hover text */}
                      <div className="absolute bottom-6 left-6 right-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <span className="t-label text-white/90 text-xs">
                          Click to view full profile →
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7 flex flex-col flex-1">
                      <h3 className="f-serif font-bold text-2xl text-obsidian mb-2 leading-tight">
                        {member.name}
                      </h3>
                      <p className="t-label text-verdant text-xs mb-4">
                        {member.role}
                      </p>
                      <p className="t-body-sm flex-1 mb-5">{member.shortBio}</p>

                      {/* Expertise tags */}
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.slice(0, 3).map((skill) => (
                          <span
                            key={skill}
                            className="t-label text-stone border border-stone/30 px-2 py-1 text-[0.55rem] group-hover:border-verdant group-hover:text-verdant transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                        {member.expertise.length > 3 && (
                          <span className="t-label text-stone/50 text-[0.55rem] px-2 py-1">
                            +{member.expertise.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                </SR>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─────────────────────────────────────── */}
        <section className="rule-b py-20 bg-linen">
          <div className="wrap text-center">
            <SR>
              <h2 className="t-h2 text-obsidian mb-6">
                Want to join the team?
              </h2>
            </SR>
            <SR delay={80}>
              <p className="t-body-sm max-w-2xl mx-auto mb-10">
                We're always looking for talented geospatial professionals who share 
                our passion for building solutions that matter. Check our open positions 
                or get in touch to explore opportunities.
              </p>
            </SR>
            <SR delay={120}>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#contact" className="btn-v rounded-full">
                  Get in Touch
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M1 9L9 1M9 1H3M9 1V7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
                <a href="mailto:careers@naviss.tech" className="btn-o rounded-full">
                  careers@naviss.tech
                </a>
              </div>
            </SR>
          </div>
        </section>
      </main>

      <Footer />

      {/* ─── Member Detail Modal ─────────────────────── */}
      {selectedMember && (
        <MemberModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </>
  );
}

function MemberModal({
  member,
  onClose,
}: {
  member: typeof TEAM[0];
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[9900] flex items-center justify-center p-6"
      onClick={onClose}
      style={{
        background: "rgba(20,18,16,0.75)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-linen rounded-none max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        style={{
          boxShadow: "0 20px 80px rgba(20,18,16,0.4)",
        }}
      >
        {/* Header with photo */}
        <div className="relative h-72 overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="90vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(20,18,16,0.9) 0%, transparent 70%)",
            }}
          />
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-linen/20 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-linen/40 transition-colors z-10"
            aria-label="Close"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              stroke="#F0EEE9"
              strokeWidth="1.5"
            >
              <path d="M1 1L13 13M13 1L1 13" />
            </svg>
          </button>

          {/* Name & role overlay */}
          <div className="absolute bottom-8 left-8 z-10">
            <h2 className="f-serif font-bold text-4xl text-linen mb-2">
              {member.name}
            </h2>
            <p className="t-label text-verdant">{member.role}</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-10">
          {/* Bio */}
          <div className="mb-8">
            <h3 className="t-label text-verdant mb-4">Biography</h3>
            <p className="t-body-sm leading-relaxed">{member.bio}</p>
          </div>

          {/* Expertise */}
          <div className="mb-8">
            <h3 className="t-label text-verdant mb-4">Areas of Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {member.expertise.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-cloud text-iron f-mono text-sm font-medium border border-stone/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div id="careers" className="pt-6 rule flex flex-wrap gap-6">
            <a
              href={`mailto:${member.email}`}
              className="flex items-center gap-2 text-stone hover:text-verdant transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M2 5l7 5 7-5M2 5v8a1 1 0 001 1h12a1 1 0 001-1V5M2 5a1 1 0 011-1h12a1 1 0 011 1" />
              </svg>
              <span className="t-label text-xs">{member.email}</span>
            </a>
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone hover:text-verdant transition-colors"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5c0 .9-.73 1.63-1.63 1.63S1.72 4.4 1.72 3.5 2.45 1.87 3.35 1.87s1.63.73 1.63 1.63zM5 6H2v9h3V6zm4.5 0h-3v9h3v-4.74c0-2.8 3.63-3.04 3.63 0V15H16v-5.57c0-4.71-5.34-4.54-6.5-2.23V6z" />
                </svg>
                <span className="t-label text-xs">LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}