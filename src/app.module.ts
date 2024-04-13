import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PeopleModule } from './people/people.module';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from './config/database.config';
import { DatabaseModule } from './database/database.module';
import { CompaniesModule } from './companies/companies.module';
import { CouncilModule } from './council/council.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
    }),
    DatabaseModule,
    PeopleModule,
    CompaniesModule,
    CouncilModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
