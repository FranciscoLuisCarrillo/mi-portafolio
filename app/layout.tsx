import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Francisco Luis Carrillo | Technical Product Owner & Scrum Master",
  description:
    "Technical Product Owner y Scrum Master especializado en mercado de capitales, interoperabilidad financiera, APIs bursátiles y análisis de datos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body
        className={`${inter.className} bg-slate-950 text-slate-100 antialiased selection:bg-sky-500/30 selection:text-sky-200`}
      >
        {children}
      </body>
    </html>
  );
}