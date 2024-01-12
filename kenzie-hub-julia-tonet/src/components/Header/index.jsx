import styles from "./header.module.scss";

export const Header = ({ label, title, className, userLogout }) => {
  return (
    <header className={className}>
      <h1 className={styles.titleHeader}>{title}</h1>
      <button className="btnRegister small" onClick={userLogout}>
        {label}
      </button>
    </header>
  );
};
