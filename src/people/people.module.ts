import { Module } from '@nestjs/common';
import { PeopleService } from './services/people.service';
import { PeopleController } from './controllers/people.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { People } from 'src/database/entities/people.entity';

@Module({
  imports: [TypeOrmModule.forFeature([People])],
  controllers: [PeopleController],
  providers: [PeopleService],
})
export class PeopleModule {}
