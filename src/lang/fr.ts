export const fr = {
  brand: {
    name: 'Maxime Madelaine',
    homeLabel: 'Accueil',
  },
  navigation: {
    githubLabel: 'Github',
    linkedinLabel: 'Linkedin',
    menuLabel: 'Ouvrir le menu',
    closeMenuLabel: 'Fermer le menu',
    cvCta: 'CV',
    cvLabel: 'Ouvrir le CV',
    cvUrl: '/cv-maxime-madelaine.pdf',
    githubUrl: 'https://github.com/MistyDream',
    linkedinUrl: 'https://www.linkedin.com/in/maxime-madelaine-ba4657105',
    links: [
      {
        label: 'Accueil',
        href: '#hero',
      },
      {
        label: 'Expertise',
        href: '#capabilities',
      },
      {
        label: 'Expérience',
        href: '#experience',
      },
    ],
  },
  hero: {
    availability: 'Disponible pour de nouvelles opportunités',
    title: {
      firstName: 'Maxime',
      lastName: 'Madelaine',
      role: 'Développeur fullstack',
    },
    description:
      "Développeur fullstack orienté produit, j'interviens sur des applications web utiles avec une attention forte à la maintenabilité, à la performance et aux usages réels.",
    primaryCta: 'Voir mon CV',
    githubCta: 'Github',
    secondaryCta: 'Linkedin',
    portraitAlt: 'Maxime Madelaine',
  },
  capabilities: {
    title: 'Expertise produit & ingénierie',
    subtitle:
      'Construire des expériences SaaS complètes avec une architecture maintenable, des interfaces rapides et une vision produit pragmatique.',
    cards: {
      product: {
        title: 'Développement produit fullstack',
        description:
          "Construire des expériences complètes, de l'API backend jusqu'aux interfaces frontend polies. Faire le lien entre l'implémentation technique et les usages réels.",
        shortDescription:
          'Construire des fonctionnalités complètes, du backend aux interfaces, avec une approche orientée produit.',
        frontend: 'Frontend',
        backend: 'Backend',
        stacks: ['Vue.js + React', 'TypeScript', 'Interfaces responsives'],
        backendStacks: ['Symfony + PHP', 'APIs REST', 'PostgreSQL'],
        label: 'expérience produit',
        metric: 'architecture, interfaces, APIs',
        tags: ['Symfony', 'Vue.js', 'TypeScript'],
      },
      architecture: {
        title: 'Architecture & maintenabilité',
        description:
          'Concevoir du code clair, durable et évolutif. Réduire la dette technique avec du refactoring ciblé et des patterns réfléchis.',
        shortDescription:
          'Structurer du code clair, durable et évolutif, sans ajouter de complexité inutile.',
        principles: [
          {
            title: 'Architecture claire',
            description: 'SOLID principles',
            icon: 'code',
            tone: 'sky',
          },
          {
            title: 'Symfony 3 -> 5',
            description: 'Migration & refactoring',
            icon: 'rocket',
            tone: 'violet',
          },
          {
            title: 'Qualité long terme',
            description: 'Patterns & évolutivité',
            icon: 'shield',
            tone: 'emerald',
          },
        ],
        tags: ['Refactoring', 'Symfony', 'Patterns'],
      },
      performance: {
        title: 'Performance & scalabilité',
        description:
          "Optimiser les temps de réponse, les requêtes et le rendu frontend pour garder une expérience fluide à l'échelle.",
        shortDescription:
          'Optimiser les APIs, les requêtes et les bases de données pour garder une expérience fluide.',
        concepts: [
          { label: 'Requêtes lisibles', tone: 'sky' },
          { label: 'Modèles de données', tone: 'emerald' },
          { label: 'Parcours rapides', tone: 'violet' },
        ],
        tags: ['PostgreSQL', 'MySQL', 'Indexation'],
      },
      autonomy: {
        title: 'Vision produit & responsabilité',
        description:
          "Équilibrer excellence technique et valeur métier. S'adapter aux équipes existantes et porter les fonctionnalités du concept à la livraison.",
        shortDescription:
          "Comprendre le besoin, collaborer avec l'équipe et porter la fonctionnalité jusqu'à la livraison.",
        cycleLabel: 'Cycle de développement produit',
        metric: 'responsabilité de bout en bout',
        steps: [
          {
            title: 'Idéation',
            description: 'Vision produit',
            icon: 'lightbulb',
          },
          {
            title: 'Architecture',
            description: 'Patterns',
            icon: 'code',
          },
          {
            title: 'Développement',
            description: 'Développement fullstack',
            icon: 'server',
          },
          {
            title: 'Livraison',
            description: 'Prêt pour production',
            icon: 'rocket',
          },
        ],
        strengths: [
          {
            title: 'Apprentissage rapide',
            description: 'Nouveaux outils & domaines',
          },
          { title: 'Collaboration', description: 'Travail cross-fonctionnel' },
          { title: 'Adaptabilité', description: 'Codebases existantes' },
        ],
        tags: ['Produit', 'Collaboration', 'Livraison'],
      },
    },
  },
  experience: {
    title: 'Parcours professionnel',
    subtitle:
      'Plus de 8 ans à construire et faire évoluer de vrais produits en production.',
    items: [
      {
        company: 'Ibou.io',
        logo: '/logos/ibou.png',
        timelineAlign: 'right',
        timelineTone: 'accent',
        role: 'Développeur fullstack',
        period: 'Mars 2026 — Avril 2026',
        duration: '2 mois',
        description:
          "Mission récente autour d'une application moderne, avec contribution fullstack, adaptation rapide à l'existant et travail sur l'expérience produit.",
        tags: ['Rust', 'Fullstack', 'Ingénierie produit'],
      },
      {
        company: 'Skilleos',
        logo: '/logos/skilleos.png',
        featured: true,
        timelineAlign: 'center',
        timelineTone: 'accent',
        role: 'Développeur fullstack',
        period: '2017 - 2024',
        duration: '7 ans',
        description:
          'Construction et maintenance de fonctionnalités produit pour une plateforme SaaS de formation, avec un focus sur la maintenabilité, le frontend, le backend et les usages réels.',
        keyPoints: [
          'Produit SaaS',
          'Migration Symfony 3 → 5',
          'Responsabilité frontend & backend',
        ],
        highlights: [
          {
            title: 'Développement produit SaaS',
            icon: 'monitor',
            description:
              'Construction et maintenance de fonctionnalités prêtes pour la production sur une plateforme de formation en ligne utilisée en environnements réels.',
          },
          {
            title: 'Modernisation framework',
            icon: 'rocket',
            description:
              'Contribution à une migration Symfony 3 vers 5 et à des améliorations long terme de maintenabilité.',
          },
          {
            title: 'Responsabilité frontend & backend',
            icon: 'badge',
            description:
              'Travail sur interfaces, base de données, APIs et évolution produit en collaboration avec les équipes design et métier.',
          },
        ],
        tags: ['Symfony', 'Vue.js', 'Nuxt', 'MySQL', 'TypeScript'],
      },
      {
        company: 'LeWebPedagogique',
        timelineAlign: 'left',
        timelineTone: 'blue',
        role: 'Développeur PHP',
        period: '2016 - 2017',
        duration: '1 an',
        description:
          'Développement de fonctionnalités de plateforme éducative et d’outils de traitement de données pour écoles, incluant intégration projet et maintenance.',
        tags: ['PHP', 'MySQL', 'Plateforme éducative'],
      },
    ],
  },
} as const;
