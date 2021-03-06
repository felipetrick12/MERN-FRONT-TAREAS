import React, { useContext, useEffect, useState } from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { AuthContext } from '../../context/AuthContext';
import { ErrorMensaje } from '../../hook/ErrorMensaje';
import { TareaContext } from '../../context/TareaContext';
import { crearTareas, obtenerTareas, editarTarea } from '../../actions/actionTarea';
import uuid from 'react-uuid';


export const FormTarea = () => {

    //informacion del context proyecto
    const {state} = useContext(AuthContext);
    const {proyecto} = state;

    //infromacion del context tarea 
    const {stateTarea,dispatchTarea} = useContext(TareaContext);
    const {tareaSeleccionada}=stateTarea;

    //creando estado del formulario
    const [tarea, setTarea] = useState({
        nombre: ''
    });
    const {nombre} = tarea;
    
    //effect para detectar si hay una tarea seleccionada
    useEffect(() => {
       
        if(tareaSeleccionada !== null){
            setTarea(tareaSeleccionada)
        }
        else {
            setTarea ({
                nombre : ''
            })
        }
    }, [tareaSeleccionada])
    
    

    //validacion del formualrio
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }
    
    const handleSubmit =(e)=> {
        e.preventDefault();

        if(nombre.trim()===''){
            setError(true)
            return
        }else {
            setError(false)
        }

        if(tareaSeleccionada === null){
            tarea.id = uuid();
            tarea.proyectoID = proyecto[0].id;
            tarea.estado=false;
            dispatchTarea(crearTareas(tarea));
           
        }else {

            dispatchTarea(editarTarea(tarea))
        }
        
        dispatchTarea(obtenerTareas(proyecto[0].id));

        setTarea({
            nombre: ''
        })
    }

    return (
        



    <>
            { proyecto ? (
                <div className="formulario">
                    <form onSubmit ={handleSubmit} >
                      <div className="contenedor-input">
                      <InputText
                                  className=" inp p-3"
                                  type="text" 
                                  placeholder="Nombre Tarea"
                                  name="nombre"
                                  value={nombre}
                                  onChange={handleChange}
                          />
                   </div>
  
                   <div className="contenedor-input">
                          <Button 
                          label={ tareaSeleccionada ? "Editar Tarea" :"Crear Tarea"}  
                          className="p-button-info mt-5 p-3 btn-block"
                          />
                   </div>
                 </form>
                 { error ? <ErrorMensaje mensaje={'Ingrese nombre de proyecto'} clas={'alert-secondary'}/> : null}

                 </div>
                 ): null}
            
          </>      
       
        
    )
}
