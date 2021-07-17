import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import { IUserModel } from 'src/models/user';
import { UserEntity } from '../database/entities/user';

export class AuthService {

    get _db() {
        return getRepository(UserEntity);
    }

    constructor() { }

    async login(model: IUserModel) {
        const user = await this.isUserValid(model);
        const token = await this.getJWTToken(user);
        return token;
    }

    async register(model: IUserModel) {
        const salt = await bcrypt.genSalt();
        const saltPassword = await bcrypt.hash(model.password, salt);
        const user = this._db.create({
            ...model,
            password: saltPassword,
            encodeString: salt
        });

        this._db.save(user);
    }

    private async isUserValid({ email, password }: IUserModel) {
        const user = await this._db.findOne({ email });

        if (!user) {
            throw new Error("Nombre de usuario o correo incorrectos. Vuelva a intentarlo");
        }

        if (!this.isPasswordValid(user, password))
        {
            throw new Error('Su contraseña es incorrecta. Vuelva a intentarlo');
        }

        if (user.isLocked) {
            throw new Error('Usuario bloqueado. Contacte con su proveedor');
        }

        return user;
    }

    private async isPasswordValid(user: UserEntity, password: string) {
        return await bcrypt.compare(password, user.encodeString);
    }

    private async getJWTToken(user: UserEntity) {

    }

}
