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

export { getSubOrders, getSubOrder };

export const subOrderThunks = {
  getSubOrders,
  getSubOrder,
};
