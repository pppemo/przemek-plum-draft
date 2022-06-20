import React from "react";
import { HeaderIconButton } from "../HeaderIconButton/HeaderIconButton";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <div className={styles.root}>
      <HeaderIconButton />
      <div className={styles.plumLogo}>
        <img src="/plum-logo.svg" alt="Plum Guide" />
      </div>
    </div>
  );
}
