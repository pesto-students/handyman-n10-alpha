import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { JWTConfigService } from '../../configs';
import { UserEntity } from '../user/models/entities';
import { UserModule } from '../user/user.module';
import { AuthController } from './controllers';
import { RefreshTokenEntity } from './models/entities';
import { AuthService, JwtStrategy, LocalStrategy } from './services';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      useClass: JWTConfigService,
    }),
    TypeOrmModule.forFeature([UserEntity, RefreshTokenEntity]),
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, LocalStrategy],
  exports: [JwtModule, AuthService],
})
export class AuthModule {}
