import React from 'react'
import { Proyecto } from './Proyecto'

export const Listado = () => {

    const proyectos = [
        { id:'1',name: 'teinda virtual'},
        { id:'2',name: 'aprender laravel'},
        { id:'3',name: 'aprender flluter'}
    ]
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
