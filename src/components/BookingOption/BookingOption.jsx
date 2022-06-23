import cx from "classnames";
import styles from "./BookingOption.module.scss";

export const BookingOption = ({ label, value, expandable }) => (
  <div
    className={cx(styles.root, {
      [styles.expandable]: expandable,
    })}
  >
    <div className={styles.dataContainer}>
      <div className={styles.label}>{label}</div>
      <div className={styles.value}>{value}</div>
    </div>
    {expandable && (
      <div className={styles.expandContainer}>
        <img src="/icons/chevron-down.svg" alt="Expand" />
      </div>
    )}
  </div>
);
