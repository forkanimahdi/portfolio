export const SITE_URL = "https://forkanimahdi.com";
export const PERSON_ID = `${SITE_URL}/#mehdi`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const profile = {
  name: "Mehdi Forkani",
  alternateNames: ["Forkani Mehdi", "Mahdi Forkani", "forkanimahdi", "مهدي الفرقاني"],
  jobTitle: "Freelance Website & Mobile App Developer",
  city: "Casablanca",
  region: "Casablanca-Settat",
  country: "Morocco",
  countryCode: "MA",
  email: "forkanimahdi@gmail.com",
  summary:
    "Mehdi Forkani is a freelance full-stack developer based in Casablanca, Morocco, working with clients across Morocco and remotely. He creates websites, web apps, platforms and mobile apps for iOS and Android, including the backends and admin dashboards behind them, for businesses, startups, NGOs and institutions. He also handles SEO and GEO (Generative Engine Optimization), so his clients are found on Google and recommended by AI assistants. He is a full-stack web development coach: Head Coach of the LionsGeek Coding School in Casablanca.",
  services: [
    { name: "Website creation", description: "Business websites, institutional sites and portfolios, designed, built, hosted and maintained." },
    { name: "Web app and platform development", description: "Custom web apps, platforms and admin dashboards with Laravel, Inertia.js and React." },
    { name: "Mobile app development", description: "Cross-platform iOS and Android apps with React Native, published on the App Store and Google Play." },
    { name: "E-commerce development", description: "Online stores with product, order and inventory management." },
    { name: "SEO", description: "Technical SEO, Core Web Vitals, structured data, multilingual SEO and Google Search Console setup." },
    { name: "GEO (Generative Engine Optimization)", description: "Visibility in AI assistants such as ChatGPT, Claude, Gemini, Perplexity and Google AI Overviews." },
  ],
  languages: [
    { code: "ar", name: "Arabic" },
    { code: "fr", name: "French" },
    { code: "en", name: "English" },
  ],
  stack: ["Laravel", "PHP", "Inertia.js", "React", "React Native", "Expo", "JavaScript", "Tailwind CSS", "MySQL", "REST APIs", "Git"],
  socials: {
    linkedin: "https://www.linkedin.com/in/forkanimahdi/",
    github: "https://github.com/forkanimahdi",
    instagram: "https://www.instagram.com/forkanimahdi",
    x: "https://twitter.com/forkanimahdi",
  },
};

export const DEFAULT_SOCIAL_IMAGE = {
  url: `${SITE_URL}/og/mehdi-forkani.jpg`,
  width: 1200,
  height: 630,
  alt: "Mehdi Forkani, freelance website and mobile app developer in Casablanca, Morocco",
};

export const personJsonLd = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: profile.name,
  alternateName: profile.alternateNames,
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/og-image.jpg`,
  jobTitle: profile.jobTitle,
  description: profile.summary,
  email: profile.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: profile.city,
    addressRegion: profile.region,
    addressCountry: profile.countryCode,
  },
  knowsLanguage: profile.languages.map((language) => language.code),
  areaServed: [
    { "@type": "City", name: profile.city },
    { "@type": "Country", name: profile.country },
  ],
  hasOccupation: [
    {
      "@type": "Occupation",
      name: "Website, web app and mobile app developer",
      occupationLocation: [
        { "@type": "City", name: profile.city },
        { "@type": "Country", name: profile.country },
      ],
      skills: [...profile.stack.filter((tech) => tech !== "Git"), "SEO", "GEO"].join(", "),
    },
    {
      "@type": "Occupation",
      name: "Full-stack web development coach",
      occupationLocation: { "@type": "City", name: profile.city },
      description: "Head Coach of the LionsGeek Coding School in Casablanca, training cohorts from their first line of code to full-stack platforms.",
    },
  ],
  makesOffer: {
    "@type": "OfferCatalog",
    name: "Freelance development services",
    itemListElement: profile.services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        areaServed: [
          { "@type": "City", name: profile.city },
          { "@type": "Country", name: profile.country },
        ],
      },
    })),
  },
  knowsAbout: [
    "Website creation",
    "Mobile app development",
    "Web application development",
    "Full-stack web development coaching",
    "Admin dashboards",
    "Backend development",
    "Search engine optimization",
    "Generative Engine Optimization",
    ...profile.stack.filter((tech) => tech !== "Git"),
  ],
  worksFor: { "@type": "Organization", name: "LionsGeek", url: "https://lionsgeek.ma/" },
  alumniOf: { "@type": "EducationalOrganization", name: "LionsGeek Coding School", url: "https://lionsgeek.ma/" },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "freelance project inquiries",
    email: profile.email,
    url: `${SITE_URL}/contact`,
    availableLanguage: profile.languages.map((language) => language.name),
  },
  sameAs: Object.values(profile.socials),
};

export const websiteJsonLd = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: profile.name,
  description: `Portfolio of ${profile.name}, ${profile.jobTitle.toLowerCase()} in ${profile.city}, ${profile.country}.`,
  inLanguage: "en",
  publisher: { "@id": PERSON_ID },
  author: { "@id": PERSON_ID },
};
