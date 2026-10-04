import { useEffect } from "react";
import { metaEntries, resolveSeo } from "../seo/meta";

const setMeta = (attr, key, value) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
};

// Keeps <head> in sync on client-side navigation. The first page view already has the
// same tags in its prerendered HTML (scripts/prerender.js renders them from src/seo).
const Seo = (props) => {
  const serialized = JSON.stringify(resolveSeo(props));

  useEffect(() => {
    const meta = JSON.parse(serialized);
    document.title = meta.title;
    document.documentElement.lang = meta.lang;
    metaEntries(meta).forEach(([attr, key, value]) => setMeta(attr, key, value));

    document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
    meta.alternates.forEach(({ hreflang, href }) => {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = hreflang;
      link.href = href;
      document.head.appendChild(link);
    });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (meta.noindex) {
      canonical?.remove();
    } else {
      if (!canonical) {
        canonical = document.createElement("link");
        canonical.setAttribute("rel", "canonical");
        document.head.appendChild(canonical);
      }
      canonical.setAttribute("href", meta.url);
    }

    let script = document.getElementById("jsonld");
    if (!meta.jsonLd) {
      script?.remove();
    } else {
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = "jsonld";
        document.head.appendChild(script);
      }
      script.textContent = meta.jsonLd;
    }
  }, [serialized]);

  return null;
};

export default Seo;
