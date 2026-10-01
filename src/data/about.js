export const aboutSeo = {
  title: "About Mehdi Forkani | Freelance Web & Mobile App Developer, Casablanca & Worldwide",
  description:
    "Mehdi Forkani is a freelance web and mobile app developer based in Casablanca, Morocco, working with clients worldwide. From the first LionsGeek cohort to Head Coach and Project Manager, he builds secure, well-designed Laravel, React and React Native apps for startups, NGOs and institutions.",
  path: "/about",
};

export const journey = [
  {
    chapter: "Before code",
    title: "Behind the desk",
    place: "Banque Populaire · CNSS",
    tags: ["Clients", "Operations"],
    text: "My career started far from code, as a commercial assistant at Banque Populaire and an administrative assistant at the CNSS. That's where I saw how real organizations run day to day, and what people actually need from the tools they use.",
  },
  {
    chapter: "LionsGeek Coding School",
    title: "The very first cohort",
    place: "LionsGeek · Casablanca, Morocco",
    tags: ["HTML", "CSS", "JavaScript", "React", "Laravel"],
    text: "I joined the first cohort of the LionsGeek Coding School and learned the craft from the ground up: HTML, CSS, JavaScript, then React and Laravel, building real projects from day one.",
  },
  {
    chapter: "Full-stack developer",
    title: "From learner to builder",
    place: "LionsGeek · Casablanca, Morocco",
    tags: ["Laravel", "React", "Inertia.js", "React Native"],
    text: "I stayed at LionsGeek as a full-stack developer, shipping web platforms, dashboards and mobile apps used by real people every day.",
  },
  {
    chapter: "Head Coach",
    title: "Teaching the next generation",
    place: "LionsGeek Coding School · Casablanca, Morocco",
    tags: ["Mentoring", "Full-stack"],
    text: "I became Head Coach of the Coding School. I guide each cohort from their first line of code to full platforms they build and present with confidence, in just a few months.",
  },
  {
    chapter: "Project Manager, LionsGeek PRO",
    title: "Leading real products",
    place: "LionsGeek PRO · Casablanca, Morocco",
    tags: ["Team lead", "Laravel", "React Native"],
    text: "I lead digital projects for LionsGeek and its partners: Casatourat for Casamémoire, the YES Africa app, NGO map and learning platform for Jadara Foundation, and My LionsGeek, our internal management system.",
  },
  {
    chapter: "2026",
    title: "On stage in Brussels",
    place: "KBR · Brussels, Belgium",
    tags: ["AI", "XR", "Team lead"],
    text: "I led the team behind ADA, a conversational metahuman of Ada Lovelace, which won the Jury's Coup de Cœur at AVATARS 2026, at the KBR in Brussels.",
  },
  {
    chapter: "Today",
    title: "Building for you",
    place: "Freelance · Casablanca → Worldwide",
    tags: ["Web apps", "Mobile apps", "Freelance", "Remote"],
    text: "Today I also work as a freelance web and mobile app developer, from Casablanca to clients all over the world. I help startups, NGOs and institutions turn their ideas into secure, well-designed products, and I stay involved from the first draft to the final delivery.",
  },
];

export const faqs = [
  {
    question: "Who is Mehdi Forkani?",
    answer:
      "Mehdi Forkani is a freelance web and mobile app developer based in Casablanca, Morocco, working with clients worldwide. He learned to code in the first cohort of the LionsGeek Coding School, became its Head Coach, and leads digital projects as Project Manager at LionsGeek PRO. His team won the Jury's Coup de Cœur at AVATARS 2026 in Brussels.",
  },
  {
    question: "Are you available as a freelance web and mobile app developer?",
    answer:
      "Yes. I'm based in Casablanca, Morocco, and I take on freelance web and mobile app projects for startups, small businesses, NGOs and institutions worldwide: in Morocco, Europe, Africa, the Middle East, North America and beyond.",
  },
  {
    question: "Do you work with clients outside Morocco?",
    answer:
      "Yes, I work remotely with clients all over the world. I'm used to async collaboration, regular demos and clear written updates, and Morocco's time zone overlaps well with Europe, Africa, the Middle East and the US East Coast.",
  },
  {
    question: "What kind of apps do you build?",
    answer:
      "Web platforms and SaaS products, admin dashboards and internal tools, e-commerce sites, booking and management platforms, and cross-platform mobile apps for iOS and Android, with their back-ends and REST APIs.",
  },
  {
    question: "Which technologies do you use?",
    answer:
      "Laravel and PHP for back-ends, React and Inertia.js for web apps, React Native and Expo for mobile apps, plus Tailwind CSS, MySQL and REST APIs.",
  },
  {
    question: "Which projects have you delivered?",
    answer:
      "Casatourat, a heritage tourism app for Casamémoire; the YES Africa mobile app, NGO map and learning platform for Jadara Foundation; My LionsGeek, an internal management platform; the Tihad Azemmour Women club website and admin; an admissions platform for Écoles Belges au Maroc; and the ISRAR bilingual NGO platform, among others.",
  },
  {
    question: "How does a project with you work?",
    answer:
      "We start by understanding how you really work and what you need. Then I design the product, build it in clear steps you can review, launch it, and keep supporting it. I stay involved from the first draft to the final delivery, and security is built in from day one.",
  },
  {
    question: "Do you work in French and Arabic?",
    answer:
      "Yes, I work in Arabic (Darija), French and English. En français : je suis développeur web et mobile freelance basé à Casablanca, et je crée des applications web et mobiles sur mesure pour les entreprises, les startups et les associations au Maroc et partout dans le monde.",
  },
  {
    question: "How can I hire you?",
    answer:
      "Send me a message through the contact form on forkanimahdi.com, email forkanimahdi@gmail.com, or reach me on LinkedIn at linkedin.com/in/forkanimahdi.",
  },
];

export const aboutJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://forkanimahdi.com/about#page",
      url: "https://forkanimahdi.com/about",
      name: aboutSeo.title,
      description: aboutSeo.description,
      inLanguage: "en",
      isPartOf: { "@id": "https://forkanimahdi.com/#website" },
      mainEntity: { "@id": "https://forkanimahdi.com/#mehdi" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://forkanimahdi.com/about#faq",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};
