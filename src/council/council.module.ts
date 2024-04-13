import { Module } from '@nestjs/common';
import { CouncilService } from './services/council.service';
import { CouncilController } from './controllers/council.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [CouncilController],
  providers: [CouncilService],
})
export class CouncilModule {}
