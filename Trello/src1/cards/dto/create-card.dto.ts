import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCardDto{

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    cardName: string;

    @ApiProperty()
    @IsString()
    cardText: string;

}