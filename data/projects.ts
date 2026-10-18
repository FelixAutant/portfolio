export interface Project {
  id: string;
  title: string;
  description: {
    fr: string;
    en: string;
  };
  longDescription?: {
    fr: string;
    en: string;
  };
  technologies: string[];
  category: "web" | "mobile" | "desktop" | "devops";
  image?: string;
  imageBack?: string;
  stats?: {
    value: string;
    label: {
      fr: string;
      en: string;
    };
    tone: "primary" | "secondary" | "accent";
  }[];
  caseStudyPath?: string;
  kicker?: {
    fr: string;
    en: string;
  };
  stackLine?: string;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
  role?: {
    fr: string;
    en: string;
  };
}

export const projects: Project[] = [
  {
    id: "gestiondevis",
    title: "GestionDevis",
    description: {
      fr: "Devis et clients pour artisans : TVA ventilée par taux, suivi des statuts, export PDF.",
      en: "Quotes and clients for tradespeople: VAT broken down by rate, status tracking, PDF export.",
    },
    image: "/projects/gestiondevis/dashboard.webp",
    imageBack: "/projects/gestiondevis/quote-form.webp",
    stats: [
      {
        value: "61",
        label: { fr: "tests automatisés", en: "automated tests" },
        tone: "primary",
      },
      {
        value: "max",
        label: { fr: "niveau PHPStan", en: "PHPStan level" },
        tone: "secondary",
      },
      {
        value: "0 €",
        label: { fr: "d'hébergement", en: "hosting cost" },
        tone: "accent",
      },
    ],
    caseStudyPath: "/projects/gestiondevis",
    technologies: [
      "Symfony 7.4",
      "PHP 8.3",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
      "Doctrine",
      "Twig",
      "PHPUnit",
    ],
    category: "web",
    featured: true,
    githubUrl: "https://github.com/FelixAutant/GestionDevis-Client",
    demoUrl: "https://gestiondevis.onrender.com",
    role: {
      fr: "Projet personnel - conception et développement",
      en: "Personal project - design and development",
    },
  },
  {
    id: "jeewago",
    title: "Jeewago",
    description: {
      fr: "Site d'analyse HBJO : horlogerie, bijouterie, joaillerie, orfèvrerie.",
      en: "HBJO analysis website: watchmaking, jewelry, goldsmithing.",
    },
    kicker: { fr: "Stage · Web", en: "Internship · Web" },
    stackLine: "PHP · SQL · JavaScript",
    longDescription: {
      fr: "Développement d'une plateforme web complète pour l'analyse et la gestion de données HBJO. Implémentation d'interfaces utilisateur intuitives et d'un back-end robuste.",
      en: "Development of a complete web platform for HBJO data analysis and management. Implementation of intuitive user interfaces and a robust backend.",
    },
    technologies: ["PHP", "SQL", "HTML", "CSS", "JavaScript"],
    category: "web",
    featured: true,
    role: {
      fr: "Développeur Fullstack - Stage",
      en: "Fullstack Developer - Internship",
    },
  },
  {
    id: "timeharmony",
    title: "TimeHarmony",
    description: {
      fr: "Gestion d'agendas et planification, partage de calendriers et notifications.",
      en: "Calendar management and scheduling, calendar sharing and notifications.",
    },
    kicker: { fr: "Développeur principal · Web", en: "Lead developer · Web" },
    stackLine: "PHP · Twig · MySQL",
    longDescription: {
      fr: "Application complète de gestion d'agendas avec interface responsive. Fonctionnalités de création d'événements, partage de calendriers et notifications.",
      en: "Complete calendar management application with responsive interface. Features event creation, calendar sharing, and notifications.",
    },
    technologies: ["PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "TWIG", "MySQL"],
    category: "web",
    featured: true,
    role: {
      fr: "Développeur principal",
      en: "Lead Developer",
    },
  },
  {
    id: "android-recipes",
    title: "Recettes Android",
    description: {
      fr: "Gestion de recettes avec recherche, favoris et liste de courses.",
      en: "Recipe management with search, favorites and a shopping list.",
    },
    kicker: { fr: "Mobile", en: "Mobile" },
    stackLine: "Java · SQL · Android Studio",
    longDescription: {
      fr: "Application Android native permettant de gérer une collection de recettes avec fonctionnalités de recherche, favoris et liste de courses.",
      en: "Native Android application for managing a recipe collection with search, favorites, and shopping list features.",
    },
    technologies: ["Java", "SQL", "Android Studio"],
    category: "mobile",
    featured: true,
    role: {
      fr: "Développeur mobile",
      en: "Mobile Developer",
    },
  },
  {
    id: "slideshow-reader",
    title: "Lecteur de diaporama",
    description: {
      fr: "Application logicielle de lecture de diaporamas",
      en: "Desktop slideshow reader application",
    },
    longDescription: {
      fr: "Application desktop développée en C++ avec Qt Creator pour la création et lecture de diaporamas avec transitions animées.",
      en: "Desktop application developed in C++ with Qt Creator for creating and playing slideshows with animated transitions.",
    },
    technologies: ["C++", "SQL", "Qt Creator"],
    category: "desktop",
    featured: false,
    role: {
      fr: "Développeur",
      en: "Developer",
    },
  },
  {
    id: "docker-laravel",
    title: "Déploiement Docker Laravel",
    description: {
      fr: "Configuration Docker pour application Laravel avec MySQL",
      en: "Docker configuration for Laravel application with MySQL",
    },
    longDescription: {
      fr: "Mise en place d'une infrastructure Docker complète pour déployer une application Laravel avec base de données MySQL, incluant Dockerfiles optimisés et docker-compose.",
      en: "Setup of complete Docker infrastructure for deploying a Laravel application with MySQL database, including optimized Dockerfiles and docker-compose.",
    },
    technologies: ["Docker", "Laravel", "MySQL", "docker-compose"],
    category: "devops",
    featured: false,
    role: {
      fr: "DevOps",
      en: "DevOps",
    },
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectsByCategory(category: Project["category"]): Project[] {
  return projects.filter((project) => project.category === category);
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getAllCategories(): Project["category"][] {
  return [...new Set(projects.map((project) => project.category))];
}
