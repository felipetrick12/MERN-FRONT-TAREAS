import React, {  useContext } from 'react'
import { AuthContext } from '../../context/auth/AuthContext'


export const Header = () => {

    const {usuario,logout} = useContext(AuthContext)

    const handleClick=()=> {
        logout( )
    }
    
    return (
        <header className="app-header">
           { usuario ?  <p className="nombre-usuario">Bienvenido <span>{usuario.name}</span> </p>: null
             }

            <nav className="nav-principal">
                <button 
                    className="btn btn-blank "
                    style={{ 'fontSize': '18px'}}
                    onClick={handleClick}
                >Cerrar Sesion</button>
            </nav>
        </header>
    )
}
