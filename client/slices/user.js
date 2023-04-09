import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
  name: 'User',
  initialState: {
    name: "Not Logged In",
  },
  reducers: {
    login: (state, action) => {
      state.regno = action.payload.regno;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phoneno = action.payload.phoneno;
      state.hostel = action.payload.hostel;
    },
  }
})

// Action creators are generated for each case reducer function
export const { login } = UserSlice.actions;

export default UserSlice.reducer;