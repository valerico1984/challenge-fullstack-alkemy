import React, {useState} from 'react';
import { Container, Button, Form} from 'react-bootstrap';
import axiosClient from '../config/axiosClient';
import Error from './Error'
import {Link, withRouter} from 'react-router-dom'

//Componente para editar operación seleccionada

const EditOperation = ({setCons, history, opr}) => {

    const [operation, setOperation] = useState(opr); // la variable operation capta los datos de la operación a editar
    const [error, setError] = useState(false); // la variable error nos permite captar el error y mostrarlo
    
    //Actualiza los datos de la operación cuando se realizan cambios en el formulario

    const refreshOperation= e=>{
        setOperation({
            ...operation,
            [e.target.name]: e.target.value
        })
    }

    //Se edita la operación seleccionada y se guardan las modificaciones en la base de datos, al clickear Submit

    const editOpr = e =>{

        e.preventDefault();

        if(operation.concept==='' || operation.amount==='' || operation.date_opr==='' || operation.type_opr===''){
            setError(true);
            return;
        } else {
            setError(false);
            //conexión con Axios para editar la operación seleccionada por ID
            axiosClient.put(`/operations/${operation.id}`, operation)
            .then (res=>{
                setCons(true);
                history.push('/')
            })
            //gestión del error
            .catch(error=>{console.error(error)})
    }
}
    return (  
        <Container fluid>
            <h2>Edit operation</h2>
            
        <Form className="form_style" onSubmit={editOpr}>
        
            <Form.Group>
                 <Form.Label>Type of Operation:</Form.Label>
                <Form.Select onChange={refreshOperation} id="operation_type" name="type_opr" disabled>
                    <option value="">{operation.type_opr}</option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>Concept:</Form.Label>
                <Form.Control type="text" onChange={refreshOperation} placeholder="Shopping" name="concept" value={operation.concept}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Amount:</Form.Label>
                <Form.Control type="text"onChange={refreshOperation} placeholder="100" name="amount" value={operation.amount}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Date:</Form.Label>
                <Form.Control type="date" onChange={refreshOperation} name="date_opr" value={operation.date_opr}></Form.Control>
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

 
export default withRouter(EditOperation)
