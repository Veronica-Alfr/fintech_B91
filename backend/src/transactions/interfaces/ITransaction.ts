export enum ITransactionType {
    CREDIT = "CREDIT",
    DEBIT = "DEBIT"
}

export interface ICreateTransaction {
    value: number;
    type: ITransactionType;
    parcelas: number;
    client_id: number;
}

export interface IUpdateTransaction {
    type: ITransactionType;
    parcelas: number;
}