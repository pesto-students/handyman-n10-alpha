import { Type } from 'class-transformer';
import {
  IsArray,
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUUID,
  Length,
  ValidateNested,
} from 'class-validator';

import { UserAddress, ServiceRequest, RatingRequest } from '.';
import { Role } from '../enums';
import { IUser, uuid } from '../types';

export class User implements IUser {
  @IsUUID()
  @IsOptional()
  id: uuid;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsString()
  fullName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @Length(8, 16)
  password: string;

  @IsPhoneNumber()
  phone: string;

  @IsArray()
  @IsEnum(Role, { each: true })
  role: Role[];

  @IsDate()
  createdOn: Date;

  @IsDate()
  deletedOn: Date;

  @IsDate()
  modifiedOn: Date;

  @IsArray()
  @ValidateNested()
  @Type(() => UserAddress)
  addresses: UserAddress[];

  @IsArray()
  @ValidateNested()
  @Type(() => ServiceRequest)
  services: ServiceRequest[];

  @IsArray()
  @ValidateNested()
  @Type(() => RatingRequest)
  ratings: RatingRequest[];
}
