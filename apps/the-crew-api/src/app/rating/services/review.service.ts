import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Review } from '@the-crew/common';
import { Repository } from 'typeorm';

import { ReviewEntity } from '../models/entities';

@Injectable()
export class ReviewService extends TypeOrmCrudService<Review> {
  constructor(
    @InjectRepository(ReviewEntity)
    readonly RatingRepo: Repository<Review>,
  ) {
    super(RatingRepo);
  }
}
