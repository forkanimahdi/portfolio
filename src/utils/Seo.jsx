import { useEffect } from "react";

const SITE_URL = "https://forkanimahdi.vercel.app";
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

const ROUTE_JSONLD_ID = "route-jsonld";

const Seo = ({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  jsonLd = null,
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

  useEffect(() => {
    const existing = document.getElementById(ROUTE_JSONLD_ID);
    if (!jsonLd) {
      if (existing) existing.remove();
      return;
    }
    let el = existing;
    if (!el) {
      el = document.createElement("script");
      el.type = "application/ld+json";
      el.id = ROUTE_JSONLD_ID;
      document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(jsonLd);

    return () => {
      const node = document.getElementById(ROUTE_JSONLD_ID);
      if (node) node.remove();
    };
  }, [jsonLd]);

  return null;
};

export const SITE_ORIGIN = SITE_URL;

export default Seo;
