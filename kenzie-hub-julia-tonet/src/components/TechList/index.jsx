import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { TechCard } from "../TechCard";

export const TechList = () => {
  const { techList } = useContext(TechContext);
  return (
    <ul>
      {techList ? (
        techList.map((tech) => <TechCard key={tech.id} tech={tech} />)
      ) : (
        <p className="headline">nenhuma tecnologia</p>
      )}
    </ul>
  );
};
