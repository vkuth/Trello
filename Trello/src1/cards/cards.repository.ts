import { Card } from "./cards.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Card)
export class CardRepository extends Repository<Card>{

}