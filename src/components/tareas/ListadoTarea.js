import React, { useContext } from 'react'
import { Tarea } from './Tarea'
import { AuthContext } from '../../context/AuthContext';
import { Button } from 'primereact/button';
import { eliminarProyectos } from '../../actions/actionProyecto';
import { TareaContext } from '../../context/TareaContext';


export const ListadoTarea = () => {


    const {state,dispatch} = useContext(AuthContext);
    const {proyecto} = state;

    const {stateTarea} = useContext(TareaContext);
    const {tareasProyecto} = stateTarea;
    
    
    if(!proyecto) return <h2>Selecciona un Proyecto</h2>;

    const handleClick =() => {

        dispatch(eliminarProyectos(proyecto[0].id));
        
    }
    

    return (
        <>
        <h2>Proyecto: {proyecto[0].name}</h2>

        <ul className="listado-tareas">
        
                {   tareasProyecto.length === 0 
                        ? 
                        (<li className="tarea"><p>No hay tareas</p></li>)
                        : tareasProyecto.map(tarea => (
                        <Tarea 
                            key ={tarea.id}
                            tarea={tarea}
                        />
                ))
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
