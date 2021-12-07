import { ClassSerializerInterceptor, Controller, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { User } from '@the-crew/common';

import { JwtAuthGuard } from '../../auth/guards';
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
@ApiTags('Users')
@Controller('users')
export class UserController implements CrudController<User> {
  constructor(public readonly service: UserService) {}
}
