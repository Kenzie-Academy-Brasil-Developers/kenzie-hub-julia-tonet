import { Header } from "../../components/Header";
import { FormRegister } from "../../components/FormRegister";
import styles from "./register.module.scss";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className={styles.registerPage}>
      <div className={styles.headerContainer}>
        <Header title="Kenzie Hub" className={styles.header}>
          <Link to="/" className="btnRegister small">
            Voltar
          </Link>
        </Header>
      </div>
      <FormRegister />
    </div>
  );
};
