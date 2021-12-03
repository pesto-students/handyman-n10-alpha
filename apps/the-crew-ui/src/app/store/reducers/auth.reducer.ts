import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AnyObject, User } from '@the-crew/common';

import { RootState } from '..';
import { LoginResponse, RefreshTokenResponse } from '../../types';
import { AuthThunks } from '../thunks';

type AuthState = {
  user: User;
  accessToken: string;
  refreshToken: string;
  isLoading: boolean;
  error: null | AnyObject;
};

const initialState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // used to store tokens from local-storage on app startup
    loadTokensAtStartup: (state, action: PayloadAction<LoginResponse>) => {
      const { payload } = action;
      state.accessToken = payload.accessToken;
      state.refreshToken = payload.refreshToken;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(AuthThunks.loginAndFetchTokens.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        AuthThunks.loginAndFetchTokens.fulfilled,
        (state, action: PayloadAction<LoginResponse>) => {
          const { payload } = action;
          state.accessToken = payload.accessToken;
          state.refreshToken = payload.refreshToken;
          state.isLoading = false;
          state.error = null;
        },
      )
      .addCase(AuthThunks.loginAndFetchTokens.rejected, (state, action) => {
        state.error = {
          name: action.error.name,
          message: action.error.message,
        };
      })
      .addCase(AuthThunks.refetchTokens.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        AuthThunks.refetchTokens.fulfilled,
        (state, action: PayloadAction<RefreshTokenResponse>) => {
          const { payload } = action;
          state.accessToken = payload.accessToken;
          state.refreshToken = payload.refreshToken;
          state.isLoading = false;
          state.error = null;
        },
      )
      .addCase(AuthThunks.logout.fulfilled, state => {
        state.accessToken = null;
        state.refreshToken = null;
        state.user = null;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(AuthThunks.whoAmI.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
      })
      .addCase(AuthThunks.whoAmI.rejected, (state, action) => {
        state.user = null;
        state.error = {
          name: action.error.name,
          message: action.error.message,
        };
      }),
});

export const authReducer = authSlice.reducer;

export const authSelector = (state: RootState) => state.auth;

export const { loadTokensAtStartup } = authSlice.actions;
