import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateUserDto } from 'src/dto/createUserDto.dto';
import { Cat } from 'src/model/cats.model';
import { CatsService } from './cats.service';

@ApiTags('猫接口')
@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}


    @ApiOperation({
        summary: '找到一只猫',
    })
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Cat> {
        return this.catsService.findOneById(id);
    }
    @ApiOperation({
        summary: '找到所有猫',
    })
    @Get()
    findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @ApiOperation({
        summary: '创建一个用户',
    })
    @Post()
    create(
        @Body() CreateUserDto: CreateUserDto,
    ): Promise<Cat> {
        return this.catsService.create(CreateUserDto)
    }
}
