import { createAsyncThunk } from '@reduxjs/toolkit';

import { authApi, TokenService } from '../../services';
import { AuthCreds } from '../../types';

/**
 * Login Request
 */
const loginAndFetchTokens = createAsyncThunk(
  'auth/fetchTokens',
  async (creds: AuthCreds, { dispatch, rejectWithValue }) => {
    try {
      const response = await authApi.login(creds);
      TokenService.setAccessToken(response.data.accessToken);
      TokenService.setRefreshToken(response.data.refreshToken);
      TokenService.setExpireTimestamp(response.data.expiresAt);
      setTimeout(() => {
        dispatch(whoAmI());
      }, 10);
      return response.data;
    } catch (error) {
      if (error.isAxiosError) {
        throw rejectWithValue({ ...error.response.data, status: error.response.status });
      }
      throw rejectWithValue(error);
    }
  },
);

/**
 * Refresh Token Request
 */
const refetchTokens = createAsyncThunk(
  'auth/refetchTokens',
  async (refreshToken: string, { rejectWithValue }) => {
    try {
      const response = await authApi.refreshToken(refreshToken);
      TokenService.setAccessToken(response.data.accessToken);
      TokenService.setRefreshToken(response.data.refreshToken);
      TokenService.setExpireTimestamp(response.data.expiresAt);
      return response.data;
    } catch (error) {
      if (error.isAxiosError) {
        throw rejectWithValue({ ...error.response.data, status: error.response.status });
      }
      throw rejectWithValue(error);
    }
  },
);

/**
 * Logout Request
 */
const logout = createAsyncThunk('auth/logout', async (_, { fulfillWithValue }) => {
  try {
    await authApi.logout();
    localStorage.clear();
    return fulfillWithValue({});
  } catch (error) {
    return fulfillWithValue({});
  }
});

const whoAmI = createAsyncThunk('auth/whoAmI', async (_, { rejectWithValue }) => {
  try {
    const response = await authApi.whoAmI();
    return response.data;
  } catch (error) {
    if (error.isAxiosError) {
      throw rejectWithValue({ ...error.response.data, status: error.response.status });
    }
    throw rejectWithValue(error);
  }
});

export { loginAndFetchTokens, refetchTokens, logout, whoAmI };

export const AuthThunks = {
  loginAndFetchTokens,
  refetchTokens,
  logout,
  whoAmI,
};
