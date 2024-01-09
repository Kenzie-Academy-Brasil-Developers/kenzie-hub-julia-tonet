import { forwardRef } from "react";
import { Option } from "../Option";
import styles from "./select.module.scss";

export const Select = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <div className={styles.selectContainer}>
      <label className="headline">{label}</label>
      <select className="paragraph input">
        <Option
          value="Primeiro módulo (Introdução ao Frontend)"
          title="Primeiro módulo"
        />
        <Option
          value="Segundo módulo (Frontend Avançado)"
          title="Segundo módulo"
        />
        <Option
          value="Terceiro módulo (Introdução ao Backend)"
          title="Terceiro módulo"
        />
        <Option
          value="Quarto Módulo (Backend Avançado)"
          title="Quarto módulo"
        />
      </select>
    </div>
  );
});
