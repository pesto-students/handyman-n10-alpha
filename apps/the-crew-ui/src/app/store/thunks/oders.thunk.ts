import { CreateQueryParams } from '@nestjsx/crud-request';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { uuid } from '@the-crew/common';

import { OrderApi } from '../../services';
import { orderActions } from '../slices';

const getOrders = createAsyncThunk(
  'orders/GetMany',
  async (query: CreateQueryParams = {}, { dispatch }) => {
    dispatch(orderActions.clearOrders());
    const response = await OrderApi.getMany(query);
    dispatch(orderActions.createOrders(response.data.data));
  },
);

const getOrder = createAsyncThunk(
  'orders/GetOne',
  async (args: { id: uuid; query?: CreateQueryParams }, { dispatch }) => {
    const { id, query = {} } = args;
    const response = await OrderApi.getOne(id, query);
    dispatch(orderActions.createOrder(response.data));
  },
);

const createOrder = createAsyncThunk(
  'orders/CreateOne',
  async (args: { payload; query?: CreateQueryParams }, { dispatch, fulfillWithValue }) => {
    const { payload, query } = args;
    const response = await OrderApi.createOne(payload, query);
    dispatch(orderActions.createOrder(response.data));
    return fulfillWithValue(response.data as any);
  },
);

export { getOrders, getOrder, createOrder };

export const OrderThunks = {
  getOrders,
  getOrder,
  createOrder,
};
