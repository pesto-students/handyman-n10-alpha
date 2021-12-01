import { IUser, Role, ServiceRequest, User, UserAddress, uuid } from '@the-crew/common';
import { hashSync } from 'bcrypt';
import { Exclude } from 'class-transformer';
import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';

import { OwnerTimestampEntity } from '../../../core/models/entities';
import { ServiceRequestEntity } from '../../../service-request/models/entities/';
import { UserAddressEntity } from './user-address.entity';

@Entity({
  name: 'users',
})
export class UserEntity extends OwnerTimestampEntity implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id: uuid;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  fullName: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column({
    unique: true,
  })
  phone: string;

  @Column({
    type: 'enum',
    enum: Role,
    array: true,
  })
  role: Role[];

  @OneToMany(() => UserAddressEntity, address => address.user)
  addresses: UserAddress[];

  @RelationId((user: User) => user.addresses)
  addressIds: uuid[];

  @OneToMany(() => ServiceRequestEntity, services => services.provider)
  services: ServiceRequest[];

  @RelationId((user: User) => user.services)
  servicesIds: uuid[];

  @BeforeInsert()
  performPrerequisite() {
    this.fullName = `${this.firstName} ${this.lastName}`;
    //TODO: @androizer Hash the password if in plaintext
    this.password = hashSync(this.password, 10);
  }
}
