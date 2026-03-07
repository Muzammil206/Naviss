"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>("[data-reveal]");
    items.forEach((item, i) => {
      setTimeout(() => {
        item.style.opacity = "1";
        item.style.transform = "translateY(0)";
      }, 180 + i * 130);
    });
  }, []);

  return (
    <section
      ref={ref}
      className="relative flex flex-col overflow-hidden"
      style={{ minHeight: "100svh", background: "#0A1410" }}
    >
      {/* ── Background ─────────────────────────────────── */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=2400&q=90"
          alt="Aerial landscape photograph"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          style={{ filter: "saturate(0.65) brightness(0.5)" }}
        />

        {/* Warm cinematic grade — avoids cold/blue feeling */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(155deg, rgba(8,18,12,0.6) 0%, rgba(12,18,10,0.15) 40%, rgba(8,18,12,0.92) 100%)",
          }}
        />
        {/* Bottom lift — keeps everything in frame on small screens */}
        <div
          className="absolute inset-x-0 bottom-0"
          style={{
            height: "70%",
            background:
              "linear-gradient(to top, rgba(8,18,12,0.98) 0%, rgba(8,18,12,0.55) 55%, transparent 100%)",
          }}
        />
      </div>

      {/* ── Status bar ─────────────────────────────────── */}
      <div
        className="relative z-10 mt-[66px]"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
      >
        <div className="wrap py-3 flex items-center justify-between">
          <span className="t-label" style={{ color: "rgba(240,238,233,0.38)", fontSize: "0.6rem" }}>
            Est. 2025 · Abuja, Nigeria
          </span>
          <span className="t-label flex items-center gap-2" style={{ color: "rgba(240,238,233,0.38)", fontSize: "0.6rem" }}>
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: "#2A7A50", boxShadow: "0 0 5px rgba(42,122,80,0.9)", animation: "blink 2.4s ease-in-out infinite" }}
            />
            Available for Projects
          </span>
          <span className="t-label hidden sm:block" style={{ color: "rgba(240,238,233,0.38)", fontSize: "0.6rem" }}>
            Geospatial & Digital Solutions
          </span>
        </div>
      </div>

      {/* ── Body ───────────────────────────────────────── */}
      <div
        className="relative z-10 flex-1 flex flex-col wrap"
        style={{ paddingTop: "clamp(28px,5vh,60px)", paddingBottom: "clamp(20px,4vh,48px)", gap: "clamp(24px,4vh,48px)", justifyContent: "space-between" }}
      >
        {/* Section index */}
        <p
          data-reveal
          className="t-label"
          style={{ color: "#2A7A50", fontSize: "0.6rem", opacity: 0, transform: "translateY(14px)", transition: "opacity 0.6s ease, transform 0.6s ease" }}
        >
          001 — Naviss Technologies
        </p>

        {/* ── Headline cluster ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(14px,2.5vh,24px)" }}>

          {/* Eyebrow tag */}
          <div
            data-reveal
            style={{ opacity: 0, transform: "translateY(16px)", transition: "opacity 0.65s ease, transform 0.65s ease" }}
          >
            <span
              className="t-label inline-flex items-center gap-2"
              style={{
                color: "rgba(240,238,233,0.45)",
                fontSize: "0.62rem",
                paddingLeft: "10px",
                borderLeft: "2px solid #2A7A50",
              }}
            >
              GIS Platforms · AI/ML Analytics · Cloud Infrastructure · Capacity Building
            </span>
          </div>

          {/* Main headline — 3 deliberate lines, professional copy */}
          <div
            data-reveal
            style={{ opacity: 0, transform: "translateY(22px)", transition: "opacity 0.85s cubic-bezier(0.16,1,0.3,1), transform 0.85s cubic-bezier(0.16,1,0.3,1)" }}
          >
            <h1
              className="f-serif"
              style={{
                fontSize: "clamp(2.6rem, 7vw, 8.5rem)",
                fontWeight: 900,
                lineHeight: 0.96,
                letterSpacing: "-0.035em",
                color: "#F0EEE9",
              }}
            >
              Turning Location
              <br />
              <em className="not-italic" style={{ color: "#2A7A50" }}>
                Into Advantage
              </em>
              <br />
              <span style={{ color: "rgba(240,238,233,0.65)", fontStyle: "italic" }}>
                Across Africa.
              </span>
            </h1>
          </div>

          {/* Description */}
          <div
            data-reveal
            style={{ opacity: 0, transform: "translateY(18px)", transition: "opacity 0.75s ease, transform 0.75s ease", maxWidth: "min(500px, 90vw)" }}
          >
            <p
              style={{
                color: "rgba(240,238,233,0.52)",
                fontSize: "clamp(0.875rem, 1.3vw, 1rem)",
                lineHeight: 1.8,
                fontWeight: 300,
              }}
            >
              We design, build, and sustain geospatial and digital systems that drive real operational change — for governments, NGOs, and enterprises.
            </p>
          </div>
        </div>

        {/* ── Bottom action bar ── */}
        <div
          data-reveal
          style={{
            opacity: 0,
            transform: "translateY(18px)",
            transition: "opacity 0.75s ease, transform 0.75s ease",
            borderTop: "1px solid rgba(255,255,255,0.09)",
            paddingTop: "clamp(16px,3vh,32px)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "clamp(20px,4vw,48px)",
              alignItems: "end",
            }}
          >
            {/* Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <a href="#contact" className="btn-v" style={{ fontSize: "0.65rem", padding: "12px 24px" }}>
                Partner With Us
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
                  <path d="M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </a>
              <a
                href="#projects"
                className="btn-o"
                style={{ color: "#F0EEE9", borderColor: "rgba(240,238,233,0.22)", fontSize: "0.65rem", padding: "12px 24px" }}
              >
                View Our Work
              </a>
            </div>

            {/* Stats */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "clamp(12px,2vw,28px)",
                justifyItems: "end",
              }}
            >
              {[
                { n: "6+",   l: "Projects"    },
                { n: "8",    l: "Sectors"     },
                { n: "360°", l: "Support"     },
              ].map((s) => (
                <div key={s.l} style={{ textAlign: "right" }}>
                  <div
                    className="f-serif"
                    style={{
                      fontSize: "clamp(1.5rem, 3vw, 2.6rem)",
                      fontWeight: 900,
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                      color: "#2A7A50",
                    }}
                  >
                    {s.n}
                  </div>
                  <div className="t-label" style={{ color: "rgba(240,238,233,0.32)", fontSize: "0.56rem", marginTop: "4px" }}>
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ───────────────────────────── */}
      <div className="relative z-10 wrap pb-4 flex items-center gap-3">
        <div
          style={{
            width: "1px",
            height: "26px",
            background: "rgba(240,238,233,0.25)",
            animation: "scrollBob 2.2s ease-in-out infinite",
          }}
        />
        <span className="t-label" style={{ color: "rgba(240,238,233,0.25)", fontSize: "0.56rem" }}>
          Scroll to explore
        </span>
      </div>

      <style>{`
        @keyframes blink {
          0%,100% { opacity:1; }
          50%      { opacity:0.3; }
        }
        @keyframes scrollBob {
          0%,100% { transform:scaleY(1); opacity:0.4; }
          50%      { transform:scaleY(0.5); opacity:0.15; }
        }
      `}</style>
    </section>
  );
}