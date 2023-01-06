import { createSlice } from "@reduxjs/toolkit";

interface isEmployee {
  firstName: string;
  lastName: string;
  DoB: any;
  startDate: any;
  address: string;
  city: string;
  region: string | undefined;
  zip: number;
  department: string;
}

const initialState: isEmployee[] = [];

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, newEmployee) => {
      console.log("payload", newEmployee.payload);
      return (state = [...state, newEmployee.payload]);
    },
    getEmployeesList: (state) => {
      return state;
    },
  },
});

export const { addEmployee, getEmployeesList } = employeeSlice.actions;
export default employeeSlice.reducer;
