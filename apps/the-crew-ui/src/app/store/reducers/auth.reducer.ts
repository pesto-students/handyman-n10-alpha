import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '@the-crew/common';

import { fetchTokens, refetchTokens } from '../thunks';

type LoginResponse = {
  accessToken: string;
  refreshToken: string;
  expiresAt: Date;
};

type AuthState = {
  user: User;
  accessToken: string;
  refreshToken: string;
  expiresAt: Date;
  isLoading: boolean;
};

type RefreshTokenResponse = LoginResponse;

const initialState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
  expiresAt: null,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // login: (state, action: PayloadAction<LoginResponse>) => {
    //   const { payload } = action;
    //   state.accessToken = payload.accessToken;
    //   state.refreshToken = payload.refreshToken;
    //   state.expiresAt = payload.expiresAt;
    // },
    // logout: state => {
    //   state.accessToken = null;
    //   state.refreshToken = null;
    //   state.expiresAt = null;
    //   state.user = null;
    // },
    // refreshToken: (state, action: PayloadAction<RefreshTokenResponse>) => {
    //   const { payload } = action;
    //   state.refreshToken = payload.refreshToken;
    //   state.accessToken = payload.accessToken;
    //   state.expiresAt = payload.expiresAt;
    // },
    // me: (state, action: PayloadAction<{ user: User }>) => {
    //   state.user = action.payload.user;
    // },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchTokens.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTokens.fulfilled, (state, action: PayloadAction<LoginResponse>) => {
        const { payload } = action;
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.expiresAt = payload.expiresAt;
        state.isLoading = false;
      })
      .addCase(refetchTokens.pending, state => {
        state.isLoading = true;
      })
      .addCase(refetchTokens.fulfilled, (state, action: PayloadAction<RefreshTokenResponse>) => {
        const { payload } = action;
        state.accessToken = payload.accessToken;
        state.refreshToken = payload.refreshToken;
        state.expiresAt = payload.expiresAt;
        state.isLoading = false;
      }),
});

export const authActions = authSlice.actions;

export const authReducer = authSlice.reducer;
