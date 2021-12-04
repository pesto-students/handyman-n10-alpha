import { CreateQueryParams } from '@nestjsx/crud-request';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { uuid } from '@the-crew/common';

import { reviewApi } from '../../services';
import { reviewActions } from '../slices';

const getReview = createAsyncThunk(
  'reviews/GetOne',
  async (args: { id: uuid; query?: CreateQueryParams }, { dispatch }) => {
    const { id, query } = args;
    const response = await reviewApi.getOne(id, query);
    dispatch(reviewActions.addReview(response.data));
  },
);

const createReview = createAsyncThunk(
  'reviews/CreateOne',
  async (args: { payload; query?: CreateQueryParams }, { dispatch }) => {
    const { payload, query } = args;
    const response = await reviewApi.createOne(payload, query);
    dispatch(reviewActions.addReview(response.data));
  },
);

export { getReview, createReview };

export const reviewThunks = {
  getReview,
  createReview,
};
