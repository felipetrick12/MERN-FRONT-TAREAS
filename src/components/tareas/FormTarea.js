import React from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';



export const FormTarea = () => {
    return (
        
    <div className="formulario">
            
            <form >
                    <div className="contenedor-input">
                        <InputText
                                    className=" inp p-3"
                                    type="text" 
                                    placeholder="Nombre Proyecto"
                                    name="nombre"
                                    // value={nombre}
                                    // onChange={handleChange}
                            />
                     </div>

                     <div className="contenedor-input">
                            <Button 
                            label="Agregar Tarea"  
                            className="p-button-info mt-5 p-3 btn-block"
                            />
                     </div>
            </form>
                
        </div>
        
    )
}
