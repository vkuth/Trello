import { Injectable, Options, NotFoundException } from "@nestjs/common";
import { ColumnsRepository } from "./columns.repository";
import { CreateColumnsDto } from "./dto/create-columns.dto";
import { UpdateColumnsDto } from "./dto/update-columns.dto";

@Injectable()
export class ColumnsService {
    constructor(
        private columnsRepository: ColumnsRepository,
     ) {}

     async findAll() {
        return this.columnsRepository.find({relations:['user']})
      }

      async finById(id: number, userId: number){
        return this.columnsRepository.findOne(id, {relations:['user']})
      }

      async createColumns(columnsCreate: CreateColumnsDto, id : number){
          const newColumn =this.columnsRepository.create({...columnsCreate, user: {id: id}})
          console.log(columnsCreate, id, newColumn)
          return this.columnsRepository.save(newColumn)
      }

      async removeColumns(id: number ){
          const columnToRemove = await this.columnsRepository.findOne(id)
          return this.columnsRepository.remove(columnToRemove)
      }

      async updateColumns(updateColumn: UpdateColumnsDto, id:number, userId: number){   
          await this.columnsRepository.update(id,{...updateColumn, user: {id : userId}});
          const isColumnExsit= await this.columnsRepository.findOne(id, {relations:['user']})
          if (isColumnExsit) {
            return isColumnExsit
          }
          throw new NotFoundException(`Column ${id} not found`);
      }
}