import { Request, Response } from 'express';
import { CategoriaService } from '../../services/categoria';

export class CategoriaController {

    constructor(
        private readonly service: CategoriaService
    ) { }

    async add(req: Request, res: Response) {
        try {
            const { body: model } = req;
            const result = await this.service.add(model);
            return res.status(201).json(result);
        } catch(e) {
            console.error(e);
            return res.status(400).json(e?.message);
        }
    }

    async select(req: Request, res: Response) {
        try {
            const data = await this.service.select();
            return res.status(200).json(data);
        } catch(e) {
            console.error(e);
            return res.status(400).json(e?.message);
        }
    }

    async requery(req: Request, res: Response) {
        try {
            const data = await this.service.select();
            return res.status(200).json(data);
        } catch(e) {
            console.error(e);
            return res.status(400).json(e?.message);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const data = await this.service.select();
            return res.status(200).json(data);
        } catch(e) {
            console.error(e);
            return res.status(400).json(e?.message);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const data = await this.service.select();
            return res.status(200).json(data);
        } catch(e) {
            console.error(e);
            return res.status(400).json(e?.message);
        }
    }
}

export default new CategoriaController(
    new CategoriaService()
);
