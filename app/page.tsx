"use client";

import { useState } from "react";
import { FeaturedProjectCard } from "../components/FeaturedProjectCard";
import {
  Mail,
  ExternalLink,  
  FolderGit2,
  Briefcase,
  Terminal,
  FileDown,
  GraduationCap,
  Check,
  Copy,
  Building2,
} from "lucide-react";
import {
  PROFILE,
  METRICS,
  PRIMARY_EXPERIENCE,
  OTHER_EXPERIENCE,
  PROJECTS,
  SKILLS,
  EDUCATION,
  CERTIFICATIONS,
} from "./data";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 sm:px-6 pb-16">
      {/* Sticky Glass Header */}
      <header className="sticky top-3 z-50 mb-4 sm:mb-6">
        <div className="flex justify-center md:justify-between items-center px-5 py-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-800/80 shadow-lg">
          <div className="hidden md:flex items-center gap-2 text-xs text-slate-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>{PROFILE.availability}</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-5 sm:gap-7 text-xs sm:text-sm font-medium text-slate-300">
            <a href="#experiencia" className="hover:text-sky-400 transition-colors">
              Experiencia
            </a>
            <a href="#proyectos" className="hover:text-sky-400 transition-colors">
              Proyectos
            </a>
            <a href="#habilidades" className="hover:text-sky-400 transition-colors">
              Stack
            </a>
            <a href="#formacion" className="hover:text-sky-400 transition-colors">
              Formación
            </a>
            <a href="#contacto" className="hover:text-sky-400 transition-colors">
              Contacto
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Banner con imagen de fondo integrada */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-800/90 bg-slate-900 shadow-2xl">
        <img
          src={PROFILE.avatarUrl}
          alt={PROFILE.fullName}
          className="absolute inset-0 w-full h-full object-cover object-[75%_10%] sm:object-[82%_10%] translate-x-4 sm:translate-x-10 md:translate-x-16 opacity-85"
        />

        {/* Degradados Obsidian para contraste impecable */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/15" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-transparent" />

        <div className="relative z-10 flex flex-col justify-end p-6 sm:p-10 md:p-12 min-h-[390px] sm:min-h-[430px]">
          <section className="space-y-4 sm:space-y-5 w-full pt-24 md:pt-16">
            {/* Píldora de disponibilidad visible en móvil */}
            <div className="inline-flex md:hidden items-center gap-2 px-3 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-[11px] text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span>Disponible para oportunidades</span>
            </div>

            <div className="space-y-1.5">
              <p className="text-xs sm:text-sm font-semibold text-sky-400 tracking-wider uppercase">
                {PROFILE.role}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-50">
                {PROFILE.name}
              </h1>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed w-full drop-shadow-sm">
              {PROFILE.summary}
            </p>
            <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-2">
              <a
                href={PROFILE.cvUrl}
                download="Francisco_Luis_Carrillo_CV_PO.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500 text-slate-950 font-semibold text-xs sm:text-sm hover:bg-sky-400 transition-all shadow-md shadow-sky-500/10"
              >
                <FileDown className="w-4 h-4" />
                Descargar CV
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-100 text-slate-950 font-medium text-xs sm:text-sm hover:bg-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-950/80 backdrop-blur-sm border border-slate-700/80 text-slate-200 font-medium text-xs sm:text-sm hover:border-sky-500/50 hover:text-white transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-950/80 backdrop-blur-sm border border-slate-700/80 text-slate-200 font-medium text-xs sm:text-sm hover:border-sky-500/50 hover:text-white transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">¡Email copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copiar Email</span>
                  </>
                )}
              </button>
            </div>
          </section>
        </div>
      </div>

      {/* Franja Bento de KPIs de Impacto */}
      <section aria-label="Métricas clave" className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-4 sm:mt-6">
        {METRICS.map((metric, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 border-t-slate-700/60 hover:border-sky-500/30 transition-colors"
          >
            <p className="text-xl sm:text-2xl font-bold tracking-tight text-sky-400">
              {metric.value}
            </p>
            <p className="text-xs sm:text-sm font-medium text-slate-100 mt-1">
              {metric.label}
            </p>
            <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5 leading-snug">
              {metric.detail}
            </p>
          </div>
        ))}
      </section>

      <main className="space-y-20 sm:space-y-24 pt-16 sm:pt-20">
        {/* Experiencia Laboral con Primary Agrupado */}
        <section id="experiencia" className="space-y-8 scroll-mt-24">
          <div className="flex items-center gap-2.5 text-slate-100">
            <Briefcase className="w-5 h-5 text-sky-400" />
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
              Experiencia Laboral
            </h2>
          </div>

          {/* Bloque agrupado: Primary (A3 Mercados / Matba Rofex) */}
          <div className="rounded-2xl bg-slate-900/40 border border-slate-800/80 border-t-slate-700/50 p-5 sm:p-7 space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 pb-4 border-b border-slate-800/80">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-slate-50">
                    {PRIMARY_EXPERIENCE.company}
                  </h3>
                  <p className="text-xs text-slate-400">Progresión de roles en ecosistema financiero</p>
                </div>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-400 self-start sm:self-auto">
                {PRIMARY_EXPERIENCE.totalPeriod}
              </span>
            </div>

            <div className="space-y-8 border-l border-slate-800 ml-2 pl-5 sm:pl-6">
              {PRIMARY_EXPERIENCE.roles.map((item, index) => (
                <div key={index} className="relative space-y-2.5">
                  <span
                    className={`absolute -left-[25px] sm:-left-[29px] top-1.5 w-2.5 h-2.5 rounded-full ring-4 ring-slate-950 ${
                      index === 0 ? "bg-sky-400" : "bg-slate-600"
                    }`}
                  />
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                    <h4 className="text-base font-medium text-slate-100">
                      {item.role}
                    </h4>
                    <span className="text-xs font-mono text-slate-500">{item.period}</span>
                  </div>
                  <ul className="space-y-1.5 text-sm text-slate-300/90 leading-relaxed list-disc list-inside marker:text-sky-500/60">
                    {item.highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-xs rounded-md bg-slate-950/80 border border-slate-800 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trayectoria previa con tarjetas unificadas */}
          <div className="space-y-6">
            {OTHER_EXPERIENCE.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-slate-900/40 border border-slate-800/80 border-t-slate-700/50 p-5 sm:p-7 space-y-5"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60 text-slate-300">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-slate-50">
                        {item.company}
                      </h3>
                      <p className="text-xs text-slate-400">{item.role}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-400 self-start sm:self-auto">
                    {item.period}
                  </span>
                </div>

                <div className="space-y-2.5 border-l border-slate-800 ml-2 pl-5 sm:pl-6">
                  <div className="relative space-y-2.5">
                    <span className="absolute -left-[25px] sm:-left-[29px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-600 ring-4 ring-slate-950" />
                    <ul className="space-y-1.5 text-sm text-slate-300/90 leading-relaxed list-disc list-inside marker:text-slate-600">
                      {item.highlights.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 text-xs rounded-md bg-slate-950/80 border border-slate-800 text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Proyectos Destacados */}
        <section id="proyectos" className="space-y-8 scroll-mt-24">
          <div className="flex items-center gap-2.5 text-slate-100">
            <FolderGit2 className="w-5 h-5 text-sky-400" />
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
              Proyectos Destacados
            </h2>
          </div>
          <div className="space-y-6">
            {PROJECTS.map((project, index) => (
              <FeaturedProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        {/* Habilidades & Stack */}
        <section id="habilidades" className="space-y-8 scroll-mt-24">
          <div className="flex items-center gap-2.5 text-slate-100">
            <Terminal className="w-5 h-5 text-sky-400" />
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
              Habilidades & Stack
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div
                key={category}
                className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 space-y-3"
              >
                <h3 className="text-sm font-semibold text-sky-400 border-b border-slate-800 pb-2">
                  {category}
                </h3>
                <ul className="space-y-1.5 text-sm text-slate-300">
                  {items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-slate-600" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Formación y Certificaciones */}
        <section id="formacion" className="space-y-8 scroll-mt-24">
          <div className="flex items-center gap-2.5 text-slate-100">
            <GraduationCap className="w-5 h-5 text-sky-400" />
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
              Educación & Certificaciones
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-slate-300 border-b border-slate-800 pb-2">
                Educación Académica
              </h3>
              <div className="space-y-4">
                {EDUCATION.map((edu, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between items-baseline gap-2">
                      <h4 className="text-sm font-semibold text-slate-100">
                        {edu.degree}
                      </h4>
                      <span className="text-xs font-mono text-slate-500 shrink-0">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-sky-400">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {edu.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-slate-300 border-b border-slate-800 pb-2">
                Certificaciones
              </h3>
              <ul className="space-y-3">
                {CERTIFICATIONS.map((cert, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-start gap-4 text-sm"
                  >
                    <div>
                      <p className="font-medium text-slate-200">{cert.title}</p>
                      <p className="text-xs text-slate-400">{cert.issuer}</p>
                    </div>
                    <span className="text-xs font-mono text-slate-500 shrink-0">
                      {cert.year}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Tarjeta de Llamado a la Acción (CTA) Final */}
        <section
          id="contacto"
          className="scroll-mt-24 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-sky-950/30 border border-slate-800 border-t-sky-500/30 p-6 sm:p-10 text-center space-y-5"
        >
          <div className="space-y-2 max-w-xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-50">
              ¿Conversamos sobre producto o datos?
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Estoy abierto a oportunidades como Technical Product Owner, Scrum Master o roles híbridos entre negocio, tecnología y analítica.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-sky-500 text-slate-950 font-semibold text-sm hover:bg-sky-400 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>¡Correo copiado al portapapeles!</span>
                </>
              ) : (
                <>
                  <Mail className="w-4 h-4" />
                  <span>{PROFILE.email}</span>
                </>
              )}
            </button>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-950 border border-slate-700 text-slate-200 font-medium text-sm hover:border-sky-500/50 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
              Conectar en LinkedIn
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© 2026 {PROFILE.fullName}.</p>
        <p>{PROFILE.location}</p>
      </footer>
    </div>
  );
}