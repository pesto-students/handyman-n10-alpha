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

import { SubOrderEntity } from '.';
import { OwnerTimestampEntity } from '../../../core/models/entities';
import { UserEntity } from '../../../user/models/entities';

@Entity({
  name: 'orders',
})
export class OrderEntity extends OwnerTimestampEntity implements IOrder {
  @PrimaryGeneratedColumn('uuid')
  id: uuid;

  @OneToMany(() => SubOrderEntity, subOrder => subOrder.orderId)
  subOrders: SubOrder[];

  @RelationId((order: IOrder) => order.subOrders)
  subOrderIds: uuid[];

  @Column({ type: 'uuid' })
  consumerId: uuid;

  @ManyToOne(() => UserEntity, { nullable: false })
  @JoinColumn({ name: 'consumer_id', referencedColumnName: 'id' })
  consumer: User;
}
