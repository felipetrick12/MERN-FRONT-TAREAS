import React from 'react'
import { Header } from '../layout/Header'
import { SideBar } from '../layout/SideBar'
import { FormTarea } from '../tareas/FormTarea'
import { ListadoTarea } from '../tareas/ListadoTarea'

export const Proyectos = () => {
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
