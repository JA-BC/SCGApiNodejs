import { createConnection } from 'typeorm';

export default async (callback?: Function) => {
    try {
        const connection = await createConnection(/*{
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'password',
            database: 'SCG',
            synchronize: true,
            logging: false,
            entities: [
                __dirname + '/entities/*.ts'
            ],
            migrations: [
                __dirname + '/migrations/*.ts'
            ],
            cli: {
                migrationsDir: __dirname + '/migrations'
            }
        }*/);
        
        if (typeof callback === 'function') {
            callback();
        }
    
        return connection;
    } catch(e) {
        console.error('CONNECTION_ERROR:\n', e);
    }
}
