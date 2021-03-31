import { clienteAxios } from "./axios";

export const tokenAuth = token => {
    if (token) {
            clienteAxios.defaults.headers.common['x-token']=token;
    } else {
        delete  clienteAxios.defaults.headers.common['x-token']
           
    }
}