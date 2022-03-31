import { Injectable, Inject, Provider, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import { UsersRepository } from './users.repository';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRegisterRequetsDto } from './dto/register-user.req.dto';

// export type User = any;

@Injectable()
export class UsersService {
    constructor(
       private userRepository: UsersRepository,
    ) {}
    
    async findAll() {
        return this.userRepository.find()
      }

    async findByID(id: number) {
        const user =await this.userRepository.findOne(id)
        if (user){
          return user;
        }
        throw new HttpException('User with this id does not exist', HttpStatus.NOT_FOUND);
    } 
     
     async removeUser(id:number){
       const userToRemove =await this.userRepository.findOne(id)
       return this.userRepository.remove(userToRemove)
     }

     async updateUser(id:number, updateUserdto: UpdateUserDto){
             return this.userRepository.update(id, updateUserdto)
     }

     async doUserRegistration( userRegister: UserRegisterRequetsDto, ): Promise<User>{
       let user = new User();
       user.firstName= userRegister.firstName;
       user.lastName =userRegister.lastName;
       user.age= userRegister.age
       user.email = userRegister.email
       user.password= userRegister.password 
       return await this.userRepository.save(user);
     }

    async findEmail(email:string){
      const user = this.userRepository.findOne({email})
      if (user) {
        return user;
      }
      throw new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND);
    }

}
