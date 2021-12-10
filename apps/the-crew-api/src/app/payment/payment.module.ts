import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceRequestEntity } from '../service-request/models/entities';
import { ServiceRequestService } from '../service-request/services';

import { PaymentController } from './controllers';
import { PaymentService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceRequestEntity])],
  controllers: [PaymentController],
  providers: [PaymentService, ServiceRequestService],
  exports: [PaymentService],
})
export class PaymentModule {}
