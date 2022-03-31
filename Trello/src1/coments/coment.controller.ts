import { Controller, Get, Param, Post, Body, Delete, Put, ValidationPipe, UseGuards } from "@nestjs/common";
import { CreateComentDto } from "./dto/create-coment.dto";
import { UpdateComentDto } from "./dto/update-coment.dto";
import { ComentService } from "./coment.service";
import { ApiBearerAuth } from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@ApiBearerAuth()
@Controller()
export class ComentController {
    constructor(
        private comentService: ComentService,
     ) {}

     @Get("/users/:userId/columns/:columnId/card/:id/coment")
     getAll(@Param('id')id: number,@Param('columnId')columnId: number,@Param('userId')userId: number) {
         return this.comentService.findAll()
     }

     @Get("/users/:userId/columns/:columnId/card/:cardId/coment/:id")
     getOne(@Param('id')id : number,@Param('userId')userId: number,@Param('columnId')columnId: number,@Param('cardId')cardId: number){
         return this.comentService.finById(id)
     }

     @Post("/users/:userId/columns/:columnId/card/:id/coment")
     @UseGuards(JwtAuthGuard)
    doCreateComent(@Param('id')id: number,@Body(new ValidationPipe()) comentCreate: CreateComentDto,@Param('userId')userId: number,@Param('columnId')columnId: number){
       return this.comentService.createComent(comentCreate,userId,columnId,id);
    }

     @Delete("/users/:userId/columns/:columnId/card/:cardId/comment/:id")
     @UseGuards(JwtAuthGuard)
     remove(@Param('userId')userId: number,@Param('id')id:number,@Param('coumnId')columnId: number,@Param('cardId')cardId: number){
         return this.comentService.removeComent(id)
     }
     
     @Put("/users/:userId/columns/:columnId/card/:cardId/coment/:id")
     @UseGuards(JwtAuthGuard)
     update(@Body(new ValidationPipe()) updateComent: UpdateComentDto, @Param('id')id: number,@Param('userId')userId: number,@Param('columnId')columnId: number,@Param('cardId')cardId: number ){
         return this.comentService.updateComent(updateComent,id,userId,columnId,cardId);
     }
 
}