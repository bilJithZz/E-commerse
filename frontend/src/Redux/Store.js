// redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import dataReducer from './ReduxSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    data: dataReducer
  }
});

export default store;
