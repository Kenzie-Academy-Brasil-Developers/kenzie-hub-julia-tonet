import { Header } from "../../components/Header";
import styles from "./dashboard.module.scss";

export const Dashboard = () => {
  return (
    <div>
      <Header title="Kenzie Hub" label="Sair" className={styles.header} />
    </div>
  );
};
