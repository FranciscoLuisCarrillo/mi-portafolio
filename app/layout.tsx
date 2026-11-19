import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Francisco Carrillo | Technical Product Owner & Scrum Master",
  description:
    "Technical Product Owner y Scrum Master especializado en mercado de capitales, interoperabilidad de plataformas, APIs bursátiles y análisis de datos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body
        className={`${inter.className} bg-zinc-950 text-zinc-100 antialiased selection:bg-zinc-800 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}