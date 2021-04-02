import React, { useContext } from 'react'
import { Tarea } from './Tarea'
import { ProyectoContext} from '../../context/proyecto/ProyectoContext';
import { Button } from 'primereact/button';
import { eliminarProyectos } from '../../actions/actionProyecto';
import { TareaContext } from '../../context/tareas/TareaContext';


export const ListadoTarea = () => {


    const {state,dispatch} = useContext(ProyectoContext);
    const {proyecto} = state;

    const {stateTarea} = useContext(TareaContext);
    const {tareasProyecto} = stateTarea;
    
    if(!proyecto) return <h2>Selecciona un Proyecto</h2>;

    const handleClick =() => {

        dispatch(eliminarProyectos(proyecto[0].id));
        state.proyecto=null;
    }
    
    return (
        <>
        <h2>Proyecto: {proyecto[0].nombre}</h2>

        <ul className="listado-tareas">
        
                {   
                }
        
        </ul>

        <Button 
        className="p-button-danger mt-2 p-3 "
        label="Eliminar"  
        onClick={handleClick}
        />
          
    </>
    )
}
