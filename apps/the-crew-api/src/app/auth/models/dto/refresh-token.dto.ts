import { IsDefined, IsString } from 'class-validator';

export class RefreshTokenDTO {
  @IsString()
  @IsDefined()
  refreshToken: string;
}
