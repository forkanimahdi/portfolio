let hydrated = false;

export const markHydrated = () => {
  hydrated = true;
};

// False while React is hydrating the prerendered HTML of the first page view.
export const isHydrated = () => hydrated;
