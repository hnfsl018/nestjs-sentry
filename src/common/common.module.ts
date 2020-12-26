import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [ConfigModule],
  exports: [CommonModule]
})
export class CommonModule {}
