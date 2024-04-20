import { Module } from '@nestjs/common';
import { SerasaEmailsService } from './services/serasa-emails.service';
import { SerasaEmailsController } from './controllers/serasa-emails.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SerasaEmails } from '../database/entities/serasa-emails.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SerasaEmails])],
  controllers: [SerasaEmailsController],
  providers: [SerasaEmailsService],
})
export class SerasaEmailsModule {}
