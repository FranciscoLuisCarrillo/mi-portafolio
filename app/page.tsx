import {
  Mail,
  ExternalLink,
  FolderGit2,
  Briefcase,
  Terminal,
  FileDown,
  GraduationCap,
} from "lucide-react";
import {
  PROFILE,
  EXPERIENCE,
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
  return (
    <div className="min-h-screen max-w-4xl mx-auto px-6 py-16 md:py-24">
      {/* Navegación superior */}
      <header className="flex justify-between items-center pb-16 border-b border-zinc-800/80">
        <span className="font-semibold tracking-tight text-zinc-100">
          {PROFILE.name}
        </span>
        <nav className="flex gap-6 text-sm text-zinc-400">
          <a href="#experiencia" className="hover:text-zinc-100 transition-colors">
            Experiencia
          </a>
          <a href="#proyectos" className="hover:text-zinc-100 transition-colors">
            Proyectos
          </a>
          <a href="#habilidades" className="hover:text-zinc-100 transition-colors">
            Stack
          </a>
          <a href="#formacion" className="hover:text-zinc-100 transition-colors">
            Formación
          </a>
        </nav>
      </header>

      <main className="space-y-24 pt-16">
        {/* Hero Section con Foto de Perfil */}
        <section className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-8">
          <div className="space-y-6 flex-1">
            <div className="space-y-2">
              <p className="text-sm font-medium text-emerald-400 tracking-wide uppercase">
                {PROFILE.role}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                {PROFILE.name}
              </h1>
            </div>
            <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl">
              {PROFILE.summary}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={PROFILE.cvUrl}
                download="Francisco_Luis_Carrillo_CV_PO.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-zinc-950 font-semibold text-sm hover:bg-emerald-400 transition-colors"
              >
                <FileDown className="w-4 h-4" />
                Descargar CV
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-100 text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                GitHub
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 font-medium text-sm hover:border-zinc-700 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 font-medium text-sm hover:border-zinc-700 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Contacto
              </a>
            </div>
          </div>

          {/* Retrato editorial */}
          <div className="shrink-0">
            <div className="relative w-44 h-52 md:w-52 md:h-60 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
              <img
                src={PROFILE.avatarUrl}
                alt={PROFILE.name}
                className="w-full h-full object-cover object-[68%_10%]"
              />
            </div>
          </div>
        </section>

        {/* Experiencia */}
        <section id="experiencia" className="space-y-8 scroll-mt-16">
          <div className="flex items-center gap-2 text-zinc-100">
            <Briefcase className="w-5 h-5 text-zinc-400" />
            <h2 className="text-2xl font-semibold tracking-tight">Experiencia Laboral</h2>
          </div>
          <div className="space-y-10 border-l border-zinc-800 ml-2 pl-6">
            {EXPERIENCE.map((item, index) => (
              <div key={index} className="relative space-y-2.5">
                <span className="absolute -left-[29px] top-1.5 w-2.5 h-2.5 rounded-full bg-emerald-500/80 ring-4 ring-zinc-950" />
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <h3 className="text-lg font-medium text-zinc-100">{item.role}</h3>
                  <span className="text-xs font-mono text-zinc-500">{item.period}</span>
                </div>
                <p className="text-sm font-medium text-zinc-400">{item.company}</p>
                <ul className="space-y-1.5 text-sm text-zinc-400 leading-relaxed list-disc list-inside marker:text-zinc-600">
                  {item.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-1.5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Proyectos */}
        <section id="proyectos" className="space-y-8 scroll-mt-16">
          <div className="flex items-center gap-2 text-zinc-100">
            <FolderGit2 className="w-5 h-5 text-zinc-400" />
            <h2 className="text-2xl font-semibold tracking-tight">Proyectos Destacados</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project, index) => (
              <article
                key={index}
                className="flex flex-col justify-between p-6 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-base font-semibold text-zinc-100">
                      {project.title}
                    </h3>
                    <div className="flex gap-3 text-zinc-400 shrink-0">
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Código fuente"
                          className="hover:text-zinc-100 transition-colors"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Demo en vivo"
                          className="hover:text-zinc-100 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-mono rounded bg-zinc-950 text-zinc-400 border border-zinc-800/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Habilidades */}
        <section id="habilidades" className="space-y-8 scroll-mt-16">
          <div className="flex items-center gap-2 text-zinc-100">
            <Terminal className="w-5 h-5 text-zinc-400" />
            <h2 className="text-2xl font-semibold tracking-tight">Habilidades & Stack</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {Object.entries(SKILLS).map(([category, items]) => (
              <div key={category} className="space-y-3">
                <h3 className="text-sm font-medium text-zinc-300 border-b border-zinc-800 pb-2">
                  {category}
                </h3>
                <ul className="space-y-1.5 text-sm text-zinc-400">
                  {items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Formación y Certificaciones */}
        <section id="formacion" className="space-y-8 scroll-mt-16">
          <div className="flex items-center gap-2 text-zinc-100">
            <GraduationCap className="w-5 h-5 text-zinc-400" />
            <h2 className="text-2xl font-semibold tracking-tight">
              Educación & Certificaciones
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-zinc-300 border-b border-zinc-800 pb-2">
                Educación Académica
              </h3>
              <div className="space-y-4">
                {EDUCATION.map((edu, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between items-baseline gap-2">
                      <h4 className="text-sm font-semibold text-zinc-100">
                        {edu.degree}
                      </h4>
                      <span className="text-xs font-mono text-zinc-500 shrink-0">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-emerald-400">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {edu.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium text-zinc-300 border-b border-zinc-800 pb-2">
                Certificaciones
              </h3>
              <ul className="space-y-3">
                {CERTIFICATIONS.map((cert, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-start gap-4 text-sm"
                  >
                    <div>
                      <p className="font-medium text-zinc-200">{cert.title}</p>
                      <p className="text-xs text-zinc-400">{cert.issuer}</p>
                    </div>
                    <span className="text-xs font-mono text-zinc-500 shrink-0">
                      {cert.year}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-24 pt-8 border-t border-zinc-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
        <p>© 2026 {PROFILE.name}.</p>
        <p>{PROFILE.location}</p>
      </footer>
    </div>
  );
}