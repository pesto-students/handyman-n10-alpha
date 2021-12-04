import { Review } from '@the-crew/common';

import { axiosInstance, BaseHttpAPI } from '../../core/services';

const basePath = 'reviews';
const instance = axiosInstance;

class ReviewHttpAPI extends BaseHttpAPI<Review> {
  constructor() {
    super({
      basePath,
      instance,
    });
  }
}

export const reviewApi = new ReviewHttpAPI();
