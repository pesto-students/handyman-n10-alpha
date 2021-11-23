import { createAsyncThunk } from '@reduxjs/toolkit';

import { authService } from '../../services';
import { AuthCreds } from '../../types';

/**
 * Login Request
 */
const fetchTokens = createAsyncThunk('auth/fetchTokens', async (creds: AuthCreds) => {
  const response = await authService.login(creds);
  return response.data;
});

/**
 * Refresh Token Request
 */
const refetchTokens = createAsyncThunk('auth/refetchTokens', async (refreshToken: string) => {
  const response = await authService.refreshToken(refreshToken);
  return response.data;
});

export { fetchTokens, refetchTokens };
