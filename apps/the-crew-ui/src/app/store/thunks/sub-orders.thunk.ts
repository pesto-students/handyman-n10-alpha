import { CreateQueryParams } from '@nestjsx/crud-request';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { uuid } from '@the-crew/common';

import { subOrderApi } from '../../services';
import { subOrderActions } from '../slices';

const getSubOrders = createAsyncThunk(
  'sub-orders/GetMany',
  async (query: CreateQueryParams = {}, { dispatch }) => {
    dispatch(subOrderActions.clearSubOrders());
    const response = await subOrderApi.getMany(query);
    dispatch(subOrderActions.addSubOrders(response.data.data));
  },
);

const getSubOrder = createAsyncThunk(
  'sub-orders/GetOne',
  async (args: { id: uuid; query?: CreateQueryParams }, { dispatch }) => {
    const { id, query = {} } = args;
    const response = await subOrderApi.getOne(id, query);
    dispatch(subOrderActions.addSubOrder(response.data));
  },
);

const saveSubOrders = createAsyncThunk(
  'sub-orders/CreateMany',
  async (args: { payload; query?: CreateQueryParams }, { dispatch }) => {
    const { payload, query } = args;
    const response = await subOrderApi.createMany(payload, query);
    dispatch(subOrderActions.addSubOrders(response.data.data));
  },
);

export { getSubOrders, getSubOrder, saveSubOrders };

export const subOrderThunks = {
  getSubOrders,
  getSubOrder,
  saveSubOrders,
};
