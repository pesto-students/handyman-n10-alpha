import { Order } from '@the-crew/common';

import { axiosInstance, BaseHttpAPI } from '../../core/services';

const instance = axiosInstance;

const basePath = '/orders';

class OrderHttpAPI extends BaseHttpAPI<Order> {
  constructor() {
    super({
      basePath,
      instance,
    });
  }
}

export const OrderApi = new OrderHttpAPI();
