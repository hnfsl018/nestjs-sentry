import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { LogModule } from './log/log.module';

@Module({
  imports: [CommonModule, LogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
