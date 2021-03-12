import { types } from "../types/types"


export const TareasReducer = (state, action) => {

        switch (action.type) {
            case types.GetTareas:
                
                return {
                    ...state,
                    tareasProyecto: state.tareas.filter(tarea => tarea.proyectoID == action.payload)
                }
            default:
                
               return state;
        }
}