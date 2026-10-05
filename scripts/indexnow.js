// Run after a production deploy: `npm run indexnow`.
// Tells IndexNow engines (Bing, which powers ChatGPT search and Copilot, plus Yandex, Seznam, Naver)
// that every URL in the live sitemap changed. The key file lives in public/ so engines can verify ownership.
const SITE_URL = "https://forkanimahdi.com";
const KEY = "c69397fdea6027d47b4fa390cd9fe3fc";

const liveKey = await fetch(`${SITE_URL}/${KEY}.txt`).then((res) => res.text());
if (liveKey.trim() !== KEY) {
    throw new Error(`${SITE_URL}/${KEY}.txt must contain only the key. Deploy public/${KEY}.txt first.`);
}

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
