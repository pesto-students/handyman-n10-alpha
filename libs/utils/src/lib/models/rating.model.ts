import { Type } from 'class-transformer';
import {
  IsDate,
  // IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
  ValidateNested,
  //   IsArray
} from 'class-validator';

import { User } from '.';
import { ServiceRequest } from '.';

// import { ServiceRequestType } from '../enums';
import { uuid, IReview } from '../types';

export class Review implements IReview {
  @IsUUID()
  id: uuid;

  @IsString()
  @IsNotEmpty()
  comment: string;

  @IsNumber()
  @IsPositive()
  rating: number;

  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  reviewer?: User;

  @IsUUID()
  reviewerId: uuid;

  @ValidateNested()
  @Type(() => ServiceRequest)
  @IsOptional()
  serviceRequest?: ServiceRequest;

  @IsUUID()
  serviceRequestId: uuid;

  @IsDate()
  createdOn: Date;

  @IsDate()
  modifiedOn: Date;

  @IsDate()
  deletedOn: Date;
}
