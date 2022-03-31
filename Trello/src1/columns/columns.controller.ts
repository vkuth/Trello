import { Controller, Get, Post, Body, Delete, Param, Put, ValidationPipe, Req, UseGuards } from '@nestjs/common';
import { ColumnsService } from './columns.service';
import { CreateColumnsDto } from './dto/create-columns.dto';
import { UpdateColumnsDto } from './dto/update-columns.dto';
import RequestWithUser from '../auth/requestWithUser.interface';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller()
export class ColumnsController {
    constructor(
        private columnsService: ColumnsService,
     ) {}

     @Get("/users/:id/columns")
     getAll(@Param('id')id: number,@Req() req: RequestWithUser) {
         return this.columnsService.findAll()
     }

     @Get("/users/:usersId/columns/:id")
     getOne(@Param('id')id : number,@Param('userId')userId : number){
         return this.columnsService.finById(id,userId)
     }

     @Post("/users/:id/columns")
     @UseGuards(JwtAuthGuard)
     doCreateColumns(@Param('id')id: number,@Body(new ValidationPipe()) columnsCreate: CreateColumnsDto, @Req() req: RequestWithUser){
       return this.columnsService.createColumns(columnsCreate, id);
    }

     @Delete("/users/:usersId/columns/:id")
     @UseGuards(JwtAuthGuard)
     remove(@Param('userId')userId: number,@Param('id') id:number){
         return this.columnsService.removeColumns(id)
     }
     
     @Put("/users/:usersId/columns/:id")
     @UseGuards(JwtAuthGuard)
     update(@Body(new ValidationPipe()) updateColumn: UpdateColumnsDto, @Param('id')id: number, @Req() req: RequestWithUser, @Param('usersId')userId: number){
         return this.columnsService.updateColumns(updateColumn,id,userId);
     }
 
}
