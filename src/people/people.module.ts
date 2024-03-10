import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Place])],
  controllers: [PeopleController],
  providers: [PeopleService],
})
export class PeopleModule {}
