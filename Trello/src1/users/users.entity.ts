import { Entity, Column, PrimaryGeneratedColumn, OneToMany, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Columns } from '../columns/columns.entity';
import { Card } from '../cards/cards.entity';
import { Coment } from '../coments/coment.entity';


@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;
  
  @Column()
  lastName: string;

  @Column("int")
  age: number;
  
  @Column({unique:true})
  email: string;

  @Column()
  password: string;

  // @OneToMany(type => Columns, column => column.user)
  columns: Columns[]

  @OneToMany(type => Card, card => card.user)
  card: Card[]

  @OneToMany(type => Coment, comment => comment.user)
  comment: Comment[]

  @BeforeInsert()
  async setPassword(password:string){
    const salt =await bcrypt.genSalt();
    this.password= await bcrypt.hash(password || this.password, salt);
  }
}
