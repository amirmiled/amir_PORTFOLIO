export const languages = {
  fr: "Français",
  en: "English",
  de: "Deutsch",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "fr";

export const profile = {
  name: "Amir Miled",
  email: "miledamir8@gmail.com",
  phone: "+49 176 36400882",
  phoneHref: "tel:+4917636400882",
  github: "https://github.com/amirmiled",
  site: "https://amirmiled.github.io/amir_PORTFOLIO",
  cv: "/cv/CV_Amir_Miled.pdf",
};

export type SkillCategoryId = "odoo" | "fullstack" | "data";

interface TimelineItem {
  title: string;
  org: string;
  location: string;
  period: string;
  link?: string;
  bullets: string[];
  sub?: { name: string; desc: string }[];
  subLabel?: string;
}

interface Project {
  title: string;
  status: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

export interface Dict {
  meta: { title: string; description: string; jobTitle: string };
  nav: {
    home: string;
    experience: string;
    projects: string;
    background: string;
    contact: string;
    language: string;
  };
  hero: {
    greeting: string;
    title: string;
    tagline: string;
    downloadCv: string;
  };
  whatIDo: {
    title: string;
    categories: { id: SkillCategoryId; label: string; items: string[] }[];
  };
  experience: { kicker: string; title: string; items: TimelineItem[] };
  projects: {
    kicker: string;
    title: string;
    more: string;
    code: string;
    items: Project[];
  };
  background: {
    kicker: string;
    title: string;
    education: TimelineItem[];
    skillsTitle: string;
    skills: { category: string; items: string[] }[];
    languagesTitle: string;
    languages: { name: string; level: string; note: string }[];
    cefrNote: string;
    awardsTitle: string;
    awards: { title: string; year: string; detail: string }[];
  };
  contact: {
    kicker: string;
    title: string;
    intro: string;
    locationLabel: string;
    location: string;
    emailLabel: string;
    phoneLabel: string;
    name: string;
    email: string;
    message: string;
    submit: string;
    success: string;
    error: string;
  };
  emailMenu: {
    trigger: string;
    title: string;
    defaultApp: string;
    copy: string;
    copied: string;
  };
  footer: {
    builtWith: string;
    styledWith: string;
    deployedOn: string;
    rights: string;
    likes: string;
    cv: string;
  };
}

const projectImages = {
  medicare: "/projects/medicare.svg",
  quantibat: "/projects/quantibat.svg",
  magtexco: "/projects/magtexco.svg",
  sac: "/projects/sac.svg",
  movies: "/projects/movies.svg",
  loan: "/projects/loan.svg",
};

const fr: Dict = {
  meta: {
    title: "Amir Miled — Développeur Odoo & Fullstack JavaScript",
    description:
      "Ingénieur logiciel avec 4 ans d'expérience : développement et personnalisation de modules Odoo (16 à 18) et applications fullstack JavaScript (MERN).",
    jobTitle: "Ingénieur logiciel — Développeur Odoo & Fullstack JavaScript",
  },
  nav: {
    home: "Accueil",
    experience: "Expérience",
    projects: "Projets",
    background: "Parcours",
    contact: "Contact",
    language: "Langue",
  },
  hero: {
    greeting: "Bonjour, je suis Amir Miled",
    title: "Ingénieur <br /> logiciel",
    tagline:
      'Développeur <span class="shiny-sec">Odoo</span> & <span class="shiny-sec">Fullstack JavaScript</span> avec 4 ans d\'expérience en systèmes ERP et en développement web.',
    downloadCv: "Télécharger mon CV",
  },
  whatIDo: {
    title: "Ce que je fais",
    categories: [
      {
        id: "odoo",
        label: "ERP Odoo",
        items: [
          "Développement et personnalisation de modules (v16 à v18)",
          "Migration de versions (16 → 18)",
          "Automatisation des workflows",
          "Rapports personnalisés",
        ],
      },
      {
        id: "fullstack",
        label: "Fullstack JavaScript",
        items: [
          "Applications MERN (MongoDB, Express, React, Node.js)",
          "API RESTful et authentification JWT",
          "Interfaces responsives avec React & Redux",
        ],
      },
      {
        id: "data",
        label: "Data science & ML",
        items: [
          "Modèles de prédiction avec scikit-learn",
          "Analyse de données avec pandas & NumPy",
          "Visualisations avec Plotly, Seaborn & Matplotlib",
        ],
      },
    ],
  },
  experience: {
    kicker: "Mon parcours professionnel",
    title: "Expérience",
    items: [
      {
        title: "Fondateur & Consultant Odoo",
        org: "Opexa Consulting",
        location: "Monastir, Tunisie",
        period: "juin 2026 – aujourd'hui",
        bullets: [
          "Intégration, personnalisation et migration d'Odoo pour des clients : analyse des besoins, développement de modules, formation des utilisateurs.",
        ],
        subLabel: "3 projets clients réalisés",
        sub: [
          {
            name: "MediCare ERP",
            desc: "Solution de gestion de cabinet médical sur mesure pour un médecin.",
          },
          {
            name: "Quantibat",
            desc: "Migration de l'instance Odoo de la version 16 à la version 18.",
          },
          {
            name: "Magtexco",
            desc: "Intégration et personnalisation d'Odoo selon les processus de l'entreprise.",
          },
        ],
      },
      {
        title: "Développeur Odoo",
        org: "SAC Software",
        location: "Tunisie",
        period: "janv. 2025 – mars 2026",
        bullets: [
          "Développement et personnalisation de modules Odoo (versions 16 à 18) et création de nouveaux modules selon les besoins métiers.",
          "Participation à la migration des modules vers Odoo Enterprise 16, en préparation du passage à Odoo 18.",
          "Analyse des spécifications fonctionnelles pour en extraire les besoins techniques.",
          "Refactorisation des modules existants pour améliorer les performances et l'expérience utilisateur.",
          "Maintenance, dépannage et débogage des systèmes ERP internes.",
          "Automatisation des flux de travail et création de rapports personnalisés avec l'équipe fonctionnelle.",
          "Contribution à un projet web JavaScript pour des besoins internes.",
        ],
      },
      {
        title: "Développeur Fullstack & Odoo",
        org: "NET-C",
        location: "Tunisie",
        period: "sept. 2022 – oct. 2024",
        bullets: [
          "Développement d'une application web complète avec la stack MERN (MongoDB, Express.js, React.js, Node.js), incluant des interfaces dynamiques et des API RESTful.",
          "Personnalisation de modules métiers Odoo et amélioration des fonctionnalités existantes.",
          "Réalisation d'un projet de machine learning de prédiction à l'aide de plusieurs modèles.",
          "Travail en environnement Agile/Scrum, avec Git pour le contrôle de version et Postman pour les tests d'API.",
        ],
      },
    ],
  },
  projects: {
    kicker: "Mes réalisations",
    title: "Projets",
    more: "Plus de projets sur",
    code: "Code source",
    items: [
      {
        title: "MediCare ERP",
        status: "Projet client · Opexa Consulting",
        description:
          "Solution Odoo sur mesure pour la gestion d'un cabinet médical.",
        tags: ["Odoo", "Python", "XML", "PostgreSQL"],
        image: projectImages.medicare,
      },
      {
        title: "Quantibat",
        status: "Projet client · Opexa Consulting",
        description:
          "Migration de l'instance Odoo de la version 16 à la version 18.",
        tags: ["Odoo 16 → 18", "Python", "Migration"],
        image: projectImages.quantibat,
      },
      {
        title: "Magtexco",
        status: "Projet client · Opexa Consulting",
        description:
          "Intégration et personnalisation d'Odoo selon les processus de l'entreprise.",
        tags: ["Odoo", "Intégration", "Formation"],
        image: projectImages.magtexco,
      },
      {
        title: "Développement ERP Odoo",
        status: "Professionnel · SAC Software",
        description:
          "Création et refactorisation de modules, migration vers Odoo Enterprise 16 en préparation d'Odoo 18, automatisation des flux et rapports personnalisés.",
        tags: ["Odoo Enterprise", "Python", "XML", "Rapports"],
        image: projectImages.sac,
      },
      {
        title: "Application web de films",
        status: "Fullstack · stack MERN",
        description:
          "API REST sécurisées (films, utilisateurs, favoris, authentification), composants React réutilisables avec recherche, filtrage et favoris, état géré avec Redux et JWT.",
        tags: ["MongoDB", "Express", "React", "Node.js", "Redux", "JWT"],
        image: projectImages.movies,
      },
      {
        title: "Prédiction de l'approbation des prêts",
        status: "Machine learning",
        description:
          "Régression linéaire pour le montant du prêt et Random Forest pour son statut, évalués par MAE, MSE et R² (R² = 0,85).",
        tags: ["scikit-learn", "pandas", "Plotly", "Seaborn"],
        image: projectImages.loan,
      },
    ],
  },
  background: {
    kicker: "Formation & compétences",
    title: "Parcours",
    education: [
      {
        title: "Bootcamp Full-Stack JavaScript",
        org: "GoMyCode",
        location: "Tunisie",
        period: "déc. 2022 – juil. 2023",
        bullets: [
          "Formation complète en développement web frontend et backend : Node.js, React.js, Express.js, MongoDB.",
          "Lauréat du prix du meilleur projet.",
        ],
      },
      {
        title: "Diplôme national d'ingénieur en génie informatique",
        org: "École Polytechnique de Sousse",
        location: "Sousse, Tunisie",
        period: "sept. 2019 – juil. 2022",
        link: "https://polytecsousse.tn",
        bullets: [
          "Niveau 7 du CEC.",
          "Domaines : programmation, bases de données, réseaux, technologies web.",
          "Projets pratiques et stages académiques réalisés pendant le cursus.",
        ],
      },
      {
        title: "Cycle préparatoire en informatique",
        org: "IHE Espita Sousse",
        location: "Sousse, Tunisie",
        period: "sept. 2017 – juil. 2019",
        link: "https://espita.ens.tn",
        bullets: [
          "Programme intégré de deux ans : mathématiques, algorithmique et fondamentaux de la programmation.",
        ],
      },
    ],
    skillsTitle: "Compétences numériques",
    skills: [
      {
        category: "ERP Odoo",
        items: [
          "Modules sur mesure",
          "Migration 16 → 18",
          "Workflows",
          "Rapports",
        ],
      },
      {
        category: "Langages",
        items: ["Python", "JavaScript", "HTML", "CSS", "XML"],
      },
      {
        category: "Frontend",
        items: ["React.js", "Redux", "Responsive design", "Performance"],
      },
      {
        category: "Backend",
        items: ["Node.js", "Express.js", "API RESTful", "JWT"],
      },
      {
        category: "Bases de données",
        items: ["PostgreSQL", "MySQL", "MongoDB"],
      },
      {
        category: "Data science & ML",
        items: [
          "scikit-learn",
          "pandas",
          "NumPy",
          "Matplotlib",
          "Seaborn",
          "Plotly Express",
        ],
      },
      {
        category: "Outils",
        items: ["Git", "GitHub", "Postman", "VS Code", "Jupyter Notebook"],
      },
      {
        category: "Méthodes",
        items: ["Agile / Scrum", "Analyse des besoins", "Gestion de projet"],
      },
    ],
    languagesTitle: "Langues",
    languages: [
      { name: "Arabe", level: "", note: "Langue maternelle" },
      { name: "Français", level: "C1", note: "Utilisateur expérimenté" },
      { name: "Anglais", level: "B2", note: "Utilisateur indépendant" },
      { name: "Allemand", level: "B1", note: "Utilisateur indépendant" },
    ],
    cefrNote: "Niveaux selon le Cadre européen commun de référence (CECRL).",
    awardsTitle: "Distinctions & concours",
    awards: [
      {
        title: "Prix du meilleur projet",
        year: "2023",
        detail: "GoMyCode",
      },
      {
        title: "Google Hash Code",
        year: "2020",
        detail:
          "Compétition internationale de programmation de Google (hub : École Polytechnique de Sousse).",
      },
      {
        title: "JNMA – Journées Nationales de la Mécatronique Automobile",
        year: "2018",
        detail:
          "Échanges techniques sur les innovations du secteur automobile.",
      },
    ],
  },
  contact: {
    kicker: "Parlons-en",
    title: "Contact",
    intro:
      "Un projet Odoo, une application web ou une opportunité ? N'hésitez pas à me contacter.",
    locationLabel: "Localisation",
    location: "Achères (78), Île-de-France, France",
    emailLabel: "E-mail",
    phoneLabel: "Téléphone",
    name: "Nom",
    email: "E-mail",
    message: "Message",
    submit: "Envoyer",
    success: "✅ Merci pour votre message !",
    error: "Un problème est survenu lors de l'envoi de votre message.",
  },
  emailMenu: {
    trigger: "Envoyer un e-mail",
    title: "Écrire avec",
    defaultApp: "Application de messagerie",
    copy: "Copier l'adresse",
    copied: "Adresse copiée !",
  },
  footer: {
    builtWith: "Construit avec",
    styledWith: "Stylisé avec",
    deployedOn: "Déployé sur",
    rights: "Tous droits réservés.",
    likes: "J'aime",
    cv: "CV",
  },
};

const en: Dict = {
  meta: {
    title: "Amir Miled — Odoo & Fullstack JavaScript Developer",
    description:
      "Software engineer with 4 years of experience developing and customizing Odoo modules (16 to 18) and fullstack JavaScript (MERN) applications.",
    jobTitle: "Software Engineer — Odoo & Fullstack JavaScript Developer",
  },
  nav: {
    home: "Home",
    experience: "Experience",
    projects: "Projects",
    background: "Background",
    contact: "Contact",
    language: "Language",
  },
  hero: {
    greeting: "Hi, I'm Amir Miled",
    title: "Software <br /> Engineer",
    tagline:
      '<span class="shiny-sec">Odoo</span> & <span class="shiny-sec">Fullstack JavaScript</span> developer with 4 years of experience in ERP systems and web development.',
    downloadCv: "Download my CV",
  },
  whatIDo: {
    title: "What I do",
    categories: [
      {
        id: "odoo",
        label: "Odoo ERP",
        items: [
          "Module development & customization (v16 to v18)",
          "Version migration (16 → 18)",
          "Workflow automation",
          "Custom reports",
        ],
      },
      {
        id: "fullstack",
        label: "Fullstack JavaScript",
        items: [
          "MERN applications (MongoDB, Express, React, Node.js)",
          "RESTful APIs & JWT authentication",
          "Responsive interfaces with React & Redux",
        ],
      },
      {
        id: "data",
        label: "Data science & ML",
        items: [
          "Prediction models with scikit-learn",
          "Data analysis with pandas & NumPy",
          "Visualizations with Plotly, Seaborn & Matplotlib",
        ],
      },
    ],
  },
  experience: {
    kicker: "My professional journey",
    title: "Experience",
    items: [
      {
        title: "Founder & Odoo Consultant",
        org: "Opexa Consulting",
        location: "Monastir, Tunisia",
        period: "Jun 2026 – Present",
        bullets: [
          "Odoo integration, customization and migration for clients: requirements analysis, module development, user training.",
        ],
        subLabel: "3 client projects delivered",
        sub: [
          {
            name: "MediCare ERP",
            desc: "Custom medical practice management solution for a physician.",
          },
          {
            name: "Quantibat",
            desc: "Migration of the Odoo instance from version 16 to version 18.",
          },
          {
            name: "Magtexco",
            desc: "Odoo integration and customization tailored to the company's processes.",
          },
        ],
      },
      {
        title: "Odoo Developer",
        org: "SAC Software",
        location: "Tunisia",
        period: "Jan 2025 – Mar 2026",
        bullets: [
          "Developed and customized Odoo modules (versions 16 to 18) and built new modules based on business needs.",
          "Took part in migrating modules to Odoo Enterprise 16, in preparation for the move to Odoo 18.",
          "Analyzed functional specifications to derive technical requirements.",
          "Refactored existing modules to improve performance and user experience.",
          "Maintained, troubleshot and debugged internal ERP systems.",
          "Automated workflows and built custom reports with the functional team.",
          "Contributed to a JavaScript web project for internal needs.",
        ],
      },
      {
        title: "Fullstack & Odoo Developer",
        org: "NET-C",
        location: "Tunisia",
        period: "Sep 2022 – Oct 2024",
        bullets: [
          "Built a complete web application with the MERN stack (MongoDB, Express.js, React.js, Node.js), including dynamic interfaces and RESTful APIs.",
          "Customized Odoo business modules and improved existing features.",
          "Delivered a machine learning prediction project using several models.",
          "Worked in an Agile/Scrum environment, using Git for version control and Postman for API testing.",
        ],
      },
    ],
  },
  projects: {
    kicker: "My work",
    title: "Projects",
    more: "More projects on",
    code: "Source code",
    items: [
      {
        title: "MediCare ERP",
        status: "Client project · Opexa Consulting",
        description:
          "Custom Odoo solution for managing a medical practice.",
        tags: ["Odoo", "Python", "XML", "PostgreSQL"],
        image: projectImages.medicare,
      },
      {
        title: "Quantibat",
        status: "Client project · Opexa Consulting",
        description:
          "Migration of the Odoo instance from version 16 to version 18.",
        tags: ["Odoo 16 → 18", "Python", "Migration"],
        image: projectImages.quantibat,
      },
      {
        title: "Magtexco",
        status: "Client project · Opexa Consulting",
        description:
          "Odoo integration and customization tailored to the company's processes.",
        tags: ["Odoo", "Integration", "Training"],
        image: projectImages.magtexco,
      },
      {
        title: "Odoo ERP Development",
        status: "Professional · SAC Software",
        description:
          "Module creation and refactoring, migration to Odoo Enterprise 16 ahead of Odoo 18, workflow automation and custom reports.",
        tags: ["Odoo Enterprise", "Python", "XML", "Reports"],
        image: projectImages.sac,
      },
      {
        title: "Movie Web App",
        status: "Fullstack · MERN stack",
        description:
          "Secure REST APIs (movies, users, favorites, authentication), reusable React components with search, filtering and favorites, state managed with Redux and JWT.",
        tags: ["MongoDB", "Express", "React", "Node.js", "Redux", "JWT"],
        image: projectImages.movies,
      },
      {
        title: "Loan Approval Prediction",
        status: "Machine learning",
        description:
          "Linear regression for the loan amount and a Random Forest classifier for its status, evaluated with MAE, MSE and R² (R² = 0.85).",
        tags: ["scikit-learn", "pandas", "Plotly", "Seaborn"],
        image: projectImages.loan,
      },
    ],
  },
  background: {
    kicker: "Education & skills",
    title: "Background",
    education: [
      {
        title: "Full-Stack JavaScript Bootcamp",
        org: "GoMyCode",
        location: "Tunisia",
        period: "Dec 2022 – Jul 2023",
        bullets: [
          "Complete frontend and backend web development training: Node.js, React.js, Express.js, MongoDB.",
          "Winner of the Best Project award.",
        ],
      },
      {
        title: "National Engineering Degree in Computer Engineering",
        org: "École Polytechnique de Sousse",
        location: "Sousse, Tunisia",
        period: "Sep 2019 – Jul 2022",
        link: "https://polytecsousse.tn",
        bullets: [
          "EQF level 7.",
          "Fields: programming, databases, networks, web technologies.",
          "Hands-on projects and academic internships throughout the program.",
        ],
      },
      {
        title: "Preparatory Cycle in Computer Science",
        org: "IHE Espita Sousse",
        location: "Sousse, Tunisia",
        period: "Sep 2017 – Jul 2019",
        link: "https://espita.ens.tn",
        bullets: [
          "Two-year integrated program: mathematics, algorithms and programming fundamentals.",
        ],
      },
    ],
    skillsTitle: "Digital skills",
    skills: [
      {
        category: "Odoo ERP",
        items: [
          "Custom modules",
          "Migration 16 → 18",
          "Workflows",
          "Reports",
        ],
      },
      {
        category: "Languages",
        items: ["Python", "JavaScript", "HTML", "CSS", "XML"],
      },
      {
        category: "Frontend",
        items: ["React.js", "Redux", "Responsive design", "Performance"],
      },
      {
        category: "Backend",
        items: ["Node.js", "Express.js", "RESTful APIs", "JWT"],
      },
      {
        category: "Databases",
        items: ["PostgreSQL", "MySQL", "MongoDB"],
      },
      {
        category: "Data science & ML",
        items: [
          "scikit-learn",
          "pandas",
          "NumPy",
          "Matplotlib",
          "Seaborn",
          "Plotly Express",
        ],
      },
      {
        category: "Tools",
        items: ["Git", "GitHub", "Postman", "VS Code", "Jupyter Notebook"],
      },
      {
        category: "Methods",
        items: ["Agile / Scrum", "Requirements analysis", "Project management"],
      },
    ],
    languagesTitle: "Languages",
    languages: [
      { name: "Arabic", level: "", note: "Native language" },
      { name: "French", level: "C1", note: "Proficient user" },
      { name: "English", level: "B2", note: "Independent user" },
      { name: "German", level: "B1", note: "Independent user" },
    ],
    cefrNote:
      "Levels based on the Common European Framework of Reference (CEFR).",
    awardsTitle: "Awards & competitions",
    awards: [
      {
        title: "Best Project Award",
        year: "2023",
        detail: "GoMyCode",
      },
      {
        title: "Google Hash Code",
        year: "2020",
        detail:
          "Google's international programming competition (hub: École Polytechnique de Sousse).",
      },
      {
        title: "JNMA – National Automotive Mechatronics Days",
        year: "2018",
        detail:
          "Technical exchanges on innovations in the automotive industry.",
      },
    ],
  },
  contact: {
    kicker: "Let's talk",
    title: "Contact",
    intro:
      "Have an Odoo project, a web application or an opportunity in mind? Feel free to reach out.",
    locationLabel: "Location",
    location: "Achères (78), Île-de-France, France",
    emailLabel: "Email",
    phoneLabel: "Phone",
    name: "Name",
    email: "Email",
    message: "Message",
    submit: "Send",
    success: "✅ Thank you for your message!",
    error: "There was a problem sending your message.",
  },
  emailMenu: {
    trigger: "Send an email",
    title: "Write with",
    defaultApp: "Default mail app",
    copy: "Copy address",
    copied: "Address copied!",
  },
  footer: {
    builtWith: "Built with",
    styledWith: "Styled with",
    deployedOn: "Deployed on",
    rights: "All rights reserved.",
    likes: "Likes",
    cv: "CV",
  },
};

const de: Dict = {
  meta: {
    title: "Amir Miled — Odoo- & Fullstack-JavaScript-Entwickler",
    description:
      "Softwareingenieur mit 4 Jahren Erfahrung in der Entwicklung und Anpassung von Odoo-Modulen (16 bis 18) und Fullstack-JavaScript-Anwendungen (MERN).",
    jobTitle: "Softwareingenieur — Odoo- & Fullstack-JavaScript-Entwickler",
  },
  nav: {
    home: "Start",
    experience: "Erfahrung",
    projects: "Projekte",
    background: "Werdegang",
    contact: "Kontakt",
    language: "Sprache",
  },
  hero: {
    greeting: "Hallo, ich bin Amir Miled",
    title: "Software- <br /> ingenieur",
    tagline:
      '<span class="shiny-sec">Odoo</span>- & <span class="shiny-sec">Fullstack-JavaScript</span>-Entwickler mit 4 Jahren Erfahrung in ERP-Systemen und Webentwicklung.',
    downloadCv: "Lebenslauf herunterladen",
  },
  whatIDo: {
    title: "Was ich mache",
    categories: [
      {
        id: "odoo",
        label: "Odoo ERP",
        items: [
          "Entwicklung und Anpassung von Modulen (v16 bis v18)",
          "Versionsmigration (16 → 18)",
          "Automatisierung von Workflows",
          "Individuelle Berichte",
        ],
      },
      {
        id: "fullstack",
        label: "Fullstack JavaScript",
        items: [
          "MERN-Anwendungen (MongoDB, Express, React, Node.js)",
          "RESTful-APIs & JWT-Authentifizierung",
          "Responsive Oberflächen mit React & Redux",
        ],
      },
      {
        id: "data",
        label: "Data Science & ML",
        items: [
          "Vorhersagemodelle mit scikit-learn",
          "Datenanalyse mit pandas & NumPy",
          "Visualisierungen mit Plotly, Seaborn & Matplotlib",
        ],
      },
    ],
  },
  experience: {
    kicker: "Mein beruflicher Weg",
    title: "Erfahrung",
    items: [
      {
        title: "Gründer & Odoo-Berater",
        org: "Opexa Consulting",
        location: "Monastir, Tunesien",
        period: "Juni 2026 – heute",
        bullets: [
          "Integration, Anpassung und Migration von Odoo für Kunden: Anforderungsanalyse, Modulentwicklung, Anwenderschulung.",
        ],
        subLabel: "3 abgeschlossene Kundenprojekte",
        sub: [
          {
            name: "MediCare ERP",
            desc: "Maßgeschneiderte Praxisverwaltungslösung für einen Arzt.",
          },
          {
            name: "Quantibat",
            desc: "Migration der Odoo-Instanz von Version 16 auf Version 18.",
          },
          {
            name: "Magtexco",
            desc: "Integration und Anpassung von Odoo an die Unternehmensprozesse.",
          },
        ],
      },
      {
        title: "Odoo-Entwickler",
        org: "SAC Software",
        location: "Tunesien",
        period: "Jan. 2025 – März 2026",
        bullets: [
          "Entwicklung und Anpassung von Odoo-Modulen (Versionen 16 bis 18) sowie Erstellung neuer Module nach fachlichen Anforderungen.",
          "Mitarbeit an der Migration der Module auf Odoo Enterprise 16 als Vorbereitung auf Odoo 18.",
          "Analyse funktionaler Spezifikationen zur Ableitung technischer Anforderungen.",
          "Refactoring bestehender Module zur Verbesserung von Performance und Benutzererfahrung.",
          "Wartung, Fehlerbehebung und Debugging der internen ERP-Systeme.",
          "Automatisierung von Arbeitsabläufen und Erstellung individueller Berichte mit dem Fachteam.",
          "Mitarbeit an einem internen JavaScript-Webprojekt.",
        ],
      },
      {
        title: "Fullstack- & Odoo-Entwickler",
        org: "NET-C",
        location: "Tunesien",
        period: "Sept. 2022 – Okt. 2024",
        bullets: [
          "Entwicklung einer vollständigen Webanwendung mit dem MERN-Stack (MongoDB, Express.js, React.js, Node.js), inklusive dynamischer Oberflächen und RESTful-APIs.",
          "Anpassung von Odoo-Fachmodulen und Verbesserung bestehender Funktionen.",
          "Umsetzung eines Machine-Learning-Vorhersageprojekts mit mehreren Modellen.",
          "Arbeit in einem agilen Scrum-Umfeld mit Git zur Versionskontrolle und Postman für API-Tests.",
        ],
      },
    ],
  },
  projects: {
    kicker: "Meine Arbeiten",
    title: "Projekte",
    more: "Weitere Projekte auf",
    code: "Quellcode",
    items: [
      {
        title: "MediCare ERP",
        status: "Kundenprojekt · Opexa Consulting",
        description:
          "Maßgeschneiderte Odoo-Lösung für die Verwaltung einer Arztpraxis.",
        tags: ["Odoo", "Python", "XML", "PostgreSQL"],
        image: projectImages.medicare,
      },
      {
        title: "Quantibat",
        status: "Kundenprojekt · Opexa Consulting",
        description:
          "Migration der Odoo-Instanz von Version 16 auf Version 18.",
        tags: ["Odoo 16 → 18", "Python", "Migration"],
        image: projectImages.quantibat,
      },
      {
        title: "Magtexco",
        status: "Kundenprojekt · Opexa Consulting",
        description:
          "Integration und Anpassung von Odoo an die Unternehmensprozesse.",
        tags: ["Odoo", "Integration", "Schulung"],
        image: projectImages.magtexco,
      },
      {
        title: "Odoo-ERP-Entwicklung",
        status: "Beruflich · SAC Software",
        description:
          "Erstellung und Refactoring von Modulen, Migration auf Odoo Enterprise 16 als Vorbereitung auf Odoo 18, Workflow-Automatisierung und individuelle Berichte.",
        tags: ["Odoo Enterprise", "Python", "XML", "Berichte"],
        image: projectImages.sac,
      },
      {
        title: "Film-Webanwendung",
        status: "Fullstack · MERN-Stack",
        description:
          "Gesicherte REST-APIs (Filme, Benutzer, Favoriten, Authentifizierung), wiederverwendbare React-Komponenten mit Suche, Filterung und Favoriten, State-Management mit Redux und JWT.",
        tags: ["MongoDB", "Express", "React", "Node.js", "Redux", "JWT"],
        image: projectImages.movies,
      },
      {
        title: "Vorhersage von Kreditgenehmigungen",
        status: "Machine Learning",
        description:
          "Lineare Regression für den Kreditbetrag und Random-Forest-Klassifikator für den Status, bewertet mit MAE, MSE und R² (R² = 0,85).",
        tags: ["scikit-learn", "pandas", "Plotly", "Seaborn"],
        image: projectImages.loan,
      },
    ],
  },
  background: {
    kicker: "Ausbildung & Kompetenzen",
    title: "Werdegang",
    education: [
      {
        title: "Full-Stack-JavaScript-Bootcamp",
        org: "GoMyCode",
        location: "Tunesien",
        period: "Dez. 2022 – Juli 2023",
        bullets: [
          "Umfassende Ausbildung in Frontend- und Backend-Webentwicklung: Node.js, React.js, Express.js, MongoDB.",
          "Gewinner des Preises für das beste Projekt.",
        ],
      },
      {
        title: "Staatliches Ingenieurdiplom in Informatik",
        org: "École Polytechnique de Sousse",
        location: "Sousse, Tunesien",
        period: "Sept. 2019 – Juli 2022",
        link: "https://polytecsousse.tn",
        bullets: [
          "EQR-Niveau 7.",
          "Schwerpunkte: Programmierung, Datenbanken, Netzwerke, Webtechnologien.",
          "Praxisprojekte und Studienpraktika während des Studiums.",
        ],
      },
      {
        title: "Ingenieur-Vorbereitungszyklus Informatik",
        org: "IHE Espita Sousse",
        location: "Sousse, Tunesien",
        period: "Sept. 2017 – Juli 2019",
        link: "https://espita.ens.tn",
        bullets: [
          "Zweijähriges integriertes Programm: Mathematik, Algorithmik und Grundlagen der Programmierung.",
        ],
      },
    ],
    skillsTitle: "Digitale Kompetenzen",
    skills: [
      {
        category: "Odoo ERP",
        items: [
          "Individuelle Module",
          "Migration 16 → 18",
          "Workflows",
          "Berichte",
        ],
      },
      {
        category: "Sprachen",
        items: ["Python", "JavaScript", "HTML", "CSS", "XML"],
      },
      {
        category: "Frontend",
        items: ["React.js", "Redux", "Responsive Design", "Performance"],
      },
      {
        category: "Backend",
        items: ["Node.js", "Express.js", "RESTful-APIs", "JWT"],
      },
      {
        category: "Datenbanken",
        items: ["PostgreSQL", "MySQL", "MongoDB"],
      },
      {
        category: "Data Science & ML",
        items: [
          "scikit-learn",
          "pandas",
          "NumPy",
          "Matplotlib",
          "Seaborn",
          "Plotly Express",
        ],
      },
      {
        category: "Werkzeuge",
        items: ["Git", "GitHub", "Postman", "VS Code", "Jupyter Notebook"],
      },
      {
        category: "Methoden",
        items: ["Agile / Scrum", "Anforderungsanalyse", "Projektmanagement"],
      },
    ],
    languagesTitle: "Sprachen",
    languages: [
      { name: "Arabisch", level: "", note: "Muttersprache" },
      { name: "Französisch", level: "C1", note: "Kompetente Sprachverwendung" },
      { name: "Englisch", level: "B2", note: "Selbstständige Sprachverwendung" },
      { name: "Deutsch", level: "B1", note: "Selbstständige Sprachverwendung" },
    ],
    cefrNote:
      "Niveaus nach dem Gemeinsamen Europäischen Referenzrahmen (GER).",
    awardsTitle: "Auszeichnungen & Wettbewerbe",
    awards: [
      {
        title: "Preis für das beste Projekt",
        year: "2023",
        detail: "GoMyCode",
      },
      {
        title: "Google Hash Code",
        year: "2020",
        detail:
          "Internationaler Programmierwettbewerb von Google (Hub: École Polytechnique de Sousse).",
      },
      {
        title: "JNMA – Nationale Tage der Fahrzeugmechatronik",
        year: "2018",
        detail:
          "Fachlicher Austausch über Innovationen in der Automobilbranche.",
      },
    ],
  },
  contact: {
    kicker: "Lass uns reden",
    title: "Kontakt",
    intro:
      "Ein Odoo-Projekt, eine Webanwendung oder ein Jobangebot? Schreiben Sie mir gerne.",
    locationLabel: "Standort",
    location: "Achères (78), Île-de-France, Frankreich",
    emailLabel: "E-Mail",
    phoneLabel: "Telefon",
    name: "Name",
    email: "E-Mail",
    message: "Nachricht",
    submit: "Senden",
    success: "✅ Vielen Dank für Ihre Nachricht!",
    error: "Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten.",
  },
  emailMenu: {
    trigger: "E-Mail senden",
    title: "Schreiben mit",
    defaultApp: "Standard-Mail-App",
    copy: "Adresse kopieren",
    copied: "Adresse kopiert!",
  },
  footer: {
    builtWith: "Erstellt mit",
    styledWith: "Gestaltet mit",
    deployedOn: "Gehostet auf",
    rights: "Alle Rechte vorbehalten.",
    likes: "Likes",
    cv: "Lebenslauf",
  },
};

export const ui: Record<Lang, Dict> = { fr, en, de };

export function getLang(locale: string | undefined): Lang {
  return locale && locale in ui ? (locale as Lang) : defaultLang;
}

export function useTranslations(locale: string | undefined): Dict {
  return ui[getLang(locale)];
}

/** Prefixes a public asset path with the configured base (e.g. /amir_PORTFOLIO). */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
