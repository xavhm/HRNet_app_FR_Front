import { createSlice } from "@reduxjs/toolkit";

interface isEmployee {
  id?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
}

const initialState: isEmployee = {
  id: "",
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
});

export const {} = employeeSlice.actions;
export default employeeSlice.reducer;
