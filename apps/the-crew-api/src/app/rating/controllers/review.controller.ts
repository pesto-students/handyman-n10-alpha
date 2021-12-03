import { Controller, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Review } from '@the-crew/common';
import { JwtAuthGuard } from '../../auth/guards';

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
@UseGuards(JwtAuthGuard)
@ApiTags('Reviews')
@Controller('reviews')
export class ReviewController implements CrudController<Review> {
  constructor(public readonly service: ReviewService) {}
}
