// Runs after `vite build` (client, into dist/) and `vite build --ssr` (into dist-ssr/).
// Writes one static HTML file per route plus sitemap.xml and llms.txt, from the same data the app uses.
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const DIST = resolve("dist");
const SSR_ENTRY = resolve("dist-ssr/entry-server.js");

const { render, renderHead, prerenderRoutes, projects, journey, profile, SITE_URL } = await import(pathToFileURL(SSR_ENTRY).href);

const SEO_BLOCK = /<!-- seo:start -->[\s\S]*?<!-- seo:end -->/;
const ROOT = '<div id="root"></div>';

const template = readFileSync(join(DIST, "index.html"), "utf-8");
if (!SEO_BLOCK.test(template) || !template.includes(ROOT)) {
    throw new Error("index.html is missing the <!-- seo:start/end --> markers or an empty #root");
}

const problems = [];
const routes = prerenderRoutes();

for (const route of routes) {
    const seo = { ...route.seo };
    if (seo.image && !existsSync(join(DIST, new URL(seo.image.url).pathname))) {
        problems.push(`${route.path}: social image ${seo.image.url} not found, using the default card`);
        delete seo.image;
    }

    const appHtml = render(route.path);
    const html = template
        .replace(SEO_BLOCK, `<!-- seo:start -->\n    ${renderHead(seo)}\n    <!-- seo:end -->`)
        .replace(ROOT, `<div id="root" data-prerendered="${route.path}">${appHtml}</div>`);

    const h1Count = (appHtml.match(/<h1[\s>]/g) || []).length;
    if (h1Count !== 1) problems.push(`${route.path}: expected one <h1>, found ${h1Count}`);
    const jsonLd = html.match(/<script type="application\/ld\+json" id="jsonld">([\s\S]*?)<\/script>/);
    if (jsonLd) JSON.parse(jsonLd[1]);

    const file = join(DIST, route.file);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, html);
    console.log(`Prerendered ${route.path} -> dist/${route.file}`);
}

const xmlEscape = (value) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const indexable = routes.filter((route) => !route.seo.noindex);

writeFileSync(
    join(DIST, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable.map((route) => `  <url><loc>${xmlEscape(`${SITE_URL}${route.path}`)}</loc></url>`).join("\n")}
</urlset>
`
);
console.log(`Wrote dist/sitemap.xml (${indexable.length} URLs)`);

const url = (path) => `${SITE_URL}${path}`;
const llms = `# ${profile.name}

> Freelance mobile and web app developer based in ${profile.city}, ${profile.country}.

${profile.summary}

Core stack: ${profile.stack.join(", ")}. Besides freelance work, he is Head Coach of the LionsGeek Coding School and project manager at LionsGeek PRO in Casablanca; several projects below were delivered with the LionsGeek PRO team, and each project page states his role. He works in ${profile.languages.map((language) => language.name).join(", ")}.

## About

- [About ${profile.name}](${url("/about")}): background, career path and answers to common client questions

## Services

- [Services](${url("/#services")}): mobile apps with React Native; web platforms with Laravel, Inertia.js and React; backends and admin dashboards; e-commerce and business websites

## Projects

${projects
    .map((project) => `- [${project.name}](${url(`/projects/${project.slug}`)}): ${project.category}, ${project.year}, for ${project.client}. ${project.summary} Role: ${project.role}.`)
    .join("\n")}
- [All projects](${url("/projects")})

## Experience

- Freelance mobile and web app developer, based in Casablanca and available for remote projects
- Project manager at LionsGeek PRO (Casablanca): leads digital projects for LionsGeek and its partners, such as Casatourat for Casamémoire, the YES Africa app and My LionsGeek
- Head Coach of the LionsGeek Coding School (Casablanca): guides each cohort from their first line of code to full-stack platforms
- Full-stack developer at LionsGeek, after learning to code in the first cohort of the LionsGeek Coding School
- Before code: commercial assistant at Banque Populaire and administrative assistant at the CNSS
- Full career path: [About](${url("/about")})
- Recognition: Coup de Cœur du Jury, AVATARS competition, [IN]VISIBLE Festival 2026 by XR4Heritage (KBR, Brussels). A team award to LionsGeek for ADA, a conversational XR and AI avatar of Ada Lovelace; ${profile.name} led the team. [Details](${url("/#achievements")})

## Contact

- [Contact page](${url("/contact")}): freelance project inquiries
- [Email](mailto:${profile.email}): ${profile.email}

## Professional profiles

- [LinkedIn](${profile.socials.linkedin})
- [GitHub](${profile.socials.github})
- [Instagram](${profile.socials.instagram})
- [X](${profile.socials.x})
`;
writeFileSync(join(DIST, "llms.txt"), llms);
console.log("Wrote dist/llms.txt");

rmSync(resolve("dist-ssr"), { recursive: true, force: true });

if (problems.length) {
    console.warn(`\nPrerender warnings:\n- ${problems.join("\n- ")}`);
}
