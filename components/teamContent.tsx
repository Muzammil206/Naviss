"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { TEAM } from "@/lib/data";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import SR from "@/components/ui/SR";

export default function TeamPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedMember, setSelectedMember] = useState<typeof TEAM[0] | null>(null);
  const [copied, setCopied] = useState(false);

  // Check URL parameter on mount
  useEffect(() => {
    const memberSlug = searchParams.get('member');
    if (memberSlug) {
      // Convert name to slug and compare
      const member = TEAM.find(m => 
        m.name.toLowerCase().replace(/\s+/g, '-') === memberSlug
      );
      if (member) {
        setSelectedMember(member);
      }
    }
  }, [searchParams]);

  const openMemberProfile = (member: typeof TEAM[0]) => {
    setSelectedMember(member);
    // Convert name to URL-friendly slug
    const slug = member.name.toLowerCase().replace(/\s+/g, '-');
    // Update URL without page reload
    router.push(`/team?member=${slug}`, { scroll: false });
  };

  const closeMemberProfile = () => {
    setSelectedMember(null);
    // Remove query parameter
    router.push('/team', { scroll: false });
  };

  const shareProfile = async (member: typeof TEAM[0]) => {
    const slug = member.name.toLowerCase().replace(/\s+/g, '-');
    const url = `${window.location.origin}/team?member=${slug}`;
    
    // Try native share API first (mobile)
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${member.name} - ${member.role}`,
          text: `Check out ${member.name}'s profile at Naviss Technologies`,
          url: url,
        });
        return;
      } catch (err) {
        // User cancelled or share failed, fall through to copy
      }
    }
    
    // Fallback to clipboard
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

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
                  <article className="group bg-linen rounded-none overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col">
                    {/* Photo */}
                    <div 
                      className="photo h-80 relative overflow-hidden cursor-pointer"
                      onClick={() => openMemberProfile(member)}
                    >
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
                      <div className="flex flex-wrap gap-2 mb-4">
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

                      {/* Actions */}
                      <div className="flex gap-2 pt-4 rule-t">
                        <button
                          onClick={() => openMemberProfile(member)}
                          className="flex-1 px-4 py-2 bg-verdant text-linen text-xs font-medium hover:bg-verdant/90 transition-colors"
                        >
                          View Profile
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            shareProfile(member);
                          }}
                          className="px-4 py-2 border border-stone/30 text-stone hover:border-verdant hover:text-verdant transition-colors"
                          title="Share profile"
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <circle cx="10" cy="3" r="2" />
                            <circle cx="4" cy="7" r="2" />
                            <circle cx="10" cy="11" r="2" />
                            <path d="M6 6l4 2M6 8l4-2" />
                          </svg>
                        </button>
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
                <a href="/contact" className="btn-v rounded-full">
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

      {/* ─── Copy Notification ───────────────────────── */}
      {copied && (
        <div className="fixed bottom-8 right-8 z-[9999] bg-verdant text-linen px-6 py-4 shadow-2xl animate-slideUp">
          <div className="flex items-center gap-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 10l3 3 7-7" strokeLinecap="round" />
            </svg>
            <span className="f-sans font-medium text-sm">Profile link copied!</span>
          </div>
        </div>
      )}

      {/* ─── Member Detail Modal ─────────────────────── */}
      {selectedMember && (
        <MemberModal
          member={selectedMember}
          onClose={closeMemberProfile}
          onShare={() => shareProfile(selectedMember)}
        />
      )}

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

function MemberModal({
  member,
  onClose,
  onShare,
}: {
  member: typeof TEAM[0];
  onClose: () => void;
  onShare: () => void;
}) {
  const slug = member.name.toLowerCase().replace(/\s+/g, '-');
  const profileUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/team?member=${slug}`;

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
          
          {/* Top action bar */}
          <div className="absolute top-6 right-6 flex gap-3 z-10">
            {/* Share button */}
            <button
              onClick={onShare}
              className="w-12 h-12 rounded-full bg-linen/20 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-linen/40 transition-colors"
              title="Share profile"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="#F0EEE9"
                strokeWidth="1.5"
              >
                <circle cx="11" cy="3" r="2" />
                <circle cx="5" cy="8" r="2" />
                <circle cx="11" cy="13" r="2" />
                <path d="M7 7l4 2M7 9l4-2" />
              </svg>
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className="w-12 h-12 rounded-full bg-linen/20 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-linen/40 transition-colors"
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
          </div>

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
          {/* Share URL Section */}
          <div className="mb-8 p-5 bg-cloud rule-l" style={{ borderLeftWidth: "3px", borderColor: "#1B5E3B" }}>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <p className="t-label text-verdant text-xs mb-2">Profile URL</p>
                <p className="f-mono text-xs text-stone break-all">{profileUrl}</p>
              </div>
              <button
                onClick={onShare}
                className="px-4 py-2 bg-verdant text-linen text-xs font-medium hover:bg-verdant/90 transition-colors flex items-center gap-2 flex-shrink-0"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="10" cy="3" r="2" />
                  <circle cx="4" cy="7" r="2" />
                  <circle cx="10" cy="11" r="2" />
                  <path d="M6 6l4 2M6 8l4-2" />
                </svg>
                Share
              </button>
            </div>
          </div>

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
          <div className="pt-6 rule flex flex-wrap gap-6">
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