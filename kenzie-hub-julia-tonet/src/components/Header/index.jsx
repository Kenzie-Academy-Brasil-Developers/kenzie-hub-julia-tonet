import styles from "./header.module.scss";

export const Header = ({ className, title, children }) => {
  return (
    <header className={className}>
      <h1 className={styles.titleHeader}>{title}</h1>
      {children}
    </header>
  );
};
