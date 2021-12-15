import { CreateQueryParams } from '@nestjsx/crud-request';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { userAddressApi } from '../../services';
import { userAddressActions } from '../slices';

const getUserAddresses = createAsyncThunk(
  'user-addresses/GetMany',
  async (query: CreateQueryParams = {}, { dispatch }) => {
    dispatch(userAddressActions.clearUserAddresses());
    const response = await userAddressApi.getMany(query);
    dispatch(userAddressActions.addUserAddresses(response.data.data));
  },
);

// const saveUserAddress = createAsyncThunk(
//   'user-addresses/CreateOne',
//   async (args: { payload; query?: CreateQueryParams }, { dispatch }) => {
//     const { payload, query } = args;
//     const response = await UserAddressService.createOne(payload, query);
//     dispatch(userAddressActions.addUserAddress(response.data));
//   },
// );

export { getUserAddresses };

export const userAddressThunks = {
  getUserAddresses,
};
