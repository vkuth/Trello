import { Controller, Get, Post, Request, UseGuards, Body } from '@nestjs/common';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}
}
