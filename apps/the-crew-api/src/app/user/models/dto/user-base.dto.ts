import {
  IsArray,
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  Length,
} from 'class-validator';

import { Role } from '../../enums';

export class UserBase {
  @IsUUID()
  @IsOptional()
  id: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  fullName: string;

  @IsString()
  @Length(8, 16)
  password: string;

  @IsArray()
  @IsEnum(Role, { each: true })
  role: Role[];

  @IsDate()
  createdOn: Date;

  @IsDate()
  modifiedOn: Date;
}
