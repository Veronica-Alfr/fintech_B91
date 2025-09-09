import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { ITransactionType } from './interfaces/ITransaction';

@Controller('transactions')
export class TransactionsController {
    constructor (private readonly transactionService: TransactionsService) {}

    @Post()
    async create(@Body() createTransactionDto: CreateTransactionDto) {
        return this.transactionService.createTransaction(createTransactionDto);
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return this.transactionService.getTransaction(parseInt(id));
    }

    @Get()
    async findMany(@Query('date') date: string, @Query('date') type: ITransactionType) {
        return this.transactionService.getManyTransactions(date, type);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateTransactionDTO: UpdateTransactionDto) {
        return this.transactionService.updateTransaction(parseInt(id), updateTransactionDTO);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.transactionService.deleteTransaction(parseInt(id));
    }
}