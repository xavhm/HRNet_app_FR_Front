import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { isEmployee } from "../entities/isEmployee";
import Button from "../components/Button";
import InputText from "../components/InputText";
import InputNumber from "../components/InputNumber";
import InputSelect from "../components/InputSelect";
import InputDate from "../components/InputDate";
import { useAppDispatch } from "../store/hooks";
import { addEmployee } from "../store/employeeSlice";
import { States } from "../data/state";
import { Departments } from "../data/departements";
import { Modal } from "@xavhm/hrnet-lib-reactmodal";
import styles from "./Subscription.module.scss";
import "@xavhm/hrnet-lib-reactmodal/dist/components/Modal.css";

const Subscription: React.FC = () => {
  const [newEmployee, setNewEmployee] = useState<isEmployee>({
    firstName: "",
    lastName: "",
    DoB: "",
    startDate: "",
    address: "",
    city: "",
    region: undefined,
    zip: 0,
    department: "",
  });
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function navigateToEmployeesList(): void {
    navigate("/list");
  }

  function resetInscription(): void {
    setNewEmployee({
      firstName: "",
      lastName: "",
      DoB: "",
      startDate: "",
      address: "",
      city: "",
      region: undefined,
      zip: 0,
      department: "",
    });
    setIsSuccessModalOpen(false);
  }

  function validateFields(event: React.FormEvent): void {
    event.preventDefault();
    dispatch(addEmployee(newEmployee));
    setIsSuccessModalOpen(true);
  }

  function saveValues(event: React.ChangeEvent): void {
    const target = event.target as HTMLInputElement;
    let value: string | number = target.value;
    if (target.name === "zip") value = Number(target.value);
    if (target.name === "DoB" || target.name === "startDate")
      value = new Intl.DateTimeFormat("fr-FR").format(Number(target.valueAsDate));
    setNewEmployee({ ...newEmployee, [target.name]: value });
  }

  return (
    <section className={styles.subscription} aria-describedby="form_section">
      <h2 id="form_section" className={styles.title}>
        Ajouter un employé
      </h2>

      <form
        className={styles.form}
        aria-label="Formulaire d'ajout d'un employé"
        onSubmit={validateFields}>
        <div className={styles.input_field}>
          <InputText
            name="firstName"
            label="Prénom"
            placeholder="Tony"
            required={true}
            pattern="^[A-Za-z0-9]{3,16}$"
            onChange={saveValues}
            errorMessage="Veuillez saisir un prénom avec au moins 3 caractères et sans caractéres spéciaux !"
          />
        </div>
        <div className={styles.input_field}>
          <InputText
            name="lastName"
            label="Nom"
            placeholder="Stark"
            required={true}
            pattern="^[A-Za-z0-9]{3,30}$"
            onChange={saveValues}
            errorMessage="Veuillez saisir un nom avec au moins 3 caractères et sans caractéres spéciaux !"
          />
        </div>
        <div className={styles.input_field}>
          <InputDate name="DoB" label="Date de Naissance" required={true} onChange={saveValues} />
        </div>
        <div className={styles.input_field}>
          <InputDate name="startDate" label="Date de début" required={true} onChange={saveValues} />
        </div>
        <div className={styles.input_field}>
          <InputText
            name="address"
            label="Adresse"
            placeholder="45 Rue de ..."
            required={true}
            pattern="^[#.0-9a-zA-Z\s,-]+$"
            onChange={saveValues}
            errorMessage="Veuillez saisir une adresse valide !"
          />
        </div>
        <div className={styles.input_field}>
          <InputText
            name="city"
            label="Ville"
            placeholder="Paris"
            pattern="^[A-Za-z]{3,16}$"
            required={true}
            onChange={saveValues}
            errorMessage="Veuillez saisir un nom de ville valide !"
          />
        </div>
        <div className={styles.input_field}>
          <InputSelect
            name="region"
            label="Région"
            required={false}
            options={States}
            onChange={saveValues}
          />
        </div>
        <div className={styles.input_field}>
          <InputNumber name="zip" label="Code Postal" required={true} onChange={saveValues} />
        </div>
        <div className={styles.input_field}>
          <InputSelect
            name="department"
            label="Département"
            required={true}
            options={Departments}
            onChange={saveValues}
          />
        </div>
        <div className={styles.form_button}>
          <Button variant="primary" label="Valider" />
        </div>
      </form>

      <Modal
        isOpen={isSuccessModalOpen}
        height={"300px"}
        onClose={() => {
          setIsSuccessModalOpen(false);
        }}>
        <section className={styles.modal_success}>
          <div className={styles.content}>Votre nouvel employé a bien été enregistré !</div>
          <div className={styles.modal_actions}>
            <Button variant="primary" label="Voir la liste" action={navigateToEmployeesList} />
            <Button variant="primary" label="OK" action={resetInscription} />
          </div>
        </section>
      </Modal>
    </section>
  );
};

export default Subscription;
