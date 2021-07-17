import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToOne } from 'typeorm';
import { BalanceEntity } from './balance';
import { TipoCategoriaEntity } from './tipoCategoria';

@Entity('Categoria')
export class CategoriaEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @ManyToOne(type => TipoCategoriaEntity, tipoCategoria => tipoCategoria.categorias)
    tipoCategoria: TipoCategoriaEntity;

    @OneToMany(type => BalanceEntity, balances => balances.categoria)
    balances: BalanceEntity[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}
