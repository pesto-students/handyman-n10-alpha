import { IUserAddress, User, uuid } from '@the-crew/common';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { OwnerTimestampEntity } from '../../../core/models/entities';
import { UserEntity } from './user.entity';

@Entity({
  name: 'user_addresses',
})
export class UserAddressEntity extends OwnerTimestampEntity implements IUserAddress {
  @PrimaryGeneratedColumn('uuid')
  id: uuid;

  @Column()
  flat: string;

  @Column()
  street: string;

  @Column({
    type: 'integer',
  })
  pinCode: number;

  @Column({
    type: 'boolean',
  })
  isDefault: boolean;

  @ManyToOne(() => UserEntity, user => user.addresses)
  user: User;

  @Column({ type: 'uuid' })
  userId: uuid;
}
