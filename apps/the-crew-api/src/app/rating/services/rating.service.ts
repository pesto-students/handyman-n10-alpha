import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { RatingRequest } from '@the-crew/common';
import { Repository } from 'typeorm';

import { RatingEntity } from '../models/entities';

@Injectable()
export class RatingService extends TypeOrmCrudService<RatingRequest> {
  constructor(
    @InjectRepository(RatingEntity)
    readonly RatingRepo: Repository<RatingRequest>,
  ) {
    super(RatingRepo);
  }
}
