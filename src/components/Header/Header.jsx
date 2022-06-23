import { HeaderIconButton } from "../HeaderIconButton/HeaderIconButton";
import { HeaderChoiceButton } from "../HeaderChoiceButton/HeaderChoiceButton";
import { Separable } from "../Separable/Separable";
import styles from "./Header.module.scss";

export const Header = () => (
  <div className={styles.root}>
    <Separable rightSeparator>
      <HeaderIconButton iconUrl="/icons/menu-burger.svg" alt="Menu" />
    </Separable>
    <div className={styles.buttons}>
      <HeaderChoiceButton active selectable>
        HOMES
      </HeaderChoiceButton>
      <HeaderChoiceButton selectable>HOSTS</HeaderChoiceButton>
    </div>
    <div className={styles.plumLogo}>
      <img src="/plum-logo.svg" alt="Plum Guide" />
    </div>
    <div className={styles.buttons}>
      <HeaderChoiceButton>Need help?</HeaderChoiceButton>
      <HeaderChoiceButton>Login</HeaderChoiceButton>
    </div>
    <div className={styles.accountButton}>
      <Separable leftSeparator>
        <HeaderIconButton iconUrl="/icons/user.svg" alt="Account" />
      </Separable>
    </div>
  </div>
);
