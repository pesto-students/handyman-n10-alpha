import { SubOrder } from '@the-crew/common';

import { axiosInstance, BaseHttpAPI } from '../../core/services';

const instance = axiosInstance;

const basePath = '/sub-orders';

class SubOrderHttpAPI extends BaseHttpAPI<SubOrder> {
  constructor() {
    super({
      basePath,
      instance,
    });
  }
}

export const subOrderApi = new SubOrderHttpAPI();
