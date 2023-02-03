import type { isEmployee } from "../entities/isEmployee";

export const employees: isEmployee[] = [
  {
    firstName: "Tony",
    lastName: "Stark",
    DoB: "27/07/1968",
    startDate: "14/05/2016",
    address: "45 Rue Admyrault",
    city: "Los Angeles",
    region: "GI",
    zip: 13445,
    department: "Engineering",
  },
  {
    firstName: "Bruce",
    lastName: "Banner",
    DoB: "12/02/1974",
    startDate: "09/02/2017",
    address: "55 Bld Montparnasse",
    city: "Los Angeles",
    region: "VE",
    zip: 13445,
    department: "Engineering",
  },
  {
    firstName: "Steve",
    lastName: "Rogers",
    DoB: "22/06/1973",
    startDate: "11/03/2016",
    address: "33 Rue Germain Pilon",
    city: "New York",
    region: "IDF",
    zip: 49565,
    department: "Sales",
  },
];
