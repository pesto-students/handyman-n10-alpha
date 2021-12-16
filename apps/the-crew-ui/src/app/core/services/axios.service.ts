import { RequestQueryBuilder } from '@nestjsx/crud-request';
import axios from 'axios';
import { isEmpty, omit } from 'lodash-es';

import { environment } from '../../../environments/environment';
import { authApi, TokenService } from '../../services';

/**
 * Axios Global Instance
 */
const instance = axios.create({
  baseURL: environment.apiUrl,
  paramsSerializer: params => {
    if (!isEmpty(params)) {
      return RequestQueryBuilder.create(params).query();
    }
    return null;
  },
});

instance.interceptors.request.use(
  config => {
    const token = TokenService.getAccessToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error),
);

instance.interceptors.response.use(
  res => res,
  async error => {
    const originalConfig = error.config;
    if (!['/auth/login', '/auth/register'].includes(originalConfig.url) && error.response) {
      // Access token expired
      if (
        error.response.status === 401 &&
        error.response.data.message === 'TokenExpiredError' &&
        !originalConfig._retry
      ) {
        originalConfig._retry = true;

        try {
          const oldRefreshToken = TokenService.getRefreshToken();
          const response = await authApi.refreshToken(oldRefreshToken);
          const { accessToken, refreshToken } = response.data;
          TokenService.setAccessToken(accessToken);
          TokenService.setRefreshToken(refreshToken);
          return instance(originalConfig);
        } catch (err) {
          return Promise.reject(err);
        }
      }
    }
    return Promise.reject(error);
  },
);

/**
 * Axios Global Request Config excluding headers
 */
const axiosConfig = omit(instance.defaults, ['headers']);

export { instance as axiosInstance, axiosConfig };
