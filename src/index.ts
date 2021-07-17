import Server from './server';
import 'reflect-metadata';
import dotenv from 'dotenv';
dotenv.config();

(() => {
    new Server()
        .onConfigure() // Middlewares
        .onRoutes('/api') // Routes
        .onStartup(); // Server
})();
