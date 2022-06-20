import styles from "./HeaderIconButton.module.scss";

export function HeaderIconButton() {
  return (
    <div className={styles.root}>
      <img className={styles.icon} src="/icons/hamburger.png" alt="Menu" />
    </div>
  );
}
