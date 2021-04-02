import React, { useContext, useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { ProyectoContext } from '../../context/proyecto/ProyectoContext';
import  {agregarProyectos, mostarFormulario,ocultarFormulario}  from '../../actions/actionProyecto';
import {ErrorMensaje} from '../../hook/ErrorMensaje'




export const NuevoProyecto = () => {

    //utilizar el context
    const {state,dispatch} = useContext(ProyectoContext);
    const { formulario } = state;
    const [error, setError] = useState(false);
    const [proyecto, setProyecto] = useState({
        nombre: ''
    });

    const {nombre}=proyecto;

    const handleChange =(e) => {
      setProyecto({
          ...proyecto,
          [e.target.name]: e.target.value
        })
    }

    const handleSubmit =(e) => {
        e.preventDefault();

        if(nombre.trim()===''){
            setError(true)
        }else {
            setError(false)
        }

        if(nombre.trim() === '')return;


      
        dispatch(agregarProyectos(proyecto))
        state.formulario=false;

        setProyecto({
            nombre: ''
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
                               name="nombre"
                               value={nombre}
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
