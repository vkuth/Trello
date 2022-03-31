import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateColumnsDto{

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;
}