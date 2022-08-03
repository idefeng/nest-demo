import { Body, ConfigurableModuleBuilder, Controller, Delete, Get, Param, Patch, Post, Query, Req } from '@nestjs/common';
import { PedantsTypeDto } from 'src/dto/create-pedants-type.dto';
@Controller('pedants-type')
export class PedantsTypeController {
    @Get()
    getPedantsType(): string {
        return '获取所有的挂件类型'
    }
    @Get('/:id')
    getPedantsTypeById(@Param() id: number) {
        console.log('=============&gt;', id)
        return `${typeof id} and id is ${id}`
    }

    @Post()
    createPedantsType(
        @Body() createPedantsTypeDto: PedantsTypeDto
    ){
        const {sort, name} = createPedantsTypeDto
        console.log('body======&gt;', name, sort)
        return '新建一个挂件'
    }

    @Patch()
    updatePedantsType(@Query('id') id: number){
        console.log('query=====&gt;', id)
        return '更新某一个挂件类型'
    }

    @Delete()
    deletePedantsType(){
        return '删除某一个挂件类型'
    }
}
