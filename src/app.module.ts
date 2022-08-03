import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import { Cat } from './model/cats.model';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { PedantsTypeModule } from './pedants-type/pedants-type.module';

@Module({
  imports: [CatsModule,
  SequelizeModule.forRoot({
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '123456',
    database: 'nest-demo',
    models: [Cat],
  }),
  UsersModule,
  PedantsTypeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
