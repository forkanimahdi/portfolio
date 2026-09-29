import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

export const useOpenProject = () => {
  const navigate = useNavigate();
  const { setTransition } = useAppContext();

  return (project, e) => {
    if (!project?.slug) return;

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
