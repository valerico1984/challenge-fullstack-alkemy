
const {Sequelize}=require("sequelize")
const dbConnection = require('../database/db.js')

//Construimos el modelo de Operación con tipo, concepto, monto y fecha:

const Operation = dbConnection.define('operations',{

    type_opr: {
        type:Sequelize.STRING
    },
    
    concept:{
        type: Sequelize.STRING
    },

    amount:{
        type: Sequelize.BIGINT
    },

    date_opr:{
        type: Sequelize.DATE
    }
})

module.exports= Operation