import React from "react";
import styles from "./Header.module.scss";

export function HeaderMenuButton() {
  return (
    <div className={styles.root}>
      <img className={styles.icon} src="/icons/hamburger.png" alt="Menu" />
    </div>
  );
}
