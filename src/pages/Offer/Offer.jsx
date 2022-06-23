import { useEffect, useState } from "react";
import { useMedia } from "./../../hooks/useMedia";
import { getImagesList } from "./../../api/gateway";
import { getImagesUrlsForSupportedViewports } from "./../../common/imageResize";
import { BookingContainer } from "./../../components/BookingContainer/BookingContainer";
import { PropertyView } from "./../../components/PropertyView/PropertyView";

export const Offer = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [resizedImageUrls, setResizeImageUrls] = useState([]);

  const { isDesktop } = useMedia();

  useEffect(() => {
    async function getImagesUrlsAndStore() {
      const imagesList = await getImagesList();
      const { imageUrls } = imagesList?.data;
      setImageUrls(imageUrls);
    }
    getImagesUrlsAndStore();
  }, []);

  useEffect(() => {
    const resizedImagesUrls = getImagesUrlsForSupportedViewports(imageUrls);
    const currentViewportImagesUrls = isDesktop
      ? resizedImagesUrls.desktop
      : resizedImagesUrls.mobile;
    setResizeImageUrls(currentViewportImagesUrls);
  }, [imageUrls, isDesktop]);

  return (
    <>
      <BookingContainer />
      <PropertyView
        imageUrls={resizedImageUrls}
        name="Monsieur Didot"
        amenities={[
          "4 people",
          "2 bedrooms",
          "2 bathrooms",
          "Private terrace",
          "Peaceful",
        ]}
        details={[
          {
            id: 1,
            iconUrl: "/icons/map-pin.svg",
            value: "Notthing Hill, London",
          },
          {
            id: 2,
            iconUrl: "/icons/train.svg",
            value: "Walk 6 mins (Westbourne Park Station)",
          },
          {
            id: 3,
            iconUrl: "/icons/stairs.svg",
            value: "Stairs",
          },
        ]}
      />
    </>
  );
};
