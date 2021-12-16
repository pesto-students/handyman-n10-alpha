import { Controller, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { UserAddress } from '@the-crew/common';

import { AnonymousGuard, JwtAuthGuard } from '../../auth/guards';
import { UserAddressEntity } from '../models/entities';
import { UserAddressService } from '../services';

@Crud({
  model: {
    type: UserAddressEntity,
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
    join: { user: { eager: false } },
  },
  routes: {
    exclude: ['createManyBase'],
    createOneBase: {
      decorators: [UseGuards(AnonymousGuard)],
    },
    getManyBase: {
      decorators: [UseGuards(JwtAuthGuard)],
    },
    getOneBase: {
      decorators: [UseGuards(JwtAuthGuard)],
    },
    updateOneBase: {
      decorators: [UseGuards(JwtAuthGuard)],
    },
    replaceOneBase: {
      decorators: [UseGuards(JwtAuthGuard)],
    },
    deleteOneBase: {
      decorators: [UseGuards(JwtAuthGuard)],
    },
  },
})
@ApiTags('User Addresses')
@Controller('user-addresses')
export class UserAddressController implements CrudController<UserAddress> {
  constructor(public readonly service: UserAddressService) {}
}
