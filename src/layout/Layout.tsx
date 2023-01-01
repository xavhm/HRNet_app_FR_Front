import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";

const Layout: React.FC = () => {
  return (
    <>
      <nav></nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
