import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { User } from '../users/users.entity';
import { userInfo, type } from 'os';
import { Card } from '../cards/cards.entity';
import { Coment } from '../coments/coment.entity';
import { IsString, IsInt } from 'class-validator';

@Entity()
export class Columns{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
   
  @ManyToOne(() => User, user => user.columns)
  @JoinColumn({name: 'userId'})
  user: User;

  @OneToMany(() => Card, card => card.columns)
  card: Card[];

  @OneToMany(() => Coment, comment => comment.columns)
  comment: Comment[];
}