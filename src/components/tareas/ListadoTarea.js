import React from 'react'
import { Tarea } from './Tarea'

export const ListadoTarea = () => {

    const tareasproyecto = [ 
        {id:1,nombre:'hacer Diseño ',estado:true},
        {id:2,nombre:'hacer pago electronico ',estado:true},
        {id:3,nombre:'hacer Diseño ',estado:false},
        {id:4,nombre:'hacer Diseño ',estado:true},
    ]

    return (
        <>
        <h2>Proyecto: Tienda Virtual</h2>

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

      
    </>
    )
}
