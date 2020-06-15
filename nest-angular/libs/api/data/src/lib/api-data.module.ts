import { Module } from '@nestjs/common';

import { ApiDataService } from './api-data.service';

@Module({
  providers: [ApiDataService],
  exports: [ApiDataService],
})
export class ApiDataModule {}
