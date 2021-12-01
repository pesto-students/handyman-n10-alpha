import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ServiceRequestController } from './controllers';
import { ServiceRequestEntity } from './models/entities';
import { ServiceRequestService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceRequestEntity])],
  controllers: [ServiceRequestController],
  providers: [ServiceRequestService],
  exports: [ServiceRequestService],
})
export class ServiceRequestModule {}
