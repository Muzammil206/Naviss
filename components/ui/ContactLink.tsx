"use client";

export default function ContactLink({ 
  href, 
  children, 
  className = "" 
}: { 
  href: string; 
  children: React.ReactNode; 
  className?: string;
}) {
  return (
    <a 
      href={href} 
      className={className}
      style={{ color: "#F0EEE9" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#2A7A50")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#F0EEE9")}
    >
      {children}
    </a>
  );
}
