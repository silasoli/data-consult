import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PeopleModule } from './people/people.module';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from './config/database.config';
import { DatabaseModule } from './database/database.module';
import { CompaniesModule } from './companies/companies.module';
import { CouncilModule } from './council/council.module';
import { HealthCheckModule } from './health-check/health-check.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { VivoPreModule } from './vivo-pre/vivo-pre.module';
import { SerasaEmailsModule } from './serasa-emails/serasa-emails.module';
import { TelelistaModule } from './telelista/telelista.module';
import { RoutesModule } from './routes/routes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig],
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    DatabaseModule,
    PeopleModule,
    CompaniesModule,
    CouncilModule,
    HealthCheckModule,
    UsersModule,
    RolesModule,
    AuthModule,
    VivoPreModule,
    SerasaEmailsModule,
    TelelistaModule,
    RoutesModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
