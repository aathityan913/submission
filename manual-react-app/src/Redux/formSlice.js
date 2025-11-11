import { createSlice } from "@reduxjs/toolkit";


//simple function to generate a token()
const generateToken = () => {
  const token= Math.random().toString(36).slice(2) +Math.random().toString(36).slice(2);
  //expiry
  const expiry = Date.now() + 60*60*1000

  return{token,expiry}
};

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
      state.token = generateToken();
    },
    resetForm: (state) => {
      state.data = {};
      state.submitted = false;
      state.token=null;
    },
  },
});

export const { submitForm, resetForm } = formSlice.actions;
export default formSlice.reducer;
