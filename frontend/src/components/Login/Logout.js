import React from 'react'
import {Button} from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react';

export const LogoutButton =()=>{
    
    //usamos logout de Auth0
    const {logout} = useAuth0();

    return  (
    <Button className="submit_login" variant="secondary" type="submit" onClick={()=>logout({returnTo: window.location.origin})}>
        Logout
    </Button>)
}

