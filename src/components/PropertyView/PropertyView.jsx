import { PropertyDetails } from "../PropertyDetails/PropertyDetails";
import styles from "./PropertyView.module.scss";

export const PropertyView = ({ name, amenities, details }) => (
  <div className={styles.root}>
    <div className={styles.name}>{name}</div>
    <div className={styles.amenities}>
      {amenities.map((amenity) => (
        <span>{amenity}</span>
      ))}
    </div>
    <PropertyDetails details={details} />
  </div>
);
