import { Request, Response } from 'express';
import { BalanceService } from '../../services/balance';

export class AuthController {

    constructor(
        private readonly service?: BalanceService
    ) { }

    async login(req: Request, res: Response) {
        return res.status(200).json('LOGIN');
    }

    async register(req: Request, res: Response) {
        return res.status(200).json('REGISTER');
    }
}

export default new AuthController(
    // new AuthService()
);
