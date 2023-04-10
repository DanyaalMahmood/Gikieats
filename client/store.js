import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user';
import vendorReducer from './slices/vendor';
import itemReducer from './slices/item';

export default configureStore({
  reducer: {
    user: userReducer,
    vendor: vendorReducer,
    item: itemReducer
  },
})