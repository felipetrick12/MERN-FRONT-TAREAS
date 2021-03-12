import {types} from '../types/types';



export const mostarFormulario = ( ) => ({
        type:types.ShowFormulario
})


const proyectos = [
    { id:'1',name: 'tienda virtual'},
    { id:'2',name: 'aprender laravel'},
    { id:'3',name: 'aprender flluter'}
  ]

export const ObtenerProyectos = () => ({
            type:types.GetProyectos,
            payload : proyectos
})

export const agregarProyectos = (proyecto) => ({
      type:types.AddProyecto,
      payload : proyecto
})

export const seleccionProyectos = (proyecto) => ({
      type:types.SelectProyecto,
      payload : proyecto
})


export const eliminarProyectos = (id) => ({
      type:types.DeleteProyecto,
      payload : id
})


