import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { TechCard } from "../TechCard";
import style from "./techlist.module.scss";

export const TechList = () => {
  const { techList } = useContext(TechContext);
  return (
    <ul className={style.techList}>
      {techList
        ? techList.map((tech) => <TechCard key={tech.id} tech={tech} />)
        : null}
    </ul>
  );
};
