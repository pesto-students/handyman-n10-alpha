import { registerAs } from '@nestjs/config';

export default registerAs('auth', () => ({
  cookieSecrets: process.env.NX_COOKIE_SECRETS?.split(',') || [],
  cookieExp: process.env.NX_COOKIE_EXPIRE,
  jwtSecret: process.env.NX_JWT_SECRET,
  jwtIssuer: process.env.NX_JWT_ISSUER,
  // needs to be vercel/ms complaint
  accessTokenExp: process.env.NX_ACCESS_TOKEN_EXPIRE,
  refreshTokenExp: process.env.NX_REFRESH_TOKEN_EXPIRE,
  corsOrigins: process.env.NX_CORS_ORIGINS?.split(',') || [],
}));
