import React from "react";
import styles from "./Button.module.scss";

interface isButtonProps {
  variant: "primary" | "error";
  label: string;
  action?: React.MouseEventHandler;
}

const Button: React.FC<isButtonProps> = ({ variant, label, action }): JSX.Element => {
  const classes = [styles.button, variant === "primary" ? styles.primary : styles.error].join(" ");

  return (
    <button className={classes} onClick={action}>
      {label}
    </button>
  );
};

export default Button;
