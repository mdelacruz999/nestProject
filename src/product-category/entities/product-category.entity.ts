import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class ProductCategory {
    @PrimaryGeneratedColumn ()
    id:number;
    @Column()
    description: string;
    @Column({default:true})
    isActive: boolean;
}
