import React from 'react';
import {Container, Button, Table} from 'react-bootstrap'
import axiosClient from '../config/axiosClient';
import {Link} from 'react-router-dom'
import lapiz from '../icons/pen_icon_159936.svg';
import deleteicon from '../icons/deleteicon.svg'

//Componente que crea la lista de operaciones añadidas en la base de datos

const List = ({operations, setCons}) => {

    //si no hay operaciones, retorna nulo el componente

    if (operations.length===0){
        return null
    }

    //Permite eliminar operaciones de la base de datos, identificadas por ID, a través del método Delete
    const deleteOperation = id =>{

        axiosClient.delete(`/operations/${id}`)
        .then (res=>{
            setCons(true)
            alert('Operation deleted succesfully')
        })
        .catch (error=>console.log(error))
    }


    return(

        <Container fluid className="list mt-2" >
        <h4>List of Operations</h4>
        {/* Tabla que muestra las operaciones listadas
           */}
                
        <Table variant="dark" striped hover responsive>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Concept</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {/* Mapeo de operaciones existentes en la base de datos
           */}
                {operations.map(operation=>(
                    <tr key={operation.id}>
                        <td>{operation.type_opr}</td>
                        <td>{operation.concept}</td>
                        <td>{operation.amount}</td>
                        <td>{operation.date_opr}</td>
                        <td>
                            <div>
                                {/* Edita la operación de la fila */}
                                <Link to={`/operation/${operation.id}`}>
                                  <img src={lapiz} alt="updateOperation"></img>
                                </Link>
                            </div>
                        </td>
                        <td>
                            {/* Elimina la operación de la fila */}
                            <div
                            
                                onClick={() => deleteOperation(operation.id)}
                                className="button"
                            >  
                            <Link to={"/"}>
                                <img src={deleteicon} alt="deleteOperation"></img>
                               </Link>
                            </div>
                        </td>
                    </tr>

                ))}
               </tbody>


        </Table>
        <div className="buttons">
             {/* Muestra solo operaciones de ingreso de dinero */}
              <Link to='/operations/Income'>
                
                  <Button variant="secondary">Show only income operations</Button> 
            </Link>
            {/* Muestra solo operaciones de egreso de dinero */}
             <Link to='/operations/Expenditure'>
                  
                    <Button variant= "secondary">Show only expenditure operations</Button> 
            </Link>
         </div>
        
    </Container>
    )
}
 
export default List;