const Operation = require('../models/Operation')

//configuración de operaciones:

//Añadir nueva operación:
const saveOperation= async (req,res, next) =>{

    try{

        await Operation.create(req.body);
        res.json({message:'Succesfully added'});
     }
     //gestión del error:
     catch (error){
         console.log(error);
         next();
     }

}

//Obtener operaciones existentes:

const getOperations = async (req,res, next) =>{

    try{
        const operations= await Operation.findAll();
        res.json(operations);
     }

     //gestión del error:
     catch (error){
         console.log(error);
         next();
     }

}

//Obtener una operación por ID
const getOperation = async (req,res, next) =>{

    try{
        const operation= await Operation.findByPk(req.params.id);
        res.json(operation);
     }

    //gestión del error:
     catch (error){
         console.log(error);
         next();
     }

}

//Editar operación existente
const editOperation = async (req,res, next) =>{

    try{
        const {concept, amount, type_opr} = req.body;
        await Operation.update(
            {concept,
            amount, 
            type_opr}, 
            {where:
            {id: req.params.id}});

        const operation = await Operation.findByPk(req.params.id);       
        res.json(operation);
     }

    //gestión del error:
     catch (error){
         console.log(error);
         next();
     }
    }

//Eliminar operación
const deleteOperation = async (req,res, next) =>{

        try{
            
            await Operation.destroy(
                {where:
                {id: req.params.id}});
        
            res.json({message: "Operation deleted succesfully"});
         }
         
         //gestión del error:
         catch (error){
             console.log(error);
             next();
         }

}

module.exports={saveOperation,getOperation,getOperations, editOperation, deleteOperation}
