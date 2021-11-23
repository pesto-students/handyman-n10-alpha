import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserAddressController, UserController } from './controllers';
import { UserAddressEntity, UserEntity } from './models/entities';
import { UserAddressService, UserService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, UserAddressEntity])],
  controllers: [UserController, UserAddressController],
  providers: [UserService, UserAddressService],
  exports: [UserService],
})
export class UserModule {}
