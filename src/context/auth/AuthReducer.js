import { types } from "../../types/types"


export const AuthReducer = (state, action) =>
{
        switch (action.type) {
                case types.authLogin:
                case types.authRegister:
                        localStorage.setItem('token',action.payload.token);
                        return {
                            ...state,
                            autenticado:true,
                            cargando:false
                        }
                case types.getUser:
                        return{
                        ...state,
                        autenticado:true,
                        usuario: action.payload,
                        cargando:false
                        }
                case types.logout :
                        localStorage.removeItem('token');
                        return {
                                ...state,
                                token:null,
                                autenticado:null,
                                usuario: null,
                                cargando:false
                        }
                default:
                return state;
            
        }
  
}