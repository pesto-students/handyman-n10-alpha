import { Controller, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { UserAddress } from '@the-crew/common';

import { JwtAuthGuard } from '../../auth/guards';
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
  },
  routes: {
    exclude: ['createManyBase'],
  },
})
@UseGuards(JwtAuthGuard)
@ApiTags('user-addresses')
@Controller('user-addresses')
export class UserAddressController implements CrudController<UserAddress> {
  constructor(public readonly service: UserAddressService) {}
}
