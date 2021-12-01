import { IServiceRequest, ServiceRequestType, User, uuid } from '@the-crew/common';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { OwnerTimestampEntity } from '../../../core/models/entities';
import { UserEntity } from '../../../user/models/entities/user.entity';

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

  @Column({})
  title: string;

  @Column({})
  description: string;

  @Column({
    type: 'text',
    array: true,
  })
  included: string[];

  @Column({
    type: 'text',
    array: true,
  })
  excluded: string[];

  @Column()
  price: number;

  @ManyToOne(() => UserEntity, user => user.services)
  provider: User;

  @Column({ type: 'uuid' })
  providerId: uuid;
}
