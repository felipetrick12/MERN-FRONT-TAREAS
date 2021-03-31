import { types } from "../../types/types"


export const TareasReducer = (state, action) => {

        switch (action.type) {
            case types.GetTareas:
                return {
                    ...state,
                    tareasProyecto: state.tareas.filter(tarea => tarea.proyectoID == action.payload)
                }
            case types.AddTareas:
                return {
                    ...state,
                    tareas: [action.payload,...state.tareas],
                }
            case types.DeleteTareas:
                    return {
                        ...state,
                        tareas: state.tareas.filter(tarea => tarea.id !== action.payload)
                    }  
            case types.editarTarea:
            case types.estadoTareas:
                    return {
                         ...state,
                         tareas: state.tareas.map(tarea => tarea.id===action.payload.id ? action.payload : tarea),
                         tareaSeleccionada:null
                    }      
            case types.selectTarea:
                 return {
                    ...state,
                    tareaSeleccionada: action.payload
                 }  
            default:
                
               return state;
        }
}