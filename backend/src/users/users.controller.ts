import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor (private readonly userService: UsersService) {}

    @Post()
    async create(@Body() createUserDTO: CreateUserDto) {
        return this.userService.createUser(createUserDTO);
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        console.log("param id =>", id);
        return this.userService.getUser(parseInt(id));
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateUserDTO: UpdateUserDTO) {
        return this.userService.updateUser(parseInt(id), updateUserDTO);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.userService.deleteUser(parseInt(id));
    }
}