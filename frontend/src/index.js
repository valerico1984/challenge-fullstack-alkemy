import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react'

ReactDOM.render(
  <React.StrictMode>

    {/*Configuramos el Provider de Auth0*, englobando el componente App*/}
    <Auth0Provider 
        domain='dev-zvk8h5rb.us.auth0.com' 
        clientId='vMxZHuHPkLvWZ1dhJYrqvGOMY522RpaI' 
        redirectUri={window.location.origin}
    >   {/*Se usan propiedades de Auth0 para autenticar*/}
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

