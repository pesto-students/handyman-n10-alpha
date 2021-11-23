import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { User } from '@the-crew/common';
import { ExtractJwt, Strategy } from 'passport-jwt';

import AuthConfig from '../../../../configs/auth.config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject(AuthConfig.KEY) private readonly authConfig: ConfigType<typeof AuthConfig>) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: authConfig.jwtSecret,
    });
  }

  async validate(payload: { user: User }) {
    return payload.user;
  }
}
