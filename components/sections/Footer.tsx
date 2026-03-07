"use client";
import { SITE, NAV } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-obsidian" style={{borderTop:"1px solid rgba(216,210,200,0.1)"}}>
      <div className="wrap py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10" style={{borderBottom:"1px solid rgba(216,210,200,0.1)"}}>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="3" fill="#1B5E3B"/>
                <circle cx="16" cy="13" r="5" stroke="#F0EEE9" strokeWidth="2"/>
                <circle cx="16" cy="13" r="2" fill="#F0EEE9"/>
                <path d="M16 18v7" stroke="#F0EEE9" strokeWidth="2" strokeLinecap="round"/>
                <path d="M11 24h10" stroke="#F0EEE9" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
              </svg>
              <span className="f-serif font-bold text-[1.05rem]" style={{color:"#F0EEE9"}}>NAVISS</span>
            </div>
            <p className="t-label" style={{color:"rgba(216,210,200,0.35)",fontSize:"0.62rem"}}>{SITE.tagline}</p>
          </div>

          <nav className="flex flex-col gap-3">
            {NAV.map(l=>(
              <a key={l.href} href={l.href} className="t-label transition-colors" style={{color:"rgba(216,210,200,0.35)",fontSize:"0.62rem"}}
                onMouseEnter={e=>(e.currentTarget.style.color="#2A7A50")}
                onMouseLeave={e=>(e.currentTarget.style.color="rgba(216,210,200,0.35)")}>{l.label}</a>
            ))}
          </nav>

          <div className="flex flex-col gap-2">
            <a href={`mailto:${SITE.email}`} className="t-label transition-colors" style={{color:"rgba(216,210,200,0.35)",fontSize:"0.62rem"}}
              onMouseEnter={e=>(e.currentTarget.style.color="#2A7A50")}
              onMouseLeave={e=>(e.currentTarget.style.color="rgba(216,210,200,0.35)")}>{SITE.email}</a>
            <a href={`tel:${SITE.phone}`} className="t-label" style={{color:"rgba(216,210,200,0.35)",fontSize:"0.62rem"}}>{SITE.phone}</a>
            <p className="t-label" style={{color:"rgba(216,210,200,0.25)",fontSize:"0.62rem"}}>{SITE.location}</p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="t-label" style={{color:"rgba(216,210,200,0.25)",fontSize:"0.6rem"}}>© {new Date().getFullYear()} Naviss Technologies. All rights reserved.</p>
          <p className="t-label" style={{color:"rgba(216,210,200,0.2)",fontSize:"0.6rem"}}>{SITE.location} · Est. {SITE.founded}</p>
        </div>
      </div>
    </footer>
  );
}
