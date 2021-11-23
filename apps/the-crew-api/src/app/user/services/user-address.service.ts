import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { UserAddress } from '@the-crew/common';
import { Repository } from 'typeorm';

import { UserAddressEntity } from '../models/entities';

@Injectable()
export class UserAddressService extends TypeOrmCrudService<UserAddress> {
  constructor(
    @InjectRepository(UserAddressEntity) private readonly addressRepo: Repository<UserAddress>,
  ) {
    super(addressRepo);
  }
}
