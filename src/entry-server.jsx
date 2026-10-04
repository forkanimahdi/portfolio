import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

export { prerenderRoutes } from "./seo/pages";
export { renderHead } from "./seo/meta";
export { projects } from "./data/projects";
export { projectTestimonial } from "./data/testimonials";
export { servicePages } from "./data/services";
export { SITE_URL, profile } from "./data/profile";

export const render = (url) =>
  renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
