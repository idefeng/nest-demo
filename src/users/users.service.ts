import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Users } from 'src/model/users.model';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(Users)
        private UsersModel: typeof Users,
    ){}

    // async create(createUserDto: CreateUserDto): Promise<Cat> {
    //     const cat = new Cat();
    //     cat.username = createUserDto.username;
    //     cat.age = createUserDto.age;
    //     cat.address = createUserDto.address;
    //     cat.sex = createUserDto.sex;


    //     return await cat.save();
    // }

    // async findAll(): Promise<Cat[]> {
    //     return await this.catModel.findAll<Cat>({
    //         attributes: ['id', 'username', 'address', 'age', 'sex'],
    //     });
    // }

    async GetUserById(id: string): Promise<Users> {
        return await this.UsersModel.findOne<Users>({
            where: {id},
            attributes: ['id', 'username', 'tel', 'security_code', 'address'],
        });
    }
}
