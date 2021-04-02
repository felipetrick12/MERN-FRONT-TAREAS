import React, { useContext } from 'react'
import { Button } from 'primereact/button';
import { ProyectoContext } from '../../context/proyecto/ProyectoContext';
import { TareaContext } from '../../context/tareas/TareaContext';
import {cambiarEstadoTarea, eliminarTareas, obtenerTareas,selecionarTarea} from '../../actions/actionTarea'


export const Tarea = ({tarea}) => {

    const {state} = useContext(ProyectoContext);
    const {proyecto} = state;

    const {dispatchTarea} = useContext(TareaContext);
    
    
    const handleClick =() => {
        console.log(proyecto)
        dispatchTarea(eliminarTareas(tarea.id));
        dispatchTarea(obtenerTareas(proyecto[0].id))

    }

    const cambiarEstado =()=> {
        if(tarea.estado){
            tarea.estado=false;
        }else {
            tarea.estado=true;
        }
        dispatchTarea(cambiarEstadoTarea(tarea))
    }

    const handleEditar =()=> {
        dispatchTarea(selecionarTarea(tarea))
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
                            onClick={cambiarEstado}
                        >Completo</button>
                    )
                : 
                    (
                        <button
                            type="button"
                            className="incompleto"
                            onClick={cambiarEstado}
                        >Incompleto</button>
                    )
                }
            </div>

            <div className="acciones">
                    <Button 
                    label="Editar"  
                    className="btn-primario mt-1 "
                    onClick={handleEditar}
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
