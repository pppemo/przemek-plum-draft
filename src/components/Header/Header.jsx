import { HeaderIconButton } from "../HeaderIconButton/HeaderIconButton";
import { HeaderChoiceButton } from "../HeaderChoiceButton/HeaderChoiceButton";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <div className={styles.root}>
      <HeaderIconButton />
      <div className={styles.buttons}>
        <HeaderChoiceButton active>Homes</HeaderChoiceButton>
        <HeaderChoiceButton>Hosts</HeaderChoiceButton>
      </div>
      <div className={styles.plumLogo}>
        <img src="/plum-logo.svg" alt="Plum Guide" />
      </div>
    </div>
  );
}
