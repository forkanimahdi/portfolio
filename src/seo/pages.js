import { PERSON_ID, SITE_URL, WEBSITE_ID, profile } from "../data/profile";
import { projects } from "../data/projects";
import { aboutSeo as aboutBase, faqs } from "../data/about";
import { contactSeo as contactBase } from "../data/contact";

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

const webPage = (type, seo, extra = {}) => ({
  "@type": type,
  "@id": `${absoluteUrl(seo.path)}#webpage`,
  url: absoluteUrl(seo.path),
  name: seo.title,
  description: seo.description,
  inLanguage: "en",
  isPartOf: { "@id": WEBSITE_ID },
  ...extra,
});

const withPage = (seo, type, extra, nodes = []) => ({ ...seo, jsonLd: [webPage(type, seo, extra), ...nodes] });

export const homeSeo = withPage(
  {
    title: "Mehdi Forkani | Freelance Mobile & Web App Developer in Casablanca",
    description:
      "Freelance mobile and web app developer in Casablanca, Morocco. I build web platforms, mobile apps, backends and dashboards with Laravel, React and React Native.",
    path: "/",
  },
  "ProfilePage",
  { mainEntity: { "@id": PERSON_ID }, about: { "@id": PERSON_ID } }
);

export const aboutSeo = withPage(
  aboutBase,
  "AboutPage",
  { mainEntity: { "@id": PERSON_ID }, breadcrumb: { "@id": `${absoluteUrl(aboutBase.path)}#breadcrumb` } },
  [
    breadcrumb(aboutBase.path, [["Home", "/"], ["About", aboutBase.path]]),
    {
      "@type": "FAQPage",
      "@id": `${absoluteUrl(aboutBase.path)}#faq`,
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ]
);

export const contactSeo = withPage(
  contactBase,
  "ContactPage",
  { mainEntity: { "@id": PERSON_ID }, breadcrumb: { "@id": `${absoluteUrl(contactBase.path)}#breadcrumb` } },
  [breadcrumb(contactBase.path, [["Home", "/"], ["Contact", contactBase.path]])]
);

const projectsBase = {
  title: "Projects | Mehdi Forkani, Mobile & Web App Developer",
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
  const seo = {
    title: `${project.name} — ${project.category} | ${profile.name}`,
    description: project.summary || project.description,
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
        keywords: project.technologies.join(", "),
        inLanguage: "en",
        contributor: { "@id": PERSON_ID },
        ...(project.client && { publisher: { "@type": "Organization", name: project.client } }),
      },
      breadcrumb(path, [["Home", "/"], ["Projects", "/projects"], [project.name, path]]),
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
  { path: "/contact", file: "contact.html", seo: contactSeo },
  { path: "/rating", file: "rating.html", seo: ratingSeo },
  { path: "/404", file: "404.html", seo: notFoundSeo },
];
