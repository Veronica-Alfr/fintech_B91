import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ICreateUser, IUpdateUser } from './interfaces/IUser';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}

    async createUser(data: ICreateUser) {

        const { email, name, password } = data;

        const passEncrypt = await bcrypt.hash(password, 10);

        const create = this.prisma.user.create({
            data: {
                email,
                name,
                password: passEncrypt
            },
        });
        return create;
    }

    async getUser(id: number) {
        const transaction = this.prisma.user.findUnique({
            where: { id },
        })

        return transaction;
    }

    async updateUser(id: number, data: IUpdateUser) {

        const update = this.prisma.user.update({
            data,
            where: { id },
        })

        return update;
    }

    async deleteUser(id: number) {
        const deleted = this.prisma.user.delete({
            where: { id }
        })

        return deleted;
    }
}

