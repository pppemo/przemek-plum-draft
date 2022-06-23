import { useRef, useState } from "react";
import { PropertyDetails } from "../PropertyDetails/PropertyDetails";
import ImageGallery from "react-image-gallery";
import styles from "./PropertyView.module.scss";

const MAX_IMAGES_PER_PROPERTY = 30;

export const PropertyView = ({ name, amenities, details, imageUrls }) => {
  const [galleryIndex, setGalleryIndex] = useState(1);
  const galleryRef = useRef(null);

  const galleryItems = imageUrls
    .slice(0, MAX_IMAGES_PER_PROPERTY)
    .map((imageUrl) => ({
      original: imageUrl,
      loading: "lazy",
      originalClass: styles.image,
    }));
  const numberOfItems = galleryItems.length;

  return (
    <div className={styles.root}>
      <div className={styles.name}>{name}</div>
      <div className={styles.amenities}>
        {amenities.map((amenity) => (
          <span key={amenity}>{amenity}</span>
        ))}
      </div>
      <PropertyDetails details={details} />
      <div className={styles.gallery}>
        <ImageGallery
          ref={galleryRef}
          items={galleryItems}
          lazyLoad
          autoPlay={false}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          onBeforeSlide={(index) => setGalleryIndex(index + 1)}
          renderLeftNav={(onClick) => (
            <div className={styles.navigationLeft} onClick={onClick}>
              <img src="/icons/arrow-left.svg" alt="Previous" />
            </div>
          )}
          renderRightNav={(onClick) => (
            <div className={styles.navigationRight} onClick={onClick}>
              <img src="/icons/arrow-right.svg" alt="Next" />
            </div>
          )}
        />
        <div className={styles.counter}>
          {galleryIndex}/{numberOfItems}
        </div>
      </div>
    </div>
  );
};
