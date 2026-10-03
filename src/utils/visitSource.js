import emailjs from "@emailjs/browser";

// Visits from these sites rarely carry utm tags, so the referrer is used instead.
const AI_REFERRERS = {
  "chatgpt.com": "chatgpt.com",
  "chat.openai.com": "chatgpt.com",
  "perplexity.ai": "perplexity.ai",
  "gemini.google.com": "gemini.google.com",
  "copilot.microsoft.com": "copilot.microsoft.com",
  "claude.ai": "claude.ai",
};

// The EmailJS monthly quota is shared with the contact form, so each visitor
// triggers at most one email per source per day.
const NOTIFY_EVERY_MS = 24 * 60 * 60 * 1000;
const BOT_UA = /bot|crawl|spider|slurp|headless|preview|lighthouse/i;

const referrerSource = () => {
  if (!document.referrer) return null;
  try {
    const host = new URL(document.referrer).hostname.replace(/^www\./, "");
    return AI_REFERRERS[host] || null;
  } catch {
    return null;
  }
};

export const notifyVisitSource = () => {
  const templateId = import.meta.env.VITE_EMAILJS_VISIT_TEMPLATE_ID;
  if (!templateId || BOT_UA.test(navigator.userAgent)) return;

  const params = new URLSearchParams(window.location.search);
  const source = (params.get("utm_source") || referrerSource() || "").trim().slice(0, 100);
  if (!source) return;

  const storageKey = `visit-notified:${source.toLowerCase()}`;
  try {
    const last = Number(localStorage.getItem(storageKey));
    if (last && Date.now() - last < NOTIFY_EVERY_MS) return;
    localStorage.setItem(storageKey, String(Date.now()));
  } catch {
    // Private mode without storage: still notify.
  }

  emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId,
      {
        source,
        medium: params.get("utm_medium") || "-",
        campaign: params.get("utm_campaign") || "-",
        page: window.location.pathname,
        url: window.location.href,
        referrer: document.referrer || "-",
        visitor_time: new Date().toLocaleString("en-GB", { timeZone: "Africa/Casablanca" }),
        visitor_timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "-",
        visitor_language: navigator.language || "-",
        device: `${/Mobi|Android|iPhone/i.test(navigator.userAgent) ? "Mobile" : "Desktop"} · ${window.screen.width}×${window.screen.height}`,
        user_agent: navigator.userAgent,
      },
      import.meta.env.VITE_EMAILJS_USER_ID
    )
    .catch((error) => console.error("Visit notification failed:", error?.status, error?.text || error));
};
