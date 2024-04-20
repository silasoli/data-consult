import { Module } from '@nestjs/common';
import { TelelistaService } from './services/telelista.service';
import { TelelistaController } from './controllers/telelista.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Telelista } from '../database/entities/telelista.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Telelista])],
  controllers: [TelelistaController],
  providers: [TelelistaService],
})
export class TelelistaModule {}
