import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// Load environment variables
import { config } from 'dotenv';
config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
