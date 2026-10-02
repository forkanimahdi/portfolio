import { DEFAULT_SOCIAL_IMAGE, SITE_URL, personJsonLd, profile, websiteJsonLd } from "../data/profile";

export const TWITTER_HANDLE = "@forkanimahdi";

export const resolveSeo = ({ title, description, path = "/", image = DEFAULT_SOCIAL_IMAGE, type = "website", noindex = false, jsonLd = [] }) => ({
  title,
  description,
  url: `${SITE_URL}${path}`,
  type,
  noindex,
  robots: noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1",
  image,
  jsonLd: noindex
    ? null
    : JSON.stringify({ "@context": "https://schema.org", "@graph": [personJsonLd, websiteJsonLd, ...jsonLd] }).replace(/</g, "\\u003c"),
});

// [attribute, key, value] for every <meta> managed per route.
export const metaEntries = (meta) => [
  ["name", "description", meta.description],
  ["name", "robots", meta.robots],
  ["property", "og:type", meta.type],
  ["property", "og:site_name", profile.name],
  ["property", "og:locale", "en_US"],
  ["property", "og:title", meta.title],
  ["property", "og:description", meta.description],
  ["property", "og:url", meta.url],
  ["property", "og:image", meta.image.url],
  ["property", "og:image:width", String(meta.image.width)],
  ["property", "og:image:height", String(meta.image.height)],
  ["property", "og:image:alt", meta.image.alt],
  ["name", "twitter:card", "summary_large_image"],
  ["name", "twitter:creator", TWITTER_HANDLE],
  ["name", "twitter:title", meta.title],
  ["name", "twitter:description", meta.description],
  ["name", "twitter:image", meta.image.url],
  ["name", "twitter:image:alt", meta.image.alt],
];

const escapeHtml = (value) =>
  String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const renderHead = (seo) => {
  const meta = resolveSeo(seo);
  const lines = [
    `<title>${escapeHtml(meta.title)}</title>`,
    ...metaEntries(meta).map(([attr, key, value]) => `<meta ${attr}="${key}" content="${escapeHtml(value)}" />`),
  ];
  if (!meta.noindex) lines.push(`<link rel="canonical" href="${escapeHtml(meta.url)}" />`);
  if (meta.jsonLd) lines.push(`<script type="application/ld+json" id="jsonld">${meta.jsonLd}</script>`);
  return lines.join("\n    ");
};
