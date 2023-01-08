import React from "react";
import "dayjs/locale/fr";
import { useNavigate } from "react-router-dom";
import { Button, DatePicker, Form, Input, InputNumber, Select, ConfigProvider } from "antd";
import { useAppDispatch } from "../store/hooks";
import { addEmployee } from "../store/employeeSlice";
import styles from "./Subscription.module.scss";
import locale from "antd/locale/fr_FR";

const Subscription: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const province: string[] = [
    "Gironde",
    "Île de France",
    "Charentes-Martimes",
    "Normandie",
    "Vendée",
    "Côte d'Azur",
    "Corse",
    "Alpes-Maritimes",
  ];
  const department: string[] = [
    "Ventes",
    "Marketing",
    "Engénieurie",
    "Ressources humaines",
    "Légal",
  ];

  function navigateToError(): void {
    navigate("/error");
  }

  function saveNewEmployee(values: any) {
    const newDoB = values.DoB.format("DD-MM-YYYY");
    const newStartDate = values.startDate.format("DD-MM-YYYY");
    const newValues = { ...values, DoB: newDoB, startDate: newStartDate };
    dispatch(addEmployee(newValues));
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
          initialValues={{ remember: true }}
          onFinish={(values) => {
            saveNewEmployee(values);
          }}
          onFinishFailed={navigateToError}
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
            <Form.Item label="Région" name="region" rules={[{ required: false }]}>
              <Select
                options={province.map((it) => ({ label: it, value: it }))}
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
                options={department.map((it) => ({ label: it, value: it }))}
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
    </section>
  );
};

export default Subscription;
