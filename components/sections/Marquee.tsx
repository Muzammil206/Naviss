import { TICKER } from "@/lib/data";
export default function Marquee() {
  const items=[...TICKER,...TICKER];
  return (
    <div className="rule rule-b bg-linen overflow-hidden py-4">
      <div className="ticker-t">
        {items.map((t,i)=>(
          <span key={i} className="inline-flex items-center gap-5 px-8 t-label text-stone flex-shrink-0">
            {/* Small SVG diamond separator instead of emoji */}
            <svg width="6" height="6" viewBox="0 0 6 6" fill="#1B5E3B"><rect x="0" y="0" width="6" height="6" transform="rotate(45 3 3)" rx="0.5"/></svg>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
