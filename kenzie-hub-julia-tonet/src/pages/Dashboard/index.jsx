import { Header } from "../../components/Header";
import { TechList } from "../../components/TechList";
import styles from "./dashboard.module.scss";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";

export const Dashboard = () => {
  const { user, userLogout } = useContext(TechContext);

  return (
    <div className={styles.dashboardContainer}>
      <Header title="Kenzie Hub" className={styles.header}>
        <button className="btnRegister small" onClick={userLogout}>
          Sair
        </button>
      </Header>
      <section className={styles.userInfo}>
        <div className={styles.info}>
          <h2 className="title1">Olá, {user?.name}</h2>
          <p className="headline">{user?.course_module}</p>
        </div>
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
