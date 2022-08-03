import {
    Column,
    Model,
    Table,
    TableOptions,
    DataType,
} from 'sequelize-typescript';

const TableOptions: TableOptions = {
    tableName: 'users',
};

@Table(TableOptions)
export class Users extends Model<Users> {
    @Column({
        type: DataType.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    })
    public user_id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    username: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    tel: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    security_code: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    address: string;
}