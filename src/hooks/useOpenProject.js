import { useAppContext } from "../context/AppContext";

// Click handler for project card links: remembers where the card image was so the
// details page can animate it into place. The <Link> itself does the navigation.
export const useOpenProject = () => {
  const { setTransition } = useAppContext();

  return (project, e) => {
    if (!project?.slug) return;

    const imgEl = e?.currentTarget?.querySelector("img");

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
  };
};
