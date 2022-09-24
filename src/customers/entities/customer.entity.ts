import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Customer {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    user_id: number;
    @Column({default:true})
    isActive: boolean;
}
