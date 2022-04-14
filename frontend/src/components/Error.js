import React from 'react';

//Componente que capta los mensajes de error y los muestra en pantalla

const Error = ({msg}) => {
    return ( 

        <p className="error">{msg}</p>
     );
}

export default Error;