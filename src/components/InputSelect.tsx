import React from "react";
import styles from "./InputSelect.module.scss";

interface isInputSelectProps {
  name: string;
  label: string;
  required: boolean;
  onChange: React.ChangeEventHandler;
  options: any;
}

const InputSelect: React.FC<isInputSelectProps> = ({
  name,
  label,
  required,
  onChange,
  options,
}) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      {required && <span aria-hidden="true">*</span>}
      <select
        className={styles.input}
        id={name}
        name={name}
        required={required}
        onChange={onChange}>
        <option value="">Sélectionner</option>
        {options.map((option: any) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputSelect;
