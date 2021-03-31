import  {useReducer} from 'react';
import Swal from 'sweetalert2';
import { clienteAxios } from '../../config/axios';
import { types } from '../../types/types';
import {AuthContext} from '../auth/AuthContext'
import {AuthReducer} from '../auth/AuthReducer'
import {tokenAuth} from '../../config/tokenAuth'


export const AuthState = (props) => {

    const initialState ={
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        cargando: true
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState)


// Registrar usuarios
 const StartRegister = async (datos) => {
        
        try {
            const resp = await clienteAxios.post('/api/usuarios/new', datos)
            dispatch({
                type: types.authRegister,
                payload:resp.data
            })
       
        //obtenerUsuario
            authUser()

        } catch (error) {
               localStorage.removeItem('token')
              await  Swal.fire('Error',error.response.data.msg,'error')
        }
    
}

// Retornan usuario autenticado 

const authUser = async () => {
    const token =localStorage.getItem('token');
    if(token){
        tokenAuth(token)
    }
    try {
        const resp = await clienteAxios.get('/api/usuarios');
        
        dispatch({
            type: types.getUser,
            payload: resp.data.usuario
        })

       
    } catch (error) {
       
        Swal.fire('Error',error.response.data.msg,'error')
    }

}

//cuando el usuario inicia sesion
const startLogin = async (data) => {
    try {
        const resp = await clienteAxios.post('/api/usuarios/',data);
        dispatch({
            type: types.authLogin,
            payload:resp.data
        })
        
        //obtenerUsuario
        authUser()
    } catch (error) {
        localStorage.removeItem('token')
        await  Swal.fire('Error',error.response.data.msg,'error')
    }
}

//CERRAR SESION 

    const logout=()=> {
        dispatch({
            type:types.logout,
        })
    }

    return (
        <AuthContext.Provider
        value= {{
            token: state.token,
            autenticado : state.autenticado,
            usuario: state.usuario,
            cargando : state.cargando,
            StartRegister,
            startLogin,
            authUser,
            logout
        }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}