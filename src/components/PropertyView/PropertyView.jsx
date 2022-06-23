import { PropertyDetails } from "./../PropertyDetails/PropertyDetails";
import { ImageGallery } from "./../ImageGallery/ImageGallery";
import styles from "./PropertyView.module.scss";

const MAX_IMAGES_PER_PROPERTY = 30;

export const PropertyView = ({ name, amenities, details, imageUrls }) => (
  <div className={styles.root}>
    <div className={styles.name}>{name}</div>
    <div className={styles.amenities}>
      {amenities.map((amenity) => (
        <span key={amenity}>{amenity}</span>
      ))}
    </div>
    <PropertyDetails details={details} />
    <ImageGallery imageUrls={imageUrls.slice(0, MAX_IMAGES_PER_PROPERTY)} />
  </div>
);
