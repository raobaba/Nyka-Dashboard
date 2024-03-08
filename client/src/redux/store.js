import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducer/user.reducers';
import productReducer from './reducer/product.reducer'

const store = configureStore({
  reducer: {
    user: userReducer,
    product:productReducer
  },
});

export default store;