import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Layout.module.scss";
import logo from "../assets/logo.jpg";

const Layout: React.FC = () => {
  const navigate = useNavigate();

  function returnToHome(): void {
    navigate("/");
  }

  return (
    <>
      <nav role="navigation" aria-label="HRNet Navigation Menu" className={styles.navbar}>
        <div className={styles.navbar_container}>
          <a href="/" onClick={returnToHome} role="link" aria-label="Navigate to Home Page">
            <img src={logo} alt="Health Wealth Logo" />
          </a>
          <ul>
            <NavLink to="/">Inscription</NavLink>
            <NavLink to="/list">Liste des employés</NavLink>
          </ul>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
