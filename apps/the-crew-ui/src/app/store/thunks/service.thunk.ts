import { CreateQueryParams } from '@nestjsx/crud-request';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { uuid } from '@the-crew/common';

import { serviceApi } from '../../services';
import { serviceActions } from '../slices';

const getServices = createAsyncThunk(
  'services/GetMany',
  async (query: CreateQueryParams = {}, { dispatch }) => {
    const response = await serviceApi.getMany(query);
    dispatch(serviceActions.addServices(response.data.data));
  },
);

const getService = createAsyncThunk(
  'services/GetOne',
  async (args: { id: uuid; query?: CreateQueryParams }, { dispatch }) => {
    const { id, query = {} } = args;
    const response = await serviceApi.getOne(id, query);
    dispatch(serviceActions.addService(response.data));
  },
);

export { getServices, getService };

export const serviceThunks = {
  getServices,
  getService,
};
