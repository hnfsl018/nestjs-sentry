import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as Sentry from '@sentry/node';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from './common/config/config.service'

const config = new ConfigService();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const ISPRODUCTION = config.getIsProduction();
  const SENTRYDNS = config.getSentryDns();
  const PORT = config.getPort()

  Sentry.init({
    dsn: ISPRODUCTION ? SENTRYDNS : '',
    environment: ISPRODUCTION ? 'production' : 'dev',
  });
  
  await app.listen(PORT);
  console.log(`Application is running on: ${await app.getUrl()} version 0.0.1 ${new Date()}`);
}
bootstrap();
