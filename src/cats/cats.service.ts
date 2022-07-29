import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { userInfo } from 'os';
import { CreateUserDto } from 'src/dto/createUserDto.dto';
import { Cat } from 'src/model/cats.model';

@Injectable()
export class CatsService {

    constructor(
        @InjectModel(Cat)
        private catModel: typeof Cat,
    ){}

    async create(createUserDto: CreateUserDto): Promise<Cat> {
        const cat = new Cat();
        cat.username = createUserDto.username;
        cat.age = createUserDto.age;
        cat.address = createUserDto.address;
        cat.sex = createUserDto.sex;


        return await cat.save();
    }

    async findAll(): Promise<Cat[]> {
        return await this.catModel.findAll<Cat>({
            attributes: ['id', 'username', 'address', 'age', 'sex'],
        });
    }

    async findOneById(id: string): Promise<Cat> {
        return await this.catModel.findOne<Cat>({
            where: {id},
            attributes: ['id', 'username', 'address', 'age', 'sex'],
        });
    }
}
