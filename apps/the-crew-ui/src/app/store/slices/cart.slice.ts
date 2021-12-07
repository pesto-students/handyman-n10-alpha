import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Cart } from '../../types';

const adapter = createEntityAdapter<Cart>();

const cartSlice = createSlice({
  name: 'cart',
  initialState: adapter.getInitialState(),
  reducers: {
    addItem: adapter.addOne,
    removeItem: adapter.removeOne,
    addQuantity: adapter.updateOne,
    removeQuantity: adapter.updateOne,
  },
});

export const { reducer: cartReducer, actions: cartActions } = cartSlice;

export const cartSelectors = adapter.getSelectors();
