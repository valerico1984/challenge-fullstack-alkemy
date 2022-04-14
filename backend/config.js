//Configuración de base de datos con variables de entorno

module.exports={
database:{
    username: process.env.USER_DB ||'root',
    password:process.env.PASSWORD_DB ||null,
    database: process.env.NAME_DB ||'sequelize',
    host: process.env.HOST_DB || 'localhost'
},
}