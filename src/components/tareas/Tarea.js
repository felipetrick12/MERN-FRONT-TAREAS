import React from 'react'
import { Button } from 'primereact/button';


export const Tarea = ({tarea}) => {
    return (
        <li className="tarea sombra ">
             <p>{tarea.nombre} </p>
             <div className="estado">
                {tarea.estado 
                ?  
                    (
                        <button
                            type="button"
                            className="completo"
                            // onClick={() => cambiarEstado(tarea)}
                        >Completo</button>
                    )
                : 
                    (
                        <button
                            type="button"
                            className="incompleto"
                            // onClick={() => cambiarEstado(tarea)}
                        >Incompleto</button>
                    )
                }
            </div>

            <div className="acciones">
                    <Button 
                    label="Editar"  
                    className="btn-primario mt-1 "
                    />

                    <Button 
                    label="Eliminar"  
                    className="btn-secundario mx-2 mt-1 text-dark"
                    />
                    
            </div>
    
         </li>
    )
}
