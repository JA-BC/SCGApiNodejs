import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { CategoriaEntity } from './categoria';

@Entity('TipoCategoria')
export class TipoCategoriaEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descripcion: string;

    @OneToMany(type => CategoriaEntity, categorias => categorias.tipoCategoria)
    categorias: CategoriaEntity[];
}
