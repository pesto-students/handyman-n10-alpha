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

  /**
   * @param serviceRequestDto ServiceRequestDTO
   * @returns ServiceRequest
   */
  public async saveService(serviceRequestDto: Partial<ServiceRequest>) {
    const serviceRequest = this.ServiceRequestRepo.create(serviceRequestDto);
    return this.ServiceRequestRepo.save(serviceRequest);
  }

  public async GetAllServices() {
    const result = this.ServiceRequestRepo.find();
    return result;
  }
}
