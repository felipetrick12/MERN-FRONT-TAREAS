import React, { useContext, useEffect } from 'react'
import { Redirect, Route } from 'react-router'
import { AuthContext } from '../context/auth/AuthContext'

export const PrivateRouter = ({component: Component, ...props}) => {

    const {autenticado,authUser,cargando} = useContext(AuthContext)

    
    useEffect(() => {
        authUser()
    }, []);

    return (
        <Route {...props} 
        render={props=> !autenticado && !cargando? (<Redirect to="/" />):(<Component {...props}/>)  }
        />
            
        
    )
}
