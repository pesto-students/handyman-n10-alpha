import { ClassSerializerInterceptor, Controller, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';

import { JwtAuthGuard } from '../../auth/guards';
import { User } from '../models/dao';
import { UserEntity } from '../models/entities';
import { UserService } from '../services';

@Crud({
  model: {
    type: UserEntity,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  query: {
    alwaysPaginate: true,
  },
  routes: {
    exclude: ['createManyBase', 'createOneBase'],
  },
})
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
@ApiTags('users')
@Controller('users')
export class UserController implements CrudController<User> {
  constructor(public readonly service: UserService) {}
}
