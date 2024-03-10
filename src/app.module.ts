import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PeopleModule } from './people/people.module';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from './config/database.config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
    }),
    DatabaseModule,
    PeopleModule
  ],
  controllers: [AppController],
})
export class AppModule {}
