import { Columns } from "./columns.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Columns)
export class ColumnsRepository extends Repository<Columns>{

}
  