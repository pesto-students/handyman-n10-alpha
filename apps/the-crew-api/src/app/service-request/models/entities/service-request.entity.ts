import { IServiceRequest, Review, ServiceRequestType, User, uuid } from '@the-crew/common';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, RelationId } from 'typeorm';

import { OwnerTimestampEntity } from '../../../core/models/entities';
import { ReviewEntity } from '../../../rating/models/entities';
import { UserEntity } from '../../../user/models/entities';

@Entity({
  name: 'service_requests',
})
export class ServiceRequestEntity extends OwnerTimestampEntity implements IServiceRequest {
  @PrimaryGeneratedColumn('uuid')
  id: uuid;

  @Column({
    type: 'text',
    array: true,
  })
  type: ServiceRequestType[];

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    type: 'text',
    array: true,
    default: [],
  })
  included: string[];

  @Column({
    type: 'text',
    array: true,
    default: [],
  })
  excluded: string[];

  @Column()
  price: number;

  @ManyToOne(() => UserEntity, user => user.services)
  provider: User;

  @Column({ type: 'uuid' })
  providerId: uuid;

  @OneToMany(() => ReviewEntity, review => review.service)
  reviews: Review[];

  @RelationId((service: ServiceRequestEntity) => service.reviews)
  reviewIds: uuid[];
}
