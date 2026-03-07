import type { Metadata } from "next";
import "./globals.css";
import Cursor from "@/components/ui/Cursor";

export const metadata: Metadata = {
  title: "Naviss Technologies — Where Location Meets Intelligence",
  description: "Geospatial & digital solutions firm transforming spatial data into strategic advantage for governments, NGOs, and enterprises across Africa.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&family=DM+Mono:wght@300;400&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
