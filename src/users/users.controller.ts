import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Users } from 'src/model/users.model';
import { UsersService } from './users.service';

@ApiTags("用户相关接口")
@Controller('users')
export class UsersController {
    constructor(private readonly UsersService: UsersService) {}

    @ApiOperation({
        summary: '查询某个用户信息',
    })
    @Get(':id')
    GetUser(@Param('id') id: string): Promise<Users> {
        return this.UsersService.GetUserById(id);
    }
}
