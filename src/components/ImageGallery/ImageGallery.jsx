import { useRef, useState } from "react";
import ReactImageGallery from "react-image-gallery";
import { useMedia } from "./../../hooks/useMedia";
import MoonLoader from "react-spinners/MoonLoader";
import styles from "./ImageGallery.module.scss";

export const ImageGallery = ({ imageUrls }) => {
  const { isDesktop } = useMedia();
  const [galleryIndex, setGalleryIndex] = useState(1);
  const galleryRef = useRef(null);

  const galleryItems = imageUrls.map((imageUrl) => ({
    original: imageUrl,
    loading: "lazy",
    originalClass: styles.image,
  }));
  const numberOfItems = galleryItems.length;

  return imageUrls?.length === 0 ? (
    <div className={styles.spinnerRoot}>
      <MoonLoader />
    </div>
  ) : (
    <div className={styles.root}>
      <ReactImageGallery
        ref={galleryRef}
        items={galleryItems}
        lazyLoad
        autoPlay={false}
        showThumbnails={false}
        showNav={isDesktop}
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
  );
};
