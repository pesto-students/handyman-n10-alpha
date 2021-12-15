import { CreateQueryParams, RequestQueryBuilder } from '@nestjsx/crud-request';
import { uuid } from '@the-crew/common';
import axios from 'axios';

import { axiosConfig, axiosInstance } from '../../core/services';

const instance = axiosInstance;
const basePath = '/users';

function getUsers(query: CreateQueryParams = {}) {
  const params = RequestQueryBuilder.create(query).query();
  return instance.get(basePath, { params });
}

function getUserById(id: uuid, query: CreateQueryParams = {}) {
  const url = `${basePath}/${id}`;
  const params = RequestQueryBuilder.create(query).query();
  return instance.get(url, { params });
}

function updateUser(id: uuid, query: CreateQueryParams = {}) {
  const url = `${basePath}/${id}`;
  const params = RequestQueryBuilder.create(query).query();
  return instance.get(url, { params });
}

export { getUsers, getUserById, updateUser };

export const UserService = {
  getUsers,
  getUserById,
  updateUser,
};
