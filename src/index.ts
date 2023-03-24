import { Model, DataTypes, Sequelize } from 'sequelize'

const sequelize = new Sequelize({
    dialect: 'postgres',
    username: 'shreyash',
    password: 'C_2iTU85UXqj2QWm-d_zpA',
    host: 'source-2602.7s5.cockroachlabs.cloud',
    port: 26257,
    database: 'source',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: true,
        },
    }
});

class user extends Model {
    public id!: number;
    public firstname!: string;
    public lastname!: string
    public age!: number;
    public dateofbirth!: string;
    public readonly created_at!: string;
}

user.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dateofbirth: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },
    {
        sequelize,
        tableName: 'users',
        timestamps: false
    }
);

const users = await user.findAll();
console.log(users);