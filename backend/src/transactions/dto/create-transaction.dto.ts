import { IsEnum, IsNumber, IsPositive, Min } from "class-validator";
import { ITransactionType } from "../interfaces/ITransaction";

export class CreateTransactionDto {
    @IsNumber()
    @IsPositive()
    client_id: number;

    @IsNumber()
    @Min(0.01)
    value: number;

    @IsEnum(ITransactionType)
    type: ITransactionType;

    @IsNumber()
    @Min(0.01)
    parcelas: number;
}