import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UnauthorizedException,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RequestQueryBuilder } from '@nestjsx/crud-request';
import { Request, Response } from 'express';

import { Cookies, CurrentUser } from '../../core/decorators';
import { User } from '../../user/models/dao';
import { JwtAuthGuard, LocalAuthGuard } from '../guards';
import { RegisterDTO } from '../models/dto';
import { AuthService } from '../services';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UsePipes(new ValidationPipe({ whitelist: true }))
  @Post('register')
  async register(@Body() dto: RegisterDTO) {
    return this.authService.register({ ...dto });
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: Request, @Res() res: Response) {
    const { refreshToken, ...accessPayload } = await this.authService.login(req.user);
    const cookieOptions = this.authService.generateCookieOptions();
    res.cookie('refreshToken', refreshToken, cookieOptions);
    res.send(accessPayload);
  }

  @UseGuards(JwtAuthGuard)
  @Get('logout')
  async logout(@Req() req: Request, @Res() res: Response, @CurrentUser() user: User) {
    this.authService.logout(user);
    const cookieOptions = this.authService.generateCookieOptions();
    // Cookie can be cleared with the same option which was used in generating it.
    res.clearCookie('refreshToken', cookieOptions);
    res.end(); // required to close the stream
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  whoAmI(@CurrentUser() user: User, @Res() res: Response, @Req() req: Request) {
    const qb = RequestQueryBuilder.create(req.query).query();
    return res.redirect(`/users/${user.id}?${qb}`);
  }

  @Get('token/refresh')
  async refreshToken(
    @Res() res: Response,
    @Cookies({ key: 'refreshToken', signed: true }) oldRefreshToken?: string,
  ) {
    // generate accessToken & refreshToken
    if (!oldRefreshToken) {
      throw new UnauthorizedException('Refresh Token Malformed');
    }
    const { refreshToken, ...accessPayload } = await this.authService.createAccessAndRefreshToken(
      oldRefreshToken,
    );
    const cookieOptions = this.authService.generateCookieOptions();
    res.cookie('refreshToken', refreshToken, cookieOptions);
    res.send(accessPayload);
  }
}
