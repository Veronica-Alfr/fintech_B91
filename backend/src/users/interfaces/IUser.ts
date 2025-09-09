export interface ICreateUser{
    name: string;
    email: string;
    password: string;
}

export interface IUpdateUser {
    email: string;
    password: string;
}