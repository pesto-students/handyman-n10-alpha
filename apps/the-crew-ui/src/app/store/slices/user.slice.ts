import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@the-crew/common';

const userAdapter = createEntityAdapter<User>();

const userSlice = createSlice({
  name: 'user',
  initialState: userAdapter.getInitialState({
    loading: false,
  }),
  reducers: {
    addUsers: userAdapter.setMany,
    clearUser: userAdapter.removeAll,
    addUser: userAdapter.addOne,
    updateUser: userAdapter.updateOne,
    replaceUser: userAdapter.setOne,
    removeUser: userAdapter.removeOne,
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { reducer: userReducer, actions: userActions } = userSlice;

export const userSelectors = userAdapter.getSelectors();
