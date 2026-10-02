import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

export { prerenderRoutes } from "./seo/pages";
export { renderHead } from "./seo/meta";
export { projects } from "./data/projects";
export { journey } from "./data/about";
export { SITE_URL, profile } from "./data/profile";

export const render = (url) =>
  renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
