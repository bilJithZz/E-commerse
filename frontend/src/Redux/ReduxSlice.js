// redux/dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the async thunk for fetching data
export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await axios.get('http://localhost:5000/product/getproduct');
  return response.data;
});

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

// Selector to get all products
export const selectAllProducts = (state) => state.data.items;

// Selector to get a product by ID
export const selectProductById = (state, productId) =>
  state.data.items.find((item) => item.id === productId);


export default dataSlice.reducer;
