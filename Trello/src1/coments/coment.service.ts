
import { Injectable, NotFoundException } from "@nestjs/common"
import { UpdateComentDto } from "./dto/update-coment.dto"
import { CreateComentDto } from "./dto/create-coment.dto"
import { ComentRepository } from "./coment.repository"

@Injectable()
export class ComentService {
    constructor(
        private comentRepository: ComentRepository,
     ) {}

     async findAll() {
        return this.comentRepository.find()
      }

      async finById(id: number){
        return this.comentRepository.findOne(id)
      }

      async createComent(comentCreate: CreateComentDto,userId:number,columnId:number,id:number){
        const newCard =this.comentRepository.create({...comentCreate, user: {id: userId}, columns: {id: columnId},card:{id:id}})
        return this.comentRepository.save(newCard)
      }

      async removeComent(id: number ){
          const comentToRemove = await this.comentRepository.findOne(id)
          return this.comentRepository.remove(comentToRemove)
      }

      async updateComent(updateComent: UpdateComentDto, id:number, userId: number, columnId: number, cardId: number){
        await this.comentRepository.update(id,{...updateComent, user: {id : userId}, columns:{id:columnId}, card:{id:cardId}});
        const isComentExsit= await this.comentRepository.findOne(id, {relations:['card','columns','user']})
        if (isComentExsit) {
          return isComentExsit
        }
        throw new NotFoundException(`Coment ${id} not found`);
      }
}