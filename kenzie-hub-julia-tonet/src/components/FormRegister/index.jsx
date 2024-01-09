import { useForm } from "react-hook-form";
import { InputForm } from "../Input";
import { Select } from "../Select";
import styles from "./formreg.module.scss";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { formRegisterSchema } from "./formreg.schema";

export const FormRegister = () => {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(formRegisterSchema),
  });

  const submit = (formData) => {
    console.log(formData);
  };

  return (
    <div className={styles.formContainer}>
      <h2 className="title1">Crie sua conta</h2>
      <p className="headline">Rapido e grátis, vamos nessa</p>
      <form onSubmit={handleSubmit(submit)} className={styles.form}>
        <InputForm
          label="Nome"
          placeholder="Digite seu nome"
          id="name"
          type="text"
          {...register("name")}
        />
        <InputForm
          label="E-mail"
          placeholder="Digite seu e-mail"
          id="email"
          type="email"
          {...register("email")}
        />
        <InputForm
          label="Senha"
          placeholder="Digite sua senha"
          id="password"
          type="password"
          {...register("password")}
        />
        <InputForm
          label="Confirmar Senha"
          placeholder="Digite sua senha novamente"
          id="confirmPassword"
          type="password"
          {...register("confirmPassword")}
        />
        <InputForm
          label="Bio"
          placeholder="Fale sobre você"
          id="bio"
          type="text"
          {...register("bio")}
        />
        <InputForm
          label="Contato"
          placeholder="Opção de contato"
          id="contact"
          type="text"
          {...register("contact")}
        />
        <Select label="Selecionar módulo" {...register("course_module")} />
        <Link to={"/dashboard"}>
          <button className="btnRegister" type="submit">
            Cadastrar
          </button>
        </Link>
      </form>
    </div>
  );
};
