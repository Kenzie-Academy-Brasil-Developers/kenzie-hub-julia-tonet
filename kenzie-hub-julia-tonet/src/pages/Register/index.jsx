import { Header } from "../../components/Header";
import { FormRegister } from "../../components/FormRegister";
import styles from "./register.module.scss";

export const Register = ({ userLogout }) => {
  return (
    <div className={styles.registerPage}>
      <div className={styles.headerContainer}>
        <Header
          title="Kenzie Hub"
          label="Voltar"
          className={styles.header}
          userLogout={userLogout}
        />
      </div>
      <FormRegister />
    </div>
  );
};
