const express= require('express')
const router = express.Router();
const { saveOperation, getOperation, getOperations, editOperation, deleteOperation} = require('../controllers/OperationController')


//Establecemos las rutas a las operaciones con la API: get, post, put, delete

router.get('/',function (req,res){
    res.send('Personal Budget')
}
);

router.post('/operations',saveOperation)

router.delete('/operations/:id', deleteOperation)

router.put('/operations/:id', editOperation)

router.get('/operations/:id', getOperation)

router.get('/operations', getOperations)



module.exports=router