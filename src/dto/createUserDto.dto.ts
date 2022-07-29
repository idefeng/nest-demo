import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: '用户名'})
    readonly username: string;

    @ApiProperty({example: 18})
    readonly age: number;

    @ApiProperty({example: 1})
    readonly sex: number;

    @ApiProperty({example: '地址'})
    readonly address: string
}