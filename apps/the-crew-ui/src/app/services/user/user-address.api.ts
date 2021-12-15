import { UserAddress } from '@the-crew/common';

import { axiosInstance, BaseHttpAPI } from '../../core/services';

const instance = axiosInstance;
const basePath = '/user-addresses';

class UserAddressHttpAPI extends BaseHttpAPI<UserAddress> {
  constructor() {
    super({
      basePath,
      instance,
    });
  }
}

export const userAddressApi = new UserAddressHttpAPI();
