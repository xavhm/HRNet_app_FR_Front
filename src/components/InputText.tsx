import React, { useState } from "react";
import styles from "./InputText.module.scss";

interface isInputTextProps {
  name: string;
  label: string;
  placeholder?: string;
  required: boolean;
  onChange: React.ChangeEventHandler;
  errorMessage?: string;
  pattern?: string;
}

const InputText: React.FC<isInputTextProps> = ({
  name,
  label,
  placeholder,
  required,
  pattern,
  onChange,
  errorMessage,
}) => {
  const [focused, setFocused] = useState<boolean>(false);

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
        type="text"
        required={required}
        pattern={pattern}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={() => setFocused(true)}></input>
      {focused && (
        <p className={styles.error} role="alert" id="errorMessage">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default InputText;
