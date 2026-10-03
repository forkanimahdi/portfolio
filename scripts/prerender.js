// Runs after `vite build` (client, into dist/) and `vite build --ssr` (into dist-ssr/).
// Writes one static HTML file per route plus sitemap.xml and llms.txt, from the same data the app uses.
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const DIST = resolve("dist");
const SSR_ENTRY = resolve("dist-ssr/entry-server.js");

const { render, renderHead, prerenderRoutes, projects, projectTestimonial, journey, profile, SITE_URL } = await import(pathToFileURL(SSR_ENTRY).href);

const SEO_BLOCK = /<!-- seo:start -->[\s\S]*?<!-- seo:end -->/;
const ROOT = '<div id="root"></div>';

// Inline the stylesheet: one less render-blocking request before first paint (~8 KB gzipped).
// Start the app bundle once the page has loaded and its main image is painted (or on the first interaction):
// the prerendered HTML is fully visible before React downloads and hydrates.
const template = readFileSync(join(DIST, "index.html"), "utf-8")
    .replace(
        /<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/g,
        (_, href) => `<style>${readFileSync(join(DIST, href), "utf-8")}</style>`
    )
    .replace(
        /<script type="module" crossorigin src="(\/assets\/[^"]+\.js)"><\/script>/,
        (_, src) =>
            `<script data-app-loader>(function(){var d=0;function go(){if(d)return;d=1;var s=document.createElement("script");s.type="module";s.crossOrigin="";s.src="${src}";document.head.appendChild(s)}function later(){var i=document.querySelector('img[fetchpriority="high"]');(i&&i.decode?i.decode().catch(function(){}):Promise.resolve()).then(function(){requestAnimationFrame(function(){requestAnimationFrame(go)})})}if(document.readyState==="complete")later();else addEventListener("load",later,{once:true});["pointerdown","keydown","touchstart"].forEach(function(e){addEventListener(e,go,{once:true,passive:true})})})()</script>`
    );
if (!template.includes("data-app-loader")) {
    throw new Error("index.html: the module entry script was not found, check the Vite output format");
}
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

const projectLine = (project) => {
    const parts = [
        `- [${project.name}](${url(`/projects/${project.slug}`)}): ${project.category}, ${project.year}, for ${project.client}${project.location ? ` (${project.location})` : ""}.`,
        project.summary,
        `Role: ${project.role}.`,
    ];
    parts.push(`Challenge: ${project.challenge}`);
    parts.push(`What was built: ${project.features.map((feature) => `${feature.title} (${feature.text.replace(/\.$/, "")})`).join("; ")}.`);
    const testimonial = projectTestimonial(project.slug);
    if (testimonial) parts.push(`Client feedback (${testimonial.name}, ${testimonial.role}): "${testimonial.excerpt || testimonial.quote.split("\n\n")[0]}"`);
    return parts.join(" ");
};
const llms = `# ${profile.name}

> Freelance mobile and web app developer based in ${profile.city}, ${profile.country}, working with clients across Morocco and remotely.

${profile.summary}

Core stack: ${profile.stack.join(", ")}. Besides freelance work, he is Head Coach of the LionsGeek Coding School in Casablanca. He works in ${profile.languages.map((language) => language.name).join(", ")}.

## About

- [About ${profile.name}](${url("/about")}): background, career path and answers to common client questions

## Services

- [Services](${url("/#services")}): mobile apps with React Native; web platforms with Laravel, Inertia.js and React; backends and admin dashboards; e-commerce and business websites; SEO and performance (technical SEO, Core Web Vitals, structured data); GEO, Generative Engine Optimization for visibility in AI assistants such as ChatGPT, Gemini, Perplexity and Google AI Overviews

## Projects

${projects.map(projectLine).join("\n")}
- [All projects](${url("/projects")})

## Experience

- Freelance mobile and web app developer, based in Casablanca and available for remote projects
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
