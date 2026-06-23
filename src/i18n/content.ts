import type { ImageMetadata } from 'astro'
import alvadreams from '../assets/projects/alvadreams.avif'
import novafeature from '../assets/projects/novafeature.avif'
import carlossaezphoto from '../assets/projects/carlossaezphoto.avif'
import ansible from '../assets/projects/ansible.avif'
import ecashort from '../assets/projects/ecashort.webp'
import unziper from '../assets/projects/unziper.avif'

export const languages = {
  es: 'Español',
  en: 'English',
} as const

export const defaultLang = 'es'

export type Lang = keyof typeof languages

export interface ServiceItem {
  icon: 'web' | 'app' | 'speed' | 'support'
  title: string
  description: string
}

export interface ProcessStep {
  step: string
  title: string
  description: string
}

export interface Credential {
  date: string
  title: string
  company: string
  description: string
}

export interface Stat {
  value: string
  label: string
}

export interface Project {
  title: string
  technologies: string
  alt: string
  src: ImageMetadata
  link: string
}

export interface FaqItem {
  q: string
  a: string
}

/** Shared across languages — tech names don't need translation. */
export const techs = [
  'Astro',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'Python',
  'Linux',
] as const

interface SiteContent {
  meta: { title: string; description: string }
  nav: { services: string; process: string; about: string; work: string; faq: string; contact: string }
  faq: { eyebrow: string; title: string; subtitle: string; items: FaqItem[] }
  hero: {
    badge: string
    title: string
    highlight: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    trust: string
  }
  services: { eyebrow: string; title: string; subtitle: string; items: ServiceItem[] }
  process: { eyebrow: string; title: string; subtitle: string; steps: ProcessStep[] }
  about: {
    eyebrow: string
    title: string
    subtitle: string
    stats: Stat[]
    credentialsTitle: string
    credentials: Credential[]
  }
  work: { eyebrow: string; title: string; subtitle: string; projects: Project[] }
  cta: { title: string; subtitle: string; email: string; linkedin: string }
  footer: { rights: string; backToTop: string }
}

const projects: Project[] = [
  {
    title: 'Alvadreams',
    technologies: 'Astro',
    alt: 'Alvadreams website screenshot',
    src: alvadreams,
    link: 'https://alvadreams.com',
  },
  {
    title: 'Novafeature',
    technologies: 'Next.js, Tailwind CSS, MongoDB, Auth.js',
    alt: 'Novafeature website screenshot',
    src: novafeature,
    link: 'https://novafeature.com',
  },
  {
    title: 'Carlos Saez Portfolio',
    technologies: 'Astro, Tailwind CSS',
    alt: 'screenshot of the portfolio',
    src: carlossaezphoto,
    link: 'https://carlossaezphoto.com',
  },
  {
    title: 'Url Shortener',
    technologies: 'Astro, Tailwind CSS',
    alt: 'short url',
    src: ecashort,
    link: 'https://ecashort.netlify.app/',
  },
  {
    title: 'Ansible Environment',
    technologies: 'Linux, Ansible',
    alt: 'linux command line interface with some code of ansible',
    src: ansible,
    link: 'https://github.com/anthonyeca/ansible-practica',
  },
  {
    title: 'Unzipfiler',
    technologies: 'Python',
    alt: 'unzipfiler',
    src: unziper,
    link: 'https://github.com/anthonyeca/unzipfiler',
  },
]

export const content: Record<Lang, SiteContent> = {
  es: {
    meta: {
      title: 'Anthony Challout | Desarrollo web a medida para tu negocio',
      description:
        'Desarrollador web. Creo webs y aplicaciones rápidas, modernas y a medida que ayudan a tu negocio a crecer. Hablemos de tu proyecto.',
    },
    nav: {
      services: 'Servicios',
      process: 'Cómo trabajo',
      about: 'Sobre mí',
      work: 'Proyectos',
      faq: 'Preguntas',
      contact: 'Contacto',
    },
    faq: {
      eyebrow: 'Preguntas frecuentes',
      title: 'Resuelvo tus dudas',
      subtitle: 'Lo que más me suelen preguntar antes de empezar un proyecto.',
      items: [
        {
          q: '¿Cuánto cuesta una web?',
          a: 'Depende del alcance: no es lo mismo una landing de una página que una aplicación a medida. Tras hablar de tu proyecto te paso un presupuesto cerrado, sin sorpresas ni costes ocultos.',
        },
        {
          q: '¿Cuánto se tarda en tenerla lista?',
          a: 'Una landing sencilla puede estar en 1-2 semanas; una web o aplicación más completa, entre 3 y 6 semanas. Te doy una estimación realista en la propuesta inicial.',
        },
        {
          q: '¿La web es mía? ¿Quién la gestiona?',
          a: 'Sí, la web y su contenido son 100% tuyos. Te la entrego lista para que la gestiones tú, y si lo prefieres me encargo yo del mantenimiento.',
        },
        {
          q: '¿Ofreces mantenimiento después de la entrega?',
          a: 'Sí. Puedo mantener tu web segura, actualizada y funcionando con un plan de mantenimiento opcional. Vengo de 5+ años dando soporte a aplicaciones críticas.',
        },
        {
          q: '¿Trabajas con clientes fuera de España?',
          a: 'Sin problema. Trabajo en remoto y me adapto a tu zona horaria. Esta misma web está en español e inglés.',
        },
      ],
    },
    hero: {
      badge: 'Disponible para nuevos proyectos',
      title: 'Webs a medida que hacen',
      highlight: 'crecer tu negocio',
      subtitle:
        'Soy Anthony, desarrollador web. Convierto tu idea en una web moderna, rápida y fácil de gestionar, pensada para conseguir más clientes.',
      ctaPrimary: 'Hablemos de tu proyecto',
      ctaSecondary: 'Ver proyectos',
      trust: '5+ años en IT · BNP Paribas · Telefónica',
    },
    services: {
      eyebrow: 'Servicios',
      title: 'Lo que puedo hacer por ti',
      subtitle: 'Desde una landing sencilla hasta una aplicación web completa, me adapto a lo que tu negocio necesita.',
      items: [
        {
          icon: 'web',
          title: 'Webs y landing pages',
          description:
            'Webs corporativas y landing pages a medida, con un diseño cuidado y optimizadas para convertir visitas en clientes.',
        },
        {
          icon: 'app',
          title: 'Aplicaciones web',
          description:
            'Paneles, dashboards y aplicaciones a medida que automatizan tareas y simplifican el día a día de tu negocio.',
        },
        {
          icon: 'speed',
          title: 'Rendimiento y SEO',
          description:
            'Webs ultrarrápidas y bien posicionadas en Google para que tus clientes te encuentren antes que a la competencia.',
        },
        {
          icon: 'support',
          title: 'Soporte y mantenimiento',
          description:
            'Mantengo tu web segura, actualizada y funcionando. 5+ años dando soporte a aplicaciones críticas lo avalan.',
        },
      ],
    },
    process: {
      eyebrow: 'Cómo trabajo',
      title: 'Un proceso simple y transparente',
      subtitle: 'Sin sorpresas: sabrás en todo momento qué se hace, cuándo y por cuánto.',
      steps: [
        {
          step: '01',
          title: 'Hablamos',
          description: 'Me cuentas tu idea y tus objetivos. Entiendo qué necesitas y a quién te diriges.',
        },
        {
          step: '02',
          title: 'Propuesta',
          description: 'Te paso un plan claro con alcance, plazos y precio cerrado. Sin letra pequeña.',
        },
        {
          step: '03',
          title: 'Desarrollo',
          description: 'Construyo tu web manteniéndote al día, con entregas que puedes revisar y comentar.',
        },
        {
          step: '04',
          title: 'Entrega y soporte',
          description: 'Lanzamos el proyecto y me quedo para mantenerlo seguro y al día si lo necesitas.',
        },
      ],
    },
    about: {
      eyebrow: 'Sobre mí',
      title: 'Por qué confiar en mí',
      subtitle:
        'Más de 5 años trabajando con tecnología en entornos exigentes. Sé lo que es entregar soluciones fiables y dar la cara cuando algo importa de verdad.',
      stats: [
        { value: '5+', label: 'años en IT' },
        { value: '100%', label: 'proyectos a medida' },
        { value: '24h', label: 'tiempo de respuesta' },
      ],
      credentialsTitle: 'Mi experiencia',
      credentials: [
        {
          date: 'Diciembre 2025 · Actualidad',
          title: 'Application Production Support',
          company: 'BNP Paribas CIB',
          description:
            'Soporte a producción para BNP Paribas CIB (Corporate & Institutional Banking): gestión de incidencias, problemas y cambios sobre más de 260 aplicaciones europeas. Como referente del equipo, mentorizo a compañeros, automatizo tareas y reporting (Autosys, PowerShell, flujos CFT/FTaaS), monitorizo con Dynatrace y coordino migraciones y pruebas de continuidad (DR/BCP) con los hubs centrales de IT.',
        },
        {
          date: '2022 – Diciembre 2025',
          title: 'Application Production Support',
          company: 'Optimissa · BNP Paribas CIB',
          description:
            'Entrada al equipo de Application Production Support de BNP Paribas CIB a través de Optimissa. Soporte técnico y funcional a usuarios de aplicaciones internas y de terceros, gestión de incidencias y peticiones, pruebas y validaciones, documentación de la base de conocimiento y soporte a los equipos de desarrollo en proyectos y UAT. Entornos Windows/Linux, WebSphere/JBoss/IIS, MS-SQL y Oracle.',
        },
        {
          date: '2020 – Mayo 2022',
          title: 'Técnico de Middleware',
          company: 'Inetum',
          description:
            'Proyecto Genesis en Telefónica: administración de sistemas Linux y middleware (JBoss, WebLogic, WebSphere, Tomcat), despliegues, resolución de incidencias y análisis de logs.',
        },
        {
          date: '2017 · Actualidad',
          title: 'Desarrollador web',
          company: 'Proyectos propios',
          description:
            'Aprendizaje continuo y desarrollo de aplicaciones web reales con tecnologías modernas, de forma autónoma y de principio a fin.',
        },
      ],
    },
    work: {
      eyebrow: 'Proyectos',
      title: 'Algunos trabajos recientes',
      subtitle: 'Una muestra de lo que he construido. Tu proyecto puede ser el próximo.',
      projects,
    },
    cta: {
      title: '¿Tienes un proyecto en mente?',
      subtitle: 'Cuéntame qué necesitas y te respondo en menos de 24 horas. Sin compromiso.',
      email: 'Escríbeme un email',
      linkedin: 'Conecta en LinkedIn',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
      backToTop: 'Volver arriba',
    },
  },
  en: {
    meta: {
      title: 'Anthony Challout | Custom web development for your business',
      description:
        'Web developer. I build fast, modern, custom websites and apps that help your business grow. Let’s talk about your project.',
    },
    nav: {
      services: 'Services',
      process: 'Process',
      about: 'About',
      work: 'Work',
      faq: 'FAQ',
      contact: 'Contact',
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Answers to your questions',
      subtitle: 'The things people ask me most before starting a project.',
      items: [
        {
          q: 'How much does a website cost?',
          a: 'It depends on the scope: a one-page landing isn’t the same as a custom application. After we talk about your project I send you a fixed quote — no surprises, no hidden costs.',
        },
        {
          q: 'How long does it take?',
          a: 'A simple landing can be ready in 1-2 weeks; a more complete website or app, 3 to 6 weeks. I give you a realistic estimate in the initial proposal.',
        },
        {
          q: 'Is the website mine? Who manages it?',
          a: 'Yes, the website and its content are 100% yours. I hand it over ready for you to manage, or I can take care of the maintenance if you prefer.',
        },
        {
          q: 'Do you offer maintenance after launch?',
          a: 'Yes. I can keep your site secure, updated and running with an optional maintenance plan. I come from 5+ years supporting business-critical applications.',
        },
        {
          q: 'Do you work with clients outside Spain?',
          a: 'Absolutely. I work remotely and adapt to your time zone. This very website is available in both Spanish and English.',
        },
      ],
    },
    hero: {
      badge: 'Available for new projects',
      title: 'Custom websites that help your',
      highlight: 'business grow',
      subtitle:
        'I’m Anthony, a web developer. I turn your idea into a modern, fast and easy-to-manage website, built to win you more clients.',
      ctaPrimary: 'Let’s talk about your project',
      ctaSecondary: 'View work',
      trust: '5+ years in IT · BNP Paribas · Telefónica',
    },
    services: {
      eyebrow: 'Services',
      title: 'What I can do for you',
      subtitle: 'From a simple landing page to a full web application, I adapt to what your business needs.',
      items: [
        {
          icon: 'web',
          title: 'Websites & landing pages',
          description:
            'Custom business websites and landing pages with a polished design, optimized to turn visitors into clients.',
        },
        {
          icon: 'app',
          title: 'Web applications',
          description:
            'Custom panels, dashboards and apps that automate tasks and simplify the day-to-day of your business.',
        },
        {
          icon: 'speed',
          title: 'Performance & SEO',
          description:
            'Lightning-fast websites that rank well on Google, so your clients find you before the competition.',
        },
        {
          icon: 'support',
          title: 'Support & maintenance',
          description:
            'I keep your site secure, updated and running. Backed by 5+ years supporting business-critical applications.',
        },
      ],
    },
    process: {
      eyebrow: 'Process',
      title: 'A simple, transparent process',
      subtitle: 'No surprises: you’ll always know what’s being done, when, and for how much.',
      steps: [
        {
          step: '01',
          title: 'We talk',
          description: 'You tell me your idea and goals. I understand what you need and who you’re targeting.',
        },
        {
          step: '02',
          title: 'Proposal',
          description: 'I send you a clear plan with scope, timeline and a fixed price. No fine print.',
        },
        {
          step: '03',
          title: 'Build',
          description: 'I build your site keeping you in the loop, with deliveries you can review and comment on.',
        },
        {
          step: '04',
          title: 'Launch & support',
          description: 'We launch the project and I stick around to keep it secure and up to date if you need it.',
        },
      ],
    },
    about: {
      eyebrow: 'About',
      title: 'Why work with me',
      subtitle:
        'Over 5 years working with technology in demanding environments. I know what it takes to deliver reliable solutions and show up when it really matters.',
      stats: [
        { value: '5+', label: 'years in IT' },
        { value: '100%', label: 'custom projects' },
        { value: '24h', label: 'response time' },
      ],
      credentialsTitle: 'My experience',
      credentials: [
        {
          date: 'December 2025 · Present',
          title: 'Application Production Support',
          company: 'BNP Paribas CIB',
          description:
            'Application production support for BNP Paribas CIB (Corporate & Institutional Banking): incident, problem and change management across 260+ European applications. As a team reference, I mentor colleagues, automate tasks and reporting (Autosys, PowerShell, CFT/FTaaS flows), monitor with Dynatrace and coordinate migrations and continuity (DR/BCP) testing with central IT hubs.',
        },
        {
          date: '2022 – December 2025',
          title: 'Application Production Support',
          company: 'Optimissa · BNP Paribas CIB',
          description:
            'Joined the BNP Paribas CIB Application Production Support team through Optimissa. Technical and functional support for users of internal and third-party applications, incident and request management, testing and validation, knowledge-base documentation and support to development teams on projects and UAT. Windows/Linux, WebSphere/JBoss/IIS, MS-SQL and Oracle environments.',
        },
        {
          date: '2020 – May 2022',
          title: 'Middleware Technician',
          company: 'Inetum',
          description:
            'Genesis project at Telefónica: Linux systems and middleware administration (JBoss, WebLogic, WebSphere, Tomcat), deployments, incident resolution and log analysis.',
        },
        {
          date: '2017 · Present',
          title: 'Web developer',
          company: 'Personal projects',
          description:
            'Continuous learning and building real web applications with modern technologies, independently and end to end.',
        },
      ],
    },
    work: {
      eyebrow: 'Work',
      title: 'Some recent projects',
      subtitle: 'A sample of what I’ve built. Your project could be the next one.',
      projects,
    },
    cta: {
      title: 'Got a project in mind?',
      subtitle: 'Tell me what you need and I’ll get back to you within 24 hours. No strings attached.',
      email: 'Send me an email',
      linkedin: 'Connect on LinkedIn',
    },
    footer: {
      rights: 'All rights reserved.',
      backToTop: 'Back to top',
    },
  },
}
