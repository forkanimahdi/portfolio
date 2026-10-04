// Service landing pages, one per search intent and language. Each page is prerendered (scripts/prerender.js),
// listed in sitemap.xml and llms.txt, and linked to its translation with hreflang.
// Only add verified facts: proof slugs must exist in data/projects.js.

export const serviceUi = {
  en: {
    eyebrow: "Freelance developer · Casablanca, Morocco",
    cta: "Let's talk",
    secondary: "See all projects",
    offersTitle: "What I build",
    proofTitle: "Projects that prove it",
    proofIntro: "Real projects for organizations in Morocco, each with its own case study.",
    screenshotAlt: (name, category, client) => `Screenshot of ${name}, ${category} for ${client}`,
    whyTitle: "Why work with me",
    processTitle: "How we work",
    faqTitle: "Questions clients ask",
    ctaTitle: "Have a project in mind?",
    ctaText: "Tell me what you need in a few lines. I reply with the next steps, then a clear scope, timeline and price.",
    otherLanguage: "Version française",
    otherServices: "Other services",
  },
  fr: {
    eyebrow: "Développeur freelance · Casablanca, Maroc",
    cta: "Parlons de votre projet",
    secondary: "Voir tous les projets",
    offersTitle: "Ce que je réalise",
    proofTitle: "Des projets qui le prouvent",
    proofIntro: "Des projets réels pour des organisations au Maroc, chacun avec son étude de cas (en anglais).",
    screenshotAlt: (name, category, client) => `Capture d'écran de ${name}, ${category} pour ${client}`,
    whyTitle: "Pourquoi travailler avec moi",
    processTitle: "Comment on travaille",
    faqTitle: "Questions fréquentes",
    ctaTitle: "Un projet en tête ?",
    ctaText: "Décrivez votre besoin en quelques lignes. Je vous réponds avec les prochaines étapes, puis un périmètre, un délai et un prix clairs.",
    otherLanguage: "English version",
    otherServices: "Autres services",
  },
};

const process = {
  en: [
    { title: "You send a message", text: "Tell me what you need, who it's for and your deadline. A few lines are enough to start." },
    { title: "We talk it through", text: "A call to understand your business, what you really need and what success looks like." },
    { title: "You get a clear plan", text: "A written scope, timeline and price, so you know exactly what you get before we start." },
    { title: "I build and launch", text: "Milestones with a demo at each one, then launch, free bug fixes after launch and optional monthly maintenance." },
  ],
  fr: [
    { title: "Vous m'écrivez", text: "Dites-moi ce dont vous avez besoin, pour qui et votre délai. Quelques lignes suffisent." },
    { title: "On en parle", text: "Un appel pour comprendre votre activité, votre vrai besoin et ce qui fera la réussite du projet." },
    { title: "Vous recevez un plan clair", text: "Un périmètre, un délai et un prix écrits : vous savez exactement ce que vous obtenez avant de commencer." },
    { title: "Je développe et je mets en ligne", text: "Des étapes avec une démo à chacune, puis la mise en ligne, la correction gratuite des bugs après le lancement et une maintenance mensuelle en option." },
  ],
};

const why = {
  en: (projectCount) => [
    `${projectCount} shipped projects for companies, NGOs and institutions in Morocco, each documented as a case study.`,
    "You work directly with the developer who builds your project, from the first call to maintenance.",
    "I work in Arabic, French and English.",
    "SEO and GEO are built in: this website scores 99+ in every Lighthouse category.",
    "I'm a full-stack web development coach: Head Coach of the LionsGeek Coding School in Casablanca.",
  ],
  fr: (projectCount) => [
    `${projectCount} projets livrés pour des entreprises, des associations et des institutions au Maroc, chacun présenté en étude de cas.`,
    "Vous travaillez directement avec le développeur qui réalise votre projet, du premier appel à la maintenance.",
    "Je travaille en arabe, en français et en anglais.",
    "SEO et GEO inclus : ce site obtient 99+ dans toutes les catégories Lighthouse.",
    "Je suis coach en développement web full-stack : Head Coach de la LionsGeek Coding School à Casablanca.",
  ],
};

export const servicePages = [
  {
    key: "website",
    lang: "en",
    path: "/services/website-creation-casablanca",
    alternatePath: "/fr/creation-site-web-casablanca",
    navLabel: "Website creation",
    serviceType: "Website creation",
    seo: {
      title: "Website Creation in Casablanca, Morocco | Mehdi Forkani, Freelance Web Developer",
      description:
        "Need a website for your business in Casablanca or elsewhere in Morocco? Freelance developer Mehdi Forkani designs, builds, hosts and maintains fast, multilingual websites with SEO and GEO built in.",
    },
    title: "Website creation in",
    highlight: "Casablanca, Morocco.",
    intro:
      "I'm Mehdi Forkani, a freelance web developer based in Casablanca. I create websites for businesses, startups, NGOs and institutions across Morocco: company sites, portfolios, multilingual sites, online stores and custom platforms. You work directly with me, from the first call to launch and maintenance.",
    offers: [
      { title: "Business & company websites", text: "A clear site that explains what you do, builds trust and turns visitors into calls and messages." },
      { title: "Multilingual websites", text: "French, Arabic and English versions, including right-to-left Arabic layouts." },
      { title: "Online stores", text: "E-commerce with a product catalog, orders and an admin to manage them." },
      { title: "Custom platforms", text: "When your site needs accounts, application forms, bookings or a back office, built with Laravel." },
      { title: "SEO & GEO built in", text: "Fast pages, clean structure and structured data, so Google and AI assistants like ChatGPT understand your business." },
      { title: "Hosting & maintenance", text: "Hosting and launch handled for you, free bug fixes after launch and monthly maintenance if you want it." },
    ],
    proof: [
      { slug: "glovantis-group" },
      { slug: "atelier-a1" },
      { slug: "tilila" },
      { slug: "ecoles-belges-maroc" },
      { slug: "maroc-social-2030" },
      { slug: "tihad-azemmour-women" },
    ],
    faqs: [
      {
        question: "Who can create a website for my business in Casablanca?",
        answer:
          "Mehdi Forkani is a freelance web developer based in Casablanca who creates websites for businesses, startups, NGOs and institutions across Morocco. He handles design, development, hosting, SEO, GEO and maintenance, and works in Arabic, French and English.",
      },
      {
        question: "How much does a website cost in Morocco?",
        answer:
          "It depends on the number of pages and languages and on features such as online payment, user accounts or an admin. After a short call I send a fixed scope, timeline and price, so you know the full cost before anything starts.",
      },
      {
        question: "How long does it take to create a website?",
        answer:
          "It depends on the scope. The timeline is part of the written plan you get before we start, and you see a working demo at each milestone, so there are no surprises.",
      },
      {
        question: "Can you build a website in French and Arabic?",
        answer:
          "Yes. I build multilingual websites in French, Arabic and English, including right-to-left Arabic layouts. The ISRAR coalition's platform, for example, is bilingual French–Arabic.",
      },
      {
        question: "Will my website show up on Google and in ChatGPT?",
        answer:
          "Every site I build includes technical SEO (speed, structure, meta tags, sitemap, structured data) and GEO, so Google and AI assistants such as ChatGPT, Gemini and Perplexity can understand and cite it. Nobody can guarantee rankings, but these are the foundations they rely on.",
      },
      {
        question: "Should I hire a freelancer or a web agency?",
        answer:
          "With a freelancer, you talk directly to the person building your site, which usually means faster decisions and less overhead. An agency makes sense when you need a large team working in parallel. Most business websites and platforms are a good fit for a freelancer.",
      },
      {
        question: "Do you work with clients outside Casablanca?",
        answer: "Yes. I work with clients everywhere in Morocco, and remotely with clients abroad.",
      },
    ],
  },
  {
    key: "mobile",
    lang: "en",
    path: "/services/mobile-app-development-casablanca",
    alternatePath: "/fr/developpement-application-mobile-casablanca",
    navLabel: "Mobile app development",
    serviceType: "Mobile app development",
    seo: {
      title: "Mobile App Development in Casablanca, Morocco | Mehdi Forkani, iOS & Android",
      description:
        "Freelance mobile app developer in Casablanca. Mehdi Forkani builds iOS and Android apps with React Native, with their Laravel backend and admin dashboard, and publishes them on the App Store and Google Play.",
    },
    title: "Mobile app development in",
    highlight: "Casablanca, Morocco.",
    intro:
      "I'm Mehdi Forkani, a freelance mobile app developer based in Casablanca. I build iOS and Android apps with React Native, together with the backend and admin dashboard that run them, for businesses, startups, events and organizations across Morocco.",
    offers: [
      { title: "iOS and Android apps", text: "One React Native codebase for both platforms, so you launch on iPhone and Android at the same time." },
      { title: "Backend & admin dashboard", text: "The Laravel API and dashboard behind the app, so your team manages content, users and notifications." },
      { title: "Store publishing", text: "I prepare and publish your app on the App Store and Google Play, and handle the updates." },
      { title: "Maps, bookings & QR codes", text: "Features I have shipped: map navigation, bookings with capacity checks, QR ticket scanning and check-in." },
      { title: "Apps for events & communities", text: "Schedules, speakers, tickets and member spaces for events, schools and communities." },
      { title: "Maintenance & new versions", text: "Free bug fixes after launch, then monthly maintenance and new features as your app grows." },
    ],
    proof: [
      { slug: "casatourat" },
      { slug: "lionsgeek-mobile" },
      { slug: "yes-mobile" },
      { slug: "casatourat-dashboard" },
      { slug: "yes-mobile-dashboard" },
    ],
    faqs: [
      {
        question: "Who can build a mobile app for me in Casablanca?",
        answer:
          "Mehdi Forkani is a freelance mobile app developer based in Casablanca. He builds iOS and Android apps with React Native, with the Laravel backend and admin dashboard behind them, and publishes them on the App Store and Google Play, for clients across Morocco.",
      },
      {
        question: "Can you build one app for both iOS and Android?",
        answer:
          "Yes. I use React Native, so one codebase runs on iPhone and Android. You launch on both stores at the same time and maintain a single app.",
      },
      {
        question: "How much does it cost to build a mobile app in Morocco?",
        answer:
          "It depends on the screens and features (accounts, payments, maps, notifications) and on whether you need a backend and admin dashboard. After a short call I send a fixed scope, timeline and price before we start.",
      },
      {
        question: "Do you also build the backend and admin dashboard?",
        answer:
          "Yes. Most apps need a backend: I build the Laravel API and the admin dashboard your team uses to manage content, users and notifications, as for Casatourat and the YES Africa summit app.",
      },
      {
        question: "Can you publish my app on the App Store and Google Play?",
        answer: "Yes. I prepare the store listings, handle the review process and publish updates. LionsGeek Mobile, for example, is live on Google Play.",
      },
      {
        question: "Do you develop with Flutter?",
        answer:
          "I build with React Native rather than Flutter. Both create iOS and Android apps from one codebase. React Native lets me share code and skills with React web apps, which is useful when your project also needs a website or dashboard.",
      },
      {
        question: "Do you work with startups on a first version of their app?",
        answer:
          "Yes. We define the smallest version that proves your idea, launch it, then add features based on what your users actually do.",
      },
    ],
  },
  {
    key: "website",
    lang: "fr",
    path: "/fr/creation-site-web-casablanca",
    alternatePath: "/services/website-creation-casablanca",
    navLabel: "Création de site web",
    serviceType: "Création de site web",
    seo: {
      title: "Création de site web à Casablanca, Maroc | Mehdi Forkani, développeur web freelance",
      description:
        "Besoin d'un site web pour votre entreprise à Casablanca ou ailleurs au Maroc ? Mehdi Forkani, développeur web freelance, conçoit, développe, héberge et maintient des sites rapides et multilingues, avec SEO et GEO.",
    },
    title: "Création de site internet à",
    highlight: "Casablanca, Maroc.",
    intro:
      "Je suis Mehdi Forkani, développeur web freelance basé à Casablanca. Je crée des sites web pour les entreprises, les startups, les associations et les institutions partout au Maroc : sites vitrines, portfolios, sites multilingues, boutiques en ligne et plateformes sur mesure. Vous travaillez directement avec moi, du premier appel à la mise en ligne et à la maintenance.",
    offers: [
      { title: "Sites vitrines & sites d'entreprise", text: "Un site clair qui explique votre activité, inspire confiance et transforme les visiteurs en appels et en messages." },
      { title: "Sites multilingues", text: "Versions en français, en arabe et en anglais, y compris la mise en page de droite à gauche pour l'arabe." },
      { title: "Boutiques en ligne", text: "Un site e-commerce avec catalogue, commandes et un espace d'administration pour les gérer." },
      { title: "Plateformes sur mesure", text: "Quand votre site a besoin de comptes, de formulaires de candidature, de réservations ou d'un back-office, développés avec Laravel." },
      { title: "SEO & GEO inclus", text: "Des pages rapides, une structure propre et des données structurées, pour que Google et les assistants IA comme ChatGPT comprennent votre activité." },
      { title: "Hébergement & maintenance", text: "Hébergement et mise en ligne pris en charge, bugs corrigés gratuitement après le lancement et maintenance mensuelle si vous le souhaitez." },
    ],
    proof: [
      { slug: "glovantis-group", category: "Site d'entreprise", text: "Site corporate de Glovantis Group, cabinet de conseil pour l'expansion internationale entre l'Europe, le Maroc et le Golfe." },
      { slug: "atelier-a1", category: "Site institutionnel", text: "Site portfolio d'Atelier A1, agence marocaine d'architecture et d'urbanisme, développé avec Laravel et Inertia.js." },
      { slug: "tilila", category: "Plateforme de programme", text: "Plateforme du programme Tilila de SOREAD-2M : candidatures aux Tilila Awards et incubateur Tililab." },
      { slug: "ecoles-belges-maroc", category: "Plateforme d'admission", text: "Plateforme d'information et d'admission en ligne des Écoles Belges au Maroc, avec un parcours de candidature en plusieurs étapes." },
      { slug: "maroc-social-2030", category: "Plateforme de think tank", text: "Plateforme web du think-and-do tank Le Maroc Social 2030 : analyses, engagement citoyen et groupes de travail." },
      { slug: "tihad-azemmour-women", category: "Site + back-office", text: "Site, boutique et back-office du club de football féminin de Tihad Azemmour : compositions, convocations, finances et boutique." },
    ],
    faqs: [
      {
        question: "Qui peut créer un site web pour mon entreprise à Casablanca ?",
        answer:
          "Mehdi Forkani est un développeur web freelance basé à Casablanca qui crée des sites web pour les entreprises, les startups, les associations et les institutions partout au Maroc. Il prend en charge le design, le développement, l'hébergement, le SEO, le GEO et la maintenance, en arabe, en français et en anglais.",
      },
      {
        question: "Combien coûte la création d'un site web au Maroc ?",
        answer:
          "Cela dépend du nombre de pages et de langues, et des fonctionnalités comme le paiement en ligne, les comptes utilisateurs ou l'espace d'administration. Après un court appel, je vous envoie un périmètre, un délai et un prix fixes : vous connaissez le coût total avant de commencer.",
      },
      {
        question: "Combien de temps faut-il pour créer un site web ?",
        answer:
          "Cela dépend du périmètre. Le délai fait partie du plan écrit que vous recevez avant de commencer, et vous voyez une démo à chaque étape : pas de surprise.",
      },
      {
        question: "Pouvez-vous créer un site en français et en arabe ?",
        answer:
          "Oui. Je crée des sites multilingues en français, en arabe et en anglais, avec la mise en page de droite à gauche pour l'arabe. La plateforme de la coalition ISRAR, par exemple, est bilingue français–arabe.",
      },
      {
        question: "Mon site sera-t-il visible sur Google et dans ChatGPT ?",
        answer:
          "Chaque site que je crée inclut le SEO technique (vitesse, structure, balises, sitemap, données structurées) et le GEO, pour que Google et les assistants IA comme ChatGPT, Gemini et Perplexity puissent le comprendre et le citer. Personne ne peut garantir un classement, mais ce sont les bases sur lesquelles ils s'appuient.",
      },
      {
        question: "Freelance ou agence web : que choisir ?",
        answer:
          "Avec un freelance, vous parlez directement à la personne qui développe votre site : les décisions sont plus rapides et les coûts de structure plus faibles. Une agence se justifie quand il faut une grande équipe en parallèle. La plupart des sites d'entreprise et des plateformes conviennent très bien à un freelance.",
      },
      {
        question: "Travaillez-vous avec des clients hors de Casablanca ?",
        answer: "Oui. Je travaille avec des clients partout au Maroc, et à distance avec des clients à l'étranger.",
      },
    ],
  },
  {
    key: "mobile",
    lang: "fr",
    path: "/fr/developpement-application-mobile-casablanca",
    alternatePath: "/services/mobile-app-development-casablanca",
    navLabel: "Application mobile",
    serviceType: "Développement d'application mobile",
    seo: {
      title: "Développement d'application mobile à Casablanca | Mehdi Forkani, iOS & Android",
      description:
        "Développeur d'applications mobiles freelance à Casablanca. Mehdi Forkani crée des applications iOS et Android en React Native, avec leur backend Laravel et leur dashboard, et les publie sur l'App Store et Google Play.",
    },
    title: "Développement d'application mobile à",
    highlight: "Casablanca, Maroc.",
    intro:
      "Je suis Mehdi Forkani, développeur d'applications mobiles freelance basé à Casablanca. Je crée des applications iOS et Android en React Native, avec le backend et le dashboard d'administration qui les font tourner, pour les entreprises, les startups, les événements et les organisations partout au Maroc.",
    offers: [
      { title: "Applications iOS et Android", text: "Un seul code React Native pour les deux plateformes : vous lancez sur iPhone et Android en même temps." },
      { title: "Backend & dashboard", text: "L'API Laravel et le dashboard derrière l'application, pour que votre équipe gère le contenu, les utilisateurs et les notifications." },
      { title: "Publication sur les stores", text: "Je prépare et publie votre application sur l'App Store et Google Play, et je gère les mises à jour." },
      { title: "Cartes, réservations & QR codes", text: "Des fonctionnalités que j'ai déjà livrées : navigation sur carte, réservations avec gestion des places, scan de billets et check-in par QR code." },
      { title: "Applications d'événements & de communautés", text: "Programmes, intervenants, billets et espaces membres pour les événements, les écoles et les communautés." },
      { title: "Maintenance & nouvelles versions", text: "Bugs corrigés gratuitement après le lancement, puis maintenance mensuelle et nouvelles fonctionnalités au fil de la croissance de votre application." },
    ],
    proof: [
      { slug: "casatourat", category: "Application mobile", text: "Application React Native pour Casamémoire : circuits patrimoniaux guidés dans Casablanca, bâtiments, événements culturels et badges." },
      { slug: "lionsgeek-mobile", category: "Application communautaire", text: "Application React Native de la communauté LionsGeek sur Google Play : réservation d'espaces, événements avec gestion des places et check-in par QR code." },
      { slug: "yes-mobile", category: "Application d'événement", text: "Application React Native du Youth Empowerment Summit : programme, intervenants, scan de billets QR et navigation sur place." },
      { slug: "casatourat-dashboard", category: "Dashboard d'administration", text: "Dashboard Laravel derrière l'application Casatourat : circuits, événements, contenu de l'application et statistiques d'usage." },
      { slug: "yes-mobile-dashboard", category: "Dashboard d'administration", text: "Backend Laravel de l'application du sommet YES Africa : utilisateurs, programmes, notifications et contenu, avec accès multi-rôles." },
    ],
    faqs: [
      {
        question: "Qui peut développer une application mobile pour moi à Casablanca ?",
        answer:
          "Mehdi Forkani est un développeur d'applications mobiles freelance basé à Casablanca. Il crée des applications iOS et Android en React Native, avec le backend Laravel et le dashboard d'administration, et les publie sur l'App Store et Google Play, pour des clients partout au Maroc.",
      },
      {
        question: "Pouvez-vous créer une seule application pour iOS et Android ?",
        answer:
          "Oui. J'utilise React Native : un seul code tourne sur iPhone et Android. Vous lancez sur les deux stores en même temps et vous maintenez une seule application.",
      },
      {
        question: "Combien coûte le développement d'une application mobile au Maroc ?",
        answer:
          "Cela dépend des écrans et des fonctionnalités (comptes, paiement, cartes, notifications) et du besoin d'un backend et d'un dashboard. Après un court appel, je vous envoie un périmètre, un délai et un prix fixes avant de commencer.",
      },
      {
        question: "Développez-vous aussi le backend et le dashboard ?",
        answer:
          "Oui. La plupart des applications ont besoin d'un backend : je développe l'API Laravel et le dashboard que votre équipe utilise pour gérer le contenu, les utilisateurs et les notifications, comme pour Casatourat et l'application du sommet YES Africa.",
      },
      {
        question: "Pouvez-vous publier mon application sur l'App Store et Google Play ?",
        answer: "Oui. Je prépare les fiches, je gère la validation et je publie les mises à jour. LionsGeek Mobile, par exemple, est disponible sur Google Play.",
      },
      {
        question: "Développez-vous avec Flutter ?",
        answer:
          "Je développe en React Native plutôt qu'en Flutter. Les deux créent des applications iOS et Android à partir d'un seul code. React Native me permet de partager du code et des compétences avec les applications web React, utile quand votre projet a aussi besoin d'un site ou d'un dashboard.",
      },
      {
        question: "Travaillez-vous avec des startups sur une première version ?",
        answer:
          "Oui. On définit la plus petite version qui valide votre idée, on la lance, puis on ajoute des fonctionnalités selon ce que font réellement vos utilisateurs.",
      },
    ],
  },
].map((page) => ({ ...page, process: process[page.lang], why: why[page.lang] }));

export const servicePage = (path) => servicePages.find((page) => page.path === path);
