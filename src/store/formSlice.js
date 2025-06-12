import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobTitle: '',
  companyName: '',
  experience: '',
  skills: ''
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateField: (state, action) => {
      state[action.payload.field] = action.payload.value;
    }
  }
});

export const { updateField } = formSlice.actions;
export default formSlice.reducer;
