import { useForm } from "react-hook-form";
import { InputForm } from "../Input";
import { Link } from "react-router-dom";
import styles from "./form.module.scss";
import { formSchema } from "./form.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { TechContext } from "../../providers/TechContext";

export const Form = ({ title, btnEnter, message, btnRegister }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const { submit } = useContext(TechContext);

  return (
    <div className={styles.formContainer}>
      <h2 className="title1">{title}</h2>
      <form onSubmit={handleSubmit(submit)} className={styles.form}>
        <InputForm
          label="E-mail:"
          placeholder="Digite seu e-mail"
          id="email"
          type="email"
          {...register("email")}
          error={errors.email}
        />

        <InputForm
          label="Senha:"
          placeholder="Digite sua senha"
          id="password"
          type="password"
          error={errors.password}
          {...register("password")}
        />
        <button type="submit" className="btnMain paragraph">
          {btnEnter}
        </button>
      </form>
      <div className={styles.registerBtnContainer}>
        <p className={`${styles.btnParagraph} headlineBold`}>{message}</p>
        <Link to={"/register"} className="btnRegister">
          {btnRegister}
        </Link>
      </div>
    </div>
  );
};
