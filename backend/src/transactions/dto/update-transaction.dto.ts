import { IsEnum, IsNumber, Min } from "class-validator";
import { ITransactionType } from "../interfaces/ITransaction";

export class UpdateTransactionDto {
    @IsEnum(ITransactionType)
    type: ITransactionType;

    @IsNumber()
    @Min(0.01)
    parcelas: number;
}