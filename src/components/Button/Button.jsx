import styles from "./Button.module.scss";

export const Button = ({ children }) => (
  <button className={styles.root}>{children}</button>
);
