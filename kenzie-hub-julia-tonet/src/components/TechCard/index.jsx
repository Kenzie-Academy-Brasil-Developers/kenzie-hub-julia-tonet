import style from "./techcard.module.scss";
import lapis from "../../assets/lapis.svg";
import lixeira from "../../assets/lixeira.svg";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";

export const TechCard = ({ tech }) => {
  const { deleteTechs } = useContext(TechContext);
  return (
    <li className={style.techItem}>
      <h3 className={style.techTitle}>{tech.title}</h3>
      <div className={style.statusContainer}>
        <p className={style.statusDescription}>{tech.status}</p>
        <div className={style.icons}>
          <img src={lapis} alt="Editar" />
          <img
            src={lixeira}
            alt="Excluir"
            onClick={() => deleteTechs(tech.id)}
          />
        </div>
      </div>
    </li>
  );
};
