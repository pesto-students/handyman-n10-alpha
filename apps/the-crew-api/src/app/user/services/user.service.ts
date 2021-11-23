import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { User } from '@the-crew/common';
import { Repository } from 'typeorm';

import { UserEntity } from '../models/entities';

@Injectable()
export class UserService extends TypeOrmCrudService<User> {
  constructor(
    @InjectRepository(UserEntity)
    readonly userRepo: Repository<User>,
  ) {
    super(userRepo);
  }
}
