import { User, uuid } from '@the-crew/common';
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { OwnerTimestampEntity } from '../../../core/models/entities';
import { UserEntity } from '../../../user/models/entities';

@Entity('refresh_tokens')
export class RefreshTokenEntity extends OwnerTimestampEntity {
  @PrimaryGeneratedColumn('uuid')
  id: uuid;

  @OneToOne(() => UserEntity, { nullable: false })
  @JoinColumn()
  user: User;

  @Column({ type: 'boolean', default: false })
  isRevoked: boolean;
}
