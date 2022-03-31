import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "../users/users.entity";
import { Columns } from "../columns/columns.entity";
import { Card } from "../cards/cards.entity";


@Entity()
export class Coment{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    coment_text: string

    @ManyToOne(type => Card, card => card.comment)
    card: Card

    @ManyToOne(type => Columns, column => column.comment)
    columns: Columns

    @ManyToOne(type => User, user => user.comment)
    user: User
}