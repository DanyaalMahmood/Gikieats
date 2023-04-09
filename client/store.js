import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user';
import vendorReducer from './slices/vendor'
export default configureStore({
  reducer: {
    user: userReducer,
    vendor: vendorReducer
  },
})