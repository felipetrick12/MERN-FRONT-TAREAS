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