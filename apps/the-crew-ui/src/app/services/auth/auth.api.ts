import { CreateQueryParams, RequestQueryBuilder } from '@nestjsx/crud-request';

import { axiosInstance } from '../../core/services';
import { RegisterDTO } from '../../types';

const basePath = `/auth`;

const instance = axiosInstance;

function login(creds: { email: string; password: string }) {
  const url = `${basePath}/login`;
  return instance.post(url, creds, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

function register(data: RegisterDTO) {
  const url = `${basePath}/register`;
  return instance.post(url, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

function whoAmI(query: CreateQueryParams = {}) {
  const url = `${basePath}/me`;
  const params = RequestQueryBuilder.create(query).query();
  return instance.get(url, { params });
}

function refreshToken(refreshToken: string) {
  const url = `${basePath}/token/refresh`;
  return instance.post(
    url,
    { refreshToken },
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
}

function logout(): Promise<void> {
  const url = `${basePath}/logout`;
  return instance.get(url);
}

export const AuthService = {
  login,
  register,
  whoAmI,
  refreshToken,
  logout,
};

export { login, logout, register, whoAmI, refreshToken };
