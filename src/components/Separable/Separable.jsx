import styles from "./Separable.module.scss";

const Separator = () => <div className={styles.separator} />;

export const Separable = ({
  children,
  leftSeparator = false,
  rightSeparator = false,
}) => {
  const separatedChildren = []
    .concat(children)
    .reduce((acc, current) => acc.concat(current, <Separator />), [])
    .slice(0, -1);

  return (
    <>
      {leftSeparator && <Separator />}
      {separatedChildren}
      {rightSeparator && <Separator />}
    </>
  );
};
