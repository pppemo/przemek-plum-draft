import styles from "./PropertyView.module.scss";

export const PropertyView = ({ name, amenities }) => (
  <div className={styles.root}>
    <div className={styles.name}>{name}</div>
    <div className={styles.amenities}>
      {amenities.map((amenity) => (
        <span>{amenity}</span>
      ))}
    </div>
  </div>
);
