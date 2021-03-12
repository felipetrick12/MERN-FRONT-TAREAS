import React, { useContext, useEffect } from 'react'
import { Proyecto } from './Proyecto'
import { AuthContext } from '../../context/AuthContext';
import { ObtenerProyectos } from '../../actions/actionProyecto';
import { ErrorMensaje } from '../../hook/ErrorMensaje';


export const Listado = () => {

    const {state,dispatch} = useContext(AuthContext);
    const { proyectos } = state;

   
    useEffect(() => {
        dispatch(ObtenerProyectos())
    }, [dispatch])

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
