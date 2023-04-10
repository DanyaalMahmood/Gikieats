import { createSlice } from '@reduxjs/toolkit'

export const ItemSlice = createSlice({
  name: 'Item',
  initialState: {
    id: "",
    name: "",
    description: "",
    price: "",
    availability: "",
    category: ""
  },
  reducers: {
    SetItem: (state, action) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.description = action.payload.description;
      state.price = action.payload.price.toString();
      state.availability = action.payload.availability;
      state.category = action.payload.category;
    },
  }
})

// Action creators are generated for each case reducer function
export const { SetItem } = ItemSlice.actions;

export default ItemSlice.reducer;