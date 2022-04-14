import React from 'react'
import {Button} from 'react-bootstrap'
import { useAuth0 } from '@auth0/auth0-react';

export const LoginButton =()=>{

        //usamos loginWithRedirect de Auth0
    const {loginWithRedirect} = useAuth0();

    return  (
    <Button className="submit_login" variant="success" type="submit" onClick={()=>loginWithRedirect()}>
        Login
    </Button>)
}
