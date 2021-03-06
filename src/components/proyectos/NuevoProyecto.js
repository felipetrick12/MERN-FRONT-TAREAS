import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';


export const NuevoProyecto = () => {

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

    return (
        <>
            <Button 
            label="Nuevo Proyecto"  
            className="p-button-help mt-5 p-3 btn-block"
             />

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
                     className="p-button-help mt-5 p-3 btn-block"
                 />

             </form>
            
        </>
    )
}
