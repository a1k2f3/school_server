import { Module } from '@nestjs/common';
import { neon } from '@neondatabase/serverless'
import { config } from 'dotenv';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
config({
    path: ['.env', '.env.production', '.env.local'],
  });
  const sql = neon(process.env.DATABASE_URL);
  const dbProvider = {
    provide: 'POSTGRES_POOL',
    useValue: sql,
  };
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false, // Required for NeonDB
      },
      synchronize: true,
      autoLoadEntities: true,
    }),
  ],
    
})
export class DbModule {}
