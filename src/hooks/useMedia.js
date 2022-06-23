import { useMediaSet } from "use-media-set";

const queries = {
  tablet: { maxWidth: 780 },
  desktop: { minWidth: 781 },
};

export const useMedia = () => {
  const mediaStates = useMediaSet(queries);

  return {
    isMobile: mediaStates.has("tablet"),
    isDesktop: mediaStates.has("desktop"),
  };
};
