import { types } from "../../types/types";


export const ProyectoReducer = (state, action) =>
{
        switch (action.type) {
            case types.ShowFormulario:
                return {
                    ...state,
                    formulario:true
                }
                case types.GetProyectos:
                    return {
                        ...state,
                        proyectos: action.payload
                    }
                case types.AddProyecto :
                    return {
                        ...state, 
                        proyectos: [action.payload,...state.proyectos],
                        formulario: false
                    }
                case types.SelectProyecto: 
                    return{
                        ...state,
                        proyecto : state.proyectos.filter(proyecto=> proyecto.id=== action.payload.id)
                    }
                case types.DeleteProyecto:
                    return{
                        ...state,
                        proyectos: state.proyectos.filter(proyecto=> proyecto.id !== action.payload),
                        proyecto: null
                    }
                default:
                return state;
            
        }
  
}