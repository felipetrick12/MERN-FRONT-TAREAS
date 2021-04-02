import { types } from "../../types/types"


export const TareasReducer = (state, action) => {

        switch (action.type) {
            case types.GetTareas:
                return {
                    ...state,
                    tareasProyecto: state.tareas.tareasProyecto(tarea => tarea.proyectoID == action.payload)
                }
            case types.AddTareas:
                return {
                    ...state,
                    tareasProyecto: [action.payload,...state.tareasProyecto],
                }
            case types.DeleteTareas:
                    return {
                        ...state,
                        tareasProyecto: state.tareasProyecto.filter(tarea => tarea.id !== action.payload)
                    }  
            case types.editarTarea:
            case types.estadoTareas:
                    return {
                         ...state,
                         tareasProyecto: state.tareasProyecto.map(tarea => tarea.id===action.payload.id ? action.payload : tarea),
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