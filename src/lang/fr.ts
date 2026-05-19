export const fr = {
  brand: {
    name: 'DevPortfolio',
    homeLabel: 'Accueil',
  },
  navigation: {
    githubLabel: 'Github',
    linkedinLabel: 'Linkedin',
    cvCta: 'CV',
    cvUrl: '/cv-maxime-madelaine.pdf',
    githubUrl: 'https://github.com/MistyDream',
    linkedinUrl: 'https://www.linkedin.com/in/maxime-madelaine-ba4657105',
    links: [
      {
        label: 'Accueil',
        href: '#hero',
      },
      {
        label: 'Compétences',
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
      role: 'Développeur_',
    },
    description:
      "Développeur full-stack autonome, je monte vite en compétence et je m'adapte facilement. À l'aise en équipe comme en solo, j'aime construire des produits utiles avec une approche simple et efficace.",
    primaryCta: 'Télécharger mon CV',
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
        frontend: 'Frontend',
        backend: 'Backend',
        stacks: ['Vue.js + React', 'TypeScript', 'Responsive UI'],
        backendStacks: ['Symfony + PHP', 'REST APIs', 'PostgreSQL'],
        label: 'leadership end-to-end',
        metric: '2 ans en production',
      },
      architecture: {
        title: 'Architecture & maintenabilité',
        description:
          'Concevoir du code clair, durable et évolutif. Réduire la dette technique avec du refactoring ciblé et des patterns réfléchis.',
        principles: [
          { title: 'Architecture claire', description: 'SOLID principles' },
          { title: 'Symfony 3 -> 5', description: 'Migration & refactoring' },
          { title: 'Qualité long terme', description: 'Patterns & évolutivité' },
        ],
        tags: ['DDD', 'Testing', 'Patterns'],
      },
      performance: {
        title: 'Performance & scalabilité',
        description:
          "Optimiser les temps de réponse, les requêtes et le rendu frontend pour garder une expérience fluide à l'échelle.",
        metrics: [
          { label: 'Réponse API', value: '-120ms' },
          { label: 'Optimisation requêtes', value: '-55%' },
          { label: 'Hit ratio cache', value: '91%' },
        ],
        tags: ['PostgreSQL', 'Redis', 'Indexing'],
      },
      autonomy: {
        title: 'Vision produit & ownership',
        description:
          "Équilibrer excellence technique et valeur métier. Apprendre vite, s'adapter aux équipes existantes et prendre ownership des fonctionnalités du concept à la livraison.",
        cycleLabel: 'Cycle de développement produit',
        metric: 'leadership end-to-end',
        steps: [
          { title: 'Idéation', description: 'Product thinking' },
          { title: 'Architecture', description: 'Design patterns' },
          { title: 'Développement', description: 'Fullstack build' },
          { title: 'Livraison', description: 'Production ready' },
        ],
        strengths: [
          { title: 'Apprentissage rapide', description: 'Nouveaux outils & domaines' },
          { title: 'Collaboration', description: 'Travail cross-fonctionnel' },
          { title: 'Adaptabilité', description: 'Codebases existantes' },
        ],
      },
    },
  },
  experience: {
    title: 'Parcours professionnel',
    subtitle: 'Plus de 8 ans à construire et faire évoluer de vrais produits en production.',
    items: [
      {
        company: 'Ibou.io',
        logo: '/logos/ibou.png',
        role: 'Développeur fullstack',
        period: '2026',
        duration: '2 mois',
        description:
          "Mission récente autour d'une application moderne, avec contribution fullstack, adaptation rapide à l'existant et travail sur l'expérience produit.",
        tags: ['Rust', 'Fullstack', 'Product Engineering'],
      },
      {
        company: 'Skilleos',
        logo: '/logos/skilleos.png',
        role: 'Développeur fullstack',
        period: '2017 - 2024',
        duration: '7 ans',
        highlights: [
          {
            title: 'Développement produit SaaS',
            description:
              'Construction et maintenance de fonctionnalités prêtes pour la production sur une plateforme de formation en ligne utilisée en environnements réels.',
          },
          {
            title: 'Modernisation framework',
            description:
              'Contribution à une migration Symfony 3 vers 5 et à des améliorations long terme de maintenabilité.',
          },
          {
            title: 'Ownership frontend & backend',
            description:
              'Travail sur interfaces, base de données, APIs et évolution produit en collaboration avec design et équipes métier.',
          },
        ],
        tags: ['Symfony', 'Vue.js', 'Nuxt', 'MySQL', 'TypeScript'],
      },
      {
        company: 'LeWebPedagogique',
        role: 'Développeur PHP',
        period: '2016 - 2017',
        duration: '1 an',
        description:
          'Développement de fonctionnalités de plateforme éducative et d’outils de traitement de données pour écoles, incluant intégration projet et maintenance.',
        tags: ['PHP', 'MySQL', 'Educational Platform'],
      },
    ],
  },
} as const;
