import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { CategoriaEntity } from './categoria';

@Entity('Balance')
export class BalanceEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    costo: number;

    @Column()
    descripcion: string;

    @Column()
    fecha: Date;

    @ManyToOne(type => CategoriaEntity, categoria => categoria.balances)
    categoria: CategoriaEntity;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}
