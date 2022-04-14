const express= require('express');
const cors= require('cors');
const dbConnection = require('../backend/database/db')
const router= require('../backend/routes/index');
const bodyParser= require('body-parser')


//Montamos el servidor con Express

const app = express();

//Settings
const port = process.env.PORT || 4000;

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//Rutas
app.use('/', router);


app.listen(port, () => {
    console.log(`Server Working at Port: ${port}`);
});



//Autenticación con la base de datos de operaciones
dbConnection.authenticate()
    .then( () => console.log('DB Connected'))
    .catch( error => console.log(error));


