import { ISubOrder, Order, OrderStatus, Review, ServiceRequest, uuid } from '@the-crew/common';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { OwnerTimestampEntity } from '../../../core/models/entities';
import { ReviewEntity } from '../../../rating/models/entities';
import { ServiceRequestEntity } from '../../../service-request/models/entities';
import { OrderEntity } from './order.entity';

@Entity({
  name: 'sub_orders',
})
export class SubOrderEntity extends OwnerTimestampEntity implements ISubOrder {
  @PrimaryGeneratedColumn('uuid')
  id: uuid;

  @ManyToOne(() => ServiceRequestEntity)
  @JoinColumn({ name: 'service_id', referencedColumnName: 'id' })
  service?: ServiceRequest;

  @Column({ type: 'uuid' })
  serviceId: uuid;

  @OneToOne(() => ReviewEntity)
  @JoinColumn()
  rating?: Review;

  @Column({ type: 'uuid' })
  ratingId: uuid;

  @ManyToOne(() => OrderEntity, order => order.subOrders)
  order?: Order;

  @Column({ type: 'uuid' })
  orderId: uuid;

  @Column({ type: 'text' })
  status: OrderStatus;

  @Column({ type: 'numeric' })
  quantity: number;

  @Column({ type: 'numeric' })
  price: number;
}
