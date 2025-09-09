import { IsEmail, IsString } from "class-validator";

export class UpdateUserDTO{
    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    password: string;
}