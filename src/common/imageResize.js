const DESKTOP_MAX_WIDTH = 1456;
const MOBILE_MAX_WIDTH = 780;

const mapUrlsToFixedWidth = (imageUrls, width) =>
  imageUrls.map((url) => `${url}?w=${width}`);

export const getImagesUrlsForSupportedViewports = (imageUrls) => {
  return {
    desktop: mapUrlsToFixedWidth(imageUrls, DESKTOP_MAX_WIDTH),
    mobile: mapUrlsToFixedWidth(imageUrls, MOBILE_MAX_WIDTH),
  };
};
