import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

/**
 * Returns a click handler that captures the clicked project image's position
 * and navigates to the case-study page. The captured rect powers the
 * Behance-style FLIP transition (image slides from the card to the top-right).
 *
 * Usage:
 *   const openProject = useOpenProject();
 *   <div onClick={(e) => openProject(project, e)}> ... <img/> ... </div>
 */
export const useOpenProject = () => {
  const navigate = useNavigate();
  const { setTransition } = useAppContext();

  return (project, e) => {
    if (!project?.slug) return;

    // Find the image inside the clicked card to measure its on-screen position.
    const card = e?.currentTarget;
    const imgEl = card?.querySelector("img");

    if (imgEl) {
      const r = imgEl.getBoundingClientRect();
      setTransition({
        slug: project.slug,
        rect: {
          top: r.top,
          left: r.left,
          width: r.width,
          height: r.height,
        },
      });
    } else {
      setTransition(null);
    }

    navigate(`/projects/${project.slug}`);
  };
};
