import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColumnsModule } from './columns/columns.module';
import { CardModule } from './cards/cards.module';
import { ComentModule } from './coments/coment.module';




@Module({
  imports: [AuthModule, UsersModule, ColumnsModule, CardModule , ComentModule ,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'pg_container',
      port: 5432,
      username: 'root',
      password: '132132',
      database: 'test_db',
      entities: [ __dirname + '/./**/*.entity{.ts,.js}'],
      synchronize: true, 
  }),
  ConfigModule.forRoot({
    validationSchema: Joi.object({
      JWT_SECRET: Joi.string().required(),
      JWT_EXPIRATION_TIME: Joi.string().required(),
  })
  })
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}