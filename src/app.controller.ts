import { BadRequestException, Controller, Get, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { LogService } from './log/log.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly logException: LogService
  ) { }

  @Get()
  getHello(@Req() req: Request): string {
    this.logException.captureException(new BadRequestException(), { "headers": req.headers })
    return this.appService.getHello();
  }
}
