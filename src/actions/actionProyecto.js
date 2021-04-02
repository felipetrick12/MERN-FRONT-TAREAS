import Swal from 'sweetalert2';
import { clienteAxios } from '../config/axios';
import {types} from '../types/types';



export const mostarFormulario = ( ) => ({
        type:types.ShowFormulario
})




export const ObtenerProyectos = async () => {
      try {

            const resp =  await clienteAxios.get("/api/proyectos")

            return ({
                  type:types.GetProyectos,
                  payload : resp.data.proyectos
            })

            } catch (error) {
                console.log(error.response)
                Swal.fire('Error',error.response.data.errors.nombre.msg,'error')
            }
}

export const agregarProyectos = async (proyecto) => {

       try {

            const resp =  await clienteAxios.post("/api/proyectos/create", proyecto)

            return ({
                  type:types.AddProyecto,
                  payload : resp.data.proyecto
            })
                
            } catch (error) {
                console.log(error.response)
                Swal.fire('Error',error.response.data.errors.nombre.msg,'error')
            }
}

export const seleccionProyectos = (proyecto) => ({
      type:types.SelectProyecto,
      payload : proyecto
})


export const eliminarProyectos = async (id) => {

      try {

            await clienteAxios.delete(`/api/proyectos/${id}`)

            return ({
                  type:types.DeleteProyecto,
                  payload : id
            })
                
            } catch (error) {
                console.log(error.response)
                Swal.fire('Error',error.response.data.errors.nombre.msg,'error')
            }
      
}


