import { clienteAxios } from "../config/axios";
import { types } from "../types/types";



export const obtenerTareas = async (proyectoID)=>{

       try {
              const resultado = await clienteAxios.get('/api/tareas',{params:{proyectoID}})
           
              return({
                     type: types.GetTareas,
                     payload : proyectoID
              })
       } catch (error) {
              console.log(error.response)
       }
} 

export const crearTareas = async (tarea)=> {

       try {
              const resultado = await clienteAxios.post('/api/tareas/create',{'nombre': tarea.nombre, 'proyecto':tarea.proyectoID})
           
              return({
                     type: types.AddTareas,
                     payload : resultado.data.tareas
              })
       } catch (error) {
              console.log(error.response)
       }
}

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