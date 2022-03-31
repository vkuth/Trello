import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ColumnsRepository } from "./columns.repository";
import { ColumnsService } from "./columns.service";
import { ColumnsController } from "./columns.controller";

@Module({
    imports: [TypeOrmModule.forFeature([ColumnsRepository])],
    providers: [ColumnsService],
    controllers: [ColumnsController],
    exports: [ColumnsService],
})
export class ColumnsModule{}