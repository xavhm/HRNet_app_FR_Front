import React, { useState } from "react";
import styles from "./InputNumber.module.scss";

interface isInputDateProps {
  name: string;
  label: string;
  required: boolean;
  onChange: React.ChangeEventHandler;
}

const InputDate: React.FC<isInputDateProps> = ({ name, label, required, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      {required && <span aria-hidden="true">*</span>}
      <input
        className={styles.input}
        id={name}
        name={name}
        type="date"
        required={required}
        onChange={onChange}></input>
    </div>
  );
};

export default InputDate;
