import { Type } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';

import { User } from '.';
import { ServiceRequestType } from '../enums';
import { IServiceRequest, uuid } from '../types';

export class ServiceRequest implements IServiceRequest {
  @IsUUID()
  id: uuid;

  @IsEnum(ServiceRequestType)
  type: ServiceRequestType;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user?: User;

  @IsUUID()
  userId: uuid;

  @IsDate()
  createdOn: Date;

  @IsDate()
  modifiedOn: Date;

  @IsDate()
  deletedOn: Date;
}
