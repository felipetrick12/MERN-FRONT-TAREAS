import { types } from "../types/types"



export const authReducer = (state, action) =>
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
                default:
                return state;
            
        }
  
}