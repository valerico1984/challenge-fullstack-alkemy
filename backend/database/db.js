const {Sequelize} = require ('sequelize');
const {database} = require('../config')

//Configuramos la base de datos con Sequelize

const dbConnection= new Sequelize (
    database.database,
    database.username,
    database.password, {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql',
        
});



module.exports= dbConnection