import {Sequelize} from 'sequelize'

const db = 'node-2'
const username = 'root'
const password = 'root'

export const sequelize = new Sequelize(db, username, password, {
    dialect: "mysql",
    port: 3306,
});

sequelize.authenticate().catch(err => console.log(err.message))