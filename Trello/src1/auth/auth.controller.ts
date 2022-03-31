import { Controller, HttpCode, UseGuards, Post, Req, Res, Get, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import RequestWithUser from './requestWithUser.interface';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authenticationService: AuthService
      ) {}
      
      @HttpCode(200)
      @Post('/login')
      async logIn(@Body() loginUser: LoginDto) {
          return this.authenticationService.login(loginUser);
      }

     @UseGuards(JwtAuthGuard)
     @Get()
     authenticate(@Req() request: RequestWithUser) {
       const user = request.user;
       user.password = undefined;
       return user;
  }
}
