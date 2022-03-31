import { EntityRepository, Repository } from "typeorm";
import { Coment } from "./coment.entity";

@EntityRepository(Coment)
export class ComentRepository extends Repository<Coment>{

}