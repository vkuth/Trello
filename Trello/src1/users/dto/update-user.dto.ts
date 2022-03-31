import { PartialType } from "@nestjs/swagger";
import { UserRegisterRequetsDto } from "./register-user.req.dto";

export class UpdateUserDto extends PartialType(UserRegisterRequetsDto) {

}