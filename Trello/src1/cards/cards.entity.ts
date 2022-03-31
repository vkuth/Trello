import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { User } from "../users/users.entity";
import { Columns } from "../columns/columns.entity";
import { Coment } from "../coments/coment.entity";

@Entity()
export class Card{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    cardName: string

    @Column()
    cardText: string

    @ManyToOne(type => Columns, column => column.card)
    columns: Columns

    @ManyToOne(type => User, user => user.card)
    user: User

    @OneToMany(type => Coment, comment => comment.card)
    comment: Comment[]
}