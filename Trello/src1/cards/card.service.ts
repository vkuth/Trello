import { UpdateCardDto } from "./dto/update-card.dto"
import { CreateCardDto } from "./dto/create-card.dto"
import { CardRepository } from "./cards.repository"
import { Injectable, Req, NotFoundException } from "@nestjs/common"
import RequestWithUser from "../auth/requestWithUser.interface"
import { Column } from "typeorm"

@Injectable()
export class CardService {
    constructor(
        private cardRepository: CardRepository,
     ) {}

     async findAll() {
        return this.cardRepository.find({relations:['columns','user']})
      }

      async finById(id: number){
        return this.cardRepository.findOne(id,{relations:['columns','user']})
      }

      async createCard(cardCreate: CreateCardDto, id: number, userId: number){
          const newCard =this.cardRepository.create({...cardCreate, user: {id: userId}, columns: {id: id}})
          return this.cardRepository.save(newCard)
      }

      async removeCard(id: number ){
          const cardToRemove = await this.cardRepository.findOne(id,{relations:['columns','user']})
          return this.cardRepository.remove(cardToRemove)
      }

      async updateCard(updateCard: UpdateCardDto, id: number, userId: number, columnId: number){
      await this.cardRepository.update(id,{...updateCard, user: {id : userId}, columns:{id:columnId}});
        const isCardExsit= await this.cardRepository.findOne(id, {relations:['columns','user']})
             if (isCardExsit) {
          return isCardExsit
        }
        throw new NotFoundException(`Card ${id} not found`);
      }
}