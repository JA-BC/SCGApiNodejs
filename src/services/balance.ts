import { getRepository } from "typeorm";
import { BalanceEntity } from "../database/entities/balance";

export class BalanceService {

    get _db() {
        return getRepository(BalanceEntity);
    }

    constructor() { }

    async add(model: any) {
        return await this._db.save(model);
    }

    async select() {
        const relational = await this._db.find({ relations: ['categoria', 'categoria.tipoCategoria'] });

        return relational.map(x => Object.assign({
            descripcion: x.descripcion,
            costo: x.costo,
            categoriaId: x.categoria.id,
            categoriaNombre: x.categoria.nombre,
            categoriaTipoCategoriaId: x.categoria.tipoCategoria.id,
            fecha: x.fecha
        }));
    }

    async requery(id: string | number) {
        return await this._db.findOne(id);
    }

    async update(id: string | number, model: any) {
        return await this._db.update(id, model);
    }

    async delete(id: string | number) {
        return await this._db.delete(id);
    }

}
