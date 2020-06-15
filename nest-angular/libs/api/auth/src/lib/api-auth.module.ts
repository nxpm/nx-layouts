import { Module } from '@nestjs/common';
import { ApiDataModule } from '@sandbox/api/data';
import { ApiAuthService } from './api-auth.service';

@Module({
  imports: [ApiDataModule],
  providers: [ApiAuthService],
})
export class ApiAuthModule {}
