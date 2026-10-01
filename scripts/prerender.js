import { readFileSync, writeFileSync } from "node:fs";
import { aboutJsonLd, aboutSeo, faqs, journey } from "../src/data/about.js";
import { contactJsonLd, contactSeo, contactSteps } from "../src/data/contact.js";

const SITE_URL = "https://forkanimahdi.com";

const escape = (text) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const setMeta = (html, attr, name, value) =>
    html.replace(new RegExp(`(<meta\\s+${attr}="${name}"\\s+content=")[^"]*(")`), `$1${escape(value)}$2`);

const links = `<p>
        <a href="/">Home</a> · <a href="/about">About</a> · <a href="/projects">Projects</a> · <a href="/contact">Contact</a> ·
        <a href="mailto:forkanimahdi@gmail.com">forkanimahdi@gmail.com</a> ·
        <a href="https://www.linkedin.com/in/forkanimahdi/">LinkedIn</a> ·
        <a href="https://github.com/forkanimahdi">GitHub</a>
      </p>`;

const pages = [
    {
        file: "about.html",
        seo: aboutSeo,
        jsonLd: aboutJsonLd,
        content: `<h1>About Mehdi Forkani — Freelance Web &amp; Mobile App Developer, Casablanca &amp; Worldwide</h1>
      <p>${escape(aboutSeo.description)}</p>
      <h2>My journey</h2>
      ${journey.map((step) => `<h3>${escape(step.title)} (${escape(step.chapter)}, ${escape(step.place)})</h3>\n      <p>${escape(step.text)}</p>`).join("\n      ")}
      <h2>Frequently asked questions</h2>
      ${faqs.map((faq) => `<h3>${escape(faq.question)}</h3>\n      <p>${escape(faq.answer)}</p>`).join("\n      ")}`,
    },
    {
        file: "contact.html",
        seo: contactSeo,
        jsonLd: contactJsonLd,
        content: `<h1>Contact Mehdi Forkani — Hire a Freelance Web &amp; Mobile App Developer</h1>
      <p>${escape(contactSeo.description)}</p>
      <p>Email: <a href="mailto:forkanimahdi@gmail.com">forkanimahdi@gmail.com</a>. Based in Casablanca, Morocco (Moroccan time), working remotely with clients worldwide, in Arabic, French and English.</p>
      <h2>What happens next</h2>
      ${contactSteps.map((step, idx) => `<h3>${idx + 1}. ${escape(step.title)}</h3>\n      <p>${escape(step.text)}</p>`).join("\n      ")}`,
    },
];

const template = readFileSync("dist/index.html", "utf-8");

for (const page of pages) {
    const url = `${SITE_URL}${page.seo.path}`;

    let html = template
        .replace(/<title>[\s\S]*?<\/title>/, `<title>${escape(page.seo.title)}</title>`)
        .replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${url}"`)
        .replace(/<div id="seo-crawl">[\s\S]*?<\/div>/, `<div id="seo-crawl">\n      ${page.content}\n      ${links}\n    </div>`)
        .replace("</head>", `  <script type="application/ld+json" id="route-jsonld">${JSON.stringify(page.jsonLd)}</script>\n  </head>`);

    html = setMeta(html, "name", "description", page.seo.description);
    html = setMeta(html, "property", "og:title", page.seo.title);
    html = setMeta(html, "property", "og:description", page.seo.description);
    html = setMeta(html, "property", "og:url", url);
    html = setMeta(html, "name", "twitter:title", page.seo.title);
    html = setMeta(html, "name", "twitter:description", page.seo.description);

    writeFileSync(`dist/${page.file}`, html);
    console.log(`Prerendered dist/${page.file}`);
}
