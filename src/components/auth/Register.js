import React, { useContext, useEffect, useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import Swee from "sweetalert2";
import { AuthContext } from '../../context/auth/AuthContext';

export const Register = (props) => {

     //utilizar el context
     const  {autenticado,StartRegister} = useContext(AuthContext);

     //en caso de  que el usuario sea registrado

     useEffect( () => {
        setTimeout(() => {
            if(autenticado){
                 props.history.push('/proyectos')
             }
        }, 1000);
        
     }, [autenticado, props.history])
     
 
    const [usuario, setUsuario] = useState({
        name:'',
        email: '',
        password: '',
        password2:''
    });

    
    const {name,email,password,password2} = usuario;
    
    const handleChange=(e) => {
            setUsuario ({
                ...usuario,
                [e.target.name]: e.target.value
            })
        
    }


    const handleSubmit =(e)=> {
        e.preventDefault();

        if(name.trim() === '' || email.trim() === '' || password.trim() === '' || password2.trim() === ""){
            Swee.fire('Error', 'Campos Obligatorios','error')
        }
        else if (password !== password2 ){
            Swee.fire('Error', 'Contraseñas incorrectas','error')
        }
        else
        {
            StartRegister( {
                name,
                email,
                password
            })
        }
    }
        return (
            <div className="form-usuario p-5">
                <div className="contenedor-form sombra-dark ">
                    <h1>Registrarse</h1>
                    <form onSubmit={handleSubmit}>
                    <div className="p-fluid p-d-block ">
                    <div className="p-field p-col-12 p-md-6 campo-form">
                        <label htmlFor="email">Nombre</label>
                        <InputText 
                        id="name" 
                        type="text" 
                        placeholder="Ingresa tu nombre"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        />
                       <i className="fas fa-signature" style={{'fontSize': '2em', 'marginLeft': '10px'}} ></i>
                    </div>
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
                     <i className="far fa-envelope" style={{'fontSize': '2em', 'marginLeft': '10px'}} />
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
                       <i className="fas fa-lock" style={{'fontSize': '2em', 'marginLeft': '10px'}} />
                    </div>
                    <div className="p-field p-col-12 p-md-6 campo-form">
                        <label htmlFor="password2">Confirmar password</label>
                        <InputText 
                        id="password2" 
                        type="password" 
                        placeholder="******"
                        name="password2"
                        value={password2}
                        onChange={handleChange}
                        />
                        <i className="pi pi-book" style={{'fontSize': '2em', 'marginLeft': '10px'}} />
                    </div>

                    <Button label="Iniciar Sesion"  className="p-button-help mt-5 p-3" />

                   
                   </div>
                </form>
             </div>

            </div>
 
    )
}
