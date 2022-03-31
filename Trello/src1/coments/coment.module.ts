import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ComentRepository } from "./coment.repository";
import { ComentService } from "./coment.service";
import { ComentController } from "./coment.controller";

@Module({
    imports: [TypeOrmModule.forFeature([ComentRepository])],
    providers: [ComentService],
    controllers: [ComentController],
    exports: [ComentService],
})
export class ComentModule{}