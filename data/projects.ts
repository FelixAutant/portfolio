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
  imageAlt?: {
    fr: string;
    en: string;
  };
  highlights?: {
    fr: string[];
    en: string[];
  };
  demoNote?: {
    fr: string;
    en: string;
  };
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
      fr: "Application de devis et de clients pour artisans, en ligne",
      en: "Quote and client management app for tradespeople, live demo",
    },
    longDescription: {
      fr: "Les artisans créent leurs devis en quelques lignes : totaux HT, TVA ventilée par taux et TTC recalculés en direct, numérotation DV-AAAA-NNNN, suivi brouillon → envoyé → accepté / refusé et export PDF. Chaque artisan ne voit que ses propres données. Refonte visuelle récente : tableau de bord chiffré, interface responsive et mode sombre.",
      en: "Tradespeople build quotes in a few lines: net total, VAT broken down by rate and gross total update live, DV-YYYY-NNNN numbering, draft → sent → accepted / declined tracking and PDF export. Each user only sees their own data. Recent visual redesign: figures dashboard, responsive interface and dark mode.",
    },
    image: "/projects/gestiondevis/dashboard.webp",
    imageAlt: {
      fr: "Tableau de bord de GestionDevis : montant signé, montant en attente, taux d'acceptation et répartition des devis par statut",
      en: "GestionDevis dashboard: signed amount, pending amount, acceptance rate and quotes breakdown by status",
    },
    highlights: {
      fr: [
        "Montants en entiers (centimes) : aucun float, aucune dérive d'arrondi",
        "Permissions par artisan via les voters Symfony",
        "Plus de 50 tests automatisés, PHPStan niveau max sans baseline",
        "CI GitHub Actions et déploiement Docker sur Render + Neon",
      ],
      en: [
        "Amounts stored as integers (cents): no floats, no rounding drift",
        "Per-user permissions through Symfony voters",
        "50+ automated tests, PHPStan max level with no baseline",
        "GitHub Actions CI and Docker deployment on Render + Neon",
      ],
    },
    demoNote: {
      fr: "Bouton « Essayer la démo sans compte » sur la page de connexion. Hébergement gratuit : le premier chargement peut prendre 30 à 60 s. Les données de démo sont remises à zéro à chaque démarrage du serveur.",
      en: "Use the “Try the demo without an account” button on the login page. Free hosting: the first load can take 30 to 60 s. Demo data is reset every time the server starts.",
    },
    technologies: [
      "Symfony 7.4",
      "PHP 8.3",
      "PostgreSQL",
      "Doctrine",
      "Twig",
      "Docker",
      "PHPUnit",
      "GitHub Actions",
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
      fr: "Site d'analyse HBJO (Horlogerie, Bijouterie, Joaillerie, Orfèvrerie)",
      en: "HBJO analysis website (Watchmaking, Jewelry, Goldsmithing)",
    },
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
      fr: "Application web de gestion d'agendas et de planification",
      en: "Web application for calendar management and scheduling",
    },
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
    title: "Application Android - Recettes",
    description: {
      fr: "Application mobile de gestion de plats et recettes",
      en: "Mobile application for meal and recipe management",
    },
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
