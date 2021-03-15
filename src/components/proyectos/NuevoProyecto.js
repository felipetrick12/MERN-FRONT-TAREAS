import React, { useContext, useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { AuthContext } from '../../context/AuthContext';
import  {agregarProyectos, mostarFormulario}  from '../../actions/actionProyecto';
import {ErrorMensaje} from '../../hook/ErrorMensaje'
import uuid from 'react-uuid'



export const NuevoProyecto = () => {

    //utilizar el context
    const {state,dispatch} = useContext(AuthContext);
    const { formulario } = state;
    
    const [error, setError] = useState(false);
    const [proyecto, setProyecto] = useState({
        name: ''
    });

    const {name}=proyecto;

    const handleChange =(e) => {
      setProyecto({
          ...proyecto,
          [e.target.name]: e.target.value
        })
    }

    const handleSubmit =(e) => {
        e.preventDefault();

        if(name.trim()===''){
            setError(true)
        }else {
            setError(false)
        }

        if(name.trim() === '')return;


        proyecto.id= uuid();
        dispatch(agregarProyectos(proyecto))

        setProyecto({
            name: ''
        })
       
    }

    const handleClick =() => {
        dispatch( mostarFormulario())
    }

    return (
        <>
            <Button 
            label="Nuevo Proyecto"  
            className="p-button-info mt-5 p-3 btn-block"
            onClick={handleClick}
             />

            { formulario ? 
            
            (
                <form onSubmit={handleSubmit}
                className="formulario-nuevo-proyecto"
                >
                     <div className="p-field p-col-12 p-md-6 campo-form">
                       <InputText
                               className=" inp p-3"
                               type="text" 
                               placeholder="Nombre Proyecto"
                               name="name"
                               value={name}
                               onChange={handleChange}
                       />
                     </div>
   
                   <Button 
                        label="crear proyecto"  
                        className="p-button-info mt-5 p-3 btn-block"
                    />
   
                </form>
            ):null
        
        }

        { error ? <ErrorMensaje mensaje={'Ingrese nombre de proyecto'} clas={'alert-secondary'}/> : null}
             
            
        </>
    )
}
