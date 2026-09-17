import { useEffect } from "react";

/**
 * Dependency-free SEO helper.
 * Updates <title>, meta description/keywords, canonical, and the Open Graph /
 * Twitter tags on route change so each page has correct, shareable metadata.
 *
 * Usage:
 *   <Seo
 *     title="Projects | Mehdi Forkani — Mobile & Web App Developer"
 *     description="..."
 *     path="/projects"
 *   />
 */

const SITE_URL = "https://forkanimahdi.vercel.app"; // update if you connect a custom domain
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

const setMeta = (selector, attr, value) => {
  if (!value) return;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    const [key, val] = selector
      .replace("meta[", "")
      .replace("]", "")
      .split("=");
    el.setAttribute(key, val.replace(/["']/g, ""));
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

const setLink = (rel, href) => {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

const Seo = ({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
}) => {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;

    if (title) document.title = title;

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:image"]', "content", image);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", image);
    setLink("canonical", url);
  }, [title, description, path, image]);

  return null;
};

export default Seo;
