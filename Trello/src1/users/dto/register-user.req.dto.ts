import { IsEmail, IsNotEmpty, Length, Matches, IsString, IsInt } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { REGEX, MESSAGES } from '../../app.ustils'



export class UserRegisterRequetsDto{
   
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    firstName: string
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    lastName: string
    
    @ApiProperty()
    @IsNotEmpty()
    @IsInt()
    age: number
    
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email: string
    
    @ApiProperty()
    @IsNotEmpty()
    @Length(8,24)
    @IsString()
    @Matches(REGEX.PASSWORD_RULE,{message: MESSAGES.PASSWORD_RULE_MESSAGE })
    password: string
    
    @ApiProperty()
    @IsNotEmpty()
    @Length(8,24)
    @IsString()
    @Matches(REGEX.PASSWORD_RULE)
    confirm: string
}