import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { environment } from '../../../environments/environment';
import { AuthCreds } from '../../types';

type LoginPayload = {
  accessToken: string;
  refreshToken: string;
  expiresAt: Date;
};

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({ baseUrl: `${environment.apiUrl}/auth` }),
  endpoints: builder => ({
    login: builder.mutation<LoginPayload, AuthCreds>({
      query(body) {
        return {
          url: `login`,
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
