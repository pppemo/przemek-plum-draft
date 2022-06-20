import cx from "classnames";
import styles from "./HeaderChoiceButton.module.scss";

export const HeaderChoiceButton = ({ active, selectable, children }) => (
  <div
    className={cx(styles.root, {
      [styles.active]: active,
      [styles.selectable]: selectable,
    })}
  >
    {children}
  </div>
);
