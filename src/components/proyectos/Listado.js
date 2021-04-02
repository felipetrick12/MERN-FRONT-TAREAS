import React, { useContext, useEffect } from 'react'
import { Proyecto } from './Proyecto'
import { ProyectoContext } from '../../context/proyecto/ProyectoContext';
import { ObtenerProyectos } from '../../actions/actionProyecto';
import { ErrorMensaje } from '../../hook/ErrorMensaje';


export const Listado = () => {

    const {state,dispatch} = useContext(ProyectoContext);
    const { proyectos } = state;

  
    useEffect( async () => {
       
     dispatch(await ObtenerProyectos())


    }, [proyectos]);

   
   


    if (proyectos.length=== 0) return <ErrorMensaje mensaje={'Crea un proyecto'} clas={'alert-success'} />;
    
    return (
        <ul className='listado-proyectos'>
            {
            proyectos.map(proyecto=>(
                <Proyecto 
                key={proyecto.id}
                proyecto={proyecto}
                />
                  ))
            }
        </ul>
    )
}
