import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";
import { useForm } from "react-hook-form";
import style from "./edittechmodal.module.scss";

export const EditTechModal = () => {
  const { setEditTech, editingTech, setEditingTech, updateTechs } =
    useContext(TechContext);
  const { register, handleSubmit } = useForm({
    values: {
      title: editingTech.title,
      status: editingTech.status,
      id: editingTech.id,
    },
  });

  const submit = (formData) => {
    updateTechs(formData);
    console.log(formData);
  };

  return (
    <div role="dialog" className={style.modalOverlay}>
      <div className={style.modalContainer}>
        <section className={style.modalHeader}>
          <h3 className="title3">Tecnologia Detalhes</h3>
          <button
            className={style.btnClose}
            onClick={() => {
              setEditTech(false);
              setEditingTech([]);
            }}
          >
            X
          </button>
        </section>
        <section>
          <form className={style.formContainer} onSubmit={handleSubmit(submit)}>
            <div className={style.formItem}>
              <label className="headline">Nome</label>
              <input
                id="title"
                type="text"
                {...register("title")}
                disabled
                className={style.inputModal}
              />
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
              <button className="btnMain" type="submit">
                Salvar Alterações
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};
