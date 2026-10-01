export const contactSeo = {
  title: "Contact Mehdi Forkani | Hire a Freelance Web & Mobile App Developer",
  description:
    "Hire Mehdi Forkani, a freelance web and mobile app developer based in Casablanca, Morocco, working with clients worldwide. Tell me about your web platform, SaaS or mobile app project.",
  path: "/contact",
};

export const contactSteps = [
  {
    title: "You send a message",
    text: "Tell me what you're building, who it's for and where you are today. A few lines are enough to start.",
  },
  {
    title: "We talk it through",
    text: "We set up a call to understand how you work, what you really need and what success looks like.",
  },
  {
    title: "You get a clear plan",
    text: "I come back with a scope, a timeline and a price, so you know exactly what you get before we start.",
  },
  {
    title: "We build it together",
    text: "I design and build in clear steps you can review, launch it, and stay by your side after delivery.",
  },
];

export const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://forkanimahdi.com/contact#page",
  url: "https://forkanimahdi.com/contact",
  name: contactSeo.title,
  description: contactSeo.description,
  inLanguage: "en",
  isPartOf: { "@id": "https://forkanimahdi.com/#website" },
  mainEntity: {
    "@id": "https://forkanimahdi.com/#mehdi",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "forkanimahdi@gmail.com",
      url: "https://forkanimahdi.com/contact",
      areaServed: "Worldwide",
      availableLanguage: ["Arabic", "French", "English"],
    },
  },
};
