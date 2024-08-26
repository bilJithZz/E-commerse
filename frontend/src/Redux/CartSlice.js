import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0
  },
  reducers: {
    addItem: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((i) => i.id === id);

      if (existingItem) {
        state.totalQuantity += quantity - existingItem.quantity;
        existingItem.quantity = quantity;
      } else {
        state.items.push({ ...action.payload, quantity });
        state.totalQuantity += quantity;
      }
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      const itemToRemove = state.items.find((item) => item.id === itemId);

      if (itemToRemove) {
        state.totalQuantity -= itemToRemove.quantity;
        state.items = state.items.filter((item) => item.id !== itemId);
      }
    },
    clearCart: (state) => {
      state.totalQuantity = 0;
      state.items = [];
    },
    incrementItemQuantity: (state, action) => {
      const { id, amount } = action.payload;
      const existingItem = state.items.find((i) => i.id === id);

      if (existingItem) {
        existingItem.quantity += amount;
        state.totalQuantity += amount;
      }
    },
    decrementItemQuantity: (state, action) => {
      const { id, amount } = action.payload;
      const existingItem = state.items.find((i) => i.id === id);

      if (existingItem) {
        const newQuantity = Math.max(existingItem.quantity - amount, 0);
        state.totalQuantity -= (existingItem.quantity - newQuantity);
        existingItem.quantity = newQuantity;
      }
    },
  }
});

export const { addItem, removeItem, clearCart, incrementItemQuantity, decrementItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
