import { sequelize } from '../instances/sequelize'
import bcrypt from 'bcrypt';
import Sequelize, { Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';

export default class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare id: CreationOptional<number>;
    declare password: string;
    declare email: string;
    declare name: string
}

 User.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        unique: true
    },
    name: Sequelize.STRING,
    password: {
        type: Sequelize.STRING
    }
},{
     sequelize,
     tableName: 'users',
     defaultScope: { attributes: { exclude: ['password'] } }
 })

User.beforeCreate((user:User, options) => {

    return bcrypt.hash(user.password, 10)
        .then(hash => {
            user.password = hash;
        })
        .catch(err => {
            throw new Error();
        });
});

// User.sync({ alter: true });

