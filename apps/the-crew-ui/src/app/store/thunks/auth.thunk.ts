import { createAsyncThunk } from '@reduxjs/toolkit';

import { AuthService, TokenService } from '../../services';
import { AuthCreds } from '../../types';

/**
 * Login Request
 */
const loginAndFetchTokens = createAsyncThunk(
  'auth/fetchTokens',
  async (creds: AuthCreds, { dispatch }) => {
    const response = await AuthService.login(creds);
    TokenService.setAccessToken(response.data.accessToken);
    TokenService.setRefreshToken(response.data.refreshToken);
    TokenService.setExpireTimestamp(response.data.expiresAt);
    setTimeout(() => {
      dispatch(whoAmI());
    }, 500);
    return response.data;
  },
);

/**
 * Refresh Token Request
 */
const refetchTokens = createAsyncThunk('auth/refetchTokens', async (refreshToken: string) => {
  const response = await AuthService.refreshToken(refreshToken);
  TokenService.setAccessToken(response.data.accessToken);
  TokenService.setRefreshToken(response.data.refreshToken);
  TokenService.setExpireTimestamp(response.data.expiresAt);
  return response.data;
});

/**
 * Logout Request
 */
const logout = createAsyncThunk('auth/logout', async () => {
  try {
    await AuthService.logout();
    localStorage.clear();
    return { success: true };
  } catch (error) {
    return { success: false };
  }
});

const whoAmI = createAsyncThunk('auth/whoAmI', async () => {
  const response = await AuthService.whoAmI();
  return response.data;
});

export { loginAndFetchTokens, refetchTokens, logout, whoAmI };

export const AuthThunks = {
  loginAndFetchTokens,
  refetchTokens,
  logout,
  whoAmI,
};
