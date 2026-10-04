import { useLocation } from "react-router-dom";
import { servicePage, serviceUi } from "../data/services";

// Content and UI strings of the service landing page matching the current URL.
export const useServicePage = () => {
  const page = servicePage(useLocation().pathname);
  return { page, ui: serviceUi[page.lang] };
};
