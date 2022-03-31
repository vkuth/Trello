import { Controller, Get, Param, Post, Body, Delete, Put, Req, ValidationPipe, UseGuards } from "@nestjs/common";
import { CreateCardDto } from "./dto/create-card.dto";
import { UpdateCardDto } from "./dto/update-card.dto";
import { CardService } from "./card.service";
import { ApiBearerAuth } from "@nestjs/swagger";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";

@ApiBearerAuth()
@Controller()
export class CardController {
    constructor(
        private cardService: CardService,
     ) {}

     @Get("/users/:userId/columns/:id/card")
     getAll(@Param('id')id: number,@Param('userId')userId: number) {
         return this.cardService.findAll()
     }

     @Get("/users/:userId/columns/:columnId/card/:id")
     getOne(@Param('id')id : number, @Param('userId')userId : number, @Param('columnId')columnId : number){
         return this.cardService.finById(id)
     }

     @Post("/users/:userId/columns/:id/card")
     @UseGuards(JwtAuthGuard)
    doCreateColumns(@Param('id')id: number,@Body(new ValidationPipe()) cardCreate: CreateCardDto, @Param('userId') userId: number){
       return this.cardService.createCard(cardCreate, id, userId);
    }

     @Delete("/users/:userId/columns/:columnId/card/:id")
     @UseGuards(JwtAuthGuard)
     remove(@Param('userId')userId: number,@Param('id')id:number,@Param('columnId') columnId: number){
         return this.cardService.removeCard(id)
     }
     
     @Put("/users/:userId/columns/:columnId/card/:id")
     @UseGuards(JwtAuthGuard)
     update(@Body(new ValidationPipe()) updateCard: UpdateCardDto, @Param('id')id: number,@Param('columnId')columnId: number,@Param('userId')userId: number ){
         return this.cardService.updateCard(updateCard,id,userId,columnId);
     }
 
}