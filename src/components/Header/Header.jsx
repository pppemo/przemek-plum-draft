import React from "react";
import { HeaderMenuButton } from "../HeaderMenuButton/HeaderMenuButton";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <div className={styles.root}>
      <HeaderMenuButton />
    </div>
  );
}
