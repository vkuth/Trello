import { ApiProperty } from "@nestjs/swagger";
import { IsDefined } from "class-validator";

export class LoginDto{

    @ApiProperty()
    @IsDefined()
    email: string

    @ApiProperty()
    @IsDefined()
    password: string
}