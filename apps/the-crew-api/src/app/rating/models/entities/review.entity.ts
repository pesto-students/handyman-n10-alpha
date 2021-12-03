import { IReview, uuid } from '@the-crew/common';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { OwnerTimestampEntity } from '../../../core/models/entities';

@Entity({
  name: 'reviews',
})
export class ReviewEntity extends OwnerTimestampEntity implements IReview {
  @PrimaryGeneratedColumn('uuid')
  id: uuid;

  @Column()
  comment: string;

  @Column({
    type: 'numeric',
  })
  rating: number;

  @Column({ type: 'uuid' })
  reviewerId: uuid;
}
