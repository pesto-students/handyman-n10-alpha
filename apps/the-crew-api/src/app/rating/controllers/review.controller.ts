import { Crud, CrudController } from '@nestjsx/crud';
import { Review } from '@the-crew/common';

import { ReviewEntity } from '../models/entities';
import { ReviewService } from '../services';

@Crud({
  model: {
    type: ReviewEntity,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  query: {
    alwaysPaginate: true,
  },
})
export class ReviewController implements CrudController<Review> {
  constructor(public readonly service: ReviewService) {}
}
