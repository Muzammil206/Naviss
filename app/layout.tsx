import type { Metadata } from "next";
import "./globals.css";
import Cursor from "@/components/ui/Cursor";


export const metadata: Metadata = {
  title: "Naviss Technologies — Lets build something that matters.",
  authors: [
    {
      name: "Naviss Technologies",
      url: "https://www.naviss.com",
    },
  ],
  keywords: [
    "Naviss Technologies",
    'naviss',
    "Geospatial Solutions",
    "Digital Solutions",
    "Spatial Data",
    "Strategic Advantage",
    "Governments",
    "NGOs",
    "Enterprises",
    "Abuja",
    "Africa",
  ],
  
  description: "Geospatial & digital solutions firm transforming spatial data into strategic advantage for governments, NGOs, and enterprises across Africa.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
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
