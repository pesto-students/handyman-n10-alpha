import { ConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const config: ConnectionOptions[] = [
  {
    name: 'default',
    type: 'postgres',
    host: process.env.NX_TYPEORM_HOST,
    port: parseInt(process.env.NX_TYPEORM_PORT),
    username: process.env.NX_TYPEORM_USERNAME,
    password: process.env.NX_TYPEORM_PWD,
    database: process.env.NX_TYPEORM_DB,
    entities: ['apps/the-crew-api/src/**/*.entity.ts'],
    migrations: ['apps/the-crew-api/src/migrations/entities/*.ts'],
    cli: {
      migrationsDir: 'apps/the-crew-api/src/migrations/entities',
    },
    namingStrategy: new SnakeNamingStrategy(),
    // this will help in connecting to heroku postgres instance
    ssl: {
      rejectUnauthorized: false,
    },
  },
  {
    name: 'seed',
    type: 'postgres',
    host: process.env.NX_TYPEORM_HOST,
    port: parseInt(process.env.NX_TYPEORM_PORT),
    username: process.env.NX_TYPEORM_USERNAME,
    password: process.env.NX_TYPEORM_PWD,
    database: process.env.NX_TYPEORM_DB,
    entities: ['apps/the-crew-api/src/**/*.entity.ts'],
    migrations: ['apps/the-crew-api/src/migrations/seed/*.ts'],
    cli: {
      migrationsDir: 'apps/the-crew-api/src/migrations/seed',
    },
    namingStrategy: new SnakeNamingStrategy(),
    ssl: {
      rejectUnauthorized: false,
    },
  },
];

export default config;
