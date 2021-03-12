import { types } from "../types/types";



export const obtenerTareas = (proyectoID)=> (
           
{
        type: types.GetTareas,
        payload : proyectoID
      
})