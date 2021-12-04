import { ServiceRequest } from '@the-crew/common';

import { axiosInstance, BaseHttpAPI } from '../../core/services';

const instance = axiosInstance;

const basePath = '/services';

class ServiceHttpAPI extends BaseHttpAPI<ServiceRequest> {
  constructor() {
    super({
      basePath,
      instance,
    });
  }
}

export const serviceApi = new ServiceHttpAPI();
