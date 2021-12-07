import { IReview, ServiceRequest, uuid } from '@the-crew/common';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { OwnerTimestampEntity } from '../../../core/models/entities';
import { ServiceRequestEntity } from '../../../service-request/models/entities';

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

  @ManyToOne(() => ServiceRequestEntity, service => service.reviews)
  service?: ServiceRequest;

  @Column({ type: 'uuid' })
  serviceId: uuid;
}
