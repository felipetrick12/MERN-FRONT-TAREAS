import React, { useContext } from 'react'
import { Tarea } from './Tarea'
import { AuthContext } from '../../context/AuthContext';
import { Button } from 'primereact/button';
import { eliminarProyectos } from '../../actions/actionProyecto';


export const ListadoTarea = () => {


    const {state,dispatch} = useContext(AuthContext);
    const {proyecto} = state;

    if(!proyecto) return <h2>Selecciona un Proyecto</h2>;

    const handleClick =() => {

        dispatch(eliminarProyectos(proyecto[0].id));
        console.log(proyecto.id)
    }
    
    const tareasproyecto = [ 
        {id:1,nombre:'hacer Diseño ',estado:true},
        {id:2,nombre:'hacer electronico ',estado:true},
        {id:3,nombre:'hacer Diseño ',estado:false},
        {id:4,nombre:'hacer Diseño ',estado:true},
    ]

    return (
        <>
        <h2>Proyecto: {proyecto[0].name}</h2>

        <ul className="listado-tareas">
           
                    
                {   tareasproyecto.length === 0 
                        ? 
                        (<li className="tarea"><p>No hay tareas</p></li>)
                        : tareasproyecto.map(tarea => (
                        <Tarea 
                            key ={tarea.id}
                            tarea={tarea}
                        />
                ))
                }
        
        </ul>

        <Button 
        className="p-button-danger mt-2 p-3"
        label="Eliminar"  
        onClick={handleClick}
        />
          
    </>
    )
}
