import React, { useEffect } from "react";
import { ConfigProvider, Table } from "antd";
import { useAppSelector } from "../store/hooks";
import type { isEmployee } from "../entities/isEmployee";
import type { ColumnsType } from "antd/es/table";
import styles from "./List.module.scss";

const List: React.FC = () => {
  const employees = useAppSelector((state) => state).employees;

  useEffect(() => {
    const headers = Array.from(document.getElementsByClassName("ant-table-column-title"));
    headers.forEach((column: any) => {
      column.style.color = "#00b96b";
    });
    const spans = Array.from(document.getElementsByTagName("span"));
    spans.forEach((column: any) => {
      column.style.color = "#00b96b";
    });
  }, []);

  function formatDataSource(list: isEmployee[]): isEmployee[] & { key: string }[] {
    const dataSource = [];
    for (let i = 0; i < list.length; i++) {
      dataSource.push({ ...list[i], key: `${i}` });
    }
    return dataSource;
  }

  function getTableColumns(list: isEmployee[]): ColumnsType<any> {
    return [
      {
        title: "Prénom",
        dataIndex: "firstName",
        defaultSortOrder: "ascend",
        sorter: (a, b) => a.firstName.localeCompare(b.firstName),
      },
      {
        title: "Nom",
        dataIndex: "lastName",
        defaultSortOrder: "ascend",
        sorter: (a, b) => a.lastName.localeCompare(b.lastName),
      },
      {
        title: "Date de Naissance",
        dataIndex: "DoB",
        defaultSortOrder: "ascend",
        sorter: (a, b) => a.DoB.localeCompare(b.DoB),
      },
      {
        title: "Début de contrat",
        dataIndex: "startDate",
        defaultSortOrder: "ascend",
        sorter: (a, b) => a.DoB.localeCompare(b.DoB),
      },
      {
        title: "Adresse",
        dataIndex: "address",
        defaultSortOrder: "ascend",
        sorter: (a, b) => a.DoB.localeCompare(b.DoB),
      },
      {
        title: "Ville",
        dataIndex: "city",
        defaultSortOrder: "ascend",
        sorter: (a, b) => a.DoB.localeCompare(b.DoB),
      },
      {
        title: "Code Postal",
        dataIndex: "zip",
        defaultSortOrder: "ascend",
        sorter: (a, b) => a.DoB.localeCompare(b.DoB),
      },
      {
        title: "Région",
        dataIndex: "region",
        defaultSortOrder: "ascend",
        filters: [
          {
            text: "Charentes",
            value: "CH",
          },
          {
            text: "Gironde",
            value: "GI",
          },
          {
            text: "Ile-de-France",
            value: "IDF",
          },
          {
            text: "Vendée",
            value: "VE",
          },
        ],
        //@ts-ignore
        onFilter: (value: string, record) => record.region.startsWith(value),
        filterSearch: true,
      },
      {
        title: "Département",
        dataIndex: "department",
        defaultSortOrder: "ascend",
        filters: [
          { value: "Sales", text: "Sales" },
          { value: "Marketing", text: "Marketing" },
          { value: "Engineering", text: "Engineering" },
          { value: "Human Ressources", text: "Human Ressources" },
          { value: "Legal", text: "Legal" },
        ],
        //@ts-ignore
        onFilter: (value: string, record) => record.department.startsWith(value),
        filterSearch: true,
      },
    ];
  }

  function getTableColumnsLabels(key: string) {
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

  function onChange() {
    console.log("changed");
  }

  return (
    <section className={styles.list} aria-describedby="list_section">
      <h2 id="list_section" className={styles.title}>
        Liste des employés
      </h2>

      <div className={styles.table}>
        <ConfigProvider
          theme={{
            components: {
              Table: {
                colorTextHeading: "#00b96b",
                colorPrimary: "#00b96b",
              },
            },
            token: {
              colorPrimary: "#00b96b",
              colorTextHeading: "#00b96b",
            },
          }}>
          <Table
            dataSource={formatDataSource(employees)}
            columns={getTableColumns(employees)}
            onChange={onChange}></Table>
        </ConfigProvider>
      </div>
    </section>
  );
};

export default List;
