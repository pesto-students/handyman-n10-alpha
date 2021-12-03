import { User, uuid } from '@the-crew/common';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { OwnerTimestampEntity } from '../../../core/models/entities';
import { UserEntity } from '../../../user/models/entities';

@Entity('refresh_tokens')
export class RefreshTokenEntity extends OwnerTimestampEntity {
  @PrimaryGeneratedColumn('uuid')
  id: uuid;

  @ManyToOne(() => UserEntity, { nullable: false })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: User;

  @Column({ type: 'uuid' })
  userId: uuid;

  @Column({ type: 'boolean', default: false })
  isRevoked: boolean;
}
