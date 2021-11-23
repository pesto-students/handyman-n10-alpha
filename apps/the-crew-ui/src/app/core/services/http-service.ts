import axios from 'axios';
import { omit } from 'lodash-es';

import { environment } from '../../../environments/environment';

/**
 * Axios Global Instance
 */
const instance = axios.create({
  baseURL: environment.apiUrl,
  timeout: 5000,
});

/**
 * Axios Global Request Config excluding headers
 */
const axiosConfig = omit(instance.defaults, ['headers']);

export { instance as axiosInstance, axiosConfig };
