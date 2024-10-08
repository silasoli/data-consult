import { Module } from '@nestjs/common';
import { HealthCheckService } from './services/health-check.service';
import { HealthCheckController } from './controllers/health-check.controller';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [TerminusModule, HttpModule],
  controllers: [HealthCheckController],
  providers: [HealthCheckService],
})
export class HealthCheckModule {}
