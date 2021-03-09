import React, { useContext, useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { AuthContext } from '../../context/AuthContext';
import  {mostarFormulario}  from '../../actions/actionProyecto';



export const NuevoProyecto = () => {

    //utilizar el context
    const {state,dispatch} = useContext(AuthContext);
    const { formulario } = state;
    

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
       console.log(proyecto)
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
             
            
        </>
    )
}
