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