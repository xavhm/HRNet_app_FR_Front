import React from "react";
import styles from "./Subscription.module.scss";
import { Button, DatePicker, Form, Input, InputNumber, Select, ConfigProvider } from "antd";
import locale from "antd/locale/fr_FR";

const Subscription: React.FC = () => {
  const province = [
    "Gironde",
    "Région Parisienne",
    "Charentes-Martimes",
    "Normandie",
    "Vendée",
    "Côte d'Azur",
    "Corse",
  ];
  const department = ["Ventes", "Marketing", "Engénieurie", "Ressources humaines", "Légal"];

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
            console.log(values);
          }}
          onFinishFailed={() => {
            console.log("error");
          }}
          autoComplete="off">
          <h3 className={styles.subtitle}>Employé</h3>
          <div className={styles.form_content}>
            <Form.Item
              label="Prénom"
              name="prenom"
              rules={[{ required: true, message: "Veuillez saisir le prénom!" }]}>
              <Input />
            </Form.Item>
          </div>

          <div className={styles.form_content}>
            <Form.Item
              label="Nom"
              name="nom"
              rules={[{ required: true, message: "Veuillez saisir le nom!" }]}>
              <Input />
            </Form.Item>
          </div>

          <div className={styles.form_content}>
            <Form.Item
              label="Date de naissance"
              name="dob"
              rules={[{ required: true, message: "Veuillez saisir la date de naissance!" }]}>
              <DatePicker />
            </Form.Item>
          </div>

          <div className={styles.form_content}>
            <Form.Item
              label="Date de début"
              name="start"
              rules={[{ required: true, message: "Veuillez la date de commencement!" }]}>
              <DatePicker />
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
                size="large"
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
