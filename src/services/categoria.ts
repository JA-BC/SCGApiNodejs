import { getRepository } from "typeorm";
import { CategoriaEntity } from "../database/entities/categoria";

export class CategoriaService {

    get _db() {
        return getRepository(CategoriaEntity);
    }

    constructor() { }

    async add(model: any) {
        return await this._db.save(model);
    }

    async select() {
        return await this._db.find();
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
