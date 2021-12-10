import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Order } from '@the-crew/common';

const orderAdapter = createEntityAdapter<Order>();

const orderSlice = createSlice({
  name: 'orders',
  initialState: orderAdapter.getInitialState({
    loading: false,
  }),
  reducers: {
    cerateOrder: orderAdapter.addOne,
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { reducer: orderReducer, actions: orderActions } = orderSlice;

export const orderSelectors = orderAdapter.getSelectors();
