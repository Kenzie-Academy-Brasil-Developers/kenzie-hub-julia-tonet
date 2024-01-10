import { useForm } from "react-hook-form";
import { InputForm } from "../Input";
import styles from "./formreg.module.scss";
import { formRegSchema } from "./formreg.schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formRegSchema) });

  const submit = (formData) => {
    console.log(formData);
  };

  return (
    <div className={styles.formContainer}>
      <h2 className="title1">Crie sua conta</h2>
      <p className="paragraphCenter">Rapido e grátis, vamos nessa</p>
      <form onSubmit={handleSubmit(submit)} className={styles.form}>
        <InputForm
          label="Nome"
          placeholder="Digite seu nome"
          id="name"
          type="text"
          error={errors.name}
          {...register("name")}
        />
        <InputForm
          label="E-mail"
          placeholder="Digite seu e-mail"
          id="email"
          type="email"
          error={errors.email}
          {...register("email")}
        />
        <InputForm
          label="Senha"
          placeholder="Digite sua senha"
          id="password"
          type="password"
          error={errors.password}
          {...register("password")}
        />
        <InputForm
          label="Confirmar Senha"
          placeholder="Digite sua senha novamente"
          id="confirmPassword"
          type="password"
          error={errors.confirmPassword}
          {...register("confirmPassword")}
        />
        <InputForm
          label="Bio"
          placeholder="Fale sobre você"
          id="bio"
          type="text"
          error={errors.bio}
          {...register("bio")}
        />
        <InputForm
          label="Contato"
          placeholder="Opção de contato"
          id="contact"
          type="text"
          error={errors.contact}
          {...register("contact")}
        />
        <div className={styles.selectContainer}>
          <label className="headline">Selecione um módulo</label>
          <select
            className="paragraph input"
            {...register("course_module")}
            id="module"
            autoComplete="off"
          >
            <option value="">Selecione seu módulo</option>
            <option value="Primeiro Módulo">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo Módulo">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro Módulo">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto Módulo">
              Quarto módulo (Backend Avançado)
            </option>
          </select>
          {errors.course_module ? (
            <p className="headline">{errors.course_module.message}</p>
          ) : null}
        </div>
        <button className="btnRegister" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
};
