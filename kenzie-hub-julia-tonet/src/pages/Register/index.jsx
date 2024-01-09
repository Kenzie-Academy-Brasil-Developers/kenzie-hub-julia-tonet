import { Header } from "../../components/Header";
import { FormRegister } from "../../components/FormRegister";
import styles from "./register.module.scss";

export const Register = () => {
  return (
    <div className={styles.registerPage}>
      <div className={styles.headerContainer}>
        <Header title="Kenzie Hub" label="Voltar" className={styles.header} />
      </div>
      <FormRegister />
    </div>
  );
};
