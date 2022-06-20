import cx from "classnames";
import styles from "./HeaderChoiceButton.module.scss";

export const HeaderChoiceButton = ({ active, children }) => (
  <div className={cx(styles.root, { [styles.active]: active })}>{children}</div>
);
