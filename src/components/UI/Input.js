import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  const inputChangeHandler = (e) => {
    props.onInputUpdate(e.target.value);
  };

  return (
    <div className={styles["form-control"]}>
      <label>{props.label}</label>
      <input
        type={props.type}
        onChange={inputChangeHandler}
        value={props.value}
      />
    </div>
  );
};

export default Input;
