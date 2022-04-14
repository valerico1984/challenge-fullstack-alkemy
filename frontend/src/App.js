import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {LoginButton}  from './components/Login/Login';
import { LogoutButton } from './components/Login/Logout';
import Main from './components/Main'
import {useAuth0} from '@auth0/auth0-react'



function App() {

  const {isAuthenticated, isLoading}= useAuth0()
  
  if (isLoading){
    return <div>Loading...</div>

}
return(
  <div>
    {/*Si autentica el usuario muestra los componentes y el botón de Logout*/}
 
      {isAuthenticated 
      ?
      <>
          <div className='login'>
             <h1>Personal Budget Administrator</h1>
                  <LogoutButton/>
          </div>
            
                <Main/>
          
      </>

    : 
    <>
    <div className='login'>
       <h1>Personal Budget Administrator</h1>
            <LoginButton/>
       </div>
    </>

    }
    </div>
    )


  }
    
   

export default App;
