export const PROFILE = {
  name: "Francisco Carrillo",
  fullName: "Francisco Luis Carrillo",
  role: "Technical Product Owner & Scrum Master",
  availability: "Product Owner / Scrum Master / Data Analytics + BI",
  summary:
    "Especializado en liderar células cross-product, gestión del ciclo de vida de software (SDLC), interoperabilidad de plataformas transaccionales y adopción de APIs bursátiles. Experiencia comprobada reduciendo tiempos de onboarding en un 80% mediante auditoría funcional, definición de KPIs y articulación entre negocio, desarrollo externo e infraestructura.",
  location: "Buenos Aires, Argentina",
  email: "carrillo.francisco.luis@gmail.com",
  github: "https://github.com/FranciscoLuisCarrillo",
  linkedin: "https://www.linkedin.com/in/franciscoluiscarrillo",
  cvUrl: "/cv-francisco-carrillo.pdf",
  avatarUrl: "/avatar.jpeg",
};

export const METRICS = [
  {
    value: "-80%",
    label: "Tiempo de onboarding",
    detail: "Auditoría técnico-funcional y KPIs operativos",
  },
  {
    value: "+4 años",
    label: "Mercado de Capitales",
    detail: "Ecosistema Primary / A3 Mercados",
  },
  {
    value: "3 Productos",
    label: "Célula Cross-Product",
    detail: "Matriz OMS, Mobile y Ecobolsa",
  },
  {
    value: "End-to-End",
    label: "Gestión SDLC & APIs",
    detail: "REST/SOAP, SDKs, VMs Linux y BI",
  },
];

export const PRIMARY_EXPERIENCE = {
  company: "Primary (A3 Mercados / Matba Rofex)",
  totalPeriod: "Abr 2021 – Nov 2025",
  roles: [
    {
      role: "Product Owner (Interoperabilidad) & Scrum Master",
      period: "Oct 2023 – Nov 2025",
      highlights: [
        "Reduje en un 80% el tiempo de implementación de onboardings tras liderar una auditoría técnica entre plataformas (Matriz OMS, Mobile y Ecobolsa) y establecer KPIs de seguimiento operativo.",
        "Diseñé la estructura, roles y responsabilidades de la célula cross-product (con referentes de los 3 productos), actuando como Scrum Master e implementando alertas automatizadas para detectar desvíos en implementaciones paralelas.",
      ],
      tags: ["Scrum Master", "Interoperabilidad", "Matriz OMS", "KPIs & OKRs", "Auditoría Técnica"],
    },
    {
      role: "Product Owner (reMarkets)",
      period: "Ene 2023 – Nov 2025",
      highlights: [
        "Gestioné el ciclo operativo y funcional del ambiente de testing y trading algorítmico (reMarkets), administrando altas de contratos, cuentas, saldos, portal web y despliegue de nuevas versiones.",
        "Coordiné con Producto e Infraestructura el mantenimiento de VMs Linux (diagnóstico de logs vía PuTTY y cotizador) y diseñé KPIs trimestrales e informes de gestión para la mejora continua del entorno.",
      ],
      tags: ["reMarkets", "Trading Algorítmico", "Linux / VMs", "SDLC"],
    },
    {
      role: "Product Owner (Mobile)",
      period: "Ene 2022 – Oct 2023",
      highlights: [
        "Actué como nexo técnico-funcional con el desarrollador externo para liderar el lanzamiento de la nueva versión de la app Mobile, coordinando su rediseño integral de UI/UX, branding e informes de avance y riesgos.",
      ],
      tags: ["Mobile App", "Gestión de Proveedores", "UI/UX", "Roadmap"],
    },
    {
      role: "Analista de Ecosistema & Developer Relations",
      period: "Abr 2021 – Dic 2022",
      highlights: [
        "Administré los repositorios open-source en GitHub (SDKs en Python y .NET) junto a los Owners técnicos, brindé soporte de integración de APIs y dicté workshops técnicos que impulsaron la adopción del ecosistema.",
        "Desarrollé informes mensuales en Qlik sobre uso de reMarkets, volumen de contratos y actividad en sandbox para orientar decisiones estratégicas.",
      ],
      tags: ["REST APIs", "SDKs Python / .NET", "GitHub", "Qlik", "Developer Relations"],
    },
  ],
};

export const OTHER_EXPERIENCE = [
  {
    role: "Analista de Automatización & Datos",
    company: "Ad-Cap Argentina",
    period: "Dic 2020 – Abr 2021",
    highlights: [
      "Desarrollé scripts en Python (Pandas) y consultas SQL para automatizar cruces masivos de movimientos bancarios y operaciones bursátiles, estandarizando la extracción de datos para dashboards y reportes diarios en PDF.",
    ],
    tags: ["Python (Pandas)", "SQL", "Automatización", "ETL"],
  },
  {
    role: "Analista Contable",
    company: "Sanatorio General Sarmiento",
    period: "Abr 2016 – Jun 2019",
    highlights: [
      "Ejecuté análisis, depuración y conciliación de cuentas patrimoniales y de resultados para cierres mensuales y balance anual, además de liquidaciones impositivas (AFIP/ARBA), conciliaciones bancarias y posición financiera.",
    ],
    tags: ["Contabilidad", "Finanzas", "AFIP / ARBA", "Conciliaciones"],
  },
];

export interface Project {
  title: string;
  subtitle: string;
  period: string;
  status: string;
  folderLabel: string;
  description: string;
  beforeText: string;
  afterText: string;
  connectionLabel: string;
  imageUrl: string;
  tags: string[];
  repoUrl: string;
  demoUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "Fintech SLA Monitor",
    subtitle: "Observabilidad y auditoría de contratos API",
    period: "Fintech · 2026",
    status: "operativo",
    folderLabel: "sla-monitor",
    description:
      "Sistema end-to-end para ecosistemas bursátiles y fintech. Audita latencia, disponibilidad HTTP y esquemas JSON entre OMS, Mobile y Onboarding en tiempo real.",
    beforeText:
      "Detección reactiva de fallos: las caídas silenciosas o cambios en contratos JSON se descubrían recién cuando impactaban al usuario.",
    afterText:
      "Monitoreo preventivo cada 5s con validación de esquema, alertas SLA automáticas y métricas P95 persistidas en SQL.",
    connectionLabel: "todo auditado",
    imageUrl: "/projects/sla-monitor.png",
    tags: ["Python", "FastAPI", "SQLite / SQL", "Streamlit"],
    repoUrl: "https://github.com/FranciscoLuisCarrillo/fintech-api-sla-monitor",
  },
  
];

export const SKILLS = {
  "Gestión Ágil & Producto": [
    "Scrum (Scrum Master)",
    "Priorización de Backlog & Roadmap",
    "Gestión de SDLC",
    "Interoperabilidad de Sistemas",
    "Auditoría Técnico-Funcional",
    "Gestión de Proveedores Externos",
    "Onboarding de Clientes",
    "KPIs & OKRs",
  ],
  "Tecnología, APIs & Infraestructura": [
    "REST APIs Bursátiles",
    "SDKs (Python / .NET)",
    "Git / GitHub",
    "Servidores Linux / VMs (PuTTY, logs)",
    "SQL & Python (Pandas)",
    "Qlik & Power BI",
  ],
  "Dominio de Negocio": [
    "Mercado de Capitales",
    "OMS (Matriz)",
    "Trading Algorítmico",
    "Ambientes de Testing (reMarkets)",
    "Negociación y Liquidación Financiera",
  ],
};

export const EDUCATION = [
  {
    institution: "Universidad Tecnológica Nacional (UTN - FRGP)",
    degree: "Tecnicatura Universitaria en Programación",
    period: "Mar 2024 – Ene 2027",
    detail:
      "Arquitectura de software, bases de datos relacionales, programación orientada a objetos y metodologías ágiles.",
  },
  {
    institution: "Universidad Nacional de Luján (UNLu)",
    degree: "Contador Público",
    period: "Ene 2013 – Dic 2021",
    detail:
      "Formación integral en contabilidad patrimonial, costos, finanzas corporativas y normativa tributaria.",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Asesor Financiero Certificado & Idóneo en Mercado de Capitales",
    issuer: "IAEF & CNV",
    year: "2020",
  },
  {
    title: "Python para Finanzas (Pre-Quant)",
    issuer: "UCEMA",
    year: "2021",
  },
  {
    title: "Diplomatura en Business Intelligence",
    issuer: "UTN",
    year: "2019",
  },
];