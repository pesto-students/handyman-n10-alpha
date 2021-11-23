import { IUser, Role, uuid } from '@the-crew/common';
import { hashSync } from 'bcrypt';
import { Exclude } from 'class-transformer';
import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { OwnerTimestampEntity } from '../../../core/models/entities';

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

  @BeforeInsert()
  performPrerequisite() {
    this.fullName = `${this.firstName} ${this.lastName}`;
    //TODO: @androizer Hash the password if in plaintext
    this.password = hashSync(this.password, 10);
  }
}
