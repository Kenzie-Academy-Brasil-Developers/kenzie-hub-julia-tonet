import styles from "./header.module.scss";
import { Link } from "react-router-dom";

export const Header = ({ label, title, className }) => {
  return (
    <header className={className}>
      <h1 className={styles.titleHeader}>{title}</h1>
      <Link to={"/"}>
        <button className="btnRegister small">{label}</button>
      </Link>
    </header>
  );
};
