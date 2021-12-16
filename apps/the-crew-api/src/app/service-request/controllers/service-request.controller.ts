import { ClassSerializerInterceptor, Controller, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { ServiceRequest } from '@the-crew/common';

import { JwtAuthGuard } from '../../auth/guards';
import { ServiceRequestEntity } from '../models/entities';
import { ServiceRequestService } from '../services';

@Crud({
  model: {
    type: ServiceRequestEntity,
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
    join: {
      provider: {
        eager: false,
      },
      'provider.addresses': {
        eager: false,
      },
      reviews: {
        eager: false,
      },
    },
  },
})
// TODO: Ownership guard to be implemented
@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('Service Requests')
@Controller('services')
export class ServiceRequestController implements CrudController<ServiceRequest> {
  constructor(public readonly service: ServiceRequestService) {}
}
