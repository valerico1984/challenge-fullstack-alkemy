import React from 'react';
import {Container, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Header = () => {
    return (  
    
    
        <Container fluid>
        <div className="main">
         
          <Link to={'/new'}><Button variant="primary" className="m-4">Add new operation</Button></Link>
        </div>
        </Container>);
}
 
export default Header ;

