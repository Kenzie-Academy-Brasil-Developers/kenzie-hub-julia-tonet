import { forwardRef } from "react";
import style from "./input.module.scss";

export const InputForm = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <div className={style.divInput}>
      <div>
        <label className="headline">{label}</label>
      </div>
      <input ref={ref} {...rest} className="paragraph input"></input>
      {error ? <p className="headline">{error.message}</p> : null}
    </div>
  );
});
