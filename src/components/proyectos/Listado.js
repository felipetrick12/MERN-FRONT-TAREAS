import React, { useContext, useEffect } from 'react'
import { Proyecto } from './Proyecto'
import { AuthContext } from '../../context/AuthContext';
import { ObtenerProyectos } from '../../actions/actionProyecto';


export const Listado = () => {

    const {state,dispatch} = useContext(AuthContext);
    const { proyectos } = state;

   
    console.log(proyectos)
    useEffect(() => {
        dispatch(ObtenerProyectos())
    }, [dispatch])

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
