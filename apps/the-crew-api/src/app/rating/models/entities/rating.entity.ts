import { IRating, uuid } from '@the-crew/common';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { OwnerTimestampEntity } from '../../../core/models/entities';

@Entity({
  name: 'reviews',
})
export class RatingEntity extends OwnerTimestampEntity implements IRating {
  @PrimaryGeneratedColumn('uuid')
  id: uuid;

  @Column()
  comment: string;

  @Column({
    type: 'numeric',
  })
  rating: number;

  @Column({ type: 'uuid' })
  reviwerId: uuid;
}
