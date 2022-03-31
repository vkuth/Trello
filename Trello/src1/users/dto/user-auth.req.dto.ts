import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class UserAuthenticationRequestDto{
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    email: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password: string
}