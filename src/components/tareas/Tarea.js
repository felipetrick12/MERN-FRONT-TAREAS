import React, { useContext } from 'react'
import { Button } from 'primereact/button';
import { AuthContext } from '../../context/AuthContext';
import { TareaContext } from '../../context/TareaContext';
import {eliminarTareas, obtenerTareas} from '../../actions/actionTarea'


export const Tarea = ({tarea}) => {

    const {state} = useContext(AuthContext);
    const {proyecto} = state;

    const {dispatchTarea} = useContext(TareaContext);
    
    
    const handleClick =() => {
        dispatchTarea(eliminarTareas(tarea.id));
        dispatchTarea(obtenerTareas(proyecto[0].id))

    }
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
                    onClick={handleClick}
                    
                    />
                    
            </div>
    
         </li>
    )
}
