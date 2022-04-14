import React, {useState} from 'react';
import {Container, Form, Button} from 'react-bootstrap'
import Error from './Error'
import {Link, withRouter} from 'react-router-dom';
import axiosClient from '../config/axiosClient'

//Componente para añadir operaciones al Administrador de presupuesto personal


const FormOperation = ({setCons, history}) => {

    //Configuramos los elementos principales de la operación (concepto, monto, tipo, fecha), que luego serán manejados con el estado

    const [operation, setOperation] = useState({
        concept:'',
        amount:'',
        date_opr:'',
        type_opr:''
    })

    //Actualiza los datos de la operación cuando se realizan cambios en el formulario

    const refreshOperation= e=>{
        
        setError(false)
        setOperation({
                ...operation,
            [e.target.name]: e.target.value
        })
    }

    const [error, setError]= useState(false) //capta los errores

    //Crea una nueva operación y la publica en la base de datos a través de Axios, con el método post

    const createOperation= e=>{

        e.preventDefault();

        if(operation.concept==='' || operation.amount==='' || operation.date_opr==='' || operation.type_opr===''){
            setError(true);
            return;
        } else {
            setError(false);
            axiosClient.post('/operations', operation)
            .then(res=>{
                
                setCons(true);
                history.push('/')
            })
            //gestión del error
            .catch(error=> console.error(error))
        }


    }
    return (
        <Container fluid>
            <Form className="form_style" onSubmit={createOperation}>
            <h2>Enter new operation</h2>
            
                <Form.Group>
                     <Form.Label>Type of Operation:</Form.Label>
                    <Form.Select onChange={refreshOperation} id="operation_type" name="type_opr">
                        <option value="Select">Select one option</option>
                        <option value="Income">Income</option>
                        <option value="Expenditure">Expenditure</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Concept:</Form.Label>
                    <Form.Control type="text" onChange={refreshOperation} placeholder="Shopping" name="concept"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Amount:</Form.Label>
                    <Form.Control type="text" onChange={refreshOperation} placeholder="100" name="amount"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Date:</Form.Label>
                    <Form.Control type="date" onChange={refreshOperation} name="date_opr"></Form.Control>
                </Form.Group>
                 <div className="buttons">   
                    <Link to='/'>
                        <Button variant="primary"><i className="fas fa-long-arrow-alt-left"></i><br></br>Return</Button> 
                    </Link>

                    <Button variant="success" type="submit"> 
                    Submit    
                    </Button>
                </div>
                {error ? <Error msg="Please, complete all the fields"/> : null} 

            </Form>
           
            
           
        </Container>


      );
}
 
export default withRouter(FormOperation);