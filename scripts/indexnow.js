// Run after a production deploy: `npm run indexnow`.
// Tells IndexNow engines (Bing, which powers ChatGPT search and Copilot, plus Yandex, Seznam, Naver)
// that every URL in the live sitemap changed. The key file lives in public/ so engines can verify ownership.
const SITE_URL = "https://forkanimahdi.com";
const KEY = "f3a9c2e1b7d84605a1e9c3b2d7f60e48";

const sitemap = await fetch(`${SITE_URL}/sitemap.xml`).then((res) => {
    if (!res.ok) throw new Error(`sitemap.xml returned ${res.status}`);
    return res.text();
});
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);

const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: new URL(SITE_URL).host, key: KEY, keyLocation: `${SITE_URL}/${KEY}.txt`, urlList }),
});

console.log(`IndexNow: submitted ${urlList.length} URLs, status ${res.status} ${res.statusText}`);
if (res.status >= 400) process.exit(1);
