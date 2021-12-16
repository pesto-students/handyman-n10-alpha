import { User } from '@the-crew/common';

import { axiosInstance, BaseHttpAPI } from '../../core/services';

const instance = axiosInstance;
const basePath = '/users';

class UserHttpAPI extends BaseHttpAPI<User> {
  constructor() {
    super({
      basePath,
      instance,
    });
  }
}

export const userApi = new UserHttpAPI();
