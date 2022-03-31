import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UserController } from './users.controller';
import { User } from './users.entity';
import { UsersRepository } from './users.repository';

@Module({
  imports: [TypeOrmModule.forFeature([UsersRepository])],
  providers: [UsersService],
  controllers: [UserController],
  exports: [UsersService],
})
export class UsersModule {}
