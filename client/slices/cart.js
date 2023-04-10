import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
  name: 'Cart',
  initialState: {
    cartItems: {}
  },
  reducers: {
    SetCart: (state, action) => {
      state.cartItems = action.payload.cartItems
    },
  }
})

// Action creators are generated for each case reducer function
export const { SetCart } = CartSlice.actions;

export default CartSlice.reducer;