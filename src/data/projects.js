import mlg from "../assets/images/projects/mylionsgeek.webp";
import lionsgeek from "../assets/images/projects/lionsgeek.webp";
import yes from "../assets/images/projects/yes-africa.webp";
import casatourat_backend from "../assets/images/projects/casatourat_backend.webp";
import yesMobile_backend from "../assets/images/projects/yesMobile_backend.webp";
import casatourat from "../assets/images/projects/casatourat.webp";
import yes_learning from "../assets/images/projects/yes_learning.webp";
import yes_mobile from "../assets/images/projects/yes_mobile.webp";
import hd4h from "../assets/images/projects/hd4h.webp";
import tililab_judge from "../assets/images/projects/tililab_judge.webp";
import ecb from "../assets/images/projects/ecb.webp";
import a1 from "../assets/images/projects/a1.webp";
import tihadazemmour from "../assets/images/projects/taw.webp";
import tilila from "../assets/images/projects/tilila.webp";
import biggred from "../assets/images/projects/biggred.webp";
import lionsgeek_mobile from "../assets/images/projects/lg-mobile.webp";
import clb from "../assets/images/projects/clb_klb.webp";
import glovantis from "../assets/images/projects/glovantis.webp";
import israr from "../assets/images/projects/israr.webp";
import ms2030 from "../assets/images/projects/ms2030.webp";

// Original screenshots (PNG/GIF/JPG) are kept next to the .webp files; regenerate with scripts/optimize-images.py.
// Optional case-study fields: summary (meta description), audience, contribution, team, related (slugs).

const LIONSGEEK_PRO_TEAM = "Delivered with the LionsGeek PRO team, where I work as project manager.";

export const projects = [
  {
    name: "LionsGeek",
    slug: "lionsgeek",
    link: "https://lionsgeek.ma/",
    description:
      "A React website presenting the LionsGeek initiative and its work on youth empowerment through digital upskilling, project incubation and leadership coaching across Africa.",
    summary:
      "React website for LionsGeek presenting its youth programs: digital upskilling, project incubation and leadership coaching.",
    image: lionsgeek,
    technologies: ["React"],
    repo: null,
    category: "Web Platform",
    platform: "web",
    year: "2024",
    role: "Frontend Developer",
    client: "LionsGeek",
    audience: "Young people, partners and funders discovering LionsGeek's programs.",
    highlights: [
      "Built an animated, story-driven React site presenting LionsGeek's youth-empowerment programs.",
      "Designed a reusable component system with smooth motion for a strong first impression.",
      "Optimized performance and responsive layouts across mobile, tablet, and desktop.",
    ],
    related: ["my-lionsgeek", "lionsgeek-mobile"],
  },
  {
    name: "Casatourat",
    slug: "casatourat",
    link: "https://casatourat.ma/",
    description:
      "A React Native mobile app for exploring Casablanca's heritage: guided circuits with map-based navigation, heritage buildings, cultural events, activity tracking and achievements. It supports local cultural tourism by turning the city into a set of guided, interactive experiences.",
    summary:
      "React Native app for Casamémoire: guided heritage circuits around Casablanca, buildings, cultural events, activity tracking and achievements.",
    image: casatourat,
    technologies: ["React Native"],
    repo: null,
    category: "Mobile App",
    platform: "mobile",
    year: "2024",
    role: "Mobile App Developer · Project lead",
    client: "Casamémoire",
    audience: "Residents and visitors exploring Casablanca's architectural and cultural heritage.",
    contribution:
      "I led the Casatourat project at LionsGeek PRO and developed the React Native app, which gets its content from the Casatourat Laravel dashboard.",
    team: LIONSGEEK_PRO_TEAM,
    highlights: [
      "Developed a React Native app for guided cultural circuits around Casablanca.",
      "Implemented map-based navigation, heritage building pages, an events feed, user activity tracking and achievements.",
      "Connected the app to a Laravel content backend for real-time updates.",
    ],
    related: ["casatourat-dashboard"],
  },
  {
    name: "Tihad Azemmour Women",
    slug: "tihad-azemmour-women",
    link: "https://tihadazemmourwomen.ma/",
    description:
      "Official website of Club Union Sportive Azemmour Féminin – Tihad Azemmour, a women’s football club based in Azemmour, Morocco. The platform features a shop and an admin backoffice for managing line-ups, team convocations, finances, and the store. It presents the club’s sporting, educational, and social mission, highlighting youth development across Senior, U17, and U15 categories and its Sport for Development initiatives for young girls in the region.",
    summary:
      "Website, shop and admin back office for Tihad Azemmour, a women's football club in Morocco: line-ups, convocations, finances and store.",
    image: tihadazemmour,
    technologies: ["Laravel", "Inertia.js"],
    repo: null,
    category: "Web Platform + Admin",
    platform: "web",
    year: "2024",
    role: "Full-Stack Developer",
    client: "US Azemmour Féminin",
    audience: "Players, families, supporters and partners of a women's football club with Senior, U17 and U15 teams.",
    highlights: [
      "Built the official club site plus an admin back office for line-ups, convocations, and finances.",
      "Delivered an integrated store with order and inventory management.",
      "Structured content around the club's youth categories and social mission.",
    ],
  },
  {
    name: "Atelier A1",
    slug: "atelier-a1",
    link: "https://ateliera1.com/",
    description:
      "Official website of Atelier A1, a Moroccan architecture and urban design agency founded by Abderrahim Kassou and Mustapha Chakib. The site presents the agency’s philosophy, multidisciplinary expertise, and a diverse portfolio of architectural, urban planning, and landscape projects developed across various scales.",
    summary:
      "Portfolio website for Atelier A1, a Moroccan architecture and urban design agency, built with Laravel and Inertia.js.",
    image: a1,
    technologies: ["Laravel", "Inertia.js"],
    repo: null,
    category: "Institutional Website",
    platform: "web",
    year: "2024",
    role: "Full-Stack Developer",
    client: "Atelier A1",
    audience: "Clients, partners and the public discovering the agency's architecture and urban design work.",
    highlights: [
      "Designed a portfolio-driven site for an architecture & urban-design agency.",
      "Built a flexible project showcase spanning architecture, urban planning, and landscape.",
      "Implemented an editable content structure for the agency's evolving work.",
    ],
  },
  {
    name: "Écoles Belges au Maroc",
    slug: "ecoles-belges-maroc",
    link: "https://ecolebelgue.mylionsgeek.ma",
    description:
      "Official admissions and information platform for the Établissements scolaires Belges au Maroc, operating under the educational program of the Fédération Wallonie-Bruxelles. The website provides families with structured guidance on the admission process, academic vision, and essential school information through an online application system.",
    summary:
      "Online admissions and information platform for the Belgian schools in Morocco, with a multi-step application workflow for families.",
    image: ecb,
    technologies: ["Laravel", "Inertia.js"],
    repo: null,
    category: "Admissions Platform",
    platform: "web",
    year: "2024",
    role: "Full-Stack Developer",
    client: "Écoles Belges au Maroc",
    audience: "Families applying to the Belgian schools in Morocco.",
    highlights: [
      "Built an online admissions and information platform for Belgian schools in Morocco.",
      "Implemented a structured, multi-step application workflow for families.",
      "Presented the academic vision and school information with clear guidance.",
    ],
    related: ["clb-klb"],
  },
  {
    name: "CLB-KLB",
    slug: "clb-klb",
    link: "https://new.clb-klb.com/",
    description:
      "Official platform of the Cercle des Lauréats de Belgique – Kring van laureaten van België (CLB-KLB), a Moroccan association that connects graduates of Belgian institutions and promotes Belgian higher education and training opportunities in Morocco. The site presents the network’s mission, events, and Belgium–Morocco partnerships.",
    summary:
      "Platform for CLB-KLB, the Moroccan association of graduates of Belgian institutions: mission, events and Belgium–Morocco partnerships.",
    image: clb,
    technologies: ["Laravel", "Inertia.js"],
    repo: null,
    category: "Association Platform",
    platform: "web",
    year: "2024",
    role: "Full-Stack Developer",
    client: "CLB-KLB",
    audience: "Graduates of Belgian institutions living in Morocco, and the association's partners.",
    highlights: [
      "Delivered the platform connecting graduates of Belgian institutions in Morocco.",
      "Presented the network's mission, events, and Belgium–Morocco partnerships.",
      "Built manageable content sections for members and announcements.",
    ],
    related: ["ecoles-belges-maroc"],
  },
  {
    name: "Glovantis Group",
    slug: "glovantis-group",
    link: "https://glovantisgroup.com/",
    description:
      "Corporate website for Glovantis Group, a strategic advisory firm specialized in international expansion. The platform presents their expertise in market entry, public affairs, institutional relations, and partnership structuring across Europe, Morocco, and the Gulf.",
    summary:
      "Corporate website for Glovantis Group, an advisory firm for international expansion across Europe, Morocco and the Gulf.",
    image: glovantis,
    technologies: ["Laravel", "Inertia.js"],
    repo: null,
    category: "Corporate Website",
    platform: "web",
    year: "2025",
    role: "Full-Stack Developer",
    client: "Glovantis Group",
    audience: "Companies and institutions looking for support with international expansion.",
    highlights: [
      "Built a corporate site for a cross-border strategic advisory firm.",
      "Presented market-entry, public affairs, and partnership-structuring expertise.",
      "Structured content for Europe, Morocco, and Gulf markets.",
    ],
  },
  {
    name: "ISRAR",
    slug: "israr",
    link: "https://israr.ma/",
    description:
      "Official digital platform of the Coalition ISRAR pour l’Égalité et l’Empowerment, a Moroccan alliance of local associations advancing gender equality and women’s human rights. The site provides bilingual (French–Arabic) access to legal and support services aimed at combating violence against women and strengthening empowerment across the Maghreb.",
    summary:
      "Bilingual French–Arabic platform for the ISRAR coalition, giving access to legal and support services against violence toward women.",
    image: israr,
    technologies: ["Laravel", "Inertia.js"],
    repo: null,
    category: "NGO Platform (Bilingual)",
    platform: "web",
    year: "2025",
    role: "Full-Stack Developer",
    client: "Coalition ISRAR",
    audience: "Women looking for legal and support services, and the associations in the coalition.",
    highlights: [
      "Built a bilingual (French–Arabic) platform for a gender-equality coalition.",
      "Provided access to legal and support services against violence toward women.",
      "Implemented RTL-ready, accessible layouts across both languages.",
    ],
  },
  {
    name: "Le Maroc Social 2030",
    slug: "maroc-social-2030",
    link: "https://ms2030.org/",
    description:
      "Digital platform for Le Maroc Social 2030, a Think & Do Tank led by The Social Observatory. It translates a national social vision into an accessible web experience, connecting analysis, citizen engagement, and working groups focused on cohesion, equity, and dignity by the 2030 horizon.",
    summary:
      "Web platform for Le Maroc Social 2030, a think-and-do tank connecting analysis, citizen engagement and working groups.",
    image: ms2030,
    technologies: ["Laravel", "Inertia.js"],
    repo: null,
    category: "Think-Tank Platform",
    platform: "web",
    year: "2025",
    role: "Full-Stack Developer",
    client: "The Social Observatory",
    audience: "Citizens, experts and working-group members taking part in the Maroc Social 2030 initiative.",
    highlights: [
      "Translated a national social vision into an accessible web experience.",
      "Connected analysis, citizen engagement, and thematic working groups.",
      "Built a content architecture organized around 2030 social goals.",
    ],
  },
  {
    name: "YES Africa",
    slug: "yes-africa",
    link: "https://youthempowermentsummit.africa/",
    description:
      "The official React website of the YES Africa movement. It presents the Youth Empowerment Summit's mission, past editions, partnerships, and calls to action for youth-driven impact across the continent.",
    summary:
      "React website for the Youth Empowerment Summit (YES Africa): mission, past editions, partners and calls to action.",
    image: yes,
    technologies: ["React"],
    repo: null,
    category: "Event Website",
    platform: "web",
    year: "2024",
    role: "Frontend Developer",
    client: "Jadara Foundation (YES Africa)",
    audience: "Young Africans, partners and sponsors of the Youth Empowerment Summit.",
    highlights: [
      "Built the React web presence for the Youth Empowerment Summit.",
      "Presented the mission, past editions, partners, and calls to action.",
      "Delivered fast, animated, fully responsive pages.",
    ],
    related: ["yes-mobile", "yes-learning", "yes-mobile-dashboard"],
  },
  {
    name: "Bigg Red",
    slug: "bigg-red",
    link: "https://beta.biggred.com/",
    description:
      "An e-commerce platform for premium tech and consumer electronics, featuring product catalogs, flash sales with countdown timers, curated new arrivals, and custom accessory personalization, with exclusive offers and early-access memberships.",
    summary:
      "Laravel and Inertia.js e-commerce platform for premium electronics: catalog, flash sales, accessory personalization and memberships.",
    image: biggred,
    technologies: ["Laravel", "Inertia.js"],
    repo: null,
    category: "E-commerce",
    platform: "web",
    year: "2025",
    role: "Full-Stack Developer",
    client: "Bigg Red",
    audience: "Shoppers looking for premium tech and consumer electronics.",
    highlights: [
      "Built a premium electronics e-commerce platform end to end.",
      "Implemented flash sales with countdown timers and curated new arrivals.",
      "Added accessory personalization and early-access memberships.",
    ],
  },
  {
    name: "My LionsGeek",
    slug: "my-lionsgeek",
    link: "https://mylionsgeek.ma/",
    description:
      "A Laravel platform for running a training center: reservations, session planning, admin tasks and user roles. It keeps trainers, learners and administrators coordinated in one place.",
    summary:
      "Laravel operations platform for the LionsGeek training center: reservations, session planning, admin workflows and user roles.",
    image: mlg,
    technologies: ["Laravel"],
    repo: "https://github.com/forkanimahdi/mylionsgeek",
    category: "Operations Platform",
    platform: "web",
    year: "2024",
    role: "Full-Stack Developer · Project lead",
    client: "LionsGeek",
    audience: "LionsGeek trainers, learners and administrators.",
    contribution:
      "I led My LionsGeek, LionsGeek's internal management system, as project manager at LionsGeek PRO, and worked on it as a full-stack Laravel developer.",
    team: LIONSGEEK_PRO_TEAM,
    highlights: [
      "Built a training-center operations platform for reservations and session planning.",
      "Streamlined coordination between trainers, learners, and administrators.",
      "Implemented role-based access control and admin workflows.",
    ],
    related: ["lionsgeek-mobile", "lionsgeek"],
  },
  {
    name: "Casatourat Dashboard",
    slug: "casatourat-dashboard",
    link: "https://casatourat.ma/",
    description:
      "The Laravel dashboard behind the Casatourat mobile app. It manages cultural circuits, events and app content, and gives the team insight into how the app is used.",
    summary:
      "Laravel admin dashboard behind the Casatourat mobile app: cultural circuits, events, app content and usage insights.",
    image: casatourat_backend,
    technologies: ["Laravel"],
    repo: null,
    category: "Admin Dashboard",
    platform: "web",
    year: "2024",
    role: "Full-Stack Developer · Project lead",
    client: "Casamémoire",
    audience: "The team that manages Casatourat's circuits, events and content.",
    contribution: "Part of the Casatourat project I led at LionsGeek PRO: the Laravel back office that feeds the mobile app.",
    team: LIONSGEEK_PRO_TEAM,
    highlights: [
      "Built the Laravel dashboard powering the Casatourat mobile app.",
      "Managed cultural circuits, events, and real-time content.",
      "Provided insight into user behavior and app content.",
    ],
    related: ["casatourat"],
  },
  {
    name: "Yes Mobile",
    slug: "yes-mobile",
    link: "https://app.youthempowermentsummit.africa/",
    description:
      "A React Native app for the Youth Empowerment Summit, giving participants access to schedules, speaker info, ticket scanning and event navigation, built with performance and accessibility in mind.",
    summary:
      "React Native app for the Youth Empowerment Summit: schedules, speakers, QR ticket scanning and event navigation.",
    image: yes_mobile,
    technologies: ["React Native"],
    repo: null,
    category: "Event Mobile App",
    platform: "mobile",
    year: "2024",
    role: "Mobile App Developer · Project lead",
    client: "Jadara Foundation (YES Africa)",
    audience: "Participants, speakers and organizers of the Youth Empowerment Summit.",
    contribution:
      "I led the YES Africa app at LionsGeek PRO for Jadara Foundation and developed it in React Native, together with its Laravel backend.",
    team: LIONSGEEK_PRO_TEAM,
    highlights: [
      "Built the summit app with schedules, speaker info, and event navigation.",
      "Implemented ticket/QR scanning for fast on-site check-in.",
      "Focused on performance and accessibility with React Native.",
    ],
    related: ["yes-mobile-dashboard", "yes-learning", "yes-africa"],
  },
  {
    name: "Yes Learning",
    slug: "yes-learning",
    link: "https://learning.youthempowermentsummit.africa/",
    description:
      "A Laravel and Inertia.js platform offering workshops, e-learning content and progress tracking. It supports both synchronous and asynchronous learning for African youth in professional and soft-skill areas.",
    summary:
      "Laravel and Inertia.js e-learning platform for YES Africa: workshops, courses and progress tracking for African youth.",
    image: yes_learning,
    technologies: ["Laravel", "Inertia.js"],
    repo: null,
    category: "E-learning Platform",
    platform: "web",
    year: "2024",
    role: "Full-Stack Developer · Project lead",
    client: "Jadara Foundation (YES Africa)",
    audience: "Young Africans building professional and soft skills.",
    contribution: "Led at LionsGeek PRO as part of the YES Africa programme for Jadara Foundation; I worked on it as a full-stack developer.",
    team: LIONSGEEK_PRO_TEAM,
    highlights: [
      "Built an e-learning platform with workshops and progress tracking.",
      "Supported both synchronous and asynchronous learning.",
      "Targeted professional and soft-skill growth for African youth.",
    ],
    related: ["yes-mobile", "yes-africa"],
  },
  {
    name: "LionsGeek Mobile",
    slug: "lionsgeek-mobile",
    link: "https://play.google.com/store/apps/details?id=com.lionsgeek_pro.lionsgeek&hl=en",
    description:
      "Official companion app for the LionsGeek community, helping students, coaches, and admins stay connected and organized. It supports workspace booking, training tracking, community updates, event reservations with capacity checks, and QR or manual check-in for participants.",
    summary:
      "React Native companion app for the LionsGeek community on Google Play: workspace booking, events with capacity checks and QR check-in.",
    image: lionsgeek_mobile,
    technologies: ["React Native"],
    repo: "https://github.com/forkanimahdi/lionsgeek-mobile",
    category: "Community Mobile App",
    platform: "mobile",
    year: "2025",
    role: "Mobile App Developer",
    client: "LionsGeek",
    audience: "LionsGeek students, coaches and administrators.",
    highlights: [
      "Shipped the LionsGeek companion app to Google Play.",
      "Built workspace booking and event reservations with capacity checks.",
      "Added QR and manual check-in for participants.",
    ],
    related: ["my-lionsgeek", "lionsgeek"],
  },
  {
    name: "Her Day for Her",
    slug: "her-day-for-her",
    link: "https://herdayforher.ma/",
    description:
      "An interactive web platform built with Laravel and Inertia.js, showcasing MasterClass events and empowering women through leadership talks, workshops, and networking programs.",
    summary:
      "Laravel and Inertia.js event platform for Her Day for Her: women's leadership masterclasses, talks, workshops and networking.",
    image: hd4h,
    technologies: ["Laravel", "Inertia.js"],
    repo: null,
    category: "Event Platform",
    platform: "web",
    year: "2024",
    role: "Full-Stack Developer",
    client: "Her Day for Her",
    audience: "Women attending leadership masterclasses, talks and workshops.",
    highlights: [
      "Built a platform showcasing MasterClass events for women's leadership.",
      "Presented talks, workshops, and networking programs.",
      "Delivered an engaging, on-brand interactive experience.",
    ],
  },
  {
    name: "Tilila",
    slug: "tilila",
    link: "https://tilila.org/",
    description:
      "Official platform of SOREAD-2M’s Tilila program for equity, diversity, and inclusion in Morocco. It hosts Tilila Awards applications for inclusive advertising campaigns and Tililab, a creative incubator supporting agencies and advertisers committed to more equitable representation in the media.",
    summary:
      "Platform for SOREAD-2M's Tilila program: Tilila Awards applications for inclusive advertising and the Tililab incubator.",
    image: tilila,
    technologies: ["Laravel", "Inertia.js"],
    repo: null,
    category: "Program Platform",
    platform: "web",
    year: "2025",
    role: "Full-Stack Developer",
    client: "SOREAD-2M",
    audience: "Advertisers, agencies and applicants to the Tilila Awards and Tililab.",
    highlights: [
      "Built SOREAD-2M's Tilila platform for equity, diversity & inclusion.",
      "Hosted Tilila Awards applications for inclusive advertising campaigns.",
      "Powered Tililab, a creative incubator for agencies and advertisers.",
    ],
    related: ["tililab-evaluation-platform"],
  },
  {
    name: "Tililab - Evaluation Platform",
    slug: "tililab-evaluation-platform",
    link: "https://tililab.mylionsgeek.africa/",
    description:
      "A Laravel and Inertia.js web application for managing candidate assessments by a panel of judges. Organizers add judges and register candidates, judges score them, and the panel records final decisions.",
    summary:
      "Laravel and Inertia.js jury platform for Tililab: judges, candidate registration, scoring and final decisions.",
    image: tililab_judge,
    technologies: ["Laravel", "Inertia.js"],
    repo: null,
    category: "Evaluation System",
    platform: "web",
    year: "2025",
    role: "Full-Stack Developer",
    client: "SOREAD-2M / Tilila",
    audience: "Tililab jury members and program organizers.",
    highlights: [
      "Built a jury evaluation platform for structured candidate assessments.",
      "Managed judges, candidate registration, scoring, and final decisions.",
      "Streamlined the end-to-end evaluation workflow.",
    ],
    related: ["tilila"],
  },
  // {
  //   name: "Yes Backend",
  //   link: "https://management.youthempowermentsummit.africa/",
  //   description: "A Laravel admin dashboard used to manage the YES platform’s users, event schedules, speaker profiles, and access control. It supports detailed analytics and multi-role user permissions.",
  //   image: yes_backend, // import from ../assets/images/projects/yes_backend.webp
  //   technologies: ["Laravel"],
  //   repo: null
  // },
  {
    name: "Yes Mobile Dashboard",
    slug: "yes-mobile-dashboard",
    link: "https://app.youthempowermentsummit.africa/",
    description:
      "The Laravel backend for the Yes Mobile app, managing users, programs, notifications and app content, with security-first admin access.",
    summary:
      "Laravel backend for the YES Africa summit app: users, programs, notifications and app content, with multi-role admin access.",
    image: yesMobile_backend,
    technologies: ["Laravel"],
    repo: null,
    category: "Admin Dashboard",
    platform: "web",
    year: "2024",
    role: "Backend Developer",
    client: "Jadara Foundation (YES Africa)",
    audience: "YES Africa organizers managing the summit app and its participants.",
    team: LIONSGEEK_PRO_TEAM,
    highlights: [
      "Built the Laravel backend for the Yes Mobile app.",
      "Managed users, programs, notifications, and app content.",
      "Enforced security-first, multi-role admin access.",
    ],
    related: ["yes-mobile", "yes-africa"],
  },
];
