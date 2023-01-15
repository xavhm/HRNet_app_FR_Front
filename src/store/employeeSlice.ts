import { createSlice } from "@reduxjs/toolkit";
import type { isEmployee } from "../entities/isEmployee";
import { employees } from "../data/employees";

const initialState: isEmployee[] = [...employees];

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    addEmployee: (state, newEmployee) => {
      console.log("payload", newEmployee.payload);
      return (state = [...state, newEmployee.payload]);
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
