import styles from "./PropertyDetails.module.scss";

export const PropertyDetails = ({ details }) => {
  const detailComponents = details.map(({ id, iconUrl, value }) => (
    <div className={styles.detail} key={id}>
      <img src={iconUrl} alt={value} />
      <span className={styles.value}>{value}</span>
    </div>
  ));

  return <div className={styles.root}>{detailComponents}</div>;
};
