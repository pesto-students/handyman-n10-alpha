import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { ServiceRequest } from '@the-crew/common';

const serviceAdapter = createEntityAdapter<ServiceRequest>();

const serviceSlice = createSlice({
  name: 'services',
  initialState: serviceAdapter.getInitialState(),
  reducers: {
    addServices: serviceAdapter.addMany,
    clearServices: serviceAdapter.removeAll,
    addService: serviceAdapter.addOne,
    updateService: serviceAdapter.updateOne,
    replaceService: serviceAdapter.setOne,
    removeService: serviceAdapter.removeOne,
  },
});

export const { reducer: serviceReducer, actions: serviceActions } = serviceSlice;

export const serviceSelectors = serviceAdapter.getSelectors();
