import React from "react";
import styles from "./InputText.module.scss";

interface isInputTextProps {
  name: string;
  description: string;
  label: string;
  placeholder?: string;
  required: boolean;
  onChange: React.ChangeEventHandler;
  onBlur?: React.FocusEventHandler;
  error: boolean;
  errorMessage: string;
}

const InputText: React.FC<isInputTextProps> = ({
  name,
  description,
  label,
  placeholder,
  required,
  onChange,
  onBlur,
  error,
  errorMessage,
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
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={error ? true : false}
        aria-describedby={error ? "errorMessage" : "description"}></input>
      {error ? (
        <p className={styles.error} role="alert" id="errorMessage">
          {errorMessage}
        </p>
      ) : (
        <p className={styles.description} id="description">
          {description}
        </p>
      )}
    </div>
  );
};

export default InputText;
