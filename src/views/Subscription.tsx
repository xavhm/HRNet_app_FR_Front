import React from "react";
import styles from "./Subscription.module.scss";

// Employee
// text FirstName
// text LastName
// date DoB
// date StartDate

// Address
// text street
// text city
// select State (US)
// number zipcode

// Department
// Select Department (sales, marketing, engineering, human resources, legal)

const Subscription: React.FC = () => {
  return (
    <section className={styles.subscription}>
      <h2 className={styles.title}>Ajouter un employé</h2>
      <h3 className={styles.subtitle}>Employé</h3>
      <h3 className={styles.subtitle}>Addresse</h3>
      <h3 className={styles.subtitle}>Département</h3>
    </section>
  );
};

export default Subscription;
