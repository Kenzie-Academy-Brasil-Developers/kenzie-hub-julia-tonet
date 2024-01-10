import { useForm } from "react-hook-form";
import { InputForm } from "../Input";
import { api } from "../../services/api";
import { Link } from "react-router-dom";
import styles from "./form.module.scss";
import { formSchema } from "./form.schema";
import { zodResolver } from "@hookform/resolvers/zod";

export const Form = ({ title, btnEnter, message, btnRegister }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const submit = (formData) => {
    console.log(formData);
  };

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
        <Link to={"/register"}>
          <button className="btnRegister">{btnRegister}</button>
        </Link>
      </div>
    </div>
  );
};
