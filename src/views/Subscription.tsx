import React, { useState } from "react";
import "dayjs/locale/fr";
import { useNavigate } from "react-router-dom";
import { Button, DatePicker, Form, Input, InputNumber, Select, ConfigProvider } from "antd";
import { useAppDispatch } from "../store/hooks";
import { addEmployee } from "../store/employeeSlice";
import { States } from "../data/state";
import { Departments } from "../data/departements";
import { Modal } from "@xavhm/hrnet-lib-reactmodal";
import styles from "./Subscription.module.scss";
import "@xavhm/hrnet-lib-reactmodal/dist/components/Modal.css";
import locale from "antd/locale/fr_FR";

const Subscription: React.FC = () => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState<boolean>(false);
  const [isFailureModalOpen, setIsFailureModalOpen] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function saveNewEmployee(values: any) {
    const newDoB = values.DoB.format("DD-MM-YYYY");
    const newStartDate = values.startDate.format("DD-MM-YYYY");
    const newValues = { ...values, DoB: newDoB, startDate: newStartDate };
    dispatch(addEmployee(newValues));
  }

  function navigateToEmployeesList(): void {
    navigate("/list");
  }

  return (
    <section className={styles.subscription}>
      <h2 className={styles.title}>Ajouter un employé</h2>

      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#00b96b",
          },
        }}
        locale={locale}>
        <Form
          name="subscription"
          wrapperCol={{ span: 32 }}
          initialValues={{ remember: false }}
          onFinish={(values) => {
            saveNewEmployee(values);
            setIsSuccessModalOpen(true);
          }}
          onFinishFailed={() => setIsFailureModalOpen(true)}
          autoComplete="off">
          <h3 className={styles.subtitle}>Employé</h3>
          <div className={styles.form_content}>
            <Form.Item
              label="Prénom"
              name="firstName"
              rules={[{ required: true, message: "Veuillez saisir le prénom!" }]}>
              <Input />
            </Form.Item>
          </div>

          <div className={styles.form_content}>
            <Form.Item
              label="Nom"
              name="lastName"
              rules={[{ required: true, message: "Veuillez saisir le nom!" }]}>
              <Input />
            </Form.Item>
          </div>

          <div className={styles.form_content}>
            <Form.Item
              label="Date de naissance"
              name="DoB"
              rules={[{ required: true, message: "Veuillez saisir la date de naissance!" }]}>
              <DatePicker format={"DD-MM-YYYY"} />
            </Form.Item>
          </div>

          <div className={styles.form_content}>
            <Form.Item
              label="Date de début"
              name="startDate"
              rules={[{ required: true, message: "Veuillez la date de commencement!" }]}>
              <DatePicker format={"DD-MM-YYYY"} />
            </Form.Item>
          </div>

          <h3 className={styles.subtitle}>Addresse</h3>
          <div className={styles.form_content}>
            <Form.Item
              label="Adresse"
              name="address"
              rules={[{ required: true, message: "Veuillez saisir l'adresse'!" }]}>
              <Input />
            </Form.Item>
          </div>

          <div className={styles.form_content}>
            <Form.Item
              label="Ville"
              name="city"
              rules={[{ required: true, message: "Veuillez saisir la ville'!" }]}>
              <Input />
            </Form.Item>
          </div>

          <div className={styles.form_content}>
            <Form.Item label="State" name="region" rules={[{ required: false }]}>
              <Select
                options={States}
                placeholder="Région"
                size="middle"
                dropdownMatchSelectWidth={250}
              />
            </Form.Item>
          </div>

          <div className={styles.form_content}>
            <Form.Item
              label="Code Postal"
              name="zip"
              rules={[{ required: true, message: "Veuillez saisir le code postal!" }]}>
              <InputNumber />
            </Form.Item>
          </div>

          <h3 className={styles.subtitle}>Département</h3>
          <div className={styles.form_content}>
            <Form.Item
              label="Département"
              name="department"
              rules={[{ required: true, message: "Veuillez saisir le département!" }]}>
              <Select
                options={Departments}
                placeholder="Département"
                size="large"
                dropdownMatchSelectWidth={250}
              />
            </Form.Item>
          </div>

          <div className={styles.form_button}>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Valider
              </Button>
            </Form.Item>
          </div>
        </Form>
      </ConfigProvider>

      <Modal
        isOpen={isSuccessModalOpen}
        height={"300px"}
        onClose={() => {
          setIsSuccessModalOpen(false);
        }}>
        <section className={styles.modal_success}>
          <div className={styles.content}>Votre nouvel employé a bien été enregistré !</div>
          <div className={styles.modal_actions}>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#00b96b",
                },
              }}>
              <Button
                type="primary"
                onClick={() => {
                  setIsSuccessModalOpen(false);
                  navigateToEmployeesList();
                }}>
                Voir la liste
              </Button>
              <Button type="primary" onClick={() => setIsSuccessModalOpen(false)}>
                OK
              </Button>
            </ConfigProvider>
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
          <div className={styles.content}>Le formulaire n'est pas saisi correctement !</div>
          <div className={styles.modal_actions}>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "red",
                },
              }}>
              <Button type="primary" onClick={() => setIsFailureModalOpen(false)}>
                OK
              </Button>
            </ConfigProvider>
          </div>
        </section>
      </Modal>
    </section>
  );
};

export default Subscription;
