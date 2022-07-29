import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Cat } from "src/model/cats.model";
import { CatsController } from "./cats.controller";
import { CatsService } from './cats.service';

@Module({
    imports: [
        SequelizeModule.forFeature([Cat]),
    ],
    providers: [CatsService],
    controllers: [CatsController],
    exports: [],
})
export class CatsModule{}