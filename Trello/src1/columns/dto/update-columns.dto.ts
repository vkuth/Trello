import { CreateColumnsDto } from "./create-columns.dto";
import { PartialType } from "@nestjs/swagger";

export class UpdateColumnsDto extends PartialType(CreateColumnsDto) {

}