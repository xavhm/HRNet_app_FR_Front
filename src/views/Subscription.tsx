import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { isEmployee } from "../entities/isEmployee";
import Button from "../components/Button";
import InputText from "../components/InputText";
import { useAppDispatch } from "../store/hooks";
import { addEmployee } from "../store/employeeSlice";
import { States } from "../data/state";
import { Departments } from "../data/departements";
import { Modal } from "@xavhm/hrnet-lib-reactmodal";
import styles from "./Subscription.module.scss";
import "@xavhm/hrnet-lib-reactmodal/dist/components/Modal.css";

const blankEmployee: isEmployee = {
  firstName: "",
  lastName: "",
  DoB: "",
  startDate: "",
  address: "",
  city: "",
  region: undefined,
  zip: 0,
  department: "",
};

const blankErrors = {
  firstName: false,
  lastName: false,
  DoB: false,
  startDate: false,
  address: false,
  city: false,
  region: false,
  zip: false,
  department: false,
};

const Subscription: React.FC = () => {
  const [newEmployee, setNewEmployee] = useState<isEmployee>(blankEmployee);
  const [inputErrors, setInputErrors] = useState<typeof blankErrors>(blankErrors);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);
  const [isFailureModalOpen, setIsFailureModalOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function navigateToEmployeesList(): void {
    navigate("/list");
  }

  function validateFields(event: React.FormEvent): void {
    event.preventDefault();
    const errors = Object.values(inputErrors);
    const hasNoError = errors.every((bool) => bool === false);
    if (!hasNoError) {
      setIsFailureModalOpen(true);
      return;
    }
    dispatch(addEmployee(newEmployee));
    setIsSuccessModalOpen(true);
  }

  function setFirstName(event: React.ChangeEvent): void {
    const target = event.target as HTMLInputElement;
    setNewEmployee({ ...newEmployee, firstName: target.value });
  }

  function setLastName(event: React.ChangeEvent): void {
    const target = event.target as HTMLInputElement;
    setNewEmployee({ ...newEmployee, lastName: target.value });
  }

  function setAddress(event: React.ChangeEvent): void {
    const target = event.target as HTMLInputElement;
    setNewEmployee({ ...newEmployee, address: target.value });
  }

  function setCity(event: React.ChangeEvent): void {
    const target = event.target as HTMLInputElement;
    setNewEmployee({ ...newEmployee, city: target.value });
  }

  function validateFirstName(): void {
    newEmployee.firstName.length
      ? setInputErrors((prev) => ({ ...prev, firstName: false }))
      : setInputErrors((prev) => ({ ...prev, firstName: true }));
  }

  function validateLastName(): void {
    newEmployee.lastName.length
      ? setInputErrors((prev) => ({ ...prev, lastName: false }))
      : setInputErrors((prev) => ({ ...prev, lastName: true }));
  }

  function validateAddress(): void {
    newEmployee.address.length
      ? setInputErrors((prev) => ({ ...prev, address: false }))
      : setInputErrors((prev) => ({ ...prev, address: true }));
  }

  function validateCity(): void {
    newEmployee.city.length
      ? setInputErrors((prev) => ({ ...prev, city: false }))
      : setInputErrors((prev) => ({ ...prev, city: true }));
  }

  return (
    <section className={styles.subscription} aria-describedby="form_section">
      <h2 id="form_section" className={styles.title}>
        Ajouter un employé
      </h2>

      <form className={styles.form} aria-label="Formulaire d'ajout d'un employé">
        <div className={styles.input_field}>
          <InputText
            name="firstName"
            label="Prénom"
            placeholder="Tony"
            required={true}
            onChange={setFirstName}
            onBlur={validateFirstName}
            errorMessage="Veuillez saisir un prénom !"
            description=""
            error={inputErrors.firstName}
          />
        </div>
        <div className={styles.input_field}>
          <InputText
            name="lastName"
            label="Nom"
            placeholder="Stark"
            required={true}
            onChange={setLastName}
            onBlur={validateLastName}
            errorMessage="Veuillez saisir un nom !"
            description=""
            error={inputErrors.lastName}
          />
        </div>
        <div className={styles.input_field}>
          <InputText
            name="address"
            label="Adresse"
            placeholder="45 Rue de ..."
            required={true}
            onChange={setAddress}
            onBlur={validateAddress}
            errorMessage="Veuillez saisir une adresse !"
            description=""
            error={inputErrors.address}
          />
        </div>
        <div className={styles.input_field}>
          <InputText
            name="city"
            label="Ville"
            placeholder="Paris"
            required={true}
            onChange={setCity}
            onBlur={validateCity}
            errorMessage="Veuillez saisir une ville !"
            description=""
            error={inputErrors.city}
          />
        </div>
        <div className={styles.form_button}>
          <Button variant="primary" label="Test" action={validateFields} />
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
            <Button
              variant="primary"
              label="Voir la liste"
              action={() => {
                setIsSuccessModalOpen(false);
                navigateToEmployeesList;
              }}
            />
            <Button variant="primary" label="OK" action={() => setIsSuccessModalOpen(false)} />
          </div>
        </section>
      </Modal>

      <Modal
        isOpen={isFailureModalOpen}
        height={"300px"}
        onClose={() => {
          setIsFailureModalOpen(false);
        }}>
        <section className={styles.modal_failure}>
          <div className={styles.content}>Le formulaire est incorrect !</div>
          <div className={styles.modal_actions}>
            <Button variant="error" label="Fermer" action={() => setIsFailureModalOpen(false)} />
          </div>
        </section>
      </Modal>
    </section>
  );
};

export default Subscription;
