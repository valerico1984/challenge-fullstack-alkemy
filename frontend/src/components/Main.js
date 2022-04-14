import React, {useState, useEffect, Fragment} from 'react'
import axiosClient from '../config/axiosClient'
import FormOperation from './FormOperation'
import List from './List'
import EditOperation from './EditOperation'
import ListFilter from './ListFilter'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './Header'



const Main = ()=> {
  
  const [operations, setOperations] = useState([]); //se manejan los datos de las operaciones a través del estado
  const [cons, setCons]= useState(true); // se maneja la consulta realizada a través de Axios


  useEffect(()=>{

    //Si hay operaciones registradas en la base de datos, se obtienen y se actualiza el estado de "operations" para mostrar en el componente List
    if (cons){
      const consAPI=()=>{
        axiosClient.get('/operations')
        .then (res=>{
          setOperations(res.data);
          setCons(false)
        })
        .catch (error=>console.log(error))
      }
      consAPI()
    }

    
  }
,[cons]);
  
  return (
    <>  
    
    
     <Router>
      <Switch>
        
      {/* Ruta de la pantalla principal, una vez autenticado el usuario*/}
        <Route
        exact path='/'
        component={()=> 
          <Fragment>
                <Header/>
                <List 
                operations={operations}
                setCons={setCons}
                />
                {/* Lista de operaciones existente en la base de datos*/}
          </Fragment>}
        />
        <Route
        exact path='/new'
        component={()=>

        <FormOperation 
        setCons={setCons}
        />}
        /> {/* Ruta para añadir una nueva operación*/}
      
      <Route
        exact path='/operation/:id'

        render={(props)=> {
          
          const operation= operations.filter(operation=> operation.id===Number(props.match.params.id));
          return(
        <EditOperation
          opr={operation[0]}
          setCons={setCons}
          />)
        }}
          /> {/* Ruta para editar una operación existente*/}

    <Route
        exact path='/operations/Income'

        render={(props)=> {
          
          const operations_type= operations.filter(operation=> operation.type_opr===('Income'));
          return(
        <ListFilter
         type_opr={'Income'}
          operations_type={operations_type}
          setCons={setCons}
          />)
        }}
          /> {/* Ruta para mostrar operaciones de ingreso de dinero, con componente ListFilter*/}
          <Route
        exact path='/operations/Expenditure'

        render={(props)=> {
          
          const operations_type= operations.filter(operation=> operation.type_opr===('Expenditure'));
          return(
        <ListFilter
            type_opr={'Expenditure'}
          operations_type={operations_type}
          setCons={setCons}
          />)
        }}
          /> {/* Ruta para mostrar operaciones de egreso de dinero, con componente ListFilter*/}


      
        </Switch>
      </Router>
      </>

  );
}

   
export default Main