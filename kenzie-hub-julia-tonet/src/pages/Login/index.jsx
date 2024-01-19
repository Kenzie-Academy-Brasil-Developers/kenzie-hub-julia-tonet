import { Form } from "../../components/Form";
import styles from "./login.module.scss";

export const Login = () => {
  return (
    <div className={styles.loginPage}>
      <h1 className={styles.titleLogin}>Kenzie Hub</h1>
      <Form
        titulo="Login"
        btnEnter="Entrar"
        btnRegister="Cadastre-se"
        message="Ainda não possui conta?"
      />
    </div>
  );
};
