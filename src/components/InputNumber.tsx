import React, { useState } from "react";
import styles from "./InputNumber.module.scss";

interface isInputNumberProps {
  name: string;
  label: string;
  required: boolean;
  onChange: React.ChangeEventHandler;
  pattern?: string;
}

const InputNumber: React.FC<isInputNumberProps> = ({
  name,
  label,
  required,
  pattern,
  onChange,
}) => {
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
        type="number"
        required={required}
        pattern={pattern}
        onChange={onChange}></input>
    </div>
  );
};

export default InputNumber;
