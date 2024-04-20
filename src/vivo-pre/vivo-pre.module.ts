import { Module } from '@nestjs/common';
import { VivoPreService } from './services/vivo-pre.service';
import { VivoPreController } from './controllers/vivo-pre.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VivoPre } from '../database/entities/vivo-pre.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VivoPre])],
  controllers: [VivoPreController],
  providers: [VivoPreService],
})
export class VivoPreModule {}
