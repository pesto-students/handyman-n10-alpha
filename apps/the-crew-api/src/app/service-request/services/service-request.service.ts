import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ServiceRequest } from '@the-crew/common';
import { Repository } from 'typeorm';

import { ServiceRequestEntity } from '../models/entities';

@Injectable()
export class ServiceRequestService extends TypeOrmCrudService<ServiceRequest> {
  constructor(
    @InjectRepository(ServiceRequestEntity)
    readonly ServiceRequestRepo: Repository<ServiceRequest>,
  ) {
    super(ServiceRequestRepo);
  }
}
