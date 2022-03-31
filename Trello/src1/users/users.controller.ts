import {getConnection, createConnection} from "typeorm";
import {User} from "./users.entity";
import { Get, Controller, Post, Body, Delete, Param, Put, ValidationPipe, HttpStatus } from "@nestjs/common";
import { UsersService } from "./users.service"
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserRegisterRequetsDto } from "./dto/register-user.req.dto";
import { SETTINGS } from "../app.ustils";

@Controller()
export class UserController {
    constructor(
        private userService: UsersService,
     ) {}

    @Get("/users")
    getAll() {
        return this.userService.findAll()
    }

    @Get("/users/:id")
    getOne(@Param('id')id:number){
        return this.userService.findByID(id)
    }

    @Post("/users")
    doUserRegistration(@Body(SETTINGS.VALIDTION_PIPE, new ValidationPipe()) userRegister: UserRegisterRequetsDto){
       return this.userService.doUserRegistration(userRegister);
    }
    
    @Delete("/users/:id")
    remove(@Param('id')id: number){
       return this.userService.removeUser(id)
    }

    @Put("/users/:id")
    update(@Body(new ValidationPipe()) updateUserdto: UpdateUserDto, @Param('id')id:number){
        return this.userService.updateUser(id, updateUserdto)
        
    }

    
}