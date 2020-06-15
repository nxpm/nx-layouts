import { Module } from '@nestjs/common';

import { ApiAuthModule } from '@sandbox/api/auth';
import { ApiCoreModule } from '@sandbox/api/core';
import { ApiProjectModule } from '@sandbox/api/project';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ApiCoreModule, ApiAuthModule, ApiProjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
