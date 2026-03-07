"use client";

export default function SocialLink({ 
  href, 
  label 
}: { 
  href: string; 
  label: string;
}) {
  return (
    <a 
      href={href}
      className="t-label px-4 py-2.5 transition-colors"
      style={{ 
        border: "1px solid rgba(216,210,200,0.2)", 
        color: "rgba(216,210,200,0.5)" 
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#2A7A50";
        (e.currentTarget as HTMLElement).style.color = "#2A7A50";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(216,210,200,0.2)";
        (e.currentTarget as HTMLElement).style.color = "rgba(216,210,200,0.5)";
      }}
    >
      {label}
    </a>
  );
}
