import React, { useContext, useEffect, useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/auth/AuthContext';
import Swee from "sweetalert2";


export const Login = (props) => {
    //state de authenticacion importar
    const  {autenticado,startLogin} = useContext(AuthContext);

    //si el usuario ingresa exitosamente
    useEffect( () => {
        setTimeout(() => {
            if(autenticado){
                 props.history.push('/proyectos')
             }
        }, 1000);
        
     }, [autenticado, props.history])
     

    const [usuario, setUsuario] = useState({
        email: '',
        password: ''
    });
    
    const {email,password} = usuario;
    
    const handleChange=(e) => {
            setUsuario ({
                ...usuario,
                [e.target.name]: e.target.value
            })
    }


    const handleSubmit =(e)=> {
        e.preventDefault();

        if( email.trim() === '' || password.trim() === '' ){
            Swee.fire('Error', 'Campos Obligatorios','error')
        }
        else
        {
            startLogin( {
                email,
                password
            })
        }
    }
        return (
            <div className="form-usuario">
                <div className="contenedor-form sombra-dark ">
                    <h1>Iniciar Sesion</h1>
                    <form onSubmit={handleSubmit}>
                    <div className="p-fluid p-d-block ">
                    <div className="p-field p-col-12 p-md-6 campo-form">
                        <label htmlFor="email">Email</label>
                        <InputText 
                        id="email" 
                        type="email" 
                        placeholder="Ej. duvanli@hotmail.es"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        />
                        <i className="pi pi-book" style={{'fontSize': '2em', 'marginLeft': '10px'}} />
                    </div>
                    <div className="p-field p-col-12 p-md-6 campo-form ">
                        <label htmlFor="contrasena">Password</label>
                      
                            <InputText 
                            id="password" 
                            type="password" 
                            placeholder="******"
                            name="password"
                            value={password}
                            onChange={handleChange}
                            />
                            <i className="pi pi-book" style={{'fontSize': '2em', 'marginLeft': '10px'}} />
                    </div>

                    <Button label="Iniciar Sesion"  className="p-button-help mt-5 p-3" />

                   <span className="enlace-cuenta">
                    ¿No tienes una cuenta? 
                    <Link to ='/register'  >
                          Registrate
                    </Link>
                   </span>
                   </div>
                </form>
             </div>

            </div>
 
    )
}
