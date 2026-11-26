import { Project } from "../app/data";

export function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative rounded-2xl border border-slate-800/80 bg-[#0b101b] p-6 md:p-8 transition-colors hover:border-slate-700 shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Columna Izquierda: Carpeta interactiva con vista previa */}
        <div className="lg:col-span-4 flex justify-center py-4">
          <a
            href={project.demoUrl || project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-64 h-48 flex items-end justify-center cursor-pointer [perspective:1000px]"
          >
            {/* Tapa trasera de la carpeta */}
            <div className="absolute bottom-0 w-full h-36 rounded-xl bg-[#4f6d9a] transition-transform duration-300 group-hover:scale-[1.02]">
              <div className="absolute -top-3 left-0 w-24 h-4 rounded-t-lg bg-[#4f6d9a]" />
            </div>

            {/* Captura del Dashboard (asoma al pasar el mouse) */}
            <div className="relative z-10 w-[86%] h-36 mb-4 rounded-lg overflow-hidden border border-slate-700/60 bg-slate-900 shadow-xl transition-all duration-300 ease-out group-hover:-translate-y-6 group-hover:scale-105">
              <img
                src={project.imageUrl}
                alt={`Vista previa de ${project.title}`}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Tapa delantera de la carpeta (se inclina hacia adelante en hover) */}
            <div className="absolute bottom-0 z-20 w-full h-32 rounded-xl bg-gradient-to-b from-[#7aa2df] to-[#688ec9] shadow-lg flex items-end justify-center pb-3 origin-bottom transition-transform duration-300 ease-out group-hover:[transform:rotateX(-22deg)]">
              <span className="font-mono text-sm font-bold tracking-tight text-slate-900/90">
                {project.folderLabel}
              </span>
            </div>
          </a>
        </div>

        {/* Columna Derecha: Narrativa de Producto (Antes vs Ahora) */}
        <div className="lg:col-span-8 space-y-5">
          <div>
            <p className="font-mono text-xs text-amber-400/90 mb-1.5">
              {project.period}
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                {project.title}
              </h3>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-950/80 border border-emerald-800/60 px-2.5 py-0.5 font-mono text-xs text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {project.status}
              </span>
            </div>
            <p className="font-mono text-xs text-slate-400 mt-1">
              {project.subtitle}
            </p>
          </div>

          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            {project.description}
          </p>

          {/* Bloque Comparativo: ANTES -> AHORA */}
          <div className="grid grid-cols-1 md:grid-cols-11 gap-3 items-center pt-1">
            <div className="md:col-span-5 rounded-xl border border-slate-800 bg-slate-900/50 p-4 h-full">
              <span className="block font-mono text-[11px] font-semibold tracking-wider text-slate-400 uppercase mb-1.5">
                ANTES
              </span>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                {project.beforeText}
              </p>
            </div>

            {/* Conector visual */}
            <div className="md:col-span-1 flex flex-col items-center justify-center py-1">
              <div className="h-1 w-12 md:w-full rounded-full bg-gradient-to-r from-amber-500 to-sky-400" />
              <span className="font-mono text-[10px] text-slate-400 mt-1 text-center whitespace-nowrap">
                {project.connectionLabel}
              </span>
            </div>

            <div className="md:col-span-5 rounded-xl border border-slate-700/80 bg-slate-900/80 p-4 h-full">
              <span className="block font-mono text-[11px] font-semibold tracking-wider text-sky-400 uppercase mb-1.5">
                AHORA
              </span>
              <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
                {project.afterText}
              </p>
            </div>
          </div>

          {/* Footer de la tarjeta: Enlace y Stack */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors"
            >
              Ver el proyecto <span aria-hidden="true">→</span>
            </a>

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-slate-800 bg-slate-900/90 px-2 py-0.5 font-mono text-[11px] text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </article>
  );
}