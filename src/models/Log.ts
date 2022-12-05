import { sequelize } from '../instances/sequelize'
import Sequelize, { Model, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';

export default class Log extends Model{
    declare id: CreationOptional<number>;
    declare log: object;
}

 Log.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    log: {
        type: Sequelize.JSON
    }
},{
     sequelize,
     tableName: 'logs',
     defaultScope: { attributes: { exclude: ['id', 'createdAt', 'updatedAt'] } }
 })
