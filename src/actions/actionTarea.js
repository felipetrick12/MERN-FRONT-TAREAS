import { types } from "../types/types";



export const obtenerTareas = (proyectoID)=> ({
        type: types.GetTareas,
        payload : proyectoID
      
})

export const crearTareas = (tarea)=> ({
        type: types.AddTareas,
        payload : tarea
 })

 export const eliminarTareas = (tareaID)=> ({
        type: types.DeleteTareas,
        payload : tareaID
 })

 export const cambiarEstadoTarea = (tarea)=> ({
        type: types.estadoTareas,
        payload : tarea

 })

 export const selecionarTarea = (tarea)=> ({
        type: types.selectTarea,
        payload : tarea

 })

 export const editarTarea = (tarea)=> ({
        type: types.editarTarea,
        payload : tarea
 })