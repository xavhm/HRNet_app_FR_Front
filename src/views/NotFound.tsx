import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NotFound.module.scss";

const NotFound: React.FC = () => {
  return (
    <section className="error">
      <p className={styles.error}>Error 404 : Page introuvable!</p>
      <NavLink to="/" className={styles.redirection}>
        Retourner aux inscriptions
      </NavLink>
    </section>
  );
};

export default NotFound;
