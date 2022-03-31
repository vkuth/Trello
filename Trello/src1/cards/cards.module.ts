import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CardRepository } from "./cards.repository";
import { CardService } from "./card.service";
import { CardController } from "./cards.controller";

@Module({
    imports: [TypeOrmModule.forFeature([CardRepository])],
    providers: [CardService],
    controllers: [CardController],
    exports: [CardService],
})
export class CardModule{}