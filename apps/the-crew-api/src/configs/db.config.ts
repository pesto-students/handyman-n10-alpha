import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  host: process.env.NX_TYPEORM_HOST,
  port: parseInt(process.env.NX_TYPEORM_PORT),
  username: process.env.NX_TYPEORM_USERNAME,
  password: process.env.NX_TYPEORM_PWD,
  database: process.env.NX_TYPEORM_DB,
}));
