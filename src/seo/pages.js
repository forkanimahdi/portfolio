import { PERSON_ID, SITE_URL, WEBSITE_ID, profile } from "../data/profile";
import { projects } from "../data/projects";
import { projectTestimonial } from "../data/testimonials";
import { aboutSeo as aboutBase, faqs } from "../data/about";
import { contactSeo as contactBase } from "../data/contact";
import { servicePages } from "../data/services";

export const absoluteUrl = (path) => `${SITE_URL}${path}`;

const breadcrumb = (path, trail) => ({
  "@type": "BreadcrumbList",
  "@id": `${absoluteUrl(path)}#breadcrumb`,
  itemListElement: trail.map(([name, itemPath], idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name,
    item: absoluteUrl(itemPath),
  })),
});

const faqPage = (path, items) => ({
  "@type": "FAQPage",
  "@id": `${absoluteUrl(path)}#faq`,
  mainEntity: items.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
});

const webPage = (type, seo, extra = {}) => ({
  "@type": type,
  "@id": `${absoluteUrl(seo.path)}#webpage`,
  url: absoluteUrl(seo.path),
  name: seo.title,
  description: seo.description,
  inLanguage: seo.lang ?? "en",
  isPartOf: { "@id": WEBSITE_ID },
  ...extra,
});

const withPage = (seo, type, extra, nodes = []) => ({ ...seo, jsonLd: [webPage(type, seo, extra), ...nodes] });

export const homeSeo = withPage(
  {
    title: "Mehdi Forkani | Website & Mobile App Developer in Casablanca, Morocco",
    description:
      "Freelance web developer and mobile app developer in Casablanca: websites, web apps and iOS and Android apps for businesses across Morocco, with SEO and GEO built in. Also a full-stack web development coach.",
    path: "/",
  },
  "ProfilePage",
  { mainEntity: { "@id": PERSON_ID }, about: { "@id": PERSON_ID } }
);

export const aboutSeo = withPage(
  aboutBase,
  "AboutPage",
  { mainEntity: { "@id": PERSON_ID }, breadcrumb: { "@id": `${absoluteUrl(aboutBase.path)}#breadcrumb` } },
  [breadcrumb(aboutBase.path, [["Home", "/"], ["About", aboutBase.path]]), faqPage(aboutBase.path, faqs)]
);

export const contactSeo = withPage(
  contactBase,
  "ContactPage",
  { mainEntity: { "@id": PERSON_ID }, breadcrumb: { "@id": `${absoluteUrl(contactBase.path)}#breadcrumb` } },
  [breadcrumb(contactBase.path, [["Home", "/"], ["Contact", contactBase.path]])]
);

const projectsBase = {
  title: "Projects | Mehdi Forkani, Website & Mobile App Developer",
  description:
    "Web platforms, mobile apps and admin dashboards by Mehdi Forkani, built with Laravel, Inertia.js, React and React Native for NGOs, institutions and companies.",
  path: "/projects",
};

export const projectsSeo = withPage(
  projectsBase,
  "CollectionPage",
  {
    mainEntity: { "@id": `${absoluteUrl(projectsBase.path)}#list` },
    breadcrumb: { "@id": `${absoluteUrl(projectsBase.path)}#breadcrumb` },
  },
  [
    {
      "@type": "ItemList",
      "@id": `${absoluteUrl(projectsBase.path)}#list`,
      itemListElement: projects.map((project, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: project.name,
        url: absoluteUrl(`/projects/${project.slug}`),
      })),
    },
    breadcrumb(projectsBase.path, [["Home", "/"], ["Projects", projectsBase.path]]),
  ]
);

export const projectSeo = (project) => {
  const path = `/projects/${project.slug}`;
  const url = absoluteUrl(path);
  const testimonial = projectTestimonial(project.slug);
  const seo = {
    title: `${project.name}: ${project.category} case study (${project.technologies.join(", ")}) | ${profile.name}`,
    description: `${project.summary} Case study by ${profile.name}, developer in ${profile.city}, ${profile.country}.`,
    path,
    type: "article",
    image: {
      url: absoluteUrl(`/og/projects/${project.slug}.jpg`),
      width: 1200,
      height: 630,
      alt: `Screenshot of ${project.name}, ${project.category.toLowerCase()} by ${profile.name}`,
    },
  };

  return withPage(
    seo,
    "WebPage",
    { mainEntity: { "@id": `${url}#project` }, breadcrumb: { "@id": `${url}#breadcrumb` } },
    [
      {
        "@type": "CreativeWork",
        "@id": `${url}#project`,
        name: project.name,
        description: project.description,
        url: project.link,
        mainEntityOfPage: { "@id": `${url}#webpage` },
        ...(typeof project.image === "string" && project.image.startsWith("/assets/") && { image: absoluteUrl(project.image) }),
        genre: project.category,
        dateCreated: project.year,
        keywords: [...project.technologies, project.category, project.location].filter(Boolean).join(", "),
        inLanguage: "en",
        [project.team ? "contributor" : "creator"]: { "@id": PERSON_ID },
        ...(project.client && { publisher: { "@type": "Organization", name: project.client } }),
        abstract: project.challenge,
        hasPart: project.features.map((feature) => ({ "@type": "CreativeWork", name: feature.title, description: feature.text })),
        ...(project.audience && { audience: { "@type": "Audience", audienceType: project.audience } }),
        ...(project.location && { locationCreated: { "@type": "Place", name: project.location } }),
        ...(testimonial && {
          review: {
            "@type": "Review",
            reviewBody: testimonial.excerpt || testimonial.quote,
            author: { "@type": "Person", name: testimonial.name, jobTitle: testimonial.role },
          },
        }),
      },
      breadcrumb(path, [["Home", "/"], ["Projects", "/projects"], [project.name, path]]),
    ]
  );
};

export const serviceSeo = (page) => {
  const url = absoluteUrl(page.path);
  const seo = {
    ...page.seo,
    path: page.path,
    lang: page.lang,
    alternates: [
      { lang: page.lang, path: page.path },
      { lang: page.lang === "en" ? "fr" : "en", path: page.alternatePath },
    ],
  };

  return withPage(
    seo,
    "WebPage",
    { mainEntity: { "@id": `${url}#service` }, breadcrumb: { "@id": `${url}#breadcrumb` } },
    [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: `${page.title} ${page.highlight.replace(/\.$/, "")}`,
        serviceType: page.serviceType,
        description: page.seo.description,
        url,
        provider: { "@id": PERSON_ID },
        areaServed: [
          { "@type": "City", name: profile.city },
          { "@type": "Country", name: profile.country },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: page.serviceType,
          itemListElement: page.offers.map((offer) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: offer.title, description: offer.text },
          })),
        },
      },
      breadcrumb(page.path, [[page.lang === "fr" ? "Accueil" : "Home", "/"], [page.navLabel, page.path]]),
      faqPage(page.path, page.faqs),
    ]
  );
};

export const ratingSeo = {
  title: "Rate our work together | Mehdi Forkani",
  description: "Share your experience working with Mehdi Forkani.",
  path: "/rating",
  noindex: true,
};

export const notFoundSeo = {
  title: "Page not found | Mehdi Forkani",
  description: "This page doesn't exist. Browse Mehdi Forkani's projects or get in touch.",
  path: "/404",
  noindex: true,
};

// Every URL the build prerenders. `file` is relative to dist/ (served with Vercel cleanUrls).
export const prerenderRoutes = () => [
  { path: "/", file: "index.html", seo: homeSeo },
  { path: "/about", file: "about.html", seo: aboutSeo },
  { path: "/projects", file: "projects.html", seo: projectsSeo },
  ...projects.map((project) => ({
    path: `/projects/${project.slug}`,
    file: `projects/${project.slug}.html`,
    seo: projectSeo(project),
  })),
  ...servicePages.map((page) => ({
    path: page.path,
    file: `${page.path.slice(1)}.html`,
    seo: serviceSeo(page),
  })),
  { path: "/contact", file: "contact.html", seo: contactSeo },
  { path: "/rating", file: "rating.html", seo: ratingSeo },
  { path: "/404", file: "404.html", seo: notFoundSeo },
];
