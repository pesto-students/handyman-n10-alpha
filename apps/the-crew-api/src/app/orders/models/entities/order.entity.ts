import { IOrder, SubOrder, User, uuid } from '@the-crew/common';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';

import { OwnerTimestampEntity } from '../../../core/models/entities';
import { UserEntity } from '../../../user/models/entities';
import { SubOrderEntity } from './sub-order.entity';

@Entity({
  name: 'orders',
})
export class OrderEntity extends OwnerTimestampEntity implements IOrder {
  @PrimaryGeneratedColumn('uuid')
  id: uuid;

  @OneToMany(() => SubOrderEntity, subOrder => subOrder.orderId)
  subOrders?: SubOrder[];

  @RelationId((order: IOrder) => order.subOrders)
  subOrderIds: uuid[];

  @ManyToOne(() => UserEntity, { nullable: false })
  @JoinColumn({ name: 'consumer_id', referencedColumnName: 'id' })
  consumer?: User;

  @Column({ type: 'uuid' })
  consumerId: uuid;
}
