import style from "./createtechmodal.module.scss";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { useForm } from "react-hook-form";
import { createTechModalSchema } from "./createtechmodal.schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const CreateTechModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(createTechModalSchema) });
  const { setCreateTech, createTechs } = useContext(TechContext);

  return (
    <div role="dialog" className={style.modalOverlay}>
      <div className={style.modalContainer}>
        <section className={style.modalHeader}>
          <h3 className="title3">Cadastrar Tecnologia</h3>
          <button
            className={style.btnClose}
            onClick={() => {
              setCreateTech(false);
            }}
          >
            X
          </button>
        </section>
        <section>
          <form
            className={style.formContainer}
            onSubmit={handleSubmit(createTechs)}
          >
            <div className={style.formItem}>
              <label className="headline">Nome</label>
              <input
                id="title"
                {...register("title")}
                placeholder="Digite o nome da tecnologia"
                className={style.inputModal}
              ></input>
              {errors.title ? (
                <p className="headline">{errors.title.message}</p>
              ) : null}
            </div>
            <div className={style.formItem}>
              <label className="headline">Selecionar status</label>
              <select
                className={style.inputModal}
                {...register("status")}
                id="status"
                autoComplete="off"
              >
                <option value="">Selecione um status</option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
              {errors.status ? (
                <p className="headline">{errors.status.message}</p>
              ) : null}
              <button className="btnMain" type="submit">
                Cadastrar Tecnologia
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};
