import { Injectable, HttpException, HttpStatus, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { User } from '../users/users.entity';
import * as bcrypt from 'bcrypt';
import { UserRegisterRequetsDto } from '../users/dto/register-user.req.dto';
import { ConfigService } from '@nestjs/config';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,  
  ) {}

  async validateUser(email: string, pass: string): Promise<User> {
    const user = await this.usersService.findEmail(email);
    const isPasswordCorrect =await bcrypt.compare(pass, user.password)
    if (user && isPasswordCorrect) {
      const {...result } = user;
      return user;
    }
    return null;
  }

  async login(loginUser: LoginDto) {
    const user =await this.validateUser(loginUser.email,loginUser.password);
    if (user){
      const payload = { email: user.email, sub: user.id };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
    throw new UnauthorizedException('User dosent exist')
  }

  public async getAuthenticatedUser(email: string, plainTextPassword: string) {
    try {
      const user = await this.usersService.findEmail(email);
      await this.verifyPassword(plainTextPassword, user.password);
      user.password = undefined;
      return user;
    } catch (error) {
      throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
    }
  }
   
  private async verifyPassword(plainTextPassword: string, hashedPassword: string) {
    const isPasswordMatching = await bcrypt.compare(
      plainTextPassword,
      hashedPassword
    );
    if (!isPasswordMatching) {
      throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
    }
  }

}
