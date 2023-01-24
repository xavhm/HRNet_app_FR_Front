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
    const isValid = errors.every((bool) => bool === false);
    if (!isValid) {
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

  function validateFirstName(): void {
    newEmployee.firstName.length
      ? setInputErrors((prev) => ({ ...prev, firstName: false }))
      : setInputErrors((prev) => ({ ...prev, firstName: true }));
  }

  return (
    <section className={styles.subscription}>
      <h2 className={styles.title}>Ajouter un employé</h2>

      <form className={styles.form}>
        <div className={styles.input_field}>
          <InputText
            name="firstName"
            label="Nom"
            placeholder="Tony"
            required={true}
            onChange={setFirstName}
            onBlur={validateFirstName}
            errorMessage="Veuillez saisir un nom !"
            description=""
            error={inputErrors.firstName}
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
