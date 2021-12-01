import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RatingEntity } from './models/entities';
import { RatingService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([RatingEntity])],
  controllers: [],
  providers: [RatingService],
  exports: [RatingService],
})
export class RatingModule {}
