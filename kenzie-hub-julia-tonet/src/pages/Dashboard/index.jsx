import { Header } from "../../components/Header";
import { TechList } from "../../components/TechList";
import styles from "./dashboard.module.scss";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { CreateTechModal } from "../../components/CreateTechModal";

export const Dashboard = () => {
  const { user, userLogout, createTech, setCreateTech } =
    useContext(TechContext);

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
      <section className={styles.techContainer}>
        <div className={styles.techs}>
          <h3 className="title2">Tecnologias</h3>
          <button
            onClick={() => {
              setCreateTech(true);
            }}
            className={styles.btnAddTechs}
          >
            +
          </button>
        </div>
        <div>
          <TechList />
        </div>
        {createTech ? <CreateTechModal /> : null}
      </section>
    </div>
  );
};
