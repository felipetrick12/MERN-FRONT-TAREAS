import React, { useContext, useEffect } from 'react'
import { Header } from '../layout/Header'
import { SideBar } from '../layout/SideBar'
import { FormTarea } from '../tareas/FormTarea'
import { ListadoTarea } from '../tareas/ListadoTarea'

import { AuthContext } from '../../context/auth/AuthContext'



export const Proyectos = () => {

    const {authUser} = useContext(AuthContext)

    
    useEffect(() => {
        authUser()
    }, []);
   
    return (
        <div className="contenedor-app">
            
                <SideBar />

            <div className="seccion-principal">
           
            <Header />

                <main> 

                   <FormTarea />

                    <div className="contenedor-tareas"> 

                        <ListadoTarea />

                    </div>
                </main>
            </div>
        </div>
        
    )
}
