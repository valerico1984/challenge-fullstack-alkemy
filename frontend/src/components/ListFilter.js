import React from 'react';
import {Container, Button, Table} from 'react-bootstrap'
import axiosClient from '../config/axiosClient';
import {Link} from 'react-router-dom'
import lapiz from '../icons/pen_icon_159936.svg';
import deleteicon from '../icons/deleteicon.svg'

//Componente que muestra la lista filtrada por tipo de operación (ingreso /egreso)

const ListFilter = ({operations_type, setCons, type_opr}) => {
    
    //Si no hay operaciones del tipo seleccionado, devuelve mensaje informándolo
    if (operations_type.length===0){
        return(
            <div className="empty">
                <h4>There isn't {type_opr} operations</h4>
                <Link to='/'>
                <Button variant="secondary" className="btn mt-4"><i className="fas fa-long-arrow-alt-left"></i><br></br>Return</Button> 
                </Link>
            </div>)

    }
  
    //Elimina la operación identificada por ID de la base de datos con el método delete a través de Axios
    
    const deleteOperation = id =>{

        axiosClient.delete(`/operations/${id}`)
        .then (res=>{
            setCons(true)  
            alert('Operation deleted succesfully') 
        })
        .catch (error=>console.log(error))
    }


    return(

        <Container fluid className="list mt-6">
        <h4>List of {type_opr} Operations</h4>
         
         {/* Tabla que muestra las operaciones filtradas*/}
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
                 {/* Mapea las operaciones filtradas por tipo */}
                {operations_type.map(operation=>(
                    <tr key={operation.id}>
                        <td>{operation.type_opr}</td>
                        <td>{operation.concept}</td>
                        <td>{operation.amount}</td>
                        <td>{operation.date_opr}</td>
                        <td>
                            <div>
                                 {/* Edita la operación de la fila*/}
                                <Link to={`/operation/${operation.id}`}>
                                  <img src={lapiz} alt="updateOperation"></img>
                               
                                </Link>
                            </div>
                        </td>
                        <td>
                             {/* Elimina la operación de la fila*/}
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
        <Link to='/'>
             <Button variant="secondary" className="mt-4"><i className="fas fa-long-arrow-alt-left"></i><br></br>Return</Button> 
         </Link>
       


    </Container>
    )
}
 
export default ListFilter