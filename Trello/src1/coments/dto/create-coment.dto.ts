import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateComentDto{

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    coment_text: string;
}