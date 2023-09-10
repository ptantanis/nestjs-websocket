import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Event1Gateway } from './event1.gateway';
import { Event2Gateway } from './event2.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, Event1Gateway, Event2Gateway],
})
export class AppModule {}
