import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Link } from "react-router-dom";

export const Register = () => {

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

    }
        return (
            <div className="form-usuario">
                <div className="contenedor-form sombra-dark ">
                    <h1>Iniciar Sesion</h1>
                    <form onSubmit={handleSubmit}>
                    <div className="p-fluid p-d-block ">
                    <div className="p-field p-col-12 p-md-6 campo-form">
                        <label htmlFor="email">Nombre</label>
                        <InputText 
                        id="name" 
                        type="name" 
                        placeholder="Ingresa tu nombre"
                        name="name"
                        value={name}
                        onChange={handleChange}
                        />
                       <i class="fas fa-signature" style={{'fontSize': '2em', 'marginLeft': '10px'}} ></i>
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
                     <i class="far fa-envelope" style={{'fontSize': '2em', 'marginLeft': '10px'}} />
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
                       <i class="fas fa-lock" style={{'fontSize': '2em', 'marginLeft': '10px'}} />
                    </div>
                    <div className="p-field p-col-12 p-md-6 campo-form">
                        <label htmlFor="password2">Confirmar password</label>
                        <InputText 
                        id="password2" 
                        type="password2" 
                        placeholder="******"
                        name="password2"
                        value={password2}
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
