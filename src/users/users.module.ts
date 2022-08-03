import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Users } from 'src/model/users.model';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
    imports: [
        SequelizeModule.forFeature([Users]),
    ],
    providers: [UsersService],
    controllers: [UsersController],
    exports: [],
})
export class UsersModule {}
