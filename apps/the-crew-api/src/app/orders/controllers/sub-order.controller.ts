import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { SubOrder, uuid } from '@the-crew/common';

import { JwtAuthGuard } from '../../auth/guards';
import { SubOrderEntity } from '../models/entities';
import { SubOrderService } from '../services';

@Crud({
  model: {
    type: SubOrderEntity,
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
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(JwtAuthGuard)
@ApiTags('Sub Orders')
@Controller('sub-orders')
export class SubOrderController implements CrudController<SubOrder> {
  constructor(public readonly service: SubOrderService) {}

  @Get('fetchAllSubOrdersByUserId')
  public async GetSubOrdersByUserId(@Param() userId: uuid) {
    return await this.service.GetSubOrdersByUserId(userId);
  }
}
