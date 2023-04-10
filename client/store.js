import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user';
import vendorReducer from './slices/vendor';
import itemReducer from './slices/item';
import cartReducer from './slices/cart';

export default configureStore({
  reducer: {
    user: userReducer,
    vendor: vendorReducer,
    item: itemReducer,
    cart: cartReducer
  },
})