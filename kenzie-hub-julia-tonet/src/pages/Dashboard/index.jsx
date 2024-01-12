import { Header } from "../../components/Header";
import styles from "./dashboard.module.scss";

export const Dashboard = ({ user, userLogout }) => {
  return (
    <div className={styles.dashboardContainer}>
      <Header title="Kenzie Hub" label="Sair" className={styles.header} />
      <section className={styles.userInfo}>
        <h2 className="title1">Olá, {user?.name}</h2>
        <p className="headline">{user?.course_module}</p>
      </section>
      <section className={styles.contentContainer}>
        <div className={styles.content}>
          <p className="title1">Que pena! Estamos em desenvolvimento :(</p>
          <p className="paragraph">
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </p>
        </div>
      </section>
    </div>
  );
};
