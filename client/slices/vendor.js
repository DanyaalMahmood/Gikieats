import { createSlice } from '@reduxjs/toolkit'

export const VendorSlice = createSlice({
  name: 'Vendor',
  initialState: {
    name: "None",
  },
  reducers: {
    setVendor: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
    },
  }
})

// Action creators are generated for each case reducer function
export const { setVendor } = VendorSlice.actions;

export default VendorSlice.reducer;