import styles from "./HeaderIconButton.module.scss";

export const HeaderIconButton = ({ iconUrl, alt }) => (
  <div className={styles.root}>
    <img className={styles.icon} src={iconUrl} alt={alt} />
  </div>
);
