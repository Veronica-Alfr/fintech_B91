import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ICreateTransaction, ITransactionType, IUpdateTransaction } from './interfaces/ITransaction';

@Injectable()
export class TransactionsService {
    constructor(private prisma: PrismaService) {}

    async createTransaction(data: ICreateTransaction) {

        const { value, type, parcelas, client_id } = data;

        const create = this.prisma.transactions.create({
            data: {
                value,
                type,
                parcelas,
                client_id
            },
        });
        return create;
    }

    async getTransaction(id: number) {
        const transaction = this.prisma.transactions.findUnique({
            where: { id },
        })

        return transaction;
    }

    async getManyTransactions(createdAt: string, type: ITransactionType) {
        const transactions = this.prisma.transactions.findMany({
            where: {
                createdAt,
                type,
            }
        })

        return transactions;
    }

    async updateTransaction(id: number, data: IUpdateTransaction) {

        const update = this.prisma.transactions.update({
            data,
            where: { id },
        })

        return update;
    }

    async deleteTransaction(id: number) {
        const deleted = this.prisma.transactions.delete({
            where: { id }
        })

        return deleted;
    }
}
