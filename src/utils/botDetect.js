export const isCrawlerBot = () => {
  if (typeof navigator === "undefined") return true;
  const ua = navigator.userAgent || "";
  return /googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot|sogou|exabot|facebot|facebookexternalhit|twitterbot|rogerbot|linkedinbot|embedly|quora link preview|showyoubot|outbrain|pinterest|slackbot|vkshare|w3c_validator|whatsapp|telegram|discordbot|applebot|gptbot|chatgpt-user|oai-searchbot|claudebot|anthropic|perplexitybot|bytespider|amazonbot|ia_archiver/i.test(
    ua
  );
};

export const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};
