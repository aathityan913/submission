import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    data: {},
    submitted: false,
  },
  reducers: {
    submitForm: (state, action) => {
      state.data = action.payload;
      state.submitted = true;
    },
    resetForm: (state) => {
      state.data = {};
      state.submitted = false;
    },
  },
});

export const { submitForm, resetForm } = formSlice.actions;
export default formSlice.reducer;
