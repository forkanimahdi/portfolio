import { readFileSync, writeFileSync } from "node:fs";
import { aboutJsonLd, aboutSeo, faqs, journey } from "../src/data/about.js";

const SITE_URL = "https://forkanimahdi.com";

const escape = (text) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const setMeta = (html, attr, name, value) =>
    html.replace(new RegExp(`(<meta\\s+${attr}="${name}"\\s+content=")[^"]*(")`), `$1${escape(value)}$2`);

const template = readFileSync("dist/index.html", "utf-8");
const url = `${SITE_URL}${aboutSeo.path}`;

const crawlContent = `<div id="seo-crawl">
      <h1>About Mehdi Forkani — Freelance Web &amp; Mobile App Developer, Casablanca &amp; Worldwide</h1>
      <p>${escape(aboutSeo.description)}</p>
      <h2>My journey</h2>
      ${journey.map((step) => `<h3>${escape(step.title)} (${escape(step.chapter)}, ${escape(step.place)})</h3>\n      <p>${escape(step.text)}</p>`).join("\n      ")}
      <h2>Frequently asked questions</h2>
      ${faqs.map((faq) => `<h3>${escape(faq.question)}</h3>\n      <p>${escape(faq.answer)}</p>`).join("\n      ")}
      <p>
        <a href="/">Home</a> · <a href="/projects">Projects</a> ·
        <a href="mailto:forkanimahdi@gmail.com">forkanimahdi@gmail.com</a> ·
        <a href="https://www.linkedin.com/in/forkanimahdi/">LinkedIn</a> ·
        <a href="https://github.com/forkanimahdi">GitHub</a>
      </p>
    </div>`;

let html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escape(aboutSeo.title)}</title>`)
    .replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${url}"`)
    .replace(/<div id="seo-crawl">[\s\S]*?<\/div>/, crawlContent)
    .replace("</head>", `  <script type="application/ld+json" id="route-jsonld">${JSON.stringify(aboutJsonLd)}</script>\n  </head>`);

html = setMeta(html, "name", "description", aboutSeo.description);
html = setMeta(html, "property", "og:title", aboutSeo.title);
html = setMeta(html, "property", "og:description", aboutSeo.description);
html = setMeta(html, "property", "og:url", url);
html = setMeta(html, "name", "twitter:title", aboutSeo.title);
html = setMeta(html, "name", "twitter:description", aboutSeo.description);

writeFileSync("dist/about.html", html);
console.log("Prerendered dist/about.html");
