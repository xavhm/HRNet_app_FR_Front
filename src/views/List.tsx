import React from "react";
import { ConfigProvider, Table } from "antd";
import { useAppSelector } from "../store/hooks";
import type { isEmployee } from "../entities/isEmployee";
import type { ColumnsType } from "antd/es/table";

import styles from "./List.module.scss";

// display by 10 / 25 / 50 / 100
// search => display one
// firsname, lastname, stardatae, departement, dob, street, city, state, zipcode
// all sortable
// pagination possible

const List: React.FC = () => {
  const employees = useAppSelector((state) => state).employees;

  function formatDataSource(list: isEmployee[]): isEmployee[] & { key: string }[] {
    const dataSource = [];
    for (let i = 0; i < list.length; i++) {
      dataSource.push({ ...list[i], key: `${i}` });
    }
    return dataSource;
  }

  function getTableColumns(list: isEmployee[]): ColumnsType<any> {
    const tableColumns: any = [];
    if (list.length) {
      const modelData = list[0];
      for (const [key, _] of Object.entries(modelData)) {
        tableColumns.push({
          title: getTableColumnsLables(key),
          dataIndex: key,
          key: key,
        });
      }
    }
    return tableColumns;
  }

  function getTableColumnsLables(key: string) {
    switch (key) {
      case "firstName":
        return "Prénom";
      case "lastName":
        return "Nom";
      case "DoB":
        return "Date de Naissance";
      case "startDate":
        return "Début de contrat";
      case "address":
        return "Adresse";
      case "city":
        return "Ville";
      case "zip":
        return "Code Postal";
      case "department":
        return "Département";
      case "region":
        return "Région";
      default:
        return key;
    }
  }

  return (
    <section className={styles.list} aria-describedby="list_section">
      <h2 id="list_section" className={styles.title}>
        Liste des employés
      </h2>

      <div className={styles.table}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#00b96b",
            },
          }}>
          <Table
            dataSource={formatDataSource(employees)}
            columns={getTableColumns(employees)}></Table>
        </ConfigProvider>
      </div>
    </section>
  );
};

export default List;
