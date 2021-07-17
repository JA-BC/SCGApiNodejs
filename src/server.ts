import express, { Application } from 'express';
import createConnection from './database/db';

// Middlewares
import morgan from 'morgan';
import cors from 'cors';

// Routes
import authRoutes from './api/auth/routes';
import balanceRoutes from './api/balance/routes';
import categoriaRoutes from './api/categoria/routes';

export default class Server {

    readonly app: Application = express();
    readonly port: string | number = process.env.PORT || 3000;

    constructor() { }

    onConfigure(): Server {
        // Middlewares
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(cors({
            origin: '*'
        }))

        return this;
    }

    onRoutes(root?: string): Server {
        // Routes
        const router = express.Router();

        router.use('/auth', authRoutes);
        router.use('/balance', balanceRoutes);
        router.use('/categoria', categoriaRoutes);

        this.app.use(root || '/', router);
        return this;
    }

    onStartup() {
        createConnection(() =>
            this.app.listen(this.port,
                () => console.log(`SERVER ON PORT: ${this.port}`)
            )
        );
    }

}
