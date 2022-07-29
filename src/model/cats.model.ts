import {
    Column,
    Model,
    Table,
    TableOptions,
    DataType,
    CreatedAt,
    UpdatedAt,
} from 'sequelize-typescript';

const TableOptions: TableOptions = {
    tableName: 'cat',
};

@Table(TableOptions)
export class Cat extends Model<Cat> {
    @Column({
        type: DataType.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    })
    public id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    username: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
      })
      password: string;
    
      @Column({
        type: DataType.STRING,
        allowNull: false,
      })
      address: string;
    
      @Column({
        type: DataType.BIGINT,
        allowNull: false,
      })
      age: number;
    
      @Column({
        type: DataType.BIGINT,
        allowNull: false,
      })
      sex: number;

      @CreatedAt public createAt: Date;
      @UpdatedAt public updateAt: Date;
}
